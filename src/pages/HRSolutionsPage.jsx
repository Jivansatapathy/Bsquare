
import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, UserPlus, FileText, Shield, Headphones, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HRSolutionsPage = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Payroll Processing",
      description: "Automated payroll management with tax calculations, direct deposits, and comprehensive reporting.",
      features: ["Automated calculations", "Tax compliance", "Direct deposits", "Detailed reports"]
    },
    {
      icon: UserPlus,
      title: "Recruitment Support",
      description: "End-to-end recruitment services from job posting to candidate onboarding.",
      features: ["Job posting", "Candidate screening", "Interview coordination", "Background checks"]
    },
    {
      icon: FileText,
      title: "Onboarding/Offboarding",
      description: "Streamlined processes for employee transitions with digital documentation.",
      features: ["Digital forms", "Document management", "Training schedules", "Exit interviews"]
    },
    {
      icon: Shield,
      title: "Employee Policy Setup",
      description: "Comprehensive policy development and implementation for your organization.",
      features: ["Policy creation", "Handbook development", "Compliance review", "Regular updates"]
    },
    {
      icon: Headphones,
      title: "Virtual HR Services",
      description: "Remote HR support with dedicated consultants for your business needs.",
      features: ["Dedicated consultant", "Remote support", "Strategic planning", "Performance management"]
    },
    {
      icon: CheckCircle,
      title: "Compliance & Labor Law",
      description: "Stay compliant with changing labor laws and regulations.",
      features: ["Legal compliance", "Policy updates", "Risk assessment", "Training programs"]
    }
  ];

  const benefits = [
    "Reduce HR administrative burden by 70%",
    "Ensure 100% payroll accuracy and compliance",
    "Streamline recruitment process by 50%",
    "24/7 access to HR expertise and support"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
                HR Solutions That
                <span className="block text-orange-400">Drive Success</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Comprehensive human resource management services designed to streamline your operations, 
                ensure compliance, and support your team's growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-secondary text-white px-8 py-4">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4">
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img  
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                alt="HR professionals working with modern technology"
               src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete <span className="gradient-text">HR Service Suite</span>
            </h2>
            <div className="section-divider mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From payroll processing to compliance management, we provide end-to-end HR solutions 
              tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="service-card card-hover h-full group">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full btn-primary text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img  
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                alt="Business growth and success metrics"
               src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Measurable <span className="gradient-text">Business Impact</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our HR solutions deliver tangible results that directly impact your bottom line 
                and operational efficiency.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="btn-primary text-white px-8">
                Get Your Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              Ready to Streamline Your HR Operations?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Let our experts handle your HR needs while you focus on growing your business. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4">
                Download HR Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HRSolutionsPage;
