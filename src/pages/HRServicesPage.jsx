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

const HRServicesPage = ({ services }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const formRef = useRef(null);

  const hrServicesList = services || [];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(s => s !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSelectServiceForQuote = (serviceId) => {
    if (!selectedServices.includes(serviceId)) {
      setSelectedServices(prev => [...prev, serviceId]);
    }
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    toast({
      title: `${hrServicesList.find(s => s.id === serviceId)?.title} Selected`,
      description: "This service has been added to your quote request below.",
    });
  };
  

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      toast({
        title: "No Services Selected",
        description: "Please select at least one HR service.",
        variant: "destructive",
      });
      return;
    }
    console.log({ ...formData, selectedServices });
    toast({
      title: "Quote Request Submitted!",
      description: "We've received your request and will get back to you soon.",
    });
    setSelectedServices([]);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const benefits = [
    { iconName: "BarChart3", title: "Boost Productivity", description: "Streamline HR tasks to free up valuable time for core business activities." },
    { iconName: "Users", title: "Improve Engagement", description: "Foster a positive work environment with effective employee relations strategies." },
    { iconName: "ShieldCheck", title: "Ensure Compliance", description: "Stay ahead of changing regulations and minimize legal risks with expert guidance." },
  ];


  return (
    <div className="pt-16">
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
              Empowering Your Business with
              <span className="block text-orange-400 mt-2">Strategic HR Services</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Tailored HR solutions designed to optimize your workforce, ensure compliance, and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive HR Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of expert HR services, crafted to meet the diverse needs of modern businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hrServicesList.map((service, index) => {
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
                      <div className="absolute bottom-4 left-4 p-2 bg-blue-600/80 backdrop-blur-sm rounded-full text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
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
                        onClick={() => handleSelectServiceForQuote(service.id)}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold"
                      >
                        Select for Quote <ArrowRight className="ml-2 h-4 w-4" />
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
            <Card className="p-6 sm:p-8 shadow-xl rounded-xl border border-blue-100">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-gray-900">Request a Quote</CardTitle>
                <CardDescription className="text-lg text-gray-600 mt-2">
                  Tell us about your HR needs. Select services from the cards above or list them here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-semibold text-gray-700">Full Name</Label>
                    <Input id="name" placeholder="e.g., John Doe" required value={formData.name} onChange={handleInputChange} className="mt-1"/>
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-semibold text-gray-700">Email Address</Label>
                    <Input id="email" type="email" placeholder="e.g., john.doe@example.com" required value={formData.email} onChange={handleInputChange} className="mt-1"/>
                  </div>
                  <div>
                    <Label htmlFor="company" className="font-semibold text-gray-700">Company Name</Label>
                    <Input id="company" placeholder="e.g., Acme Corp" required value={formData.company} onChange={handleInputChange} className="mt-1"/>
                  </div>
                  
                  <div className="space-y-3">
                    <Label className="font-semibold text-gray-700">Selected Services ({selectedServices.length})</Label>
                    {selectedServices.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {selectedServices.map(serviceId => {
                          const service = hrServicesList.find(s => s.id === serviceId);
                          return (
                            <span key={serviceId} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                              {service?.title || serviceId}
                              <button 
                                type="button" 
                                onClick={() => handleServiceToggle(serviceId)} 
                                className="ml-2 text-blue-500 hover:text-blue-700"
                                aria-label={`Remove ${service?.title || serviceId}`}
                              >
                                &times;
                              </button>
                            </span>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No services selected yet. Click on a service card above or describe your needs below.</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-semibold text-gray-700">Additional Requirements or Questions</Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your specific HR challenges or any additional services you might need..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3">
                    Submit Quote Request
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Partner with B Square Global for HR?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the B Square Global difference: expert solutions, personalized service, and measurable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = iconMap[benefit.iconName] || CheckCircle;
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center h-full shadow-lg hover:shadow-xl transition-shadow rounded-xl bg-white">
                  <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
                    <BenefitIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HRServicesPage;