
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import SocialMedia from '@/components/SocialMedia';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-lexend">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Contact />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Index;
