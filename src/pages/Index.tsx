
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import SocialMedia from '@/components/SocialMedia';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-lexend">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
