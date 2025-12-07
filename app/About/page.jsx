const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About Us
        </h1>
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p className="text-lg leading-relaxed">
            Welcome to our platform. We are dedicated to creating exceptional digital experiences
            that make a difference in people's lives.
          </p>
          <p className="text-lg leading-relaxed">
            Our team is passionate about innovation, design, and technology. We believe in building
            products that are not only functional but also beautiful and intuitive to use.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To deliver cutting-edge solutions that empower businesses and individuals.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To be the leading force in digital transformation and innovation.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Our Values</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Excellence, integrity, and customer satisfaction drive everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;