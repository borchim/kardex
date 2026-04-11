#!/bin/bash
cat > /var/www/html/.env << EOF
APP_NAME=Kardex
APP_ENV=production
APP_KEY=${APP_KEY}
APP_DEBUG=false
APP_URL=${APP_URL}
DB_CONNECTION=pgsql
DB_HOST=${DB_HOST}
DB_PORT=5432
DB_DATABASE=${DB_DATABASE}
DB_USERNAME=${DB_USERNAME}
DB_PASSWORD=${DB_PASSWORD}
CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_CONNECTION=database
EOF

php artisan config:clear
php artisan storage:link --force 2>&1 || true
php artisan migrate --force
php artisan db:seed --force 2>&1 || true

apache2-foreground
