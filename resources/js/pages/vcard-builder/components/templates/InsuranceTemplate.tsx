import { handleAppointmentBooking } from '../VCardPreview';
import { getImageDisplayUrl } from '@/utils/imageUrlHelper';
import React from 'react';
import StableHtmlContent from '@/components/StableHtmlContent';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { 
  Mail, Phone, Globe, MapPin, Shield, Award, Clock, 
  Calendar, Download, UserPlus, Star, CheckCircle, 
  AlertCircle, FileText, Users, QrCode, Share2 
} from 'lucide-react';
import SocialIcon from '../../../link-bio-builder/components/SocialIcon';
import { QRShareModal } from '@/components/QRShareModal';
import { getSectionOrder, isSectionEnabled, getSectionData } from '@/utils/sectionHelpers';
import { getBusinessTemplate } from '@/pages/vcard-builder/business-templates';
import { useTranslation } from 'react-i18next';

import languageData from '@/../../resources/lang/language.json';

interface InsuranceTemplateProps {
  data: any;
  template: any;
}

export default function InsuranceTemplate({ data, template }: InsuranceTemplateProps) {
  const { t, i18n } = useTranslation();
  const configSections = data.config_sections || {};
  const colors = { ...template?.defaultColors, ...configSections.colors } || { 
    primary: '#1E40AF', 
    secondary: '#3B82F6', 
    accent: '#60A5FA', 
    background: '#F8FAFC',
    text: '#1E293B',
    cardBg: '#FFFFFF'
  };
  
  const font = React.useMemo(() => configSections.font || template?.defaultFont || 'Inter, sans-serif', [configSections.font, template?.defaultFont]);

  // Load Google Fonts dynamically
  React.useEffect(() => {
    const fontString = typeof font === 'string' ? font : 'Inter, sans-serif';
    const fontFamily = fontString.split(',')[0].trim().replace(/[\"\\']/g, '');
    
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
  const allSections = getBusinessTemplate('insurance')?.sections || [];
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
      case 'insurance_services':
        return renderInsuranceServicesSection(sectionData);
      case 'claims_support':
        return renderClaimsSupportSection(sectionData);
      case 'social':
        return renderSocialSection(sectionData);
      case 'business_hours':
        return renderBusinessHoursSection(sectionData);
      case 'testimonials':
        return renderTestimonialsSection(sectionData);
      case 'appointments':
        return renderAppointmentsSection(sectionData);
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
    <div className="relative rounded-t-2xl" style={{ 
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
      color: '#FFFFFF'
    }}>
      {/* Insurance Industry Pattern Background */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="fill-current">
  <defs>
    <pattern
      id="insurance-pattern"
      x="0"
      y="0"
      width="40"
      height="40"
      patternUnits="userSpaceOnUse"
    >
      {/* Shield */}
      <path
        d="M20 6 L28 10 V18 C28 23 20 28 20 28 C20 28 12 23 12 18 V10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.25"
      />

      {/* Heart (health insurance) */}
      <path
        d="M8 10
           C8 7, 12 7, 12 10
           C12 7, 16 7, 16 10
           C16 13, 12 16, 12 16
           C12 16, 8 13, 8 10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.2"
      />

      {/* House (home insurance) */}
      <path
        d="M30 30 L34 26 L38 30 V36 H30 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.25"
      />

      {/* Umbrella (protection) */}
      <path
        d="M20 22
           C14 22, 12 18, 20 14
           C28 18, 26 22, 20 22 Z
           M20 22 V28"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.25"
      />

      {/* Dotted connection lines */}
      <circle cx="6" cy="30" r="0.8" fill="currentColor" opacity="0.2" />
      <circle cx="10" cy="32" r="0.8" fill="currentColor" opacity="0.2" />
      <circle cx="14" cy="34" r="0.8" fill="currentColor" opacity="0.2" />
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="url(#insurance-pattern)" />
</svg>
      </div>

      <div className="h-40 w-full relative">
        <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
          {/* Language Selector */}
          {(configSections?.language && configSections?.language?.enable_language_switcher) && (
            <div className="relative">
              <button
                onClick={() => setShowLanguageSelector(!showLanguageSelector)}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-md text-xs bg-white bg-opacity-20 backdrop-blur-sm text-white font-medium border border-white border-opacity-30"
              >
                <span>
                  {String.fromCodePoint(...(languageData.find(lang => lang.code === currentLanguage)?.countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt()) || [127468, 127463]))}
                </span>
                <span className="uppercase"  style={{ color: colors.text, fontFamily: font }}>{currentLanguage}</span>
              </button>

              {showLanguageSelector && (
                <>
                  <div
                    className="fixed inset-0"
                    style={{ zIndex: 99998 }}
                    onClick={() => setShowLanguageSelector(false)}
                  />
                  <div
                    className="absolute right-0 top-full mt-1 rounded border shadow-lg py-1 w-32 max-h-48 overflow-y-auto bg-white"
                    style={{ zIndex: 99999 }}
                  >
                    {languageData.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className="w-full text-left px-2 py-1 text-xs flex items-center space-x-1 hover:bg-gray-50 text-gray-800"
                        style={{
                          backgroundColor: currentLanguage === lang.code ? colors.primary + '10' : 'transparent'
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
          )}
        </div>
      </div>

      <div className="px-6 pb-6 -mt-20 relative">
        <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
          <div className="w-24 h-24 rounded-xl border-4 border-white shadow-2xl flex items-center justify-center bg-white">
            {headerData.profile_image ? (
              <img
                src={getImageDisplayUrl(headerData.profile_image)}
                alt="Profile"
                className="w-full h-full rounded-lg object-cover"
              />
            ) : (
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-1" style={{ color: colors.primary }} />
                <div className="text-xs font-semibold" style={{ color: colors.primary }}>AGENT</div>
              </div>
            )}
          </div>
          <div className="flex-1 mt-4">
            <h1 className="text-xl font-bold text-white" style={{ fontFamily: font }}>
              {headerData.name || data.name || ''}
            </h1>
            <p className="text-sm text-blue-100" style={{ fontFamily: font }}>
              {headerData.title || data.title || ''}
            </p>
            {headerData.tagline && (
              <p className="text-xs text-blue-100 mt-2 leading-relaxed" style={{ fontFamily: font }}>
                {headerData.tagline}
              </p>
            )}
            <div className="flex items-center space-x-2 mt-2">
              <Award className="w-4 h-4 text-yellow-300" />
              <span className="text-xs text-blue-100" style={{ fontFamily: font }}>{t('Certified Professional')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactSection = (contactData: any) => (
    <div className="px-6 py-4 bg-white" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E8F0'}` }}>
      <h3 className="font-semibold text-sm mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
        <Phone className="w-4 h-4 mr-2" />
        {t('Contact Information')}
      </h3>
      <div className="space-y-3">
        {(contactData.email || data.email) && (
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3 p-3 rounded-lg`} style={{ backgroundColor: colors.background }}>
            <Mail className="w-4 h-4" style={{ color: colors.primary }} />
            <div className="flex-1">
              <span className="text-xs font-medium" style={{ color: colors.text + '80', fontFamily: font }}>{t('Email')}</span>
              <div>
                <a
                  href={`mailto:${contactData.email || data.email}`}
                  className="text-sm font-medium"
                  style={{ color: colors.primary, fontFamily: font }}
                >
                  {contactData.email || data.email}
                </a>
              </div>
            </div>
          </div>
        )}
        {(contactData.phone || data.phone) && (
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3 p-3 rounded-lg`} style={{ backgroundColor: colors.background }}>
            <Phone className="w-4 h-4" style={{ color: colors.primary }} />
            <div className="flex-1">
              <span className="text-xs font-medium" style={{ color: colors.text + '80', fontFamily: font }}>{t('Phone')}</span>
              <div>
                <a
                  href={`tel:${contactData.phone || data.phone}`}
                  className="text-sm font-medium"
                  style={{ color: colors.primary, fontFamily: font }}
                >
                  {contactData.phone || data.phone}
                </a>
              </div>
            </div>
          </div>
        )}
        {(contactData.website || data.website) && (
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3 p-3 rounded-lg`} style={{ backgroundColor: colors.background }}>
            <Globe className="w-4 h-4" style={{ color: colors.primary }} />
            <div className="flex-1">
              <span className="text-xs font-medium" style={{ color: colors.text + '80', fontFamily: font }}>{t('Website')}</span>
              <div>
                <a
                  href={contactData.website || data.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium"
                  style={{ color: colors.primary, fontFamily: font }}
                >
                  {contactData.website || data.website}
                </a>
              </div>
            </div>
          </div>
        )}
        {contactData.location && (
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3 p-3 rounded-lg`} style={{ backgroundColor: colors.background }}>
            <MapPin className="w-4 h-4" style={{ color: colors.primary }} />
            <div className="flex-1">
              <span className="text-xs font-medium" style={{ color: colors.text + '80', fontFamily: font }}>{t('Location')}</span>
              <div className="text-sm font-medium" style={{ color: colors.text, fontFamily: font }}>
                {contactData.location}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderAboutSection = (aboutData: any) => {
    if (!aboutData.description && !data.description) return null;
    return (
      <div className="px-6 py-4 bg-white" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E8F0'}` }}>
        <h3 className="font-semibold text-sm mb-3 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Users className="w-4 h-4 mr-2" />
          {t('About Me')}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: colors.text, fontFamily: font }}>
          {aboutData.description || data.description}
        </p>
        
        {aboutData.specializations && (
          <div className="mb-4">
            <p className="text-xs font-semibold mb-2" style={{ color: colors.text, fontFamily: font }}>{t('Specializations')}:</p>
            <div className="flex flex-wrap gap-1">
              {aboutData.specializations.split(',').map((spec: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-xs" style={{ 
                  backgroundColor: colors.accent + '20', 
                  color: colors.primary,
                  fontFamily: font
                }}>
                  {spec.trim()}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {aboutData.experience && (
            <div className="text-center p-3 rounded-lg" style={{ backgroundColor: colors.background }}>
              <div className="text-lg font-bold" style={{ color: colors.primary, fontFamily: font }}>
                {aboutData.experience}+
              </div>
              <div className="text-xs" style={{ color: colors.text, fontFamily: font }}>{t('Years Experience')}</div>
            </div>
          )}
          {aboutData.licenses && (
            <div className="text-center p-3 rounded-lg" style={{ backgroundColor: colors.background }}>
              <Award className="w-6 h-6 mx-auto mb-1" style={{ color: colors.primary }} />
              <div className="text-xs" style={{ color: colors.text, fontFamily: font }}>{t('Licensed & Certified')}</div>
            </div>
          )}
        </div>

        {aboutData.licenses && (
          <div className="mt-4">
            <p className="text-xs font-semibold mb-2" style={{ color: colors.text, fontFamily: font }}>{t('Professional Licenses')}:</p>
            <div className="flex flex-wrap gap-1">
              {aboutData.licenses.split(',').map((license: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs" style={{ 
                  borderColor: colors.primary, 
                  color: colors.primary,
                  fontFamily: font
                }}>
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {license.trim()}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderInsuranceServicesSection = (servicesData: any) => {
    const services = servicesData.service_list || [];
    if (!Array.isArray(services) || services.length === 0) return null;
    return (
      <div className="px-6 py-4 bg-white" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E8F0'}` }}>
        <h3 className="font-semibold text-sm mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Shield className="w-4 h-4 mr-2" />
          {t('Insurance Services')}
        </h3>
        <div className="space-y-4">
          {services.map((service: any, index: number) => (
            <div key={index} className="p-4 rounded-lg border-l-4" style={{ 
              backgroundColor: colors.background,
              borderLeftColor: colors.primary
            }}>
              <h4 className="font-semibold text-sm mb-2 flex items-center" style={{ color: colors.text, fontFamily: font }}>
                <Shield className="w-4 h-4 mr-2" style={{ color: colors.primary }} />
                {service.title}
              </h4>
              {service.description && (
                <p className="text-xs mb-3 leading-relaxed" style={{ color: colors.text + 'CC', fontFamily: font }}>
                  {service.description}
                </p>
              )}
              {service.features && (
                <div className="flex flex-wrap gap-1">
                  {service.features.split(',').map((feature: string, idx: number) => (
                    <Badge key={idx} variant="secondary" className="text-xs" style={{ 
                      backgroundColor: colors.successColor + '20', 
                      color: colors.successColor,
                      fontFamily: font
                    }}>
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {feature.trim()}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderClaimsSupportSection = (claimsData: any) => {
    if (!claimsData.claims_phone && !claimsData.claims_email && !claimsData.claims_portal) return null;
    return (
      <div className="px-6 py-4 bg-white" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E8F0'}` }}>
        <h3 className="font-semibold text-sm mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <AlertCircle className="w-4 h-4 mr-2" />
          {t('Claims Support')}
        </h3>
        <div className="p-4 rounded-lg" style={{ backgroundColor: colors.warningColor + '10', border: `1px solid ${colors.warningColor}30` }}>
          <div className="flex items-center mb-3">
            <AlertCircle className="w-5 h-5 mr-2" style={{ color: colors.warningColor }} />
            <span className="font-semibold text-sm" style={{ color: colors.warningColor, fontFamily: font }}>
              {t('24/7 Claims Assistance')}
            </span>
          </div>
          <div className="space-y-3">
            {claimsData.claims_phone && (
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" style={{ color: colors.warningColor }} />
                <div>
                  <span className="text-xs font-medium" style={{ color: colors.text + '80', fontFamily: font }}>{t('Claims Hotline')}</span>
                  <div>
                    <a
                      href={`tel:${claimsData.claims_phone}`}
                      className="text-sm font-bold"
                      style={{ color: colors.warningColor, fontFamily: font }}
                    >
                      {claimsData.claims_phone}
                    </a>
                  </div>
                </div>
              </div>
            )}
            {claimsData.claims_email && (
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" style={{ color: colors.warningColor }} />
                <div>
                  <span className="text-xs font-medium" style={{ color: colors.text + '80', fontFamily: font }}>{t('Claims Email')}</span>
                  <div>
                    <a
                      href={`mailto:${claimsData.claims_email}`}
                      className="text-sm font-medium"
                      style={{ color: colors.warningColor, fontFamily: font }}
                    >
                      {claimsData.claims_email}
                    </a>
                  </div>
                </div>
              </div>
            )}
            {claimsData.claims_portal && (
              <Button
                size="sm"
                className="w-full"
                style={{ 
                  backgroundColor: colors.warningColor, 
                  color: 'white',
                  fontFamily: font
                }}
                onClick={() => typeof window !== "undefined" && window.open(claimsData.claims_portal, '_blank', 'noopener,noreferrer')}
              >
                <FileText className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('File Claim Online')}
              </Button>
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
      <div className="px-6 py-4 bg-white" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E8F0'}` }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>{t('Connect With Me')}</h3>
        <div className="grid grid-cols-2 gap-2">
          {socialLinks.map((link: any, index: number) => (
            <Button
              key={index}
              size="sm"
              variant="outline"
              className="justify-start overflow-hidden"
              style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
              onClick={() => link.url && typeof window !== "undefined" && window.open(link.url, '_blank', 'noopener,noreferrer')}
              title={link.username ? `${link.platform}: @${link.username}` : link.platform}
            >
              <SocialIcon platform={link.platform} color={colors.primary} />
              <span className="text-xs capitalize truncate ml-2" style={{ fontFamily: font }}>{link.platform}</span>
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
      <div className="px-6 py-4 bg-white" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E8F0'}` }}>
        <h3 className="font-semibold text-sm mb-3 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Clock className="w-4 h-4 mr-2" />
          {t('Office Hours')}
        </h3>
        <div className="space-y-2">
          {hours.slice(0, 7).map((hour: any, index: number) => (
            <div key={index} className="flex justify-between items-center p-2 rounded" style={{
              backgroundColor: hour.is_closed ? colors.background : `${colors.successColor}15`,
              border: `1px solid ${hour.is_closed ? colors.borderColor : colors.successColor + '30'}`
            }}>
              <span className="capitalize font-medium text-xs" style={{ color: colors.text, fontFamily: font }}>{t(hour.day)}</span>
              <span className="text-xs font-semibold" style={{ 
                color: hour.is_closed ? colors.text + '80' : colors.successColor, 
                fontFamily: font 
              }}>
                {hour.is_closed ? t('Closed') : `${hour.open_time} - ${hour.close_time}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Testimonials state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = React.useState(0);

  // Effect for testimonials rotation
  React.useEffect(() => {
    const testimonialsData = configSections.testimonials;
    const reviews = testimonialsData?.reviews || [];
    if (!Array.isArray(reviews) || reviews.length <= 2) return;

    const interval = setInterval(() => {
      setCurrentTestimonialIndex(prev => (prev + 2) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [configSections.testimonials?.reviews]);

  const renderTestimonialsSection = (testimonialsData: any) => {
    const reviews = testimonialsData.reviews || [];
    if (!Array.isArray(reviews) || reviews.length === 0) return null;

    const getVisibleReviews = () => {
      if (reviews.length <= 2) return reviews;
      return [
        reviews[currentTestimonialIndex],
        reviews[(currentTestimonialIndex + 1) % reviews.length]
      ];
    };

    return (
      <div className="px-6 py-4 bg-white" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E8F0'}` }}>
        <h3 className="font-semibold text-sm mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Star className="w-4 h-4 mr-2" />
          {t('Client Testimonials')}
        </h3>
        <div className="space-y-4 transition-all duration-500">
          {getVisibleReviews().map((review: any, index: number) => (
            <div key={`${currentTestimonialIndex}-${index}`} className="p-4 rounded-lg" style={{ 
              backgroundColor: colors.background,
              border: `1px solid ${colors.primary}20`
            }}>
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < parseInt(review.rating || 5) ? 'fill-current' : ''}`}
                    style={{ color: i < parseInt(review.rating || 5) ? '#FCD34D' : '#E5E7EB' }}
                  />
                ))}
                {review.policy_type && (
                  <Badge variant="secondary" className="text-xs ml-2" style={{ 
                    backgroundColor: colors.accent + '20', 
                    color: colors.primary,
                    fontFamily: font
                  }}>
                    {review.policy_type}
                  </Badge>
                )}
              </div>
              <p className="text-xs mb-3 leading-relaxed italic" style={{ color: colors.text, fontFamily: font }}>
                "{review.review}"
              </p>
              <p className="text-xs font-semibold" style={{ color: colors.primary, fontFamily: font }}>
                — {review.client_name}
              </p>
            </div>
          ))}
        </div>
        {reviews.length > 2 && (
          <div className="flex justify-center mt-3 space-x-1">
            {Array.from({ length: Math.ceil(reviews.length / 2) }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentTestimonialIndex / 2) === i ? 'opacity-100' : 'opacity-30'
                }`}
                style={{ backgroundColor: colors.primary }}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderAppointmentsSection = (appointmentsData: any) => {
    return (
      <div className="px-6 py-4 bg-white" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E8F0'}` }}>
        <h3 className="font-semibold text-sm mb-3 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Calendar className="w-4 h-4 mr-2" />
          {t('Schedule Consultation')}
        </h3>
        <div className="space-y-2">
          <Button
            size="sm"
            className="w-full"
            style={{ 
              backgroundColor: colors.primary, 
              color: 'white',
              fontFamily: font
            }}
            onClick={() => handleAppointmentBooking(configSections.appointments)}
          >
            <Calendar className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('Book Free Consultation')}
          </Button>
          {appointmentsData?.calendar_link && (
            <Button
              size="sm"
              variant="outline"
              className="w-full"
              style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(appointmentsData.calendar_link, '_blank', 'noopener,noreferrer')}
            >
              {t('View My Calendar')}
            </Button>
          )}
        </div>
      </div>
    );
  };

  const renderLocationSection = (locationData: any) => {
    if (!locationData.map_embed_url && !locationData.directions_url) return null;

    return (
      <div className="px-6 py-4 bg-white" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E8F0'}` }}>
        <h3 className="font-semibold text-sm mb-3 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <MapPin className="w-4 h-4 mr-2" />
          {t('Office Location')}
        </h3>

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
              <MapPin className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
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
      <div className="px-6 py-4 bg-white" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E8F0'}` }}>
        <h3 className="font-semibold text-sm mb-3" style={{ color: colors.primary, fontFamily: font }}>{t('Mobile App')}</h3>
        <div className="grid grid-cols-2 gap-2">
          {appData.app_store_url && (
            <Button
              size="sm"
              variant="outline"
              style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(appData.app_store_url, '_blank', 'noopener,noreferrer')}
            >
              {t('App Store')}
            </Button>
          )}
          {appData.play_store_url && (
            <Button
              size="sm"
              variant="outline"
              style={{ borderColor: colors.primary, color: colors.primary, fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(appData.play_store_url, '_blank', 'noopener,noreferrer')}
            >
              {t('Play Store')}
            </Button>
          )}
        </div>
      </div>
    );
  };

  const renderContactFormSection = (formData: any) => {
    if (!formData.form_title) return null;
    return (
      <div className="px-6 py-4 bg-white" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E8F0'}` }}>
        <h3 className="font-semibold text-sm mb-2" style={{ color: colors.primary, fontFamily: font }}>
          {formData.form_title}
        </h3>
        {formData.form_description && (
          <p className="text-xs mb-3 leading-relaxed" style={{ color: colors.text, fontFamily: font }}>
            {formData.form_description}
          </p>
        )}
        <Button
          size="sm"
          className="w-full"
          style={{ 
            backgroundColor: colors.primary, 
            color: 'white',
            fontFamily: font
          }}
          onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent('openContactModal'))}
        >
          <Mail className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
          {t('Get Free Quote')}
        </Button>
      </div>
    );
  };

  const renderThankYouSection = (thankYouData: any) => {
    if (!thankYouData.message) return null;
    return (
      <div className="px-6 pb-2">
        <p className="text-xs text-center leading-relaxed" style={{ color: colors.text + '80', fontFamily: font }}>
          {thankYouData.message}
        </p>
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
      <div className="px-6 py-4 bg-white" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E8F0'}` }}>
        {customHtmlData.show_title && customHtmlData.section_title && (
          <h3 className="font-semibold text-sm mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
            <Award className="w-4 h-4 mr-2" />
            {customHtmlData.section_title}
          </h3>
        )}
        <div
          className="custom-html-content p-4 rounded-lg"
          style={{
            backgroundColor: colors.background,
            border: `1px solid ${colors.borderColor}`,
            fontFamily: font,
            color: colors.text
          }}
        >
          <style>
            {`
              .custom-html-content h1, .custom-html-content h2, .custom-html-content h3, .custom-html-content h4, .custom-html-content h5, .custom-html-content h6 {
                color: ${colors.primary};
                margin-bottom: 0.5rem;
                font-family: ${font};
              }
              .custom-html-content p {
                color: ${colors.text};
                margin-bottom: 0.5rem;
                font-family: ${font};
              }
              .custom-html-content a {
                color: ${colors.primary};
                text-decoration: underline;
              }
              .custom-html-content ul, .custom-html-content ol {
                color: ${colors.text};
                padding-left: 1rem;
                font-family: ${font};
              }
            `}
          </style>
          <StableHtmlContent htmlContent={stableHtmlContent} />
        </div>
      </div>
    );
  };

  const renderQrShareSection = (qrData: any) => {
    if (!qrData.enable_qr) return null;

    return (
      <div className="px-6 py-4 bg-white" style={{ borderBottom: `1px solid ${colors.borderColor || '#E2E8F0'}` }}>
        <h3 className="font-semibold text-sm mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <QrCode className="w-4 h-4 mr-2" />
          {qrData.qr_title || t('Share Contact')}
        </h3>
        <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.background, border: `1px solid ${colors.borderColor}` }}>
          {qrData.qr_description && (
            <p className="text-xs mb-3 leading-relaxed" style={{ color: colors.text, fontFamily: font }}>
              {qrData.qr_description}
            </p>
          )}

          <Button
            size="sm"
            className="w-full"
            style={{
              backgroundColor: colors.primary,
              color: 'white',
              fontFamily: font
            }}
            onClick={() => setShowQrModal(true)}
          >
            <QrCode className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('Share QR Code')}
          </Button>
        </div>
      </div>
    );
  };

  const renderActionButtonsSection = (actionData: any) => {
    const hasContactButton = actionData.contact_button_text;
    const hasAppointmentButton = actionData.appointment_button_text;
    const hasSaveContactButton = actionData.save_contact_button_text;

    if (!hasContactButton && !hasAppointmentButton && !hasSaveContactButton) return null;

    return (
      <div className="p-6 space-y-3" style={{ 
        background: `linear-gradient(to bottom, ${colors.background}, white)`,
        borderBottom: `1px solid ${colors.borderColor || '#E2E8F0'}`
      }}>
        {hasContactButton && (
          <Button
            className="w-full h-12 font-semibold rounded-lg shadow-lg"
            style={{
              backgroundColor: colors.primary,
              color: 'white',
              fontFamily: font
            }}
            onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent('openContactModal'))}
          >
            <Mail className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {actionData.contact_button_text}
          </Button>
        )}

        {hasAppointmentButton && (
          <Button
            className="w-full h-12 font-semibold rounded-lg"
            variant="outline"
            style={{
              borderColor: colors.primary,
              color: colors.primary,
              fontFamily: font
            }}
            onClick={() => handleAppointmentBooking(configSections.appointments)}
          >
            <Calendar className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
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
            <UserPlus className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {actionData.save_contact_button_text}
          </Button>
        )}
      </div>
    );
  };

  const renderCopyrightSection = (copyrightData: any) => {
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
    <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl" style={{
      fontFamily: font,
      background: colors.cardBg || '#FFFFFF',
      border: `1px solid ${colors.borderColor || '#E2E8F0'}`,
      direction: isRTL ? 'rtl' : 'ltr'
    }}>
      {orderedSectionKeys.map((sectionKey) => (
        <React.Fragment key={sectionKey}>
          {renderSection(sectionKey)}
        </React.Fragment>
      ))}

      {/* Copyright always at the end */}
      {copyrightSection && (
        <div className="px-6 pb-4 pt-2 bg-white">
          {copyrightSection.text && (
            <p className="text-xs text-center leading-relaxed" style={{ color: colors.text + '60', fontFamily: font }}>
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