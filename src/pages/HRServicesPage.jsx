import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Users, BarChart3, ShieldCheck, Award } from 'lucide-react';
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
      className: "bg-secondary text-secondary-foreground border-yellow-500",
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
        description: "Please select at least one HR service to proceed.",
        variant: "destructive",
      });
      return;
    }
    // Simulate API call
    console.log("Quote Request Submitted:", { ...formData, selectedServices });
    toast({
      title: "Quote Request Sent!",
      description: "Thank you! We've received your request and will contact you within 24 hours.",
      className: "bg-green-500 text-white border-green-600",
    });
    setSelectedServices([]);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const benefits = [
    { iconName: "BarChart3", title: "Boost Productivity & Efficiency", description: "Streamline HR tasks, automate workflows, and free up valuable time for strategic business activities." },
    { iconName: "Users", title: "Enhance Employee Engagement", description: "Foster a positive, inclusive work environment with effective employee relations, recognition programs, and clear communication strategies." },
    { iconName: "ShieldCheck", title: "Ensure Full Compliance", description: "Stay ahead of ever-changing labor laws and regulations, minimizing legal risks with our expert HR compliance guidance." },
    { iconName: "Award", title: "Attract Top Talent", description: "Develop competitive compensation packages, robust benefits, and a strong employer brand to attract and retain high-performing individuals." },
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary to-[hsl(var(--primary)/0.8)] overflow-hidden">
        <div className="absolute inset-0 opacity-10 hero-pattern"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-shadow-strong">
              Strategic HR Services for
              <span className="block text-secondary mt-2">Peak Business Performance</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[hsl(var(--primary-foreground)/0.9)] max-w-3xl mx-auto leading-relaxed">
              B Square Global offers tailored HR solutions designed to optimize your workforce, ensure full compliance, and drive sustainable, long-term growth for your organization.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive HR Service Offerings
            </h2>
            <div className="section-divider mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our diverse range of expert HR services, meticulously crafted to meet the unique needs of modern businesses and empower your human capital.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hrServicesList.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || Users;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="flex flex-col h-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl group border-t-4 border-primary bg-white">
                    <div className="relative h-56 overflow-hidden">
                      {service.imageUrl ? (
                        <img 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                          alt={service.imageAlt || service.title}
                          src={service.imageUrl}
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                          <img 
                            alt={service.imageAlt || service.title} 
                            src="https://images.unsplash.com/photo-1690721606848-ac5bdcde45ea" 
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 p-3 bg-primary/80 backdrop-blur-sm rounded-full text-white shadow-lg">
                        <IconComponent className="h-7 w-7" />
                      </div>
                    </div>
                    <CardHeader className="pb-3 pt-5 px-5">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
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
                        onClick={() => handleSelectServiceForQuote(service.id)}
                        className="w-full btn-primary text-white font-semibold"
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
      
      <section ref={formRef} className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-6 sm:p-10 shadow-2xl rounded-xl border border-blue-100 bg-slate-50">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-gray-900">Request Your Custom HR Quote</CardTitle>
                <CardDescription className="text-lg text-gray-600 mt-2">
                  Tell us about your specific HR needs. Select services from the cards above or describe your requirements below.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-semibold text-gray-700">Full Name</Label>
                    <Input id="name" placeholder="e.g., John Doe" required value={formData.name} onChange={handleInputChange} className="mt-1 bg-white"/>
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-semibold text-gray-700">Email Address</Label>
                    <Input id="email" type="email" placeholder="e.g., john.doe@example.com" required value={formData.email} onChange={handleInputChange} className="mt-1 bg-white"/>
                  </div>
                  <div>
                    <Label htmlFor="company" className="font-semibold text-gray-700">Company Name</Label>
                    <Input id="company" placeholder="e.g., Acme Corp" required value={formData.company} onChange={handleInputChange} className="mt-1 bg-white"/>
                  </div>
                  
                  <div className="space-y-3">
                    <Label className="font-semibold text-gray-700">Selected Services ({selectedServices.length})</Label>
                    {selectedServices.length > 0 ? (
                      <div className="flex flex-wrap gap-2 p-3 bg-blue-50 rounded-md border border-blue-200">
                        {selectedServices.map(serviceId => {
                          const service = hrServicesList.find(s => s.id === serviceId);
                          return (
                            <span key={serviceId} className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium flex items-center shadow-sm">
                              {service?.title || serviceId}
                              <button 
                                type="button" 
                                onClick={() => handleServiceToggle(serviceId)} 
                                className="ml-2 text-primary-foreground/70 hover:text-primary-foreground"
                                aria-label={`Remove ${service?.title || serviceId}`}
                              >
                                &times;
                              </button>
                            </span>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 italic">No services selected yet. Click on a service card above or detail your needs below.</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-semibold text-gray-700">Additional Requirements or Questions</Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your specific HR challenges, team size, industry, or any additional services you might need..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 bg-white"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full btn-secondary text-secondary-foreground font-bold py-3 text-base">
                    Submit Quote Request
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits of Partnering with B Square Global for HR
            </h2>
            <div className="section-divider mb-6 border-primary"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experience the B Square Global difference: expert solutions, personalized service, and measurable results that empower your business and its people.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = iconMap[benefit.iconName] || CheckCircle;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="p-8 text-left h-full shadow-lg hover:shadow-xl transition-shadow rounded-xl bg-white flex items-start space-x-6">
                    <div className="flex-shrink-0 inline-block p-4 bg-gradient-to-r from-primary to-[hsl(var(--primary)/0.8)] rounded-lg shadow-md">
                      <BenefitIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {benefit.description}
                      </p>
                    </div>
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
