
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Calculator, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Users,
    title: "HR Solutions",
    description: "Comprehensive human resource management including payroll, recruitment, and compliance support.",
    link: "/hr-solutions",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: Calculator,
    title: "Accounting Solutions",
    description: "Professional bookkeeping, financial reporting, and tax advisory services for your business.",
    link: "/accounting-solutions",
    color: "from-green-500 to-green-700"
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Corporate training in latest market tools, soft skills, and leadership development.",
    link: "/training-programs",
    color: "from-orange-500 to-orange-700"
  },
  {
    icon: Briefcase,
    title: "Virtual HR Services",
    description: "Complete virtual HR department setup and management for your business.",
    link: "/virtual-hr-services",
    color: "from-purple-500 to-purple-700"
  }
];

const ServicesSection = ({ forwardedRef }) => {
  return (
    <section ref={forwardedRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <div className="section-divider mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our comprehensive solutions can transform your business operations and drive sustainable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="service-card card-hover h-full group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={service.link}>
                    <Button className="w-full btn-primary text-white group-hover:shadow-lg transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;