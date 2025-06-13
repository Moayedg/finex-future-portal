
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    toast.success('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-lexend font-bold text-gray-900 mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lexend">
            Ready to transform your financial operations? Contact us today to learn 
            how Finex can help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-secondary p-8 rounded-2xl">
              <h3 className="text-2xl font-lexend font-semibold text-primary mb-6">
                Why Choose Finex?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700 font-lexend">Enterprise-grade security and compliance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700 font-lexend">Scalable solutions for businesses of all sizes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700 font-lexend">24/7 expert support and consultation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700 font-lexend">Fast integration and deployment</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-xl font-lexend font-semibold text-gray-900 mb-4">
                Contact Information
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <p className="text-gray-600 font-lexend">info@finex.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <p className="text-gray-600 font-lexend">+218 922555900</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-gray-600 font-lexend">Fuwehat, Alrhaba</p>
                    <p className="text-gray-600 font-lexend">Benghazi, Libya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-lexend font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="font-lexend"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-lexend font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="font-lexend"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-lexend font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or ask any questions..."
                  rows={6}
                  className="font-lexend"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-primary hover:opacity-90 text-white font-lexend font-semibold py-3 transition-all duration-300"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
