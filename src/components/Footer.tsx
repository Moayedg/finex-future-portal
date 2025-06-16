
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/b6ca669f-4fe4-433a-9792-92e0326f5140.png" 
                alt="Finex Logo" 
                className="h-10 w-auto mr-3"
              />
            </div>
            <p className="text-gray-400 font-lexend mb-4">
              {t('footerDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-lexend font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white font-lexend transition-colors flex items-center"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white font-lexend transition-colors flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white font-lexend transition-colors flex items-center"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-lexend font-semibold mb-4">{t('contactInfo')}</h4>
            <div className="space-y-3 text-gray-400 font-lexend">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <p>info@finex.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <p className={language === 'ar' ? 'transform rotate-180' : ''}>+218 922555900</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <div>
                  {language === 'ar' ? (
                    <>
                      <p>الفويهات، الرحبة</p>
                      <p>بنغازي، ليبيا</p>
                    </>
                  ) : (
                    <>
                      <p>Fuwehat, Alrhaba</p>
                      <p>Benghazi, Libya</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 font-lexend mb-4 sm:mb-0">
            {t('copyright')}
          </p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
