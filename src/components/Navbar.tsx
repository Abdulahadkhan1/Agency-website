import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">Systems</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              Industries <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Careers</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Industries</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About Us</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Careers</a>
              <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;