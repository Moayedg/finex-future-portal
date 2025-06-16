
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('aboutFinex')} <span className="text-primary"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('aboutDescription')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-6 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-secondary p-6 rounded-2xl animate-scale-in">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {t('bankingTechnology')}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t('bankingTechnologyDesc')}
                </p>
              </div>

              <div className="bg-gradient-secondary p-6 rounded-2xl animate-scale-in">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {t('secureFintechTools')}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t('secureFintechToolsDesc')}
                </p>
              </div>

              <div className="bg-gradient-secondary p-6 rounded-2xl animate-scale-in">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {t('mobileWebPayment')}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t('mobileWebPaymentDesc')}
                </p>
              </div>

              <div className="bg-gradient-secondary p-6 rounded-2xl animate-scale-in">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {t('aiAutomation')}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t('aiAutomationDesc')}
                </p>
              </div>

              <div className="bg-gradient-secondary p-6 rounded-2xl animate-scale-in">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {t('productSupport')}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t('productSupportDesc')}
                </p>
              </div>

              <div className="bg-gradient-secondary p-6 rounded-2xl animate-scale-in">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {t('mobileAppsWebsites')}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t('mobileAppsWebsitesDesc')}
                </p>
              </div>

              <div className="bg-gradient-secondary p-6 rounded-2xl animate-scale-in md:col-span-2">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {t('itInfrastructure')}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t('itInfrastructureDesc')}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg">
              <img 
                src="/lovable-uploads/438352e8-a562-4e1a-a284-5c48e041b9fa.png" 
                alt="Finex mobile and desktop application preview" 
                className="w-full h-auto object-contain animate-scale-in rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
