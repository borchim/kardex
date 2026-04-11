import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getImageDisplayUrl } from '@/utils/imageUrlHelper';
import { handleAppointmentBooking } from '../VCardPreview';
import { QRShareModal } from '@/components/QRShareModal';
import { getSectionOrder, isSectionEnabled, getSectionData } from '@/utils/sectionHelpers';
import { getBusinessTemplate } from '@/pages/vcard-builder/business-templates';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Globe, MapPin, Calendar, Star, Clock, Users, Bed, Wifi, Car, Utensils, Waves, Dumbbell, QrCode } from 'lucide-react';
import languageData from '@/../../resources/lang/language.json';

interface HotelResortsTemplateProps {
  data: any;
  template: any;
}

export default function HotelResortsTemplate({ data, template }: HotelResortsTemplateProps) {
  const { t, i18n } = useTranslation();
  const configSections = data.config_sections || {};
  const colors = { ...template?.defaultColors, ...configSections.colors } || { 
    primary: '#1E40AF', 
    secondary: '#3B82F6', 
    accent: '#EFF6FF', 
    background: '#F8FAFC', 
    cardBg: '#FFFFFF',
    text: '#1E293B'
  };
  
  const font = React.useMemo(() => configSections.font || template?.defaultFont || 'Inter, sans-serif', [configSections.font, template?.defaultFont]);

  // Load Google Fonts dynamically
  React.useEffect(() => {
    const fontString = typeof font === 'string' ? font : 'Inter, sans-serif';
    const fontFamily = fontString.split(',')[0].trim().replace(/[\"\']/g, '');
    
    if (fontFamily && fontFamily !== 'Arial' && fontFamily !== 'sans-serif' && fontFamily !== 'serif') {
      const linkId = `google-font-${fontFamily.replace(/\\s+/g, '-')}`;
      
      if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\\s+/g, '+')}:wght@300;400;500;600;700;800&display=swap`;
        document.head.appendChild(link);
      }
    }
  }, [font]);

  // Language selector state
  const [showLanguageSelector, setShowLanguageSelector] = React.useState(false);
  const [currentLanguage, setCurrentLanguage] = React.useState(configSections.language?.template_language || 'en');
  const [showQrModal, setShowQrModal] = React.useState(false);

  // RTL languages
  const rtlLanguages = ['ar', 'he'];
  const isRTL = rtlLanguages.includes(currentLanguage);

  // Change language function
  const changeLanguage = (langCode: string) => {
    setCurrentLanguage(langCode);
    setShowLanguageSelector(false);
  };

  // Get all sections for this business type
  const allSections = getBusinessTemplate('hotel-resorts')?.sections || [];
  
  const renderSection = (sectionKey: string) => {
    const sectionData = configSections[sectionKey] || {};
    // Always render sections that have data, don't check for enabled property
    // Special handling for action_buttons - always try to render if section exists
    if (!sectionData || (Object.keys(sectionData).length === 0 && sectionKey !== 'appointments' && sectionKey !== 'action_buttons')) return null;
    // Skip copyright here as it's handled separately
    if (sectionKey === 'copyright') return null;

    switch (sectionKey) {
      case 'header':
        return renderHeaderSection(sectionData);
      case 'contact':
        return renderContactSection(sectionData);
      case 'about':
        return renderAboutSection(sectionData);
      case 'rooms':
        return renderRoomsSection(sectionData);
      case 'dining':
        return renderDiningSection(sectionData);
      case 'gallery':
        return renderGallerySection(sectionData);
      case 'social':
        return renderSocialSection(sectionData);
      case 'business_hours':
        return renderBusinessHoursSection(sectionData);
      case 'appointments':
        return renderAppointmentsSection(sectionData);
      case 'testimonials':
        return renderTestimonialsSection(sectionData);
      case 'google_map':
        return renderLocationSection(sectionData);
      case 'contact_form':
        return renderContactFormSection(sectionData);
      case 'qr_share':
        return renderQrShareSection(sectionData);
      case 'thank_you':
        return renderThankYouSection(sectionData);
      case 'action_buttons':
        return renderActionButtonsSection(sectionData);
      case 'videos':
        return renderVideosSection(sectionData);
      case 'youtube':
        return renderYouTubeSection(sectionData);
      case 'app_download':
        return renderAppDownloadSection(sectionData);
      case 'custom_html':
        return renderCustomHtmlSection(sectionData);
      case 'language':
        return null; // Language switcher is handled in header
      case 'seo':
        return null; // SEO is not rendered in preview
      case 'pixels':
        return null; // Pixels are not rendered in preview
      case 'footer':
        return renderFooterSection(sectionData);
      default:
        return null;
    }
  };

  const renderHeaderSection = (headerData: any) => (
    <div className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
      {/* Hotel Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="fill-current text-white">
          <pattern id="hotel-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="5" y="5" width="10" height="10" rx="2" />
            <rect x="7" y="7" width="2" height="2" />
            <rect x="11" y="7" width="2" height="2" />
            <rect x="7" y="11" width="2" height="2" />
            <rect x="11" y="11" width="2" height="2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hotel-pattern)" />
        </svg>
      </div>

      <div className="relative p-6">
        {/* Language Selector */}
        {(configSections?.language && configSections?.language?.enable_language_switcher) && (
          <div className={`absolute top-2 ${isRTL ? 'left-2' : 'right-2'} z-10`}>
            <div className="relative">
              <button
                onClick={() => setShowLanguageSelector(!showLanguageSelector)}
                className="flex items-center space-x-1 px-3 py-1 rounded-full text-xs bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-md text-white border border-white/40 hover:from-white/40 hover:to-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>
                  {String.fromCodePoint(...(languageData.find(lang => lang.code === currentLanguage)?.countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt()) || [127468, 127463]))}
                </span>
                <span className="uppercase font-medium">{currentLanguage}</span>
              </button>

              {showLanguageSelector && (
                <>
                  <div className="fixed inset-0" style={{ zIndex: 99998 }} onClick={() => setShowLanguageSelector(false)} />
                  <div className="absolute right-0 top-full mt-1 rounded border shadow-lg py-1 w-32 max-h-48 overflow-y-auto bg-white" style={{ zIndex: 99999 }}>
                    {languageData.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className="w-full text-left px-2 py-1 text-xs flex items-center space-x-1 hover:bg-gray-50 text-gray-800"
                      >
                        <span>{String.fromCodePoint(...lang.countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt()))}</span>
                        <span className="truncate">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <div className="text-center text-white">
          {headerData.profile_image && (
            <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <img
                src={getImageDisplayUrl(headerData.profile_image)}
                alt="Hotel Logo"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: font }}>
            {headerData.name || data.name || ''}
          </h1>
          
          <p className="text-lg opacity-90 mb-1" style={{ fontFamily: font }}>
            {headerData.title || data.title || ''}
          </p>
          
          {/* Star Rating */}
          {configSections.about?.star_rating && (
            <div className="flex justify-center items-center mb-3">
              {Array.from({length: parseInt(configSections.about.star_rating)}, (_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          )}
          
          {headerData.tagline && (
            <p className="text-sm opacity-80 max-w-xs mx-auto" style={{ fontFamily: font }}>
              {headerData.tagline}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const renderContactSection = (contactData: any) => (
    <div className="p-4 border-b" style={{ borderColor: colors.primary + '20', backgroundColor: colors.cardBg }}>
      <h3 className="font-semibold text-sm mb-3 text-center" style={{ color: colors.primary, fontFamily: font }}>
        {t('Contact & Reservations')}
      </h3>
      <div className="space-y-2">
        {(contactData.phone || data.phone) && (
          <div className="flex items-center space-x-3 p-2 rounded-lg" style={{ backgroundColor: colors.accent }}>
            <Phone className="w-4 h-4" style={{ color: colors.primary }} />
            <div>
              <div className="text-xs font-medium" style={{ color: colors.text, fontFamily: font }}>Reservations</div>
              <a href={`tel:${contactData.phone || data.phone}`} className="text-sm font-semibold" style={{ color: colors.primary, fontFamily: font }}>
                {contactData.phone || data.phone}
              </a>
            </div>
          </div>
        )}
        
        {(contactData.email || data.email) && (
          <div className="flex items-center space-x-3 p-2 rounded-lg" style={{ backgroundColor: colors.accent }}>
            <Mail className="w-4 h-4" style={{ color: colors.primary }} />
            <div>
              <div className="text-xs font-medium" style={{ color: colors.text, fontFamily: font }}>Email</div>
              <a href={`mailto:${contactData.email || data.email}`} className="text-sm font-semibold" style={{ color: colors.primary, fontFamily: font }}>
                {contactData.email || data.email}
              </a>
            </div>
          </div>
        )}
        
        {contactData.location && (
          <div className="flex items-center space-x-3 p-2 rounded-lg" style={{ backgroundColor: colors.accent }}>
            <MapPin className="w-4 h-4" style={{ color: colors.primary }} />
            <div>
              <div className="text-xs font-medium" style={{ color: colors.text, fontFamily: font }}>Address</div>
              <div className="text-sm font-semibold" style={{ color: colors.primary, fontFamily: font }}>
                {contactData.location}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderAboutSection = (aboutData: any) => {
    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>
          {t('About Our Hotel')}
        </h3>
        {(aboutData.description || data.description) && (
          <p className="text-sm leading-relaxed mb-3" style={{ color: colors.text, fontFamily: font }}>
            {aboutData.description || data.description}
          </p>
        )}
        
        {aboutData.amenities && (
          <div>
            <p className="text-xs font-medium mb-2" style={{ color: colors.text, fontFamily: font }}>
              {t('Key Amenities')}:
            </p>
            <div className="flex flex-wrap gap-1">
              {aboutData.amenities.split(',').map((amenity: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-xs" style={{ backgroundColor: colors.primary + '20', color: colors.primary }}>
                  {amenity.trim()}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        {aboutData.established_year && (
          <div className="mt-3">
            <p className="text-xs" style={{ color: colors.text, fontFamily: font }}>
              {t('Established')}: {aboutData.established_year}
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderRoomsSection = (roomsData: any) => {
    const rooms = roomsData.room_types || [];
    if (!Array.isArray(rooms) || rooms.length === 0) return null;
    
    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>
          {t('Rooms & Suites')}
        </h3>
        <div className="space-y-3">
          {rooms.map((room: any, index: number) => (
            <div key={index} className="rounded-lg overflow-hidden" style={{ backgroundColor: colors.cardBg, border: `1px solid ${colors.primary}20` }}>
              {room.room_image && (
                <div className="h-24 overflow-hidden">
                  <img src={getImageDisplayUrl(room.room_image)} alt={room.room_name} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm" style={{ color: colors.text, fontFamily: font }}>
                    {room.room_name}
                  </h4>
                  <div className="text-right">
                    <div className="text-lg font-bold" style={{ color: colors.primary, fontFamily: font }}>
                      ${room.price_from}
                    </div>
                    <div className="text-xs" style={{ color: colors.text, fontFamily: font }}>
                      /night
                    </div>
                  </div>
                </div>
                
                {room.description && (
                  <p className="text-xs mb-2" style={{ color: colors.text, fontFamily: font }}>
                    {room.description}
                  </p>
                )}
                
                <div className="flex items-center space-x-3 text-xs" style={{ color: colors.text }}>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{room.max_occupancy} guests</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bed className="w-3 h-3" />
                    <span>King bed</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Wifi className="w-3 h-3" />
                    <span>WiFi</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDiningSection = (diningData: any) => {
    const restaurants = diningData.restaurants || [];
    if (!Array.isArray(restaurants) || restaurants.length === 0) return null;
    
    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>
          {t('Dining Options')}
        </h3>
        <div className="space-y-3">
          {restaurants.map((restaurant: any, index: number) => (
            <div key={index} className="p-3 rounded-lg" style={{ backgroundColor: colors.accent }}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-sm" style={{ color: colors.text, fontFamily: font }}>
                    {restaurant.restaurant_name}
                  </h4>
                  <Badge variant="secondary" className="text-xs mt-1" style={{ backgroundColor: colors.primary + '20', color: colors.primary }}>
                    {restaurant.cuisine_type}
                  </Badge>
                </div>
                <Utensils className="w-5 h-5" style={{ color: colors.primary }} />
              </div>
              
              {restaurant.description && (
                <p className="text-xs mb-2" style={{ color: colors.text, fontFamily: font }}>
                  {restaurant.description}
                </p>
              )}
              
              {restaurant.operating_hours && (
                <div className="flex items-center space-x-1 text-xs" style={{ color: colors.text }}>
                  <Clock className="w-3 h-3" />
                  <span>{restaurant.operating_hours}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderGallerySection = (galleryData: any) => {
    const photos = galleryData.photos || [];
    if (!Array.isArray(photos) || photos.length === 0) return null;
    
    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>
          {t('Photo Gallery')}
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {photos.slice(0, 4).map((photo: any, index: number) => (
            <div key={index} className="relative rounded-lg overflow-hidden h-20">
              {photo.image ? (
                <img src={getImageDisplayUrl(photo.image)} alt={photo.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                  <span className="text-2xl">🏨</span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">
                {photo.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSocialSection = (socialData: any) => {
    const socialLinks = socialData.social_links || [];
    if (!Array.isArray(socialLinks) || socialLinks.length === 0) return null;
    
    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>
          {t('Follow Us')}
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {socialLinks.map((link: any, index: number) => (
            <Button
              key={index}
              size="sm"
              variant="outline"
              className="justify-start"
              style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
              onClick={() => link.url && typeof window !== "undefined" && window.open(link.url, '_blank', 'noopener,noreferrer')}
            >
              <span className="text-xs capitalize">{link.platform}</span>
            </Button>
          ))}
        </div>
      </div>
    );
  };

  const renderBusinessHoursSection = (hoursData: any) => {
    const hours = hoursData.hours || [];
    if (!Array.isArray(hours) || hours.length === 0) return null;
    
    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>
          {t('Reception Hours')}
        </h3>
        <div className="space-y-1">
          {hours.slice(0, 7).map((hour: any, index: number) => (
            <div key={index} className="flex justify-between items-center p-2 rounded" style={{
              backgroundColor: hour.is_closed ? colors.accent : `${colors.primary}15`
            }}>
              <span className="capitalize text-xs font-medium" style={{ color: colors.text, fontFamily: font }}>
                {t(hour.day)}
              </span>
              <span className="text-xs" style={{ color: hour.is_closed ? colors.text + '80' : colors.primary, fontFamily: font }}>
                {hour.is_closed ? t('Closed') : `${hour.open_time} - ${hour.close_time}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderAppointmentsSection = (appointmentsData: any) => {
    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>
          {t('Make Reservation')}
        </h3>
        <div className="space-y-2">
          <Button
            size="sm"
            className="w-full"
            style={{ backgroundColor: colors.primary, color: 'white', fontFamily: font }}
            onClick={() => handleAppointmentBooking(configSections.appointments)}
          >
            <Calendar className="w-4 h-4 mr-2" />
            {t('Book Your Stay')}
          </Button>
          
          {appointmentsData?.reservation_phone && (
            <Button
              size="sm"
              variant="outline"
              className="w-full"
              style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(`tel:${appointmentsData.reservation_phone}`, '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              {t('Call Reservations')}
            </Button>
          )}
        </div>
      </div>
    );
  };

  const renderTestimonialsSection = (testimonialsData: any) => {
    const reviews = testimonialsData.reviews || [];
    if (!Array.isArray(reviews) || reviews.length === 0) return null;
    
    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>
          {t('Guest Reviews')}
        </h3>
        <div className="space-y-3">
          {reviews.map((review: any, index: number) => (
            <div key={index} className="p-3 rounded-lg" style={{ backgroundColor: colors.accent }}>
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3 h-3 ${i < parseInt(review.rating || 5) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-xs mb-2 leading-relaxed" style={{ color: colors.text, fontFamily: font }}>
                "{review.review}"
              </p>
              <div className="flex justify-between items-center">
                <p className="text-xs font-medium" style={{ color: colors.primary, fontFamily: font }}>
                  - {review.guest_name}
                </p>
                {review.stay_date && (
                  <p className="text-xs" style={{ color: colors.text, fontFamily: font }}>
                    {review.stay_date}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderLocationSection = (locationData: any) => {
    if (!locationData.map_embed_url && !locationData.directions_url) return null;

    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>
          {t('Location')}
        </h3>

        <div className="space-y-3">
          {locationData.map_embed_url && (
            <div className="rounded-lg overflow-hidden" style={{ height: '150px' }}>
              <div dangerouslySetInnerHTML={{ __html: locationData.map_embed_url }} className="w-full h-full" />
            </div>
          )}

          {locationData.directions_url && (
            <Button
              size="sm"
              variant="outline"
              className="w-full"
              style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(locationData.directions_url, '_blank', 'noopener,noreferrer')}
            >
              <MapPin className="w-4 h-4 mr-2" />
              {t('Get Directions')}
            </Button>
          )}
        </div>
      </div>
    );
  };

  const renderContactFormSection = (formData: any) => {
    if (!formData.form_title) return null;
    
    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        <h3 className="font-semibold text-sm mb-2" style={{ color: colors.primary, fontFamily: font }}>
          {formData.form_title}
        </h3>
        {formData.form_description && (
          <p className="text-xs mb-3" style={{ color: colors.text, fontFamily: font }}>
            {formData.form_description}
          </p>
        )}
        <Button
          size="sm"
          variant="outline"
          className="w-full"
          style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
          onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent('openContactModal'))}
        >
          <Mail className="w-4 h-4 mr-2" />
          {t('Contact Hotel')}
        </Button>
      </div>
    );
  };

  const renderQrShareSection = (qrData: any) => {
    if (!qrData.enable_qr) return null;

    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.accent }}>
          {qrData.qr_title && (
            <h4 className="text-sm mb-2 font-medium" style={{ color: colors.text, fontFamily: font }}>
              {qrData.qr_title}
            </h4>
          )}

          {qrData.qr_description && (
            <p className="text-xs mb-3" style={{ color: colors.text, fontFamily: font }}>
              {qrData.qr_description}
            </p>
          )}

          <Button
            size="sm"
            className="w-full"
            style={{ backgroundColor: colors.primary, color: 'white', fontFamily: font }}
            onClick={() => setShowQrModal(true)}
          >
            <QrCode className="w-4 h-4 mr-2" />
            {t('Share Hotel Info')}
          </Button>
        </div>
      </div>
    );
  };

  const renderThankYouSection = (thankYouData: any) => {
    if (!thankYouData.message) return null;
    
    return (
      <div className="p-4">
        <p className="text-xs text-center" style={{ color: colors.text + '80', fontFamily: font }}>
          {thankYouData.message}
        </p>
      </div>
    );
  };

  const renderActionButtonsSection = (actionData: any) => {
    const hasContactButton = actionData.contact_button_text;
    const hasAppointmentButton = actionData.appointment_button_text;
    const hasSaveContactButton = actionData.save_contact_button_text;

    // Always render the section if any button text exists
    if (!hasContactButton && !hasAppointmentButton && !hasSaveContactButton) return null;

    return (
      <div className="p-4 space-y-3" style={{ background: `linear-gradient(to bottom, ${colors.background}, ${colors.accent})` }}>
        {hasContactButton && (
          <Button
            className="w-full h-12 font-bold rounded-lg"
            style={{ backgroundColor: colors.primary, color: 'white', fontFamily: font }}
            onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent('openContactModal'))}
          >
            {actionData.contact_button_text}
          </Button>
        )}

        {hasAppointmentButton && (
          <Button
            className="w-full h-12 font-bold rounded-lg"
            style={{ backgroundColor: colors.secondary, color: 'white', fontFamily: font }}
            onClick={() => handleAppointmentBooking(configSections.appointments)}
          >
            {actionData.appointment_button_text}
          </Button>
        )}

        {hasSaveContactButton && (
          <Button
            size="sm"
            variant="outline"
            className="w-full"
            style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
            onClick={() => {
              const headerData = configSections.header || {};
              const contactData = configSections.contact || {};
              const vcfData = {
                name: headerData.name || data.name || '',
                title: headerData.title || data.title || '',
                email: contactData.email || data.email || '',
                phone: contactData.phone || data.phone || '',
                website: contactData.website || data.website || '',
                location: contactData.location || ''
              };
              import('@/utils/vcfGenerator').then(module => {
                module.downloadVCF(vcfData);
              });
            }}
          >
            {actionData.save_contact_button_text}
          </Button>
        )}
      </div>
    );
  };

  const renderVideosSection = (videosData: any) => {
    const videos = videosData.video_list || [];
    if (!Array.isArray(videos) || videos.length === 0) return null;
    
    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>
          {t('Property Videos')}
        </h3>
        <div className="space-y-3">
          {videos.map((video: any, index: number) => (
            <div key={index} className="rounded-lg overflow-hidden" style={{ backgroundColor: colors.accent }}>
              <div className="relative">
                {video.embed_url ? (
                  <div className="w-full relative overflow-hidden" style={{ paddingBottom: '56.25%', height: 0 }}>
                    <div
                      className="absolute inset-0 w-full h-full"
                      dangerouslySetInnerHTML={{ __html: video.embed_url }}
                    />
                  </div>
                ) : video.thumbnail ? (
                  <div className="relative w-full h-32 overflow-hidden rounded">
                    <img
                      src={getImageDisplayUrl(video.thumbnail)}
                      alt={video.title || 'Video thumbnail'}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                        <span className="text-2xl">▶️</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-32 flex items-center justify-center" style={{ backgroundColor: colors.primary + '20' }}>
                    <span className="text-4xl">🎥</span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h4 className="font-medium text-sm mb-1" style={{ color: colors.text, fontFamily: font }}>
                  {video.title}
                </h4>
                {video.description && (
                  <p className="text-xs mb-2" style={{ color: colors.text, fontFamily: font }}>
                    {video.description}
                  </p>
                )}
                {video.duration && (
                  <span className="text-xs" style={{ color: colors.primary, fontFamily: font }}>
                    Duration: {video.duration}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderYouTubeSection = (youtubeData: any) => {
    if (!youtubeData.channel_name && !youtubeData.channel_url && !youtubeData.latest_video_embed) return null;
    
    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>
          {t('YouTube Channel')}
        </h3>
        
        {youtubeData.latest_video_embed && (
          <div className="mb-4 rounded-lg overflow-hidden" style={{ backgroundColor: colors.cardBg }}>
            <div className="w-full relative overflow-hidden" style={{ paddingBottom: '56.25%', height: 0 }}>
              <div
                className="absolute inset-0 w-full h-full"
                dangerouslySetInnerHTML={{ __html: youtubeData.latest_video_embed }}
              />
            </div>
          </div>
        )}
        
        <div className="p-3 rounded-lg" style={{ backgroundColor: colors.accent }}>
          <h4 className="font-medium text-sm mb-2" style={{ color: colors.text, fontFamily: font }}>
            {youtubeData.channel_name}
          </h4>
          {youtubeData.subscriber_count && (
            <p className="text-xs mb-2" style={{ color: colors.text, fontFamily: font }}>
              Subscribers: {youtubeData.subscriber_count}
            </p>
          )}
          {youtubeData.channel_description && (
            <p className="text-xs mb-3" style={{ color: colors.text, fontFamily: font }}>
              {youtubeData.channel_description}
            </p>
          )}
          {youtubeData.channel_url && (
            <Button
              size="sm"
              variant="outline"
              className="w-full"
              style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(youtubeData.channel_url, '_blank', 'noopener,noreferrer')}
            >
              Visit Channel
            </Button>
          )}
        </div>
      </div>
    );
  };

  const renderAppDownloadSection = (appData: any) => {
    if (!appData.app_store_url && !appData.play_store_url) return null;
    
    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>
          {t('Download App')}
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {appData.app_store_url && (
            <Button
              size="sm"
              variant="outline"
              style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(appData.app_store_url, '_blank', 'noopener,noreferrer')}
            >
              App Store
            </Button>
          )}
          {appData.play_store_url && (
            <Button
              size="sm"
              variant="outline"
              style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(appData.play_store_url, '_blank', 'noopener,noreferrer')}
            >
              Play Store
            </Button>
          )}
        </div>
      </div>
    );
  };

  const renderCustomHtmlSection = (customData: any) => {
    if (!customData.html_content) return null;
    
    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        {customData.show_title && customData.section_title && (
          <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>
            {customData.section_title}
          </h3>
        )}
        <div className="p-3 rounded-lg" style={{ backgroundColor: colors.accent }}>
          <div dangerouslySetInnerHTML={{ __html: customData.html_content }} />
        </div>
      </div>
    );
  };

  const renderFooterSection = (footerData: any) => {
    if (!footerData.show_footer) return null;
    
    return (
      <div className="p-4 border-b" style={{ borderColor: colors.primary + '20' }}>
        {footerData.footer_text && (
          <p className="text-xs mb-3 text-center" style={{ color: colors.text, fontFamily: font }}>
            {footerData.footer_text}
          </p>
        )}
        {footerData.footer_links && footerData.footer_links.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {footerData.footer_links.map((link: any, index: number) => (
              <Button
                key={index}
                size="sm"
                variant="outline"
                style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
                onClick={() => link.url && typeof window !== "undefined" && window.open(link.url, '_blank', 'noopener,noreferrer')}
              >
                {link.title}
              </Button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderCopyrightSection = (copyrightData: any) => {
    return null; // Rendered separately at the end
  };

  // Create a style object that will be applied to all text elements
  const globalStyle = {
    fontFamily: font
  };

  // Extract copyright section to render it at the end
  const copyrightSection = configSections.copyright;

  // Get ordered sections using the utility function, excluding copyright
  const orderedSectionKeys = getSectionOrder(data.template_config || { sections: configSections, sectionSettings: configSections }, allSections)
    .filter(key => key !== 'colors' && key !== 'font' && key !== 'copyright');

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden" style={{
      fontFamily: font,
      background: colors.background,
      border: `1px solid ${colors.primary}20`,
      boxShadow: `0 10px 40px ${colors.primary}20`,
      direction: isRTL ? 'rtl' : 'ltr'
    }}>
      {orderedSectionKeys.map((sectionKey) => (
        <React.Fragment key={sectionKey}>
          {renderSection(sectionKey)}
        </React.Fragment>
      ))}

      {/* Copyright always at the end */}
      {copyrightSection && copyrightSection.text && (
        <div className="px-4 pb-4 pt-2">
          <p className="text-xs text-center" style={{ color: colors.text + '60', fontFamily: font }}>
            {copyrightSection.text}
          </p>
        </div>
      )}

      {/* QR Share Modal */}
      <QRShareModal
        isOpen={showQrModal}
        onClose={() => setShowQrModal(false)}
        url={typeof window !== 'undefined' ? window.location.href : ''}
        colors={colors}
        font={font}
        socialLinks={configSections.social?.social_links || []}
      />
    </div>
  );
}