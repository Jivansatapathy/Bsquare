
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      children: [
        { name: 'HR Services', path: '/hr-services' },
        { name: 'Virtual HR Services', path: '/virtual-hr-services' },
        { name: 'Accounting Services', path: '/accounting-services' },
        { name: 'Training Programs', path: '/training-programs' },
      ]
    },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Admin', path: '/admin' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img  
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/79a2a533-4097-4ca9-a8ec-b018c666e9f4/88c37905de1b167843d0b8f52cadc459.png"
              alt="B Square Global Logo"
              className="logo-custom"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.children ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    >
                      <div className="py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get a Quote
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-blue-100"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.children ? (
                  <div key={item.name} className="space-y-2">
                    <div className="px-3 py-2 text-sm font-medium text-gray-900">
                      {item.name}
                    </div>
                    <div className="pl-6 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                            isActive(child.path)
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white mx-3 mt-4">
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;