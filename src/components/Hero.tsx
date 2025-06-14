
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYwNSI+PHBhdGggZD0iTTM2IDM0djEwaDVWMzRoLTVabTAtMTBWMTBoLTV2MTBsNSA0Ljl6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <img 
              src="/lovable-uploads/b6ca669f-4fe4-433a-9792-92e0326f5140.png" 
              alt="Finex Logo" 
              className="h-32 sm:h-48 md:h-56 lg:h-64 w-auto mx-auto transform scale-[0.88]"
            />
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-lexend font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Smart financial solutions
            <br />
            <span className="text-blue-100">for a secure future</span>
          </h1>

          {/* Description */}
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-50 mb-6 sm:mb-8 max-w-3xl mx-auto font-lexend px-4 text-center leading-relaxed">
            <p>Finex specializes in smart financial solutions</p>
            <p>mobile applications and powerful payment gateways</p>
            <p>designed for a secure future. As a forward-thinking</p>
            <p>fintech company, we develop secure, innovative,</p>
            <p>and intuitive products that simplify how individuals</p>
            <p>and businesses manage, move, and grow their money.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-blue-800 hover:bg-gray-100 font-lexend font-semibold px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Get Started
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-lexend font-semibold px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg transition-all duration-300 bg-transparent w-full sm:w-auto"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
