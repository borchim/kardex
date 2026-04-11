import { handleAppointmentBooking } from '../VCardPreview';
import { getImageDisplayUrl } from '@/utils/imageUrlHelper';
import React from 'react';
import StableHtmlContent from '@/components/StableHtmlContent';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Globe, MapPin, Calendar, UserPlus, Briefcase, Star, User, Download, QrCode, Clock } from 'lucide-react';
import SocialIcon from '../../../link-bio-builder/components/SocialIcon';
import { QRShareModal } from '@/components/QRShareModal';
import { getSectionOrder } from '@/utils/sectionHelpers';
import { getBusinessTemplate } from '@/pages/vcard-builder/business-templates';
import { useTranslation } from 'react-i18next';
import languageData from '@/../../resources/lang/language.json';

interface NeutralProfessionalTemplateProps {
  data: any;
  template: any;
}

export default function NeutralProfessionalTemplate({ data, template }: NeutralProfessionalTemplateProps) {
  const { t, i18n } = useTranslation();
  const configSections = data.config_sections || {};

  // Testimonials state
  const [currentReview, setCurrentReview] = React.useState(0);

  // Effect for testimonials rotation
  React.useEffect(() => {
    const testimonialsData = configSections.testimonials;
    const reviews = testimonialsData?.reviews || [];
    if (!Array.isArray(reviews) || reviews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentReview(prev => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [configSections.testimonials?.reviews]);

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
    i18n.changeLanguage(langCode);
  };

  const colors = configSections.colors || template?.defaultColors || { primary: '#2563EB', secondary: '#3B82F6', accent: '#F1F5F9', background: '#FFFFFF', text: '#1E293B' };
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
  }, [configSections.font, template?.defaultFont]);

  // Get all sections for this business type
  const allSections = getBusinessTemplate('neutral-professional')?.sections || [];

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
      case 'services':
        return renderServicesSection(sectionData);
      case 'portfolio':
        return renderPortfolioSection(sectionData);
      case 'social':
        return renderSocialSection(sectionData);
      case 'business_hours':
        return renderBusinessHoursSection(sectionData);
      case 'testimonials':
        return renderTestimonialsSection(sectionData);
      case 'contact_form':
        return renderContactFormSection(sectionData);
      case 'appointments':
        return renderAppointmentsSection(sectionData);
      case 'google_map':
        return renderLocationSection(sectionData);
      case 'app_download':
        return renderAppDownloadSection(sectionData);
      case 'custom_html':
        return renderCustomHtmlSection(sectionData);
      case 'qr_share':
        return renderQrShareSection(sectionData);
      case 'thank_you':
        return renderThankYouSection(sectionData);
      default:
        return null;
    }
  };

  const renderHeaderSection = (headerData: any) => (
    <div className="relative rounded-t-2xl overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
      <div className="px-6 py-8 relative">
        {/* Language Selector */}
        {(configSections?.language && configSections?.language?.enable_language_switcher) && (
          <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
            <div className="relative">
              <button
                onClick={() => setShowLanguageSelector(!showLanguageSelector)}
                className="flex items-center space-x-1 px-2 py-1 rounded text-xs transition-colors"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'white'
                }}
              >
                <Globe className="w-3 h-3" />
                <span>{languageData.find(lang => lang.code === currentLanguage)?.name || 'EN'}</span>
              </button>

              {showLanguageSelector && (
                <div className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-1 min-w-[140px] max-h-48 overflow-y-auto z-50">
                  {languageData.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-3 py-1 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2 ${currentLanguage === lang.code ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                        }`}
                    >
                      <span className="text-sm">{String.fromCodePoint(...lang.countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt()))}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex items-start space-x-4">
          <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl flex items-center justify-center">
            {headerData.profile_image ? (
              <img src={getImageDisplayUrl(headerData.profile_image)} alt="Profile" className="w-full h-full rounded-xl object-cover" />
            ) : (
              <User className="w-8 h-8 text-white" />
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-white mb-1" style={{ fontFamily: font }}>
              {headerData.name || data.name || ''}
            </h1>
            <p className="text-white/90 text-sm font-medium mb-2" style={{ fontFamily: font }}>
              {headerData.title || ''}
            </p>
            {headerData.tagline && (
              <p className="text-white/80 text-xs leading-relaxed" style={{ fontFamily: font }}>
                {headerData.tagline}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactSection = (contactData: any) => (
    <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.accent}` }}>
      <div className="grid grid-cols-2 gap-3">
        {(contactData.email || data.email) && (
          <a
            href={`mailto:${contactData.email || data.email}`}
            className="flex items-center space-x-2 p-3 rounded-lg transition-colors hover:bg-gray-50"
            style={{ backgroundColor: colors.cardBg }}
          >
            <Mail className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="text-xs font-medium truncate" style={{ color: colors.text, fontFamily: font }}>
              {contactData.email || data.email}
            </span>
          </a>
        )}
        {(contactData.phone || data.phone) && (
          <a
            href={`tel:${contactData.phone || data.phone}`}
            className="flex items-center space-x-2 p-3 rounded-lg transition-colors hover:bg-gray-50"
            style={{ backgroundColor: colors.cardBg }}
          >
            <Phone className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="text-xs font-medium truncate" style={{ color: colors.text, fontFamily: font }}>
              {contactData.phone || data.phone}
            </span>
          </a>
        )}
        {(contactData.website || data.website) && (
          <a
            href={contactData.website || data.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 p-3 rounded-lg transition-colors hover:bg-gray-50"
            style={{ backgroundColor: colors.cardBg }}
          >
            <Globe className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="text-xs font-medium truncate" style={{ color: colors.text, fontFamily: font }}>
              {t('Website')}
            </span>
          </a>
        )}
        {contactData.location && (
          <div className="flex items-center space-x-2 p-3 rounded-lg" style={{ backgroundColor: colors.cardBg }}>
            <MapPin className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="text-xs font-medium truncate" style={{ color: colors.text, fontFamily: font }}>
              {contactData.location}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  const renderAboutSection = (aboutData: any) => {
    if (!aboutData.description && !data.description) return null;
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.accent}` }}>
        <h3 className="font-semibold text-sm mb-3 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <User className="w-4 h-4 mr-2" />
          {t('About')}
        </h3>
        <p className="text-sm leading-relaxed mb-3" style={{ color: colors.text, fontFamily: font }}>
          {aboutData.description || data.description}
        </p>

        <div className="grid grid-cols-1 gap-3">
          {aboutData.skills && (
            <div>
              <p className="text-xs font-medium mb-2" style={{ color: colors.primary, fontFamily: font }}>{t('Skills & Expertise')}:</p>
              <div className="flex flex-wrap gap-1">
                {aboutData.skills.split(',').map((skill: string, index: number) => (
                  <Badge key={index} variant="secondary" className="text-xs" style={{ backgroundColor: colors.accent, color: colors.primary }}>
                    {skill.trim()}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {aboutData.experience && (
            <div className="text-center">
              <p className="text-lg font-bold" style={{ color: colors.primary, fontFamily: font }}>{aboutData.experience}+</p>
              <p className="text-xs" style={{ color: colors.text, fontFamily: font }}>{t('Years Experience')}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderServicesSection = (servicesData: any) => {
    const services = servicesData.service_list || [];
    if (!Array.isArray(services) || services.length === 0) return null;
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.accent}` }}>
        <h3 className="font-semibold text-sm mb-3 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Briefcase className="w-4 h-4 mr-2" />
          {t('Services')}
        </h3>
        <div className="space-y-3">
          {services.map((service: any, index: number) => (
            <div key={index} className="p-3 rounded-lg border-l-4" style={{
              backgroundColor: colors.cardBg,
              borderColor: colors.primary
            }}>
              <h4 className="font-medium text-sm mb-1" style={{ color: colors.text, fontFamily: font }}>{service.title}</h4>
              {service.description && <p className="text-xs mb-2" style={{ color: colors.text, fontFamily: font }}>{service.description}</p>}
              {service.price && <span className="text-xs" style={{ color: colors.primary, fontFamily: font }}>{service.price}</span>}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderPortfolioSection = (portfolioData: any) => {
    const projects = portfolioData.projects || [];
    if (!Array.isArray(projects) || projects.length === 0) return null;
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.accent}` }}>
        <h3 className="font-semibold text-sm mb-3 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Briefcase className="w-4 h-4 mr-2" />
          {t('Portfolio')}
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {projects.map((project: any, index: number) => (
            <div key={index} className="rounded-lg overflow-hidden" style={{ backgroundColor: colors.cardBg }}>
              {project.image && (
                <img src={getImageDisplayUrl(project.image)} alt={project.title} className="w-full h-20 object-cover" />
              )}
              <div className="p-2">
                <h4 className="font-medium text-xs mb-1" style={{ color: colors.text, fontFamily: font }}>{project.title}</h4>
                {project.description && <p className="text-xs" style={{ color: colors.text + 'CC', fontFamily: font }}>{project.description}</p>}
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
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.accent}` }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>{t('Social Media')}</h3>
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
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.accent}` }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>{t('Business Hours')}</h3>
        <div className="space-y-2">
          {hours.slice(0, 7).map((hour: any, index: number) => (
            <div key={index} className="flex justify-between items-center p-2 rounded" style={{
              backgroundColor: hour.is_closed ? colors.accent : colors.cardBg
            }}>
              <span className="capitalize font-medium text-xs" style={{ color: colors.text, fontFamily: font }}>{t(hour.day)}</span>
              <span className="text-xs" style={{ color: hour.is_closed ? colors.text + '80' : colors.primary, fontFamily: font }}>
                {hour.is_closed ? t('Closed') : `${hour.open_time} - ${hour.close_time}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTestimonialsSection = (testimonialsData: any) => {
    const reviews = testimonialsData.reviews || [];
    if (!Array.isArray(reviews) || reviews.length === 0) return null;

    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.accent}` }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>{t('Testimonials')}</h3>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {reviews.map((review: any, index: number) => (
                <div key={index} className="w-full flex-shrink-0 px-1">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: colors.cardBg }}>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < parseInt(review.rating || 5) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-xs mb-2 leading-relaxed" style={{ color: colors.text, fontFamily: font }}>"{review.review}"</p>
                    <p className="text-xs font-medium" style={{ color: colors.primary, fontFamily: font }}>- {review.client_name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {reviews.length > 1 && (
            <div className="flex justify-center mt-3 space-x-2">
              {reviews.map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className="w-2 h-2 rounded-full transition-colors"
                  style={{
                    backgroundColor: dotIndex === currentReview % Math.max(1, reviews.length) ? colors.primary : colors.primary + '40'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderContactFormSection = (formData: any) => {
    if (!formData.form_title) return null;
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.accent}` }}>
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
          className="w-full"
          style={{ backgroundColor: colors.primary, color: 'white', fontFamily: font }}
          onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent('openContactModal'))}
        >
          <Mail className="w-4 h-4 mr-2" />
          {t('Get In Touch')}
        </Button>
      </div>
    );
  };

  const renderAppointmentsSection = (appointmentsData: any) => {
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.accent}` }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>{t('Appointments')}</h3>
        <Button
          size="sm"
          className="w-full"
          style={{ backgroundColor: colors.primary, color: 'white', fontFamily: font }}
          onClick={() => handleAppointmentBooking(configSections.appointments)}
        >
          <Calendar className="w-4 h-4 mr-2" />
          {t('Book Appointment')}
        </Button>
      </div>
    );
  };

  const renderLocationSection = (locationData: any) => {
    if (!locationData.map_embed_url && !locationData.directions_url) return null;
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.accent}` }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>{t('Location')}</h3>
        <div className="space-y-3">
          {locationData.map_embed_url && (
            <div className="rounded-lg overflow-hidden" style={{ height: '200px' }}>
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

  const renderAppDownloadSection = (appData: any) => {
    if (!appData.app_store_url && !appData.play_store_url) return null;
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.accent}` }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>{t('Download App')}</h3>
        <div className="grid grid-cols-2 gap-2">
          {appData.app_store_url && (
            <Button
              size="sm"
              variant="outline"
              style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(appData.app_store_url, '_blank', 'noopener,noreferrer')}
            >
              {t("App Store")}
            </Button>
          )}
          {appData.play_store_url && (
            <Button
              size="sm"
              variant="outline"
              style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(appData.play_store_url, '_blank', 'noopener,noreferrer')}
            >
              {t("Play Store")}
            </Button>
          )}
        </div>
      </div>
    );
  };

  const renderCustomHtmlSection = (customHtmlData: any) => {
    if (!customHtmlData.html_content) return null;
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.accent}` }}>
        {customHtmlData.show_title && customHtmlData.section_title && (
          <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>
            {customHtmlData.section_title}
          </h3>
        )}
        <div
          className="custom-html-content p-3 rounded-lg"
          style={{ backgroundColor: colors.cardBg, fontFamily: font, color: colors.text }}
        >
          <StableHtmlContent htmlContent={customHtmlData.html_content} />
        </div>
      </div>
    );
  };

  const renderQrShareSection = (qrData: any) => {
    if (!qrData.enable_qr) return null;
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.accent}` }}>
        <h3 className="font-semibold text-sm mb-3 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <QrCode className="w-4 h-4 mr-2" />
          {qrData.qr_title || t('Share QR Code')}
        </h3>
        <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.cardBg }}>
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
            {t('Share QR Code')}
          </Button>
        </div>
      </div>
    );
  };

  const renderThankYouSection = (thankYouData: any) => {
    if (!thankYouData.message) return null;
    return (
      <div className="px-6 pb-2">
        <p className="text-xs text-center" style={{ color: colors.text + '80', fontFamily: font }}>
          {thankYouData.message}
        </p>
      </div>
    );
  };

  const copyrightSection = configSections.copyright;

  // Get ordered sections using the utility function
  const orderedSectionKeys = getSectionOrder(data.template_config || { sections: configSections, sectionSettings: configSections }, allSections);

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl" style={{
      fontFamily: font,
      backgroundColor: colors.background,
      border: `1px solid ${colors.accent}`,
      direction: isRTL ? 'rtl' : 'ltr'
    }}>
      {orderedSectionKeys
        .filter(key => key !== 'colors' && key !== 'font' && key !== 'copyright')
        .map((sectionKey) => (
          <React.Fragment key={sectionKey}>
            {renderSection(sectionKey)}
          </React.Fragment>
        ))}

      {configSections.action_buttons && configSections.action_buttons.enabled !== false && (configSections.action_buttons.contact_button_text || configSections.action_buttons.save_contact_button_text) && (
        <div className="p-6 space-y-3" style={{ backgroundColor: colors.cardBg }}>
          {configSections.action_buttons?.contact_button_text && (
            <Button
              className="w-full h-12 font-semibold rounded-lg transition-all hover:shadow-lg"
              style={{
                backgroundColor: colors.primary,
                color: 'white',
                fontFamily: font
              }}
              onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent('openContactModal'))}
            >
              <Mail className="w-4 h-4 mr-2" />
              {configSections.action_buttons.contact_button_text}
            </Button>
          )}

          {configSections.action_buttons?.save_contact_button_text && (
            <Button
              size="sm"
              variant="outline"
              className="w-full flex items-center justify-center"
              style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
              onClick={() => {
                const contactData = {
                  name: data.name || '',
                  title: data.title || '',
                  email: data.email || configSections.contact?.email || '',
                  phone: data.phone || configSections.contact?.phone || '',
                  website: data.website || configSections.contact?.website || '',
                  location: configSections.contact?.location || ''
                };
                import('@/utils/vcfGenerator').then(module => {
                  module.downloadVCF(contactData);
                });
              }}
            >
              <UserPlus className="w-4 h-4 mr-2" />
              {configSections.action_buttons.save_contact_button_text}
            </Button>
          )}
        </div>
      )}

      {copyrightSection && (
        <div className="px-6 pb-4 pt-2">
          {copyrightSection.text && (
            <p className="text-xs text-center" style={{ color: colors.text + '60', fontFamily: font }}>
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