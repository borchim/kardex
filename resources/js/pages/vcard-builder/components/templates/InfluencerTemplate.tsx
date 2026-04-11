import { handleAppointmentBooking } from '../VCardPreview';
import { getImageDisplayUrl } from '@/utils/imageUrlHelper';
import React from 'react';
import StableHtmlContent from '@/components/StableHtmlContent';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Globe, MapPin, Calendar, UserPlus, Briefcase, Star, User, Download, QrCode, Heart, Eye, TrendingUp, Users, Award, Camera, Video, Share2 } from 'lucide-react';
import SocialIcon from '../../../link-bio-builder/components/SocialIcon';
import { QRShareModal } from '@/components/QRShareModal';
import { getSectionOrder } from '@/utils/sectionHelpers';
import { getBusinessTemplate } from '@/pages/vcard-builder/business-templates';
import { useTranslation } from 'react-i18next';
import languageData from '@/../../resources/lang/language.json';

interface InfluencerTemplateProps {
  data: any;
  template: any;
}

export default function InfluencerTemplate({ data, template }: InfluencerTemplateProps) {
  const { t, i18n } = useTranslation();
  const configSections = data.config_sections || {};
  
  // Content rotation state
  const [currentContent, setCurrentContent] = React.useState(0);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

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

  const colors = configSections.colors || template?.defaultColors || { 
    primary: '#E1306C', 
    secondary: '#F77737', 
    accent: '#FCAF45', 
    background: '#FAFAFA', 
    text: '#262626',
    cardBg: '#FFFFFF',
    gradient: 'linear-gradient(45deg, #E1306C, #F77737, #FCAF45)'
  };
  
  const font = React.useMemo(() => configSections.font || template?.defaultFont || 'Poppins, sans-serif', [configSections.font, template?.defaultFont]);

  // Load Google Fonts dynamically
  React.useEffect(() => {
    const fontString = typeof font === 'string' ? font : 'Poppins, sans-serif';
    const fontFamily = fontString.split(',')[0].trim().replace(/[\"\\']/g, '');
    
    if (fontFamily && fontFamily !== 'Arial' && fontFamily !== 'sans-serif' && fontFamily !== 'serif') {
      const linkId = `google-font-${fontFamily.replace(/\\s+/g, '-')}`;
      
      if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\\s+/g, '+')}:wght@300;400;500;600;700&display=swap`;
        document.head.appendChild(link);
      }
    }
  }, [font]);

  // Content rotation effect
  React.useEffect(() => {
    const contentData = configSections.content;
    const contentList = contentData?.content_list || [];
    if (!Array.isArray(contentList) || contentList.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentContent(prev => (prev + 1) % contentList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [configSections.content?.content_list]);

  // Testimonial rotation effect
  React.useEffect(() => {
    const testimonialsData = configSections.testimonials;
    const reviews = testimonialsData?.reviews || [];
    if (!Array.isArray(reviews) || reviews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [configSections.testimonials?.reviews]);

  // Get all sections for this business type
  const allSections = getBusinessTemplate('influencer')?.sections || [];

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
      case 'stats':
        return renderStatsSection(sectionData);
      case 'content':
        return renderContentSection(sectionData);
      case 'collaborations':
        return renderCollaborationsSection(sectionData);
      case 'services':
        return renderServicesSection(sectionData);
      case 'social':
        return renderSocialSection(sectionData);
      case 'media_kit':
        return renderMediaKitSection(sectionData);
      case 'testimonials':
        return renderTestimonialsSection(sectionData);
      case 'booking':
        return renderBookingSection(sectionData);
      case 'contact_form':
        return renderContactFormSection(sectionData);
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
    <div className="relative rounded-t-2xl overflow-hidden" style={{ background: colors.gradient || colors.primary }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full border-2 border-white animate-pulse"></div>
        <div className="absolute top-8 right-8 w-4 h-4 rounded-full bg-white opacity-60 animate-bounce"></div>
        <div className="absolute bottom-6 left-8 w-6 h-6 rounded-full border border-white opacity-40"></div>
      </div>

      <div className="px-6 py-8 relative">
        {/* Language Selector */}
        {(configSections?.language && configSections?.language?.enable_language_switcher) && (
          <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
            <div className="relative">
              <button
                onClick={() => setShowLanguageSelector(!showLanguageSelector)}
                className="flex items-center space-x-1 px-2 py-1 rounded-lg text-xs transition-colors bg-white bg-opacity-90 border border-white border-opacity-50 text-black hover:bg-opacity-100 font-medium"
              >
                <Globe className="w-3 h-3" />
                <span>{languageData.find(lang => lang.code === currentLanguage)?.name || 'EN'}</span>
              </button>

              {showLanguageSelector && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowLanguageSelector(false)}
                  />
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border py-2 min-w-[160px] max-h-48 overflow-y-auto z-50">
                    {languageData.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center space-x-2 ${currentLanguage === lang.code ? 'bg-pink-50 text-pink-600' : 'text-gray-700'}`}
                      >
                        <span className="text-base">{String.fromCodePoint(...lang.countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt()))}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <div className="flex items-start space-x-4">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden" style={{ backgroundColor: colors.cardBg }}>
            {headerData.profile_image ? (
              <img src={getImageDisplayUrl(headerData.profile_image)} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User className="w-12 h-12" style={{ color: colors.primary }} />
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: font }}>
              {headerData.name || data.name || ''}
            </h1>
            <p className="text-white text-sm font-medium mb-2" style={{ fontFamily: font }}>
              {headerData.title || ''}
            </p>
            {headerData.tagline && (
              <p className="text-black text-xs leading-relaxed bg-white bg-opacity-90 rounded-lg p-2 font-medium" style={{ fontFamily: font }}>
                {headerData.tagline}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactSection = (contactData: any) => (
    <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.primary}20` }}>
      <div className="grid grid-cols-2 gap-3">
        {(contactData.email || data.email) && (
          <a
            href={`mailto:${contactData.email || data.email}`}
            className="flex items-center space-x-2 p-3 rounded-xl transition-all hover:scale-105"
            style={{ backgroundColor: colors.primary + '10', border: `1px solid ${colors.primary}20` }}
          >
            <Mail className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="text-xs font-medium truncate" style={{ color: colors.text, fontFamily: font }}>
              {t('Email')}
            </span>
          </a>
        )}
        {(contactData.phone || data.phone) && (
          <a
            href={`tel:${contactData.phone || data.phone}`}
            className="flex items-center space-x-2 p-3 rounded-xl transition-all hover:scale-105"
            style={{ backgroundColor: colors.secondary + '10', border: `1px solid ${colors.secondary}20` }}
          >
            <Phone className="w-4 h-4" style={{ color: colors.secondary }} />
            <span className="text-xs font-medium truncate" style={{ color: colors.text, fontFamily: font }}>
              {t('Call')}
            </span>
          </a>
        )}
        {(contactData.website || data.website) && (
          <a
            href={contactData.website || data.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 p-3 rounded-xl transition-all hover:scale-105"
            style={{ backgroundColor: colors.accent + '10', border: `1px solid ${colors.accent}20` }}
          >
            <Globe className="w-4 h-4" style={{ color: colors.accent }} />
            <span className="text-xs font-medium truncate" style={{ color: colors.text, fontFamily: font }}>
              {t('Website')}
            </span>
          </a>
        )}
        {contactData.location && (
          <div className="flex items-center space-x-2 p-3 rounded-xl" style={{ backgroundColor: colors.primary + '05', border: `1px solid ${colors.primary}10` }}>
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
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.primary}20` }}>
        <h3 className="font-bold text-lg mb-3 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Heart className="w-5 h-5 mr-2" />
          {t('About Me')}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: colors.text, fontFamily: font }}>
          {aboutData.description || data.description}
        </p>

        {aboutData.niches && (
          <div className="mb-3">
            <p className="text-xs font-semibold mb-2" style={{ color: colors.secondary, fontFamily: font }}>{t('Content Niches')}:</p>
            <div className="flex flex-wrap gap-2">
              {aboutData.niches.split(',').map((niche: string, index: number) => (
                <Badge key={index} className="text-xs rounded-full px-3 py-1" style={{ backgroundColor: colors.gradient, color: 'white' }}>
                  {niche.trim()}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {aboutData.experience && (
          <div className="text-center p-3 rounded-xl" style={{ backgroundColor: colors.primary + '10' }}>
            <p className="text-2xl font-bold" style={{ color: colors.primary, fontFamily: font }}>{aboutData.experience}+</p>
            <p className="text-xs" style={{ color: colors.text, fontFamily: font }}>{t('Years Creating Content')}</p>
          </div>
        )}
      </div>
    );
  };

  const renderStatsSection = (statsData: any) => {
    const platformStats = statsData.platform_stats || [];
    if (!Array.isArray(platformStats) || platformStats.length === 0) return null;
    
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.primary}20` }}>
        <h3 className="font-bold text-lg mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <TrendingUp className="w-5 h-5 mr-2" />
          {t('Platform Stats')}
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {platformStats.map((stat: any, index: number) => (
            <div key={index} className="p-4 rounded-xl" style={{ background: colors.gradient, color: 'white' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm capitalize" style={{ fontFamily: font }}>{stat.platform}</span>
                <Users className="w-4 h-4" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-lg font-bold" style={{ fontFamily: font }}>{stat.followers}</p>
                  <p className="text-xs opacity-90" style={{ fontFamily: font }}>{t('Followers')}</p>
                </div>
                <div>
                  <p className="text-lg font-bold" style={{ fontFamily: font }}>{stat.engagement_rate}</p>
                  <p className="text-xs opacity-90" style={{ fontFamily: font }}>{t('Engagement')}</p>
                </div>
                <div>
                  <p className="text-lg font-bold" style={{ fontFamily: font }}>{stat.monthly_views}</p>
                  <p className="text-xs opacity-90" style={{ fontFamily: font }}>{t('Monthly Views')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderContentSection = (contentData: any) => {
    const contentList = contentData.content_list || [];
    if (!Array.isArray(contentList) || contentList.length === 0) return null;

    const currentContentItem = contentList[currentContent] || contentList[0];

    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.primary}20` }}>
        <h3 className="font-bold text-lg mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Camera className="w-5 h-5 mr-2" />
          {t('Featured Content')}
        </h3>
        
        <div className="relative">
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: colors.cardBg, border: `2px solid ${colors.primary}20` }}>
            {currentContentItem.thumbnail ? (
              <div className="relative">
                <img src={getImageDisplayUrl(currentContentItem.thumbnail)} alt={currentContentItem.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                    <Video className="w-8 h-8" style={{ color: colors.primary }} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-48 flex items-center justify-center" style={{ backgroundColor: colors.primary + '10' }}>
                <div className="text-center">
                  <Video className="w-12 h-12 mx-auto mb-2" style={{ color: colors.primary }} />
                  <span className="text-sm font-medium" style={{ color: colors.primary, fontFamily: font }}>{currentContentItem.title}</span>
                </div>
              </div>
            )}
            
            <div className="p-4">
              <h4 className="font-bold text-sm mb-2" style={{ color: colors.text, fontFamily: font }}>{currentContentItem.title}</h4>
              <p className="text-xs mb-3" style={{ color: colors.text + 'CC', fontFamily: font }}>{currentContentItem.description}</p>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" style={{ color: colors.secondary }} />
                    <span className="text-xs font-medium" style={{ color: colors.text, fontFamily: font }}>{currentContentItem.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-3 h-3" style={{ color: colors.primary }} />
                    <span className="text-xs font-medium" style={{ color: colors.text, fontFamily: font }}>{currentContentItem.engagement}</span>
                  </div>
                </div>
                <Badge className="text-xs" style={{ backgroundColor: colors.accent + '20', color: colors.accent }}>
                  {currentContentItem.platform}
                </Badge>
              </div>
            </div>
          </div>

          {contentList.length > 1 && (
            <div className="flex justify-center mt-3 space-x-2">
              {contentList.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ backgroundColor: index === currentContent ? colors.primary : colors.primary + '40' }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderCollaborationsSection = (collaborationsData: any) => {
    const brandList = collaborationsData.brand_list || [];
    if (!Array.isArray(brandList) || brandList.length === 0) return null;
    
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.primary}20` }}>
        <h3 className="font-bold text-lg mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Award className="w-5 h-5 mr-2" />
          {t('Brand Collaborations')}
        </h3>
        <div className="space-y-3">
          {brandList.slice(0, 3).map((brand: any, index: number) => (
            <div key={index} className="p-4 rounded-xl border-l-4" style={{
              backgroundColor: colors.cardBg,
              borderColor: colors.primary,
              boxShadow: `0 2px 8px ${colors.primary}10`
            }}>
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-sm" style={{ color: colors.text, fontFamily: font }}>{brand.brand_name}</h4>
                <Badge className="text-xs" style={{ backgroundColor: colors.secondary + '20', color: colors.secondary }}>
                  {brand.campaign_type?.replace('_', ' ')}
                </Badge>
              </div>
              <p className="text-xs mb-2" style={{ color: colors.text + 'CC', fontFamily: font }}>{brand.description}</p>
              {brand.results && (
                <p className="text-xs font-medium" style={{ color: colors.primary, fontFamily: font }}>
                  📈 {brand.results}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderServicesSection = (servicesData: any) => {
    const services = servicesData.service_list || [];
    if (!Array.isArray(services) || services.length === 0) return null;
    
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.primary}20` }}>
        <h3 className="font-bold text-lg mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Briefcase className="w-5 h-5 mr-2" />
          {t('Services')}
        </h3>
        <div className="space-y-4">
          {services.map((service: any, index: number) => (
            <div key={index} className="p-4 rounded-xl" style={{
              background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`,
              border: `1px solid ${colors.primary}20`
            }}>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-sm" style={{ color: colors.text, fontFamily: font }}>{service.title}</h4>
                <span className="text-sm font-bold" style={{ color: colors.primary, fontFamily: font }}>{service.price}</span>
              </div>
              <p className="text-xs mb-2" style={{ color: colors.text + 'CC', fontFamily: font }}>{service.description}</p>
              {service.deliverables && (
                <p className="text-xs" style={{ color: colors.secondary, fontFamily: font }}>
                  ✨ {service.deliverables}
                </p>
              )}
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
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.primary}20` }}>
        <h3 className="font-bold text-lg mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Share2 className="w-5 h-5 mr-2" />
          {t('Follow Me')}
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((link: any, index: number) => (
            <Button
              key={index}
              size="sm"
              className="justify-between p-3 h-auto rounded-xl"
              style={{ 
                background: colors.gradient,
                color: 'white',
                border: 'none',
                fontFamily: font
              }}
              onClick={() => link.url && typeof window !== "undefined" && window.open(link.url, '_blank', 'noopener,noreferrer')}
            >
              <div className="flex items-center space-x-2">
                <SocialIcon platform={link.platform} color="white" />
                <span className="text-xs font-medium capitalize">{link.platform}</span>
              </div>
              {link.follower_count && (
                <span className="text-xs font-bold">{link.follower_count}</span>
              )}
            </Button>
          ))}
        </div>
      </div>
    );
  };

  const renderMediaKitSection = (mediaKitData: any) => {
    if (!mediaKitData.media_kit_url && !mediaKitData.rate_card_url && !mediaKitData.portfolio_url) return null;
    
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.primary}20` }}>
        <h3 className="font-bold text-lg mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Download className="w-5 h-5 mr-2" />
          {t('Media Kit')}
        </h3>
        <div className="space-y-3">
          {mediaKitData.media_kit_url && (
            <Button
              size="sm"
              className="w-full justify-start"
              style={{ backgroundColor: colors.primary, color: 'white', fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(mediaKitData.media_kit_url, '_blank', 'noopener,noreferrer')}
            >
              <Download className="w-4 h-4 mr-2" />
              {t('Download Media Kit')}
            </Button>
          )}
          {mediaKitData.rate_card_url && (
            <Button
              size="sm"
              variant="outline"
              className="w-full justify-start"
              style={{ borderColor: colors.secondary, color: colors.secondary, fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(mediaKitData.rate_card_url, '_blank', 'noopener,noreferrer')}
            >
              <Download className="w-4 h-4 mr-2" />
              {t('View Rate Card')}
            </Button>
          )}
          {mediaKitData.portfolio_url && (
            <Button
              size="sm"
              variant="outline"
              className="w-full justify-start"
              style={{ borderColor: colors.accent, color: colors.accent, fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(mediaKitData.portfolio_url, '_blank', 'noopener,noreferrer')}
            >
              <Globe className="w-4 h-4 mr-2" />
              {t('View Portfolio')}
            </Button>
          )}
        </div>
      </div>
    );
  };

  const renderTestimonialsSection = (testimonialsData: any) => {
    // Default testimonials if none provided
    const defaultTestimonials = [
      {
        brand_name: 'Fashion Forward Inc.',
        review: 'Alex delivered exceptional content that perfectly captured our brand essence. The engagement was outstanding!',
        rating: '5',
        campaign_type: 'Brand Ambassador'
      },
      {
        brand_name: 'Beauty Collective',
        review: 'Professional, creative, and authentic. Alex exceeded our expectations with the campaign results.',
        rating: '5',
        campaign_type: 'Product Review'
      },
      {
        brand_name: 'Lifestyle Brand Co.',
        review: 'Amazing to work with! Alex understood our vision and created content that truly resonated with our target audience.',
        rating: '5',
        campaign_type: 'Sponsored Content'
      }
    ];

    const reviews = testimonialsData.reviews && testimonialsData.reviews.length > 0 
      ? testimonialsData.reviews 
      : defaultTestimonials;
    
    if (!Array.isArray(reviews) || reviews.length === 0) return null;

    const currentReview = reviews[currentTestimonial] || reviews[0];

    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.primary}20` }}>
        <h3 className="font-bold text-lg mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Star className="w-5 h-5 mr-2" />
          {t('Client Love')}
        </h3>

        <div className="relative">
          <div className="p-4 rounded-xl" style={{ backgroundColor: colors.cardBg, border: `2px solid ${colors.primary}` }}>
            <div className="flex items-center space-x-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < parseInt(currentReview.rating || 5) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
            <p className="text-sm mb-3 leading-relaxed text-black font-medium" style={{ fontFamily: font }}>
              "{currentReview.review}"
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm font-bold text-black" style={{ fontFamily: font }}>
                - {currentReview.brand_name}
              </p>
              {currentReview.campaign_type && (
                <Badge className="text-xs" style={{ backgroundColor: colors.primary + '20', color: colors.primary }}>
                  {currentReview.campaign_type}
                </Badge>
              )}
            </div>
          </div>

          {reviews.length > 1 && (
            <div className="flex justify-center mt-3 space-x-2">
              {reviews.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ backgroundColor: index === currentTestimonial ? colors.primary : colors.primary + '40' }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderBookingSection = (bookingData: any) => {
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.primary}20` }}>
        <h3 className="font-bold text-lg mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <Calendar className="w-5 h-5 mr-2" />
          {t('Book Collaboration')}
        </h3>
        <div className="space-y-3">
          {bookingData.booking_url && (
            <Button
              size="sm"
              className="w-full"
              style={{ backgroundColor: colors.primary, color: 'white', fontFamily: font }}
              onClick={() => typeof window !== "undefined" && window.open(bookingData.booking_url, '_blank', 'noopener,noreferrer')}
            >
              <Calendar className="w-4 h-4 mr-2" />
              {t('Schedule Meeting')}
            </Button>
          )}
          {bookingData.response_time && (
            <p className="text-xs text-center" style={{ color: colors.text + 'CC', fontFamily: font }}>
              ⚡ {t('Response time')}: {bookingData.response_time}
            </p>
          )}
        </div>
      </div>
    );
  };

  const renderContactFormSection = (formData: any) => {
    if (!formData.form_title) return null;
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.primary}20` }}>
        <h3 className="font-bold text-lg mb-2" style={{ color: colors.primary, fontFamily: font }}>
          {formData.form_title}
        </h3>
        {formData.form_description && (
          <p className="text-sm mb-4" style={{ color: colors.text, fontFamily: font }}>
            {formData.form_description}
          </p>
        )}
        <Button
          size="sm"
          className="w-full"
          style={{ background: colors.gradient, color: 'white', fontFamily: font }}
          onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent('openContactModal'))}
        >
          <Mail className="w-4 h-4 mr-2" />
          {t('Get In Touch')}
        </Button>
      </div>
    );
  };

  const renderCustomHtmlSection = (customHtmlData: any) => {
    if (!customHtmlData.html_content) return null;
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.primary}20` }}>
        {customHtmlData.show_title && customHtmlData.section_title && (
          <h3 className="font-bold text-lg mb-4" style={{ color: colors.primary, fontFamily: font }}>
            {customHtmlData.section_title}
          </h3>
        )}
        <div
          className="custom-html-content p-4 rounded-xl"
          style={{
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.primary}20`,
            fontFamily: font,
            color: colors.text
          }}
        >
          <StableHtmlContent htmlContent={customHtmlData.html_content} />
        </div>
      </div>
    );
  };

  const renderQrShareSection = (qrData: any) => {
    if (!qrData.enable_qr) return null;
    return (
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.primary}20` }}>
        <h3 className="font-bold text-lg mb-4 flex items-center" style={{ color: colors.primary, fontFamily: font }}>
          <QrCode className="w-5 h-5 mr-2" />
          {qrData.qr_title || t('Connect With Me')}
        </h3>
        <div className="text-center p-4 rounded-xl" style={{ backgroundColor: colors.primary + '10' }}>
          {qrData.qr_description && (
            <p className="text-sm mb-4" style={{ color: colors.text, fontFamily: font }}>
              {qrData.qr_description}
            </p>
          )}
          <Button
            size="sm"
            className="w-full"
            style={{ background: colors.gradient, color: 'white', fontFamily: font }}
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
  const orderedSectionKeys = getSectionOrder(data.template_config || { sections: configSections, sectionSettings: configSections }, allSections)
    .filter(key => key !== 'colors' && key !== 'font' && key !== 'copyright');

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl" style={{
      fontFamily: font,
      backgroundColor: colors.background,
      border: `2px solid ${colors.primary}20`,
      direction: isRTL ? 'rtl' : 'ltr'
    }}>
      {orderedSectionKeys.map((sectionKey) => (
        <React.Fragment key={sectionKey}>
          {renderSection(sectionKey)}
        </React.Fragment>
      ))}

      {configSections.action_buttons && configSections.action_buttons.enabled !== false && (configSections.action_buttons.contact_button_text || configSections.action_buttons.collaboration_button_text || configSections.action_buttons.save_contact_button_text) && (
        <div className="p-6 space-y-3" style={{ background: `linear-gradient(to bottom, ${colors.background}, ${colors.primary}05)` }}>
          {configSections.action_buttons?.contact_button_text && (
            <Button
              className="w-full h-12 font-bold rounded-xl transition-all hover:scale-105"
              style={{
                background: colors.gradient,
                color: 'white',
                fontFamily: font,
                boxShadow: `0 4px 15px ${colors.primary}30`
              }}
              onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent('openContactModal'))}
            >
              <Mail className="w-5 h-5 mr-2" />
              {configSections.action_buttons.contact_button_text}
            </Button>
          )}

          {configSections.action_buttons?.collaboration_button_text && (
            <Button
              className="w-full h-12 font-bold rounded-xl transition-all hover:scale-105"
              style={{
                backgroundColor: 'transparent',
                border: `2px solid ${colors.primary}`,
                color: colors.primary,
                fontFamily: font
              }}
              onClick={() => handleAppointmentBooking(configSections.booking)}
            >
              <Calendar className="w-5 h-5 mr-2" />
              {configSections.action_buttons.collaboration_button_text}
            </Button>
          )}

          {configSections.action_buttons?.save_contact_button_text && (
            <Button
              size="sm"
              variant="outline"
              className="w-full flex items-center justify-center"
              style={{ borderColor: colors.secondary, color: colors.secondary, fontFamily: font }}
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

      {copyrightSection && copyrightSection.text && (
        <div className="px-6 pb-4 pt-2">
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