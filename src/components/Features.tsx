
import { Shield, Smartphone, Zap, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('secureApiIntegration'),
      description: t('secureApiDesc')
    },
    {
      icon: Smartphone,
      title: t('customMobileWallets'),
      description: t('customMobileWalletsDesc')
    },
    {
      icon: Zap,
      title: t('realTimeTransactions'),
      description: t('realTimeTransactionsDesc')
    },
    {
      icon: Lock,
      title: t('advancedSecurity'),
      description: t('advancedSecurityDesc')
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('ourFeatures')} <span className="text-primary"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('featuresDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in group"
            >
              <div className="bg-gradient-primary p-3 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-gradient-primary rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-primary-200">{t('uptimeGuarantee')}</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-primary-200">{t('projectedTransactions')}</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">{t('supportAvailable')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
