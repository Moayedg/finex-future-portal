

import { Facebook, Instagram } from 'lucide-react';

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com',
      bgColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'X',
      icon: () => (
        <svg className="w-8 sm:w-12 h-8 sm:h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: 'https://x.com',
      bgColor: 'bg-black hover:bg-gray-800'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    }
  ];

  return (
    <section id="social-media" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-lexend font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Connect With <span className="text-primary">Us</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-lexend px-4">
            Follow us on social media to stay updated with our latest news and innovations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${platform.bgColor} p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in group w-full max-w-xs sm:w-40 sm:h-40 lg:w-48 lg:h-48 flex flex-col items-center justify-center`}
            >
              <div className="text-white flex flex-col items-center space-y-2 sm:space-y-4">
                <platform.icon className="w-8 h-8 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-lexend font-semibold text-base sm:text-lg">{platform.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;

