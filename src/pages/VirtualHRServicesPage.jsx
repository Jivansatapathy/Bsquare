import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { iconMap } from '@/lib/iconMap';

const VirtualHRServicesPage = ({ services }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    contactNumber: '',
    message: ''
  });
  const formRef = useRef(null);

  const virtualServicesList = services || [];
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast({
      title: "Inquiry Submitted!",
      description: "Thank you for your interest. We'll contact you shortly!",
    });
    setFormData({ name: '', email: '', companyName: '', contactNumber: '', message: '' });
  };

  const handleGetService = (serviceTitle) => {
    setFormData(prev => ({ ...prev, message: `I'm interested in the bundled Virtual HR services, particularly: ${serviceTitle}. Please provide more details.` }));
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
     toast({
      title: `${serviceTitle} Added to Inquiry`,
      description: "This service is part of our bundled offering. Tell us more in the form below.",
    });
  };
  
  const testimonials = [
    { name: "Sarah L., CEO of Innovatech", text: "B Square Global's virtual HR transformed our startup. Efficient, professional, and always there when we need them." , imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29130?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60"},
    { name: "Mike B., Founder of Connect Solutions", text: "The remote onboarding process was seamless. Our new hires felt supported from day one, thanks to their virtual HR team.", imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"},
  ];


  return (
    <div className="pt-16">
      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
              Seamless Virtual HR Services
              <span className="block text-yellow-300 mt-2">Your Remote HR Partner</span>
            </h1>
            <p className="mt-6 text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              "All your HR needs bundled in one seamless solution." Professional, agile, and cost-effective HR support, wherever your business operates.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Bundled Virtual HR Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive virtual HR services designed to manage your workforce efficiently and effectively, no matter the distance. This is a bundled service offering.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {virtualServicesList.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || CheckCircle;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="flex flex-col h-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl group">
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
                      <div className="absolute bottom-4 left-4 p-2 bg-purple-600/80 backdrop-blur-sm rounded-full text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-gray-600 leading-relaxed mb-5">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button 
                        onClick={() => handleGetService(service.title)}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold"
                      >
                        Include in Bundle <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      <section ref={formRef} className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-6 sm:p-8 shadow-xl rounded-xl border border-purple-100">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-gray-900">Get Started with Our Bundled Virtual HR</CardTitle>
                <CardDescription className="text-lg text-gray-600 mt-2">
                  Let us know your requirements, and we'll tailor a virtual HR solution for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-semibold text-gray-700">Full Name</Label>
                    <Input id="name" placeholder="e.g., Jane Smith" required value={formData.name} onChange={handleInputChange} className="mt-1"/>
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-semibold text-gray-700">Email Address</Label>
                    <Input id="email" type="email" placeholder="e.g., jane.smith@company.com" required value={formData.email} onChange={handleInputChange} className="mt-1"/>
                  </div>
                  <div>
                    <Label htmlFor="companyName" className="font-semibold text-gray-700">Company Name</Label>
                    <Input id="companyName" placeholder="e.g., Innovate Solutions Ltd." required value={formData.companyName} onChange={handleInputChange} className="mt-1"/>
                  </div>
                  <div>
                    <Label htmlFor="contactNumber" className="font-semibold text-gray-700">Contact Number</Label>
                    <Input id="contactNumber" type="tel" placeholder="e.g., +1 555 123 4567" required value={formData.contactNumber} onChange={handleInputChange} className="mt-1"/>
                  </div>
                  <div>
                    <Label htmlFor="message" className="font-semibold text-gray-700">Additional Information / Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your virtual HR needs or specific services you're interested in..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3">
                    Submit Inquiry
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hear From Our Virtual HR Clients
            </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our remote HR solutions have empowered businesses like yours.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
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
                        className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-purple-300" 
                        alt={`Testimonial from ${testimonial.name}`}
                       src={testimonial.imageUrl || "https://images.unsplash.com/photo-1595872018818-97555653a011"} />
                    <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                    <h4 className="font-semibold text-purple-700">{testimonial.name}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default VirtualHRServicesPage;