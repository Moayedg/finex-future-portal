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
    
    // About
    aboutFinex: 'About Finex',
    aboutDescription: 'We are a technology company at the forefront of financial innovation, dedicated to creating smart banking and financial solutions.',
    bankingTechnology: 'Banking Technology',
    bankingTechnologyDesc: 'We develop cutting-edge banking technology solutions that streamline financial operations and enhance customer experiences.',
    secureFintechTools: 'Secure Fintech Tools',
    secureFintechToolsDesc: 'Our comprehensive suite of fintech tools provides robust security measures for all financial transactions and data.',
    mobileWebPayment: 'Mobile & Web Payment Solutions',
    mobileWebPaymentDesc: 'We create seamless payment solutions across mobile and web platforms, enabling efficient and secure transaction processing.',
    aiAutomation: 'AI Automation',
    aiAutomationDesc: 'We leverage artificial intelligence to automate complex financial processes, improving efficiency and reducing operational costs.',
    productSupport: 'Product Support & Marketing',
    productSupportDesc: 'We provide comprehensive support for our products and strategic marketing solutions to help clients reach their business objectives.',
    mobileAppsWebsites: 'Mobile Applications, Websites and ERP Systems',
    mobileAppsWebsitesDesc: 'We develop comprehensive mobile applications, responsive websites, and enterprise resource planning systems tailored to your business needs.',
    itInfrastructure: 'IT Infrastructure Solutions',
    itInfrastructureDesc: 'We deliver complete IT infrastructure solutions for banking and other sectors, providing scalable, secure, and reliable technology foundations.',
    
    // Features
    ourFeatures: 'Our Features',
    featuresDescription: 'Discover the powerful features that make Finex the preferred choice for modern financial solutions.',
    secureApiIntegration: 'Secure API Integration',
    secureApiDesc: 'Enterprise-grade API security with advanced encryption and authentication protocols to protect your financial data.',
    customMobileWallets: 'Custom Mobile Wallets',
    customMobileWalletsDesc: 'Tailored mobile wallet solutions with intuitive interfaces and seamless user experiences for all devices.',
    realTimeTransactions: 'Real-Time Transaction Systems',
    realTimeTransactionsDesc: 'Lightning-fast transaction processing with real-time monitoring and instant confirmation capabilities.',
    advancedSecurity: 'Advanced Security Framework',
    advancedSecurityDesc: 'Multi-layered security architecture with biometric authentication and fraud detection algorithms.',
    uptimeGuarantee: 'Uptime Guarantee',
    projectedTransactions: 'Projected Transactions Processed',
    supportAvailable: 'Support Available',
    
    // Contact
    getInTouch: 'Get in Touch',
    contactDescription: 'Ready to transform your financial operations? Contact us today to learn how Finex can help your business thrive.',
    whyChooseFinex: 'Why Choose Finex?',
    enterpriseSecurity: 'Enterprise-grade security and compliance',
    scalableSolutions: 'Scalable solutions for businesses of all sizes',
    expertSupport: '24/7 expert support and consultation',
    fastIntegration: 'Fast integration and deployment',
    contactInformation: 'Contact Information',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    message: 'Message',
    enterFullName: 'Enter your full name',
    enterEmail: 'Enter your email address',
    tellUsProject: 'Tell us about your project or ask any questions...',
    sendMessage: 'Send Message',
    
    // Footer
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    followUs: 'Follow us on social media to stay updated with our latest news and innovations.',
    socialMedia: 'Social Media',
    footerDescription: 'Smart financial solutions for a secure future. Delivering innovative fintech products that transform how businesses manage their finances.',
    copyright: '© 2025 Finex. All rights reserved. | Privacy Policy | Terms of Service',
    
    // Social Media Section
    connectWithUsTitle: 'Connect With Us',
    
    // Form messages
    fillAllFields: 'Please fill in all fields',
    thankYouMessage: 'Thank you for your message! We\'ll get back to you soon.'
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
    
    // About
    aboutFinex: 'عن فينكس',
    aboutDescription: 'نحن شركة تقنية في مقدمة الابتكار المالي، مكرسة لإنشاء حلول مصرفية ومالية ذكية.',
    bankingTechnology: 'التكنولوجيا المصرفية',
    bankingTechnologyDesc: 'نطور حلول تكنولوجية مصرفية متطورة تبسط العمليات المالية وتعزز تجارب العملاء.',
    secureFintechTools: 'أدوات التقنية المالية الآمنة',
    secureFintechToolsDesc: 'توفر مجموعتنا الشاملة من أدوات التقنية المالية تدابير أمنية قوية لجميع المعاملات والبيانات المالية.',
    mobileWebPayment: 'حلول الدفع عبر الهاتف المحمول والويب',
    mobileWebPaymentDesc: 'ننشئ حلول دفع سلسة عبر منصات الهاتف المحمول والويب، مما يتيح معالجة المعاملات بكفاءة وأمان.',
    aiAutomation: 'الأتمتة بالذكاء الاصطناعي',
    aiAutomationDesc: 'نستفيد من الذكاء الاصطناعي لأتمتة العمليات المالية المعقدة، مما يحسن الكفاءة ويقلل التكاليف التشغيلية.',
    productSupport: 'دعم المنتجات والتسويق',
    productSupportDesc: 'نقدم دعماً شاملاً لمنتجاتنا وحلول تسويقية استراتيجية لمساعدة العملاء على تحقيق أهدافهم التجارية.',
    mobileAppsWebsites: 'تطبيقات الهاتف المحمول والمواقع الإلكترونية وأنظمة تخطيط موارد المؤسسات',
    mobileAppsWebsitesDesc: 'نطور تطبيقات شاملة للهواتف المحمولة ومواقع ويب متجاوبة وأنظمة تخطيط موارد المؤسسات المصممة خصيصاً لاحتياجات عملك.',
    itInfrastructure: 'حلول البنية التحتية لتقنية المعلومات',
    itInfrastructureDesc: 'نقدم حلول بنية تحتية كاملة لتقنية المعلومات للقطاع المصرفي وقطاعات أخرى، توفر أسس تقنية قابلة للتوسع وآمنة وموثوقة.',
    
    // Features
    ourFeatures: 'ميزاتنا',
    featuresDescription: 'اكتشف الميزات القوية التي تجعل فينكس الخيار المفضل للحلول المالية الحديثة.',
    secureApiIntegration: 'تكامل واجهة برمجة التطبيقات الآمنة',
    secureApiDesc: 'أمان واجهة برمجة التطبيقات على مستوى المؤسسات مع بروتوكولات التشفير والمصادقة المتقدمة لحماية بياناتك المالية.',
    customMobileWallets: 'محافظ الهاتف المحمول المخصصة',
    customMobileWalletsDesc: 'حلول محافظ الهاتف المحمول المصممة خصيصاً بواجهات بديهية وتجارب مستخدم سلسة لجميع الأجهزة.',
    realTimeTransactions: 'أنظمة المعاملات في الوقت الفعلي',
    realTimeTransactionsDesc: 'معالجة المعاملات بسرعة البرق مع المراقبة في الوقت الفعلي وقدرات التأكيد الفوري.',
    advancedSecurity: 'إطار الأمان المتقدم',
    advancedSecurityDesc: 'هندسة أمنية متعددة الطبقات مع المصادقة البيومترية وخوارزميات كشف الاحتيال.',
    uptimeGuarantee: 'ضمان وقت التشغيل',
    projectedTransactions: 'المعاملات المتوقع معالجتها',
    supportAvailable: 'الدعم متاح',
    
    // Contact
    getInTouch: 'تواصل معنا',
    contactDescription: 'هل أنت مستعد لتحويل عملياتك المالية؟ اتصل بنا اليوم لتعرف كيف يمكن لفينكس مساعدة عملك على النمو.',
    whyChooseFinex: 'لماذا تختار فينكس؟',
    enterpriseSecurity: 'أمان والامتثال على مستوى المؤسسات',
    scalableSolutions: 'حلول قابلة للتوسع للشركات من جميع الأحجام',
    expertSupport: 'دعم الخبراء والاستشارة على مدار الساعة طوال أيام الأسبوع',
    fastIntegration: 'التكامل والنشر السريع',
    contactInformation: 'معلومات الاتصال',
    fullName: 'الاسم الكامل',
    emailAddress: 'عنوان البريد الإلكتروني',
    message: 'الرسالة',
    enterFullName: 'أدخل اسمك الكامل',
    enterEmail: 'أدخل عنوان بريدك الإلكتروني',
    tellUsProject: 'أخبرنا عن مشروعك أو اطرح أي أسئلة...',
    sendMessage: 'إرسال الرسالة',
    
    // Footer
    quickLinks: 'روابط سريعة',
    contactInfo: 'معلومات الاتصال',
    followUs: 'تابعنا على وسائل التواصل الاجتماعي للبقاء على اطلاع بأحدث أخبارنا وابتكاراتنا.',
    socialMedia: 'وسائل التواصل الاجتماعي',
    footerDescription: 'حلول مالية ذكية لمستقبل آمن. تقديم منتجات تقنية مالية مبتكرةتحول كيفية إدارة الشركات لشؤونها المالية.',
    copyright: '© 2025 فينكس. جميع الحقوق محفوظة. | سياسة الخصوصية | شروط الخدمة',
    
    // Social Media Section
    connectWithUsTitle: 'تواصل معنا',
    
    // Form messages
    fillAllFields: 'يرجى ملء جميع الحقول',
    thankYouMessage: 'شكراً لك على رسالتك! سنعاود الاتصال بك قريباً.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={`${language === 'ar' ? 'rtl font-arabic' : 'ltr font-lexend'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
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
