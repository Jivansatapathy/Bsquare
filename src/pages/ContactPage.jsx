
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow">
              Get in <span className="text-orange-400">Touch</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're here to help! Reach out to us for any inquiries about our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">
                      H.NO: 840 | Road no 14 | Vinayaka Hills Phase II | BN REDDY NAGAR | HYDERABAD | TELANGANA 500058
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <a
                      href="mailto:Ravikumar@Sharanyainfo.com"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      Ravikumar@Sharanyainfo.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <a
                      href="tel:8125502679"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      8125502679
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe
                  title="Office Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=78.5%2C17.3%2C78.6%2C17.4&layer=mapnik"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;