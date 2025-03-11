import React from 'react';
import { Globe2, BarChart3, Users2, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe2 className="h-8 w-8 text-blue-600" />,
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge digital solutions and innovative strategies."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise-grade solutions to streamline your business operations."
    },
    {
      icon: <Users2 className="h-8 w-8 text-blue-600" />,
      title: "IT Consulting",
      description: "Expert guidance to help you make informed technology decisions and investments."
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions to drive your business forward
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-0 -mt-4 left-1/2 -ml-4 bg-white rounded-full p-2 shadow-lg">
                {service.icon}
              </div>
              <h3 className="mt-8 text-xl font-medium text-gray-900">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
              <a href="#" className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;