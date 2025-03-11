import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400">Systems</h3>
            <p className="mt-4 text-gray-400">
              Empowering businesses through technology innovation since 1977
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400">Digital Transformation</a></li>
              <li><a href="#" className="hover:text-blue-400">Enterprise Solutions</a></li>
              <li><a href="#" className="hover:text-blue-400">IT Consulting</a></li>
              <li><a href="#" className="hover:text-blue-400">Cloud Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">News</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 Systems Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;