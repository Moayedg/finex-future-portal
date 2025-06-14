
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYwNSI+PHBhdGggZD0iTTM2IDM0djEwaDVWMzRoLTVabTAtMTBWMTBoLTV2MTBsNSA0Ljl6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/b6ca669f-4fe4-433a-9792-92e0326f5140.png" 
              alt="Finex Logo" 
              className="h-72 w-auto mx-auto"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-lexend font-bold text-white mb-6 leading-tight">
            Smart financial solutions
            <br />
            <span className="text-blue-200">for a secure future</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-lexend">
            Finex delivers secure, innovative, and user-friendly fintech products 
            that transform how businesses and individuals manage their finances.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-blue-800 hover:bg-gray-100 font-lexend font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-white text-white hover:bg-white hover:text-blue-800 font-lexend font-semibold px-8 py-3 text-lg transition-all duration-300 bg-transparent"
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
