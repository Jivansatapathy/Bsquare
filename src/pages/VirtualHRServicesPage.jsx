
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Wifi, ShieldCheck, Users, BarChart3 } from 'lucide-react';
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
    // Simulate API call
    console.log("Virtual HR Inquiry Submitted:", formData);
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Thank you for your interest in our Virtual HR services. We'll be in touch shortly to discuss your needs!",
      className: "bg-green-500 text-white border-green-600",
    });
    setFormData({ name: '', email: '', companyName: '', contactNumber: '', message: '' });
  };

  const handleGetService = (serviceTitle) => {
    setFormData(prev => ({ ...prev, message: `I'm interested in the bundled Virtual HR services, specifically including aspects of: ${serviceTitle}. Please provide more details on how this integrates into the complete package.` }));
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
     toast({
      title: `${serviceTitle} Added to Inquiry`,
      description: "This service is a key component of our bundled Virtual HR offering. Please complete the form below to discuss your comprehensive needs.",
      className: "bg-secondary text-secondary-foreground border-yellow-500",
    });
  };
  
  const testimonials = [
    { name: "Sarah L., CEO of Innovatech", text: "B Square Global's virtual HR transformed our startup. Efficient, professional, and always there when we need them. It's like having a full HR department at a fraction of the cost." , imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29130?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=80", companyLogo: "https://images.unsplash.com/photo-1542572900-081d536f9a96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5ub3ZhdGlvbiUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=100&q=60"},
    { name: "Mike B., Founder of Connect Solutions", text: "The remote onboarding process was seamless and highly professional. Our new hires felt fully supported and integrated from day one, thanks to B Square Global's virtual HR team.", imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=80", companyLogo: "https://images.unsplash.com/photo-1580893246006-91e9a9209b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29ubmVjdCUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=100&q=60"},
  ];

  const coreBenefits = [
    { icon: Wifi, title: "Location Independent", description: "Full HR support regardless of your team's geographical distribution." },
    { icon: ShieldCheck, title: "Cost-Effective", description: "Access expert HR services without the overhead of an in-house department." },
    { icon: Users, title: "Scalable Solutions", description: "HR services that grow with your business, adapting to your changing needs." },
    { icon: BarChart3, title: "Tech-Driven Efficiency", description: "Leverage modern HR technology for streamlined processes and data insights." },
  ];


  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[hsl(260,70%,55%)] to-[hsl(330,70%,60%)] overflow-hidden"> {/* Adjusted Purple/Pink gradient */}
        <div className="absolute inset-0 opacity-10 hero-pattern"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-shadow-strong">
              Agile Virtual HR Services
              <span className="block text-secondary mt-2">Your Dedicated Remote HR Partner</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[hsl(var(--primary-foreground)/0.9)] max-w-3xl mx-auto leading-relaxed">
              "All your HR essentials, bundled into one seamless, tech-enabled solution." Experience professional, agile, and cost-effective HR support, expertly delivered wherever your business operates.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Bundled Virtual HR Solutions
            </h2>
            <div className="section-divider mb-6 border-purple-500"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our integrated virtual HR services, designed to manage your workforce efficiently and effectively, no matter the distance. This is a complete, bundled service offering.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {virtualServicesList.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || Wifi;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="flex flex-col h-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl group border-t-4 border-purple-500 bg-white">
                    <div className="relative h-56 overflow-hidden">
                       {service.imageUrl ? (
                        <img 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                          alt={service.imageAlt || service.title}
                          src={service.imageUrl} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      ) : (
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                          <img  alt={service.imageAlt || service.title} src="https://images.unsplash.com/photo-1690721606848-ac5bdcde45ea" src="https://images.unsplash.com/photo-1695634504151-d72065870aa6" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 p-3 bg-purple-600/80 backdrop-blur-sm rounded-full text-white shadow-lg">
                        <IconComponent className="h-7 w-7" />
                      </div>
                    </div>
                    <CardHeader className="pb-3 pt-5 px-5">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow px-5 pb-5">
                      <CardDescription className="text-gray-600 leading-relaxed mb-5 text-sm">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                    <div className="p-5 pt-0 mt-auto">
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
      
      <section ref={formRef} className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-6 sm:p-10 shadow-2xl rounded-xl border border-purple-200 bg-slate-50">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-gray-900">Unlock Your Bundled Virtual HR Solution</CardTitle>
                <CardDescription className="text-lg text-gray-600 mt-2">
                  Let us know your specific requirements, and our experts will tailor a comprehensive virtual HR package perfectly aligned with your business needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-semibold text-gray-700">Full Name</Label>
                    <Input id="name" placeholder="e.g., Jane Smith" required value={formData.name} onChange={handleInputChange} className="mt-1 bg-white"/>
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-semibold text-gray-700">Business Email Address</Label>
                    <Input id="email" type="email" placeholder="e.g., jane.smith@company.com" required value={formData.email} onChange={handleInputChange} className="mt-1 bg-white"/>
                  </div>
                  <div>
                    <Label htmlFor="companyName" className="font-semibold text-gray-700">Company Name</Label>
                    <Input id="companyName" placeholder="e.g., Innovate Solutions Ltd." required value={formData.companyName} onChange={handleInputChange} className="mt-1 bg-white"/>
                  </div>
                  <div>
                    <Label htmlFor="contactNumber" className="font-semibold text-gray-700">Contact Number</Label>
                    <Input id="contactNumber" type="tel" placeholder="e.g., +1 555 123 4567" required value={formData.contactNumber} onChange={handleInputChange} className="mt-1 bg-white"/>
                  </div>
                  <div>
                    <Label htmlFor="message" className="font-semibold text-gray-700">Number of Employees & Key Challenges</Label>
                    <Textarea
                      id="message"
                      placeholder="Briefly describe your team size, primary HR challenges, or specific virtual HR needs..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 bg-white"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full btn-secondary text-secondary-foreground font-bold py-3 text-base">
                    Submit Inquiry for Bundled Service
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Our Virtual HR
            </h2>
             <div className="section-divider mb-6 border-purple-500"></div>
             <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experience the advantages of a modern, flexible, and expert-driven HR function.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreBenefits.map((benefit, index) => (
               <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full shadow-lg hover:shadow-xl transition-shadow rounded-xl bg-white">
                  <div className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 shadow-md">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }} // Delay after core benefits
              >
                <Card className="p-6 h-full shadow-lg hover:shadow-xl transition-shadow rounded-xl bg-white">
                  <CardContent className="flex items-center space-x-4">
                     <img 
                        className="w-20 h-20 rounded-full object-cover border-2 border-purple-300 flex-shrink-0" 
                        alt={`Testimonial from ${testimonial.name}`}
                        src={testimonial.imageUrl}  src="https://images.unsplash.com/photo-1543743763-c36e879cf280" />
                    <div>
                      <p className="text-gray-600 italic mb-3">"{testimonial.text}"</p>
                      <h4 className="font-semibold text-purple-700">{testimonial.name}</h4>
                      <img 
                        src={testimonial.companyLogo}
                        alt={`${testimonial.company} logo`}
                        className="h-6 mt-1 opacity-70"  src="https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" />
                    </div>
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
