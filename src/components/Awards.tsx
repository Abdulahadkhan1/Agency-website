import React from 'react';
import { Award } from 'lucide-react';

const Awards = () => {
  const awards = [
    "Microsoft Gold Partner",
    "Forbes Asia's Best Under A Billion",
    "ISO 27001 Certified",
    "CMMI Level 5 Certified"
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Awards & Recognition
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our commitment to excellence has been recognized globally
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <Award className="h-12 w-12 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">{award}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;