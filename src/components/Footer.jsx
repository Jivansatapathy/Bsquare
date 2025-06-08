
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { navItems as mainNavItems } from '@/components/Navbar'; // Import navItems

const Footer = ({ hrServices = [], virtualHrServices = [], accountingServices = [], trainingPrograms = [] }) => {
  const allServiceTitles = [
    ...hrServices.map(s => s.title),
    ...virtualHrServices.map(s => s.title),
    ...accountingServices.map(s => s.title),
    ...trainingPrograms.map(s => s.title)
  ];

  // Filter out duplicates and limit to a reasonable number for display
  const uniqueServiceTitles = [...new Set(allServiceTitles)].slice(0, 6);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">B Square Global</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for comprehensive HR, accounting, and training solutions. 
              Empowering businesses to achieve operational excellence.
            </p>
            <div className="flex space-x-4">
  <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
    <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
  </a>
  <a href="https://twitter.com/YourHandle" target="_blank" rel="noopener noreferrer">
    <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
  </a>
  <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer">
    <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
  </a>
  <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer">
    <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-orange-400">Quick Links</span>
            <div className="space-y-2">
              {mainNavItems.map(item => (
                item.children ? (
                  item.children.map(child => (
                    <Link key={child.name} to={child.path} className="block text-gray-300 hover:text-white transition-colors text-sm">
                      {child.name}
                    </Link>
                  ))
                ) : (
                  <Link key={item.name} to={item.path} className="block text-gray-300 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-orange-400">Our Services</span>
            <div className="space-y-2">
              {uniqueServiceTitles.length > 0 ? uniqueServiceTitles.map((title, index) => (
                <p key={index} className="text-gray-300 text-sm">{title}</p>
              )) : (
                <>
                  <p className="text-gray-300 text-sm">Payroll Processing</p>
                  <p className="text-gray-300 text-sm">Financial Reporting</p>
                  <p className="text-gray-300 text-sm">Corporate Training</p>
                  <p className="text-gray-300 text-sm">Recruitment Support</p>
                </>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-orange-400">Contact Us</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-orange-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">
                 UAE|Qatar|India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href="tel:8125502679" className="text-gray-300 text-sm hover:text-white">
                  +971 56 226 0803 || +971 56 747 9769

                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href="mailto:Ravikumar@Sharanyainfo.com" className="text-gray-300 text-sm hover:text-white">
                  info@bsquareglobalfze.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025quare Global. All rights reserved. | Privacy Policy | Terms of Service | Made By Jivan Satapathy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
