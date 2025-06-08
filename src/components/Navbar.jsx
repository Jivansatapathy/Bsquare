import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GetStartedForm from '@/components/GetStartedForm';

export const navItems = [
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
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;
  const isServiceActive = () => navItems.find(item => item.name === "Services")?.children?.some(child => isActive(child.path));

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-[hsl(var(--border))] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center shrink-0">
            <img  
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/79a2a533-4097-4ca9-a8ec-b018c666e9f4/88c37905de1b167843d0b8f52cadc459.png"
              alt="B Square Global Logo"
              // Updated classes for increased logo size
              className="custom-logo"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              item.children ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      isServiceActive()
                        ? 'text-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.1)]'
                        : 'text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.05)]'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-56 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 origin-top-left"
                    >
                      <div className="py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            onClick={() => setIsServicesOpen(false)}
                            className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                              isActive(child.path)
                                ? 'text-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.1)] font-semibold'
                                : 'text-gray-700 hover:bg-[hsl(var(--primary)/0.05)] hover:text-[hsl(var(--primary))]'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.1)]'
                      : 'text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.05)]'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeDesktopTab"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[hsl(var(--primary))]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            ))}
            <Button variant="outline" size="sm" className="ml-2 border-primary text-primary hover:bg-primary/10" onClick={() => navigate('/admin')}>
              <LogIn className="h-4 w-4 mr-2" />
              Admin
            </Button>
            <GetStartedForm 
              trigger={
                <Button size="sm" className="ml-2 btn-secondary text-secondary-foreground">
                  Get a Quote
                </Button>
              }
            />
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

        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-2 pb-4 space-y-1 border-t border-gray-200">
              {navItems.map((item) => (
                item.children ? (
                  <Disclosure key={item.name}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                          <span>{item.name}</span>
                          <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'transform rotate-180' : ''}`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4 pb-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              onClick={() => setIsOpen(false)}
                              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                                isActive(child.path)
                                  ? 'text-blue-600 bg-blue-100'
                                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-blue-600 bg-blue-100'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Button variant="outline" className="w-full mt-3 border-primary text-primary hover:bg-primary/10" onClick={() => { setIsOpen(false); navigate('/admin'); }}>
                <LogIn className="h-4 w-4 mr-2" />
                Admin Panel
              </Button>
              <GetStartedForm 
                trigger={
                  <Button className="w-full mt-3 btn-secondary text-secondary-foreground">
                    Get a Quote
                  </Button>
                }
              />
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// This correctly destructures Disclosure from the 'motion' object, assuming
// it's a part of your Framer Motion setup for components.
const { Disclosure } = motion;

export default Navbar;