import React from 'react';

const Stats = () => {
  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "5000+", label: "Employees Worldwide" },
    { number: "1000+", label: "Successful Projects" },
    { number: "50+", label: "Countries Served" }
  ];

  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="border-r border-blue-500 last:border-0">
              <div className="text-4xl font-bold text-white">{stat.number}</div>
              <div className="mt-2 text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;