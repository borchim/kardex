FROM php:8.3-apache

# Cache bust: 2026-04-01-v3
RUN apt-get update && apt-get install -y \
    git curl zip unzip libpng-dev libonig-dev libxml2-dev libzip-dev \
    libcurl4-openssl-dev libicu-dev libpq-dev \
    && docker-php-ext-install pdo_mysql pdo_pgsql pgsql mbstring exif pcntl bcmath gd zip intl curl \
    && a2enmod rewrite

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . .

RUN composer install --no-dev --optimize-autoloader
RUN npm install && npm run build

RUN mkdir -p storage/framework/cache storage/framework/sessions storage/framework/views \
    storage/app/public storage/logs bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

RUN echo '<VirtualHost *:80>\n    DocumentRoot /var/www/html/public\n    <Directory /var/www/html/public>\n        AllowOverride All\n        Require all granted\n    </Directory>\n</VirtualHost>' > /etc/apache2/sites-available/000-default.conf

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

COPY docker-start.sh /docker-start.sh
RUN chmod +x /docker-start.sh

CMD ["/docker-start.sh"]
