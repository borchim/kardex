import { handleAppointmentBooking } from '../VCardPreview';
import { getImageDisplayUrl } from '@/utils/imageUrlHelper';
import React from 'react';
import StableHtmlContent from '@/components/StableHtmlContent';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Globe, MapPin, Calendar, Download, UserPlus, Share2, QrCode, Star, Play, Clock } from 'lucide-react';
import SocialIcon from '../../../link-bio-builder/components/SocialIcon';
import { QRShareModal } from '@/components/QRShareModal';
import { getSectionOrder, isSectionEnabled, getSectionData } from '@/utils/sectionHelpers';
import { getBusinessTemplate } from '@/pages/vcard-builder/business-templates';
import { useTranslation } from 'react-i18next';
import languageData from '@/../../resources/lang/language.json';

interface ActorTemplateProps {
  data: any;
  template: any;
}

export default function ActorTemplate({ data, template }: ActorTemplateProps) {
  const { t, i18n } = useTranslation();
  const configSections = data.config_sections || {};
  const colors = { ...template?.defaultColors, ...configSections.colors } || { primary: '#460B0D', secondary: '#F2F2F2', accent: '#881346', text: '#111111' };
  
  const font = React.useMemo(() => configSections.font || template?.defaultFont || 'Lora, serif', [configSections.font, template?.defaultFont]);

  // Load Google Fonts dynamically
  React.useEffect(() => {
    const fontString = typeof font === 'string' ? font : 'Lora, serif';
    const fontFamily = fontString.split(',')[0].trim().replace(/[\"\\']/g, '');
    
    if (fontFamily && fontFamily !== 'Arial' && fontFamily !== 'sans-serif' && fontFamily !== 'serif') {
      const linkId = `google-font-${fontFamily.replace(/\s+/g, '-')}`;
      
      if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s+/g, '+')}:wght@300;400;500;600;700;800&display=swap`;
        document.head.appendChild(link);
      }
    }
  }, [font]);

  // Language selector state
  const [showLanguageSelector, setShowLanguageSelector] = React.useState(false);
  const [currentLanguage, setCurrentLanguage] = React.useState(configSections.language?.template_language || 'en');

  // QR Modal state
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
  const allSections = getBusinessTemplate('actor')?.sections || [];
  const renderSection = (sectionKey: string) => {
    const sectionData = configSections[sectionKey] || {};
    if (!sectionData || Object.keys(sectionData).length === 0 || sectionData.enabled === false) return null;

    switch (sectionKey) {
      case 'header':
        return renderHeaderSection(sectionData);
      case 'contact':
        return renderContactSection(sectionData);
      case 'about':
        return renderAboutSection(sectionData);
      case 'gallery':
        return renderGallerySection(sectionData);
      case 'services':
        return renderServicesSection(sectionData);
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
      case 'app_download':
        return renderAppDownloadSection(sectionData);
      case 'contact_form':
        return renderContactFormSection(sectionData);
      case 'custom_html':
        return renderCustomHtmlSection(sectionData);
      case 'qr_share':
        return renderQrShareSection(sectionData);
      case 'thank_you':
        return renderThankYouSection(sectionData);
      case 'action_buttons':
        return renderActionButtonsSection(sectionData);
      case 'copyright':
        return renderCopyrightSection(sectionData);
      default:
        return null;
    }
  };

  const renderHeaderSection = (headerData: any) => (
    <div className="relative overflow-hidden">
      {/* Profile Banner */}
      <div className="relative">
        <div className="h-96 w-full relative overflow-hidden">
          <div className="relative h-full">
            <div className="absolute inset-0">
              {headerData.banner_image ? (
                <img
                  src={getImageDisplayUrl(headerData.banner_image)}
                  alt="Banner"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div 
                  className="w-full h-full"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}20, ${colors.accent}20)`,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${colors.primary.replace('#', '%23')}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}
                />
              )}
            </div>
            {headerData.banner_bg_image && (
              <img
                src={getImageDisplayUrl(headerData.banner_bg_image)}
                alt="Banner Overlay"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 1 }}
              />
            )}
          </div>
          
          {/* Banner Background SVG */}
          <div className="absolute bottom-0 left-0 right-0 w-full">
            <svg viewBox="0 0 100 100" className="w-full h-auto" style={{ height: '60px' }}>
              <path d="M0,100 L100,100 L100,80 Q50,60 0,80 Z" fill={colors.background || '#FFFFFF'} />
            </svg>
          </div>
          
          {/* Language Selector */}
          {(configSections?.language && configSections?.language?.enable_language_switcher) && (
            <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`} style={{ zIndex: 2 }}>
              <div className="relative">
                <button
                  onClick={() => setShowLanguageSelector(!showLanguageSelector)}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm bg-white/20 backdrop-blur-sm border border-white/30"
                  style={{ color: '#FFFFFF' }}
                >
                  <span>
                    {String.fromCodePoint(...(languageData.find(lang => lang.code === currentLanguage)?.countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt()) || [127468, 127463]))}
                  </span>
                  <span className="uppercase font-medium">{currentLanguage}</span>
                </button>

                {showLanguageSelector && (
                  <>
                    <div
                      className="fixed inset-0"
                      style={{ zIndex: 99998 }}
                      onClick={() => setShowLanguageSelector(false)}
                    />
                    <div
                      className="absolute right-0 top-full mt-1 rounded-lg border shadow-lg py-1 w-32 max-h-48 overflow-y-auto bg-white"
                      style={{ zIndex: 99999 }}
                    >
                      {languageData.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className="w-full text-left px-3 py-2 text-sm flex items-center space-x-2 hover:bg-gray-50"
                          style={{
                            backgroundColor: currentLanguage === lang.code ? colors.primary + '10' : 'transparent',
                            color: colors.text
                          }}
                        >
                          <span>
                            {String.fromCodePoint(...lang.countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt()))}
                          </span>
                          <span className="truncate">{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="px-6 pb-6 relative" style={{ marginTop: '-110px', zIndex: 1 }}>
          <div className="text-center">
            {/* Profile Image */}
            <div className="w-48 h-48 mx-auto mb-3 rounded-full overflow-hidden" style={{ border: '7px solid white', backgroundColor: colors.cardBg }}>
              {headerData.profile_image ? (
                <img
                  src={getImageDisplayUrl(headerData.profile_image)}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl" style={{ color: colors.primary }}>
                  🎭
                </div>
              )}
            </div>

            {/* Name and Title */}
            <div style={{ fontFamily: font }}>
              <h2 className="text-xl font-bold mb-1" style={{ color: colors.text }}>
                {t('Event Management')}
              </h2>
              <p className="text-base mb-2" style={{ color: colors.text }}>
                {t('Event & Wedding Planner')}
              </p>
              <span className="text-lg font-medium" style={{ color: colors.text }}>
                {headerData.name || data.name || 'Jolie Doe'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Profile Content */}
        <div className="px-6 pb-6 text-center">
          <p className="text-sm leading-relaxed" style={{ color: colors.text, fontFamily: font }}>
            {headerData.tagline || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown.'}
          </p>
        </div>
      </div>
    </div>
  );

  const renderContactSection = (contactData: any) => (
    <div className="px-6 py-6" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E2E2'}` }}>
      <h3 className="text-lg font-bold text-center mb-4" style={{ color: colors.text, fontFamily: font }}>
        Contact
      </h3>
      <div className="space-y-3">
        {(contactData.phone || data.phone) && (
          <div className="flex items-center justify-center p-3 rounded-lg" style={{ backgroundColor: colors.primary }}>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
              <Phone className="w-5 h-5" style={{ color: colors.primary }} />
            </div>
            <a
              href={`tel:${contactData.phone || data.phone}`}
              className="text-lg font-medium text-white flex-1 text-center"
              style={{ fontFamily: font }}
            >
              {contactData.phone || data.phone}
            </a>
          </div>
        )}
        {(contactData.email || data.email) && (
          <div className="flex items-center justify-center p-3 rounded-lg" style={{ backgroundColor: colors.primary }}>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
              <Mail className="w-5 h-5" style={{ color: colors.primary }} />
            </div>
            <a
              href={`mailto:${contactData.email || data.email}`}
              className="text-lg font-medium text-white flex-1 text-center"
              style={{ fontFamily: font }}
            >
              {contactData.email || data.email}
            </a>
          </div>
        )}
        {(contactData.website || data.website) && (
          <div className="flex items-center justify-center p-3 rounded-lg" style={{ backgroundColor: colors.primary }}>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
              <Globe className="w-5 h-5" style={{ color: colors.primary }} />
            </div>
            <a
              href={contactData.website || data.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-white flex-1 text-center"
              style={{ fontFamily: font }}
            >
              {(contactData.website || data.website)?.replace(/^https?:\/\//, '')}
            </a>
          </div>
        )}
      </div>
    </div>
  );

  const renderAboutSection = (aboutData: any) => {
    if (!aboutData.description && !data.description) return null;
    return (
      <div className="px-6 py-6" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E2E2'}` }}>
        <div className="text-center">
          <p className="text-sm leading-relaxed" style={{ color: colors.text, fontFamily: font }}>
            {aboutData.description || data.description}
          </p>
          {aboutData.specialties && (
            <div className="mt-4">
              <div className="flex flex-wrap justify-center gap-2">
                {aboutData.specialties.split(',').map((specialty: string, index: number) => (
                  <Badge key={index} variant="secondary" className="text-xs" style={{ backgroundColor: colors.primary + '20', color: colors.primary }}>
                    {specialty.trim()}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          {aboutData.experience && (
            <div className="mt-3">
              <p className="text-sm font-medium" style={{ color: colors.accent, fontFamily: font }}>
                {aboutData.experience} {t('years of experience')}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderGallerySection = (galleryData: any) => {
    const mediaList = galleryData.media_list || [];
    if (!Array.isArray(mediaList) || mediaList.length === 0) return null;

    const nextSlide = () => {
      setIsGalleryAutoPlay(false);
      setCurrentGalleryIndex(prev => {
        const nextIndex = (prev + 1) % mediaList.length;
        return nextIndex;
      });
      setTimeout(() => setIsGalleryAutoPlay(true), 5000);
    };

    const prevSlide = () => {
      setIsGalleryAutoPlay(false);
      setCurrentGalleryIndex(prev => {
        const prevIndex = prev === 0 ? mediaList.length - 1 : prev - 1;
        return prevIndex;
      });
      setTimeout(() => setIsGalleryAutoPlay(true), 5000);
    };

    const goToSlide = (index: number) => {
      setIsGalleryAutoPlay(false);
      setCurrentGalleryIndex(index);
      setTimeout(() => setIsGalleryAutoPlay(true), 5000);
    };

    return (
      <div className="px-6 py-6" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E2E2'}` }}>
        <div className="container mx-auto px-6">
          <div className="section-title common-title text-center mb-6">
            <h2 className="text-xl font-bold" style={{ color: colors.text, fontFamily: font }}>
              {t('Gallery')}
            </h2>
          </div>
          <div className="gallery-slider relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentGalleryIndex * (100 / mediaList.length)}%)`,
                  width: `${mediaList.length * 100}%`
                }}
              >
                {mediaList.map((media: any, index: number) => (
                  <div key={index} className="gallery-card w-full flex-shrink-0" style={{ width: `${100 / mediaList.length}%` }}>
                    <div className="gallery-card-inner px-2">
                      <div className="gallery-popup-btn img-wrapper relative cursor-pointer rounded-lg overflow-hidden">
                        {media.type === 'video' && media.video_url ? (
                          <div className="play-btn relative">
                            {media.thumbnail ? (
                              <>
                                <img
                                  src={getImageDisplayUrl(media.thumbnail)}
                                  alt={media.title || 'Video'}
                                  className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                                    <Play className="w-6 h-6 ml-0.5" style={{ color: colors.primary }} />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <div className="w-full h-64 relative">
                                {media.video_url.includes('youtube.com') || media.video_url.includes('youtu.be') ? (
                                  <iframe
                                    src={media.video_url.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allowFullScreen
                                    title={media.title || 'Video'}
                                  />
                                ) : (
                                  <video
                                    src={media.video_url}
                                    className="w-full h-full object-cover"
                                    controls
                                    title={media.title || 'Video'}
                                  />
                                )}
                              </div>
                            )}
                          </div>
                        ) : media.image ? (
                          <img
                            src={getImageDisplayUrl(media.image)}
                            alt={media.title || 'Gallery'}
                            className="w-full h-64 object-cover"
                          />
                        ) : (
                          <div className="w-full h-64 flex items-center justify-center" style={{ backgroundColor: colors.secondary }}>
                            <div className="text-center">
                              <div className="text-4xl mb-2">🎭</div>
                              <span className="text-sm" style={{ color: colors.text, fontFamily: font }}>
                                {t('Gallery')}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            {mediaList.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10 hover:bg-gray-50"
                  style={{ color: colors.primary }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10 hover:bg-gray-50"
                  style={{ color: colors.primary }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            
            {/* Dots Indicator */}
            {mediaList.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {mediaList.map((_, index: number) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentGalleryIndex ? 'w-6' : 'opacity-50'
                    }`}
                    style={{ backgroundColor: colors.primary }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderSocialSection = (socialData: any) => {
    const socialLinks = socialData.social_links || [];
    if (!Array.isArray(socialLinks) || socialLinks.length === 0) return null;

    return (
      <div className="px-6 py-6" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E2E2'}` }}>
        <div className="overflow-x-auto">
          <div className="flex justify-center space-x-4" style={{ minWidth: 'max-content' }}>
            {socialLinks.map((link: any, index: number) => (
              <button
                key={index}
                onClick={() => link.url && typeof window !== "undefined" && window.open(link.url, '_blank', 'noopener,noreferrer')}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: colors.primary, border: `1px solid ${colors.primary}` }}
                title={link.username ? `${link.platform}: @${link.username}` : link.platform}
              >
                <SocialIcon platform={link.platform} color="#FFFFFF" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderBusinessHoursSection = (hoursData: any) => {
    const hours = hoursData.hours || [];
    if (!Array.isArray(hours) || hours.length === 0) return null;

    return (
      <div className="px-6 py-6" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E2E2'}` }}>
        <h3 className="text-lg font-bold text-center mb-6" style={{ color: colors.text, fontFamily: font }}>
          {t('Business Hours')}
        </h3>
        <div className="max-w-xs mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {hours.slice(0, 6).map((hour: any, index: number) => (
              <div key={index} className="text-center p-3 rounded-lg" style={{ backgroundColor: colors.secondary }}>
                <div className="font-medium text-sm capitalize mb-1" style={{ color: colors.text, fontFamily: font }}>
                  {t(hour.day)}
                </div>
                <div className="text-xs" style={{ color: hour.is_closed ? colors.text + '80' : colors.primary, fontFamily: font }}>
                  {hour.is_closed ? t('Closed') : `${hour.open_time} - ${hour.close_time}`}
                </div>
              </div>
            ))}
            {hours[6] && (
              <div className="col-span-2 text-center p-4 rounded-lg" style={{ backgroundColor: colors.primary, color: '#FFFFFF' }}>
                <div className="font-medium text-sm capitalize mb-1" style={{ fontFamily: font }}>
                  {t(hours[6].day)} :
                </div>
                <div className="text-sm" style={{ fontFamily: font }}>
                  {hours[6].is_closed ? t('Closed') : `${hours[6].open_time} - ${hours[6].close_time}`}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderAppointmentsSection = (appointmentsData: any) => {
    return (
      <div className="px-6 py-6" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E2E2'}` }}>
        <h3 className="text-lg font-bold text-center mb-6" style={{ color: colors.text, fontFamily: font }}>
          {appointmentsData.appointment_title || 'Make an Appointment'}
        </h3>
        
        {/* Date Picker Placeholder */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-3" style={{ color: colors.text, fontFamily: font }}>
            {t('Date')} :
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Pick a date"
              className="w-full p-3 border rounded-lg bg-white"
              style={{ borderColor: colors.primary, fontFamily: font }}
              readOnly
            />
          </div>
        </div>

        {/* Time Slots */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-3" style={{ color: colors.text, fontFamily: font }}>
            {t('Hours')} :
          </label>
          <div className="grid grid-cols-2 gap-2">
            {['10:00 - 11:00', '11:00 - 12:00', '14:00 - 15:00', '15:00 - 16:00'].map((time, index) => (
              <button
                key={index}
                className="p-3 text-sm border rounded-lg transition-colors"
                style={{
                  borderColor: colors.primary,
                  color: colors.primary,
                  backgroundColor: 'transparent',
                  fontFamily: font
                }}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            className="w-full py-3"
            style={{
              backgroundColor: colors.primary,
              color: '#FFFFFF',
              fontFamily: font
            }}
            onClick={() => handleAppointmentBooking(configSections.appointments)}
          >
            {t('Make An Appointment')}
          </Button>
        </div>
      </div>
    );
  };

  const renderServicesSection = (servicesData: any) => {
    const services = servicesData.service_list || [];
    if (!Array.isArray(services) || services.length === 0) return null;

    return (
      <div className="px-6 py-6" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E2E2'}` }}>
        <div className="container mx-auto px-6">
          <div className="section-title common-title text-center mb-6">
            <h2 className="text-xl font-bold" style={{ color: colors.text, fontFamily: font }}>
              {t('Services')}
            </h2>
          </div>
          <div className="service-slider space-y-4">
            {services.map((service: any, index: number) => (
              <div key={index} className="service-card">
                <div className="rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: colors.secondary }}>
                  <div className="h-48 overflow-hidden">
                    {service.image ? (
                      <img
                        src={getImageDisplayUrl(service.image)}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: colors.primary + '20' }}>
                        <div className="text-center">
                          <div className="text-4xl mb-2">🎭</div>
                          <span className="text-sm font-medium" style={{ color: colors.primary, fontFamily: font }}>{t('Service')}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-3" style={{ color: colors.text, fontFamily: font }}>
                      {service.title || 'Modeling'}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: colors.text + 'AA', fontFamily: font }}>
                      {service.description ? 
                        (service.description.length > 120 ? service.description.substring(0, 120) + '...' : service.description)
                        : 'Professional service with high quality standards.'}
                    </p>
                    <Button
                      className="w-full py-3 rounded-lg font-medium"
                      style={{
                        backgroundColor: colors.primary,
                        color: '#FFFFFF',
                        fontFamily: font
                      }}
                      onClick={() => service.url && typeof window !== "undefined" && window.open(service.url, '_blank', 'noopener,noreferrer')}
                    >
                      {t('Learn More')}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Gallery slider state
  const [currentGalleryIndex, setCurrentGalleryIndex] = React.useState(0);
  const [isGalleryAutoPlay, setIsGalleryAutoPlay] = React.useState(true);

  // Services slider state
  const [currentServiceIndex, setCurrentServiceIndex] = React.useState(0);

  // Testimonials state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = React.useState(0);

  // Gallery slider effect
  React.useEffect(() => {
    const galleryData = configSections.gallery;
    const mediaList = galleryData?.media_list || [];
    if (!Array.isArray(mediaList) || mediaList.length <= 1 || !isGalleryAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentGalleryIndex(prev => {
        const nextIndex = (prev + 1) % mediaList.length;
        return nextIndex;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [configSections.gallery?.media_list, isGalleryAutoPlay, currentGalleryIndex]);

  // Services slider effect
  React.useEffect(() => {
    // Removed auto-scroll for services since we're using grid layout now
  }, [configSections.services?.service_list]);

  // Effect for testimonials rotation
  React.useEffect(() => {
    const testimonialsData = configSections.testimonials;
    const reviews = testimonialsData?.reviews || [];
    if (!Array.isArray(reviews) || reviews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentTestimonialIndex(prev => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [configSections.testimonials?.reviews]);

  const renderTestimonialsSection = (testimonialsData: any) => {
    const reviews = testimonialsData.reviews || [];
    if (!Array.isArray(reviews) || reviews.length === 0) return null;

    return (
      <div className="py-6" style={{ backgroundColor: colors.secondary, borderBottom: `1px solid ${colors.borderColor || '#E2E2E2'}` }}>
        <div className="px-6">
          <h3 className="text-lg font-bold text-center mb-6" style={{ color: colors.text, fontFamily: font }}>
            {t('testimonial')}
          </h3>
          
          {/* Testimonial Content */}
          <div className="mb-6">
            <div className="bg-white rounded-lg p-6 relative">
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-3" style={{ color: colors.text, fontFamily: font }}>
                  {reviews[currentTestimonialIndex]?.client_name || 'It was a very good experience'}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: colors.text + 'CC', fontFamily: font }}>
                  {reviews[currentTestimonialIndex]?.review || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.'}
                </p>
              </div>
              {/* Arrow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
              </div>
            </div>
          </div>

          {/* Testimonial Images */}
          <div className="overflow-x-auto">
            <div className="flex justify-center space-x-4" style={{ minWidth: 'max-content' }}>
              {reviews.map((review: any, index: number) => (
                <div key={index} className="text-center">
                  <div 
                    className={`w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                      index === currentTestimonialIndex ? 'scale-100 border-white' : 'scale-75 border-transparent'
                    }`}
                  >
                    {review.client_image ? (
                      <img
                        src={getImageDisplayUrl(review.client_image)}
                        alt={review.client_name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: colors.cardBg }}>
                        <span className="text-2xl">👤</span>
                      </div>
                    )}
                  </div>
                  <span className={`block text-xs mt-2 transition-opacity duration-300 ${
                    index === currentTestimonialIndex ? 'opacity-100' : 'opacity-60'
                  }`} style={{ color: colors.text, fontFamily: font }}>
                    {review.client_name || 'tom'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderActionButtonsSection = (actionData: any) => {
    return (
      <div className="px-6 py-6" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E2E2'}` }}>
        <h3 className="text-lg font-bold text-center mb-6" style={{ color: colors.text, fontFamily: font }}>
          {('More')}
        </h3>
        <div className="flex justify-center space-x-4">
          <button
            className="flex flex-col items-center justify-center p-4 border rounded-lg transition-colors"
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
            <Download className="w-5 h-5 mb-2" />
            <span className="text-sm font-medium">{actionData.save_contact_button_text || 'Save'}</span>
          </button>
          
          <button
            className="flex flex-col items-center justify-center p-4 border rounded-lg transition-colors"
            style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
            onClick={() => setShowQrModal(true)}
          >
            <Share2 className="w-5 h-5 mb-2" />
            <span className="text-sm font-medium">{actionData.share_button_text || 'Share'}</span>
          </button>
          
          <button
            className="flex flex-col items-center justify-center p-4 border rounded-lg transition-colors"
            style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
            onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent('openContactModal'))}
          >
            <Phone className="w-5 h-5 mb-2" />
            <span className="text-sm font-medium">{actionData.contact_button_text || 'Contact'}</span>
          </button>
        </div>
      </div>
    );
  };

  const renderLocationSection = (locationData: any) => {
    if (!locationData.map_embed_url && !locationData.directions_url) return null;

    return (
      <div className="py-6" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E2E2'}` }}>
        {locationData.map_embed_url && (
          <div className="h-96 w-full">
            <div dangerouslySetInnerHTML={{ __html: locationData.map_embed_url }} className="w-full h-full" />
          </div>
        )}
      </div>
    );
  };

  const renderAppDownloadSection = (appData: any) => {
    if (!appData.app_store_url && !appData.play_store_url) return null;

    return (
      <div className="px-6 py-6" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E2E2'}` }}>
        <h3 className="text-lg font-bold text-center mb-6" style={{ color: colors.text, fontFamily: font }}>
          {t('Download Here')}
        </h3>
        <div className="flex justify-center space-x-4">
          {appData.app_store_url && (
            <button
              className="flex items-center justify-center p-3 border rounded-lg transition-colors"
              style={{ borderColor: colors.borderColor, fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(appData.app_store_url, '_blank', 'noopener,noreferrer')}
            >
              <div className="bg-black rounded-lg px-4 py-2">
                <span className="text-white text-sm font-medium">{t('App Store')}</span>
              </div>
            </button>
          )}
          {appData.play_store_url && (
            <button
              className="flex items-center justify-center p-3 border rounded-lg transition-colors"
              style={{ borderColor: colors.borderColor, fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(appData.play_store_url, '_blank', 'noopener,noreferrer')}
            >
              <div className="bg-green-600 rounded-lg px-4 py-2">
                <span className="text-white text-sm font-medium">{t('Play Store')}</span>
              </div>
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderContactFormSection = (formData: any) => {
    if (!formData.form_title) return null;
    return (
      <div className="px-6 py-6" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E2E2'}` }}>
        <h3 className="text-lg font-bold text-center mb-4" style={{ color: colors.text, fontFamily: font }}>
          {formData.form_title}
        </h3>
        {formData.form_description && (
          <p className="text-sm text-center mb-6" style={{ color: colors.text + 'CC', fontFamily: font }}>
            {formData.form_description}
          </p>
        )}
        <Button
          className="w-full py-3"
          style={{
            backgroundColor: colors.primary,
            color: '#FFFFFF',
            fontFamily: font
          }}
          onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent('openContactModal'))}
        >
          <Mail className="w-4 h-4 mr-2" />
          {t('Contact Me')}
        </Button>
      </div>
    );
  };

  const renderThankYouSection = (thankYouData: any) => {
    if (!thankYouData.message) return null;

    return (
      <div className="py-6" style={{ backgroundColor: colors.secondary }}>
        <div className="px-6">
          {/* Thank You SVG/Image */}
          <div className="text-center mb-4">
            <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
              <span className="text-4xl text-white">🎭</span>
            </div>
          </div>
          
          <div className="text-center p-4 bg-white border rounded-lg max-w-sm mx-auto" style={{ borderColor: colors.primary }}>
            <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text, fontFamily: font }}>
              {thankYouData.message}
            </h3>
          </div>
        </div>
      </div>
    );
  };

  // Stable HTML content to prevent iframe reloading
  const stableHtmlContent = React.useMemo(() => {
    return configSections.custom_html?.html_content || '';
  }, [configSections.custom_html?.html_content]);

  const renderCustomHtmlSection = (customHtmlData: any) => {
    if (!customHtmlData?.html_content) return null;

    return (
      <div className="px-6 py-6" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E2E2'}` }}>
        {customHtmlData.show_title && customHtmlData.section_title && (
          <h3 className="text-lg font-bold text-center mb-4" style={{ color: colors.text, fontFamily: font }}>
            {customHtmlData.section_title}
          </h3>
        )}
        <div
          className="custom-html-content"
          style={{
            fontFamily: font,
            color: colors.text
          }}
        >
          <StableHtmlContent htmlContent={stableHtmlContent} />
        </div>
      </div>
    );
  };

  const renderQrShareSection = (qrData: any) => {
    if (!qrData.enable_qr) return null;

    return (
      <div className="px-6 py-6" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E2E2'}` }}>
        <div className="text-center">
          {qrData.qr_title && (
            <h3 className="text-lg font-bold mb-2" style={{ color: colors.text, fontFamily: font }}>
              {qrData.qr_title}
            </h3>
          )}
          {qrData.qr_description && (
            <p className="text-sm mb-4" style={{ color: colors.text + 'CC', fontFamily: font }}>
              {qrData.qr_description}
            </p>
          )}
          <Button
            className="w-full py-3"
            style={{
              backgroundColor: colors.primary,
              color: '#FFFFFF',
              fontFamily: font
            }}
            onClick={() => setShowQrModal(true)}
          >
            <QrCode className="w-4 h-4 mr-2" />
            {t('Share QR Code')}
          </Button>
        </div>
      </div>
    );
  };

  const renderCopyrightSection = (copyrightData: any) => {
    // This function is no longer used as we're rendering copyright separately at the end
    return null;
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
    <div className="w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl" style={{
      fontFamily: font,
      backgroundColor: colors.background,
      border: `1px solid ${colors.borderColor || '#E2E2E2'}`,
      direction: isRTL ? 'rtl' : 'ltr'
    }}>
      {orderedSectionKeys.map((sectionKey) => (
        <React.Fragment key={sectionKey}>
          {renderSection(sectionKey)}
        </React.Fragment>
      ))}

      {/* Copyright always at the end */}
      {copyrightSection && (
        <div className="px-6 py-4 text-center" style={{ backgroundColor: colors.primary, color: '#FFFFFF' }}>
          {copyrightSection.text && (
            <p className="text-sm" style={{ fontFamily: font }}>
              {copyrightSection.text}
            </p>
          )}
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