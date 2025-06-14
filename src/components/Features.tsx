
import { Shield, Smartphone, Zap, Lock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure API Integration",
      description: "Enterprise-grade API security with advanced encryption and authentication protocols to protect your financial data."
    },
    {
      icon: Smartphone,
      title: "Custom Mobile Wallets",
      description: "Tailored mobile wallet solutions with intuitive interfaces and seamless user experiences for all devices."
    },
    {
      icon: Zap,
      title: "Real-Time Transaction Systems",
      description: "Lightning-fast transaction processing with real-time monitoring and instant confirmation capabilities."
    },
    {
      icon: Lock,
      title: "Advanced Security Framework",
      description: "Multi-layered security architecture with biometric authentication and fraud detection algorithms."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-lexend font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lexend">
            Discover the powerful features that make Finex the preferred choice 
            for modern financial solutions.
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
              
              <h3 className="text-xl font-lexend font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 font-lexend leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-gradient-primary rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-lexend font-bold mb-2">99.9%</div>
              <div className="text-primary-200 font-lexend">Uptime Guarantee</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-lexend font-bold mb-2">1M+</div>
              <div className="text-primary-200 font-lexend">Projected Transactions Processed</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-lexend font-bold mb-2">24/7</div>
              <div className="text-primary-200 font-lexend">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
