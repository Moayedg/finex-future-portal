
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/b6ca669f-4fe4-433a-9792-92e0326f5140.png" 
                alt="Finex Logo" 
                className="h-10 w-auto mr-3"
              />
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
              <p>📧 info@finex.com</p>
              <p>📞 +218 922555900</p>
              <p>🏢 Fuwehat, Alrhaba</p>
              <p>   Benghazi, Libya</p>
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
