
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/placeholder.svg" 
                alt="Finex Logo" 
                className="h-8 w-auto filter brightness-0 invert mr-3"
              />
              <span className="text-xl font-lexend font-bold">Finex</span>
            </div>
            <p className="text-gray-400 font-lexend mb-4">
              Smart financial solutions for a secure future. Delivering innovative 
              fintech products that transform how businesses manage their finances.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-lexend font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white font-lexend transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white font-lexend transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white font-lexend transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-lexend font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400 font-lexend">
              <p>📧 hello@finex.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>🏢 123 Financial District</p>
              <p>   New York, NY 10001</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 font-lexend">
            © 2024 Finex. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
