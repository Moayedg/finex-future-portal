
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-lexend font-bold text-gray-900 mb-6">
            About <span className="text-primary">Finex</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lexend">
            We are a technology company at the forefront of financial innovation, 
            dedicated to creating smart banking and financial solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-secondary p-6 rounded-2xl animate-scale-in">
                <h3 className="text-lg font-lexend font-semibold text-primary mb-3">
                  Banking Technology
                </h3>
                <p className="text-gray-700 font-lexend text-sm">
                  We develop cutting-edge banking technology solutions that streamline 
                  financial operations and enhance customer experiences.
                </p>
              </div>

              <div className="bg-gradient-secondary p-6 rounded-2xl animate-scale-in">
                <h3 className="text-lg font-lexend font-semibold text-primary mb-3">
                  Secure Fintech Tools
                </h3>
                <p className="text-gray-700 font-lexend text-sm">
                  Our comprehensive suite of fintech tools provides robust security 
                  measures for all financial transactions and data.
                </p>
              </div>

              <div className="bg-gradient-secondary p-6 rounded-2xl animate-scale-in">
                <h3 className="text-lg font-lexend font-semibold text-primary mb-3">
                  Mobile & Web Payment Solutions
                </h3>
                <p className="text-gray-700 font-lexend text-sm">
                  We create seamless payment solutions across mobile and web platforms, 
                  enabling efficient and secure transaction processing.
                </p>
              </div>

              <div className="bg-gradient-secondary p-6 rounded-2xl animate-scale-in">
                <h3 className="text-lg font-lexend font-semibold text-primary mb-3">
                  AI Automation
                </h3>
                <p className="text-gray-700 font-lexend text-sm">
                  We leverage artificial intelligence to automate complex financial processes, 
                  improving efficiency and reducing operational costs.
                </p>
              </div>

              <div className="bg-gradient-secondary p-6 rounded-2xl animate-scale-in">
                <h3 className="text-lg font-lexend font-semibold text-primary mb-3">
                  Product Support & Marketing
                </h3>
                <p className="text-gray-700 font-lexend text-sm">
                  We provide comprehensive support for our products and strategic marketing 
                  solutions to help clients reach their business objectives.
                </p>
              </div>

              <div className="bg-gradient-secondary p-6 rounded-2xl animate-scale-in">
                <h3 className="text-lg font-lexend font-semibold text-primary mb-3">
                  Mobile Applications, Websites and ERP Systems
                </h3>
                <p className="text-gray-700 font-lexend text-sm">
                  We develop comprehensive mobile applications, responsive websites, and 
                  enterprise resource planning systems tailored to your business needs.
                </p>
              </div>

              <div className="bg-gradient-secondary p-6 rounded-2xl animate-scale-in md:col-span-2">
                <h3 className="text-lg font-lexend font-semibold text-primary mb-3">
                  IT Infrastructure Solutions
                </h3>
                <p className="text-gray-700 font-lexend text-sm">
                  We deliver complete IT infrastructure solutions for banking and other sectors, 
                  providing scalable, secure, and reliable technology foundations.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <img 
              src="/lovable-uploads/77de5583-ee7c-4cad-847c-11232e86405c.png" 
              alt="Finex Mobile and Web Application"
              className="w-auto h-96 rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
