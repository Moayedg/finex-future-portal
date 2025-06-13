
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-secondary p-8 rounded-2xl animate-scale-in">
              <h3 className="text-2xl font-lexend font-semibold text-primary mb-4">
                Banking Technology
              </h3>
              <p className="text-gray-700 font-lexend">
                We develop cutting-edge banking technology solutions that streamline 
                financial operations and enhance customer experiences through innovative 
                digital platforms.
              </p>
            </div>

            <div className="bg-gradient-secondary p-8 rounded-2xl animate-scale-in">
              <h3 className="text-2xl font-lexend font-semibold text-primary mb-4">
                Secure Fintech Tools
              </h3>
              <p className="text-gray-700 font-lexend">
                Our comprehensive suite of fintech tools provides robust security 
                measures, ensuring that all financial transactions and data remain 
                protected at all times.
              </p>
            </div>

            <div className="bg-gradient-secondary p-8 rounded-2xl animate-scale-in">
              <h3 className="text-2xl font-lexend font-semibold text-primary mb-4">
                Mobile & Web Payment Solutions
              </h3>
              <p className="text-gray-700 font-lexend">
                We create seamless payment solutions across mobile and web platforms, 
                enabling businesses to process transactions efficiently and securely.
              </p>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/placeholder.svg?height=600&width=500" 
              alt="Financial Technology Dashboard"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
