import React from 'react';
import { Building2 } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      title: "Banking & Finance",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
    },
    {
      title: "Healthcare",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80"
    },
    {
      title: "Retail & E-commerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
    },
    {
      title: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Delivering excellence across diverse sectors
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-end">
                <div className="p-6">
                  <Building2 className="h-8 w-8 text-white mb-2" />
                  <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;