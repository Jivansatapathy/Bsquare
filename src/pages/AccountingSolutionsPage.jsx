import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { iconMap } from '@/lib/iconMap';

const AccountingSolutionsPage = ({ services }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    serviceInterestedIn: '',
    question: ''
  });

  const accountingServicesList = services || [];

  const benefits = [
    { iconName: "CheckCircle", text: "Save 15+ hours per week on financial admin" },
    { iconName: "CheckCircle", text: "Reduce accounting errors by up to 95%" },
    { iconName: "CheckCircle", text: "Gain real-time financial insights for better decisions" },
    { iconName: "CheckCircle", text: "Ensure 100% tax compliance and avoid penalties" }
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const submissionData = { ...formData, serviceInterestedIn: selectedServiceTitle };
    console.log("Accounting Service Inquiry:", submissionData);
    toast({
      title: "Inquiry Sent!",
      description: `We've received your inquiry about ${selectedServiceTitle}. We'll be in touch soon!`,
    });
    setIsFormOpen(false);
    setFormData({ name: '', email: '', contactNumber: '', serviceInterestedIn: '', question: '' });
  };

  const openEnquiryForm = (serviceTitle) => {
    setSelectedServiceTitle(serviceTitle);
    setFormData(prev => ({ ...prev, serviceInterestedIn: serviceTitle, question: `I'm interested in ${serviceTitle}. Please provide more details.` }));
    setIsFormOpen(true);
  };
  
  const accountingTestimonials = [
    { name: "John D., Small Business Owner", text: "B Square Global streamlined our bookkeeping and made tax season a breeze. Highly recommend their accounting services!", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60" },
    { name: "Lisa P., Startup Founder", text: "Their financial reports are insightful and have been crucial for our growth strategy. The team is responsive and knowledgeable.", imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60" },
  ];


  return (
    <div className="pt-16">
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                Precision Accounting for
                <span className="block text-yellow-300 mt-2">Sustainable Growth</span>
              </h1>
              <p className="mt-6 text-xl text-green-100 max-w-2xl leading-relaxed">
                Expert accounting solutions providing clarity, ensuring compliance, and delivering strategic insights to fuel your business success.
              </p>
              <div className="mt-10">
                <Button 
                  size="lg" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold px-10 py-4 text-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                className="rounded-2xl shadow-2xl w-full h-auto max-h-[450px] object-cover"
                alt="Modern office with financial charts and graphs"
               src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0" />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services-section" className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Accounting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From daily bookkeeping to strategic financial advisory, we cover all your accounting needs with precision and expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accountingServicesList.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || CheckCircle;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="flex flex-col h-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl group bg-white">
                    <div className="relative h-56 overflow-hidden">
                       {service.imageUrl ? (
                        <img
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                          alt={service.imageAlt || service.title}
                          src={service.imageUrl} />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <img  alt={service.imageAlt || service.title} src="https://images.unsplash.com/photo-1690721606848-ac5bdcde45ea" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 p-2 bg-green-600/80 backdrop-blur-sm rounded-full text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </CardDescription>
                      {service.features && service.features.length > 0 && (
                        <ul className="space-y-2 mb-5">
                          {service.features.slice(0,3).map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button 
                        onClick={() => openEnquiryForm(service.title)}
                        className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold"
                      >
                        Get This Service <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">Inquire About: {selectedServiceTitle}</DialogTitle>
            <DialogDescription className="text-gray-600">
              Please fill in your details below. We'll get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleFormSubmit} className="space-y-4 pt-4">
            <div>
              <Label htmlFor="name" className="font-medium text-gray-700">Full Name</Label>
              <Input id="name" placeholder="Your full name" required value={formData.name} onChange={handleInputChange} className="mt-1"/>
            </div>
            <div>
              <Label htmlFor="email" className="font-medium text-gray-700">Email Address</Label>
              <Input id="email" type="email" placeholder="Your email address" required value={formData.email} onChange={handleInputChange} className="mt-1"/>
            </div>
            <div>
              <Label htmlFor="contactNumber" className="font-medium text-gray-700">Contact Number</Label>
              <Input id="contactNumber" type="tel" placeholder="Your phone number" required value={formData.contactNumber} onChange={handleInputChange} className="mt-1"/>
            </div>
            <div>
              <Label htmlFor="serviceInterestedIn" className="font-medium text-gray-700">Service Interested In</Label>
              <Input id="serviceInterestedIn" value={selectedServiceTitle} readOnly className="mt-1 bg-gray-100"/>
            </div>
            <div>
              <Label htmlFor="question" className="font-medium text-gray-700">Your Question / Message</Label>
              <Textarea id="question" placeholder="Ask any questions or provide more details here..." rows={4} required value={formData.question} onChange={handleInputChange} className="mt-1"/>
            </div>
            <div className="flex justify-end space-x-3 pt-2">
              <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">Submit Inquiry</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Financial <span className="text-green-600">Clarity & Strategic Growth</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our accounting solutions provide the financial insights and robust compliance support 
                you need to make informed decisions and drive sustainable business growth.
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => {
                  const BenefitIcon = iconMap[benefit.iconName] || CheckCircle;
                  return (
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0 bg-green-100 p-2 rounded-full mr-3">
                        <BenefitIcon className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-3 text-base font-semibold shadow-md"
                onClick={() => document.getElementById('contact-cta-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay:0.1 }}
            >
              <img 
                className="rounded-2xl shadow-2xl w-full h-auto max-h-[500px] object-cover"
                alt="Business professional analyzing financial growth charts on a tablet"
               src="https://images.unsplash.com/photo-1647365363162-54f983245cf1" />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Success with B Square Global Accounting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Real stories from businesses that thrive with our expert financial guidance.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {accountingTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6 h-full shadow-lg hover:shadow-xl transition-shadow rounded-xl bg-white">
                  <CardContent className="flex flex-col items-center text-center">
                     <img  
                        className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-green-300" 
                        alt={`Testimonial from ${testimonial.name}`}
                       src={testimonial.imageUrl || "https://images.unsplash.com/photo-1595872018818-97555653a011"} />
                    <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                    <h4 className="font-semibold text-green-700">{testimonial.name}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-cta-section" className="py-20 bg-gradient-to-r from-green-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-10">
              Let our certified accountants handle your books while you focus on what you do best. 
              Schedule your free, no-obligation consultation today.
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold px-10 py-4 text-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              onClick={() => {
                toast({ title: "Consultation Requested", description: "We'll contact you to schedule your free consultation!"});
              }}
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AccountingSolutionsPage;