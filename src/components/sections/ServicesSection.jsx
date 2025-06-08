import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Calculator, GraduationCap, Briefcase, Brain, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Users,
    title: "HR Solutions",
    description: "Full-spectrum human resource management: payroll, talent acquisition, compliance, and strategic HR advisory to optimize your workforce and foster a thriving company culture.",
    link: "/hr-services",
    color: "from-blue-500 to-blue-700",
    borderColor: "border-blue-500",
    features: ["Payroll & Benefits Admin", "Recruitment & Onboarding", "HR Policy Development", "Performance Management", "Employee Relations"]
  },
  {
    icon: Calculator,
    title: "Accounting Solutions",
    description: "Precise bookkeeping, insightful financial reporting, and proactive tax planning to ensure financial health, strategic growth, and robust compliance.",
    link: "/accounting-solutions",
    color: "from-green-500 to-green-700",
    borderColor: "border-green-500",
    features: ["Bookkeeping Services", "Financial Statement Prep", "Tax Advisory & Filing", "Budgeting & Forecasting", "Audit Support"]
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Dynamic corporate training: latest market tools, essential soft skills, and impactful leadership development for team excellence and continuous improvement.",
    link: "/training-programs",
    color: "from-orange-500 to-orange-700",
    borderColor: "border-orange-500",
    features: ["Technical Skills Workshops", "Leadership & Management", "Soft Skills Development", "Custom Corporate Training", "E-learning Modules"]
  },
  {
    icon: Briefcase,
    title: "Virtual HR Services",
    description: "Comprehensive virtual HR department setup and ongoing management, offering flexible, scalable, and tech-driven HR support for modern businesses.",
    link: "/virtual-hr-services",
    color: "from-purple-500 to-purple-700",
    borderColor: "border-purple-500",
    features: ["Remote HR Infrastructure", "Digital Employee Records", "Virtual Onboarding", "Performance Tracking Tools", "HR Tech Integration"]
  }
];

const ServicesSection = ({ forwardedRef }) => {
  return (
    <section ref={forwardedRef} className="py-20 bg-gradient-to-br from-slate-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our <span className="gradient-text">Signature Services</span>
          </h2>
          <div className="section-divider mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Empowering your business with tailored solutions across HR, Accounting, and Training. We are committed to driving your success through innovation, expertise, and a deep understanding of your unique challenges and opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className={`service-card card-hover h-full group border-t-4 ${service.borderColor} shadow-lg`}>
                <CardHeader className="text-center items-center pb-4">
                  <div className={`w-20 h-20 mb-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow pt-0">
                  <CardDescription className="text-gray-600 text-base leading-relaxed mb-5 px-2 text-center flex-grow">
                    {service.description}
                  </CardDescription>
                  {service.features && (
                    <ul className="space-y-2 mb-6 text-sm text-gray-600 px-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                         <li key={idx} className="flex items-center">
                            <BarChart3 className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                            {feature}
                         </li>
                      ))}
                    </ul>
                  )}
                  <Link to={service.link} className="mt-auto">
                    <Button className="w-full btn-primary text-white group-hover:shadow-lg transition-all duration-300 font-semibold">
                      Discover More
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