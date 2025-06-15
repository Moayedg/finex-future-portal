
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    connectWithUs: 'Connect with us',
    
    // Hero
    heroTitle1: 'Smart financial solutions',
    heroTitle2: 'for a secure future',
    heroDescription: 'Finex specializes in smart financial solutions mobile applications and powerful payment gateways designed for a secure future. As a forward-thinking fintech company, we develop secure, innovative, and intuitive products that simplify how individuals and businesses manage, move, and grow their money.',
    getStarted: 'Get Started',
    bookDemo: 'Book a Demo',
    
    // Footer
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    followUs: 'Follow us on social media to stay updated with our latest news and innovations.',
    socialMedia: 'Social Media',
    footerDescription: 'Smart financial solutions for a secure future. Delivering innovative fintech products that transform how businesses manage their finances.',
    copyright: '© 2025 Finex. All rights reserved. | Privacy Policy | Terms of Service',
    
    // Social Media Section
    connectWithUsTitle: 'Connect With Us'
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    aboutUs: 'من نحن',
    contactUs: 'اتصل بنا',
    connectWithUs: 'تواصل معنا',
    
    // Hero
    heroTitle1: 'حلول مالية ذكية',
    heroTitle2: 'لمستقبل آمن',
    heroDescription: 'تتخصص فينكس في تطبيقات الحلول المالية الذكية للهواتف المحمولة وبوابات الدفع القوية المصممة لمستقبل آمن. كشركة تقنية مالية تتطلع إلى المستقبل، نطور منتجات آمنة ومبتكرة وبديهية تبسط كيفية إدارة الأفراد والشركات لأموالهم ونقلها وتنميتها.',
    getStarted: 'ابدأ الآن',
    bookDemo: 'احجز عرضاً توضيحياً',
    
    // Footer
    quickLinks: 'روابط سريعة',
    contactInfo: 'معلومات الاتصال',
    followUs: 'تابعنا على وسائل التواصل الاجتماعي للبقاء على اطلاع بأحدث أخبارنا وابتكاراتنا.',
    socialMedia: 'وسائل التواصل الاجتماعي',
    footerDescription: 'حلول مالية ذكية لمستقبل آمن. تقديم منتجات تقنية مالية مبتكرة تحول كيفية إدارة الشركات لشؤونها المالية.',
    copyright: '© 2025 فينكس. جميع الحقوق محفوظة. | سياسة الخصوصية | شروط الخدمة',
    
    // Social Media Section
    connectWithUsTitle: 'تواصل معنا'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
