
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users2, Zap, Award, ShieldCheck, Brain } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const whyChooseUs = [
  {
    icon: Target,
    title: "Expert-Driven Solutions",
    description: "Our seasoned professionals deliver customized strategies and proven expertise, tailored precisely to your unique business needs and goals.",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: ShieldCheck,
    title: "Comprehensive Services",
    description: "From strategic HR and meticulous accounting to dynamic training, we offer a full spectrum of services under one roof for your convenience.",
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: Brain,
    title: "Innovative Approach",
    description: "We leverage the perfect blend of human expertise and cutting-edge technology to deliver efficient, effective, and future-proof solutions.",
    color: "from-yellow-500 to-yellow-700",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600"
  },
  {
    icon: Award,
    title: "Commitment to Excellence",
    description: "Our dedication to quality and client satisfaction is unwavering. We are recognized for consistently delivering outstanding results.",
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Why Partner with <span className="text-primary">B Square Global?</span>
          </h2>
          <div className="w-28 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are more than just a service provider; we are your strategic partner dedicated to fostering growth, innovation, and unparalleled success for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className={`border-t-4 border-primary shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col rounded-xl overflow-hidden ${item.bgColor}`}>
                <CardHeader className="items-center text-center pt-8 pb-5">
                  <div className={`p-4 mb-5 rounded-full bg-gradient-to-br ${item.color} inline-flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 mb-1">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
