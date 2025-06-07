
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users2, Zap, Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const whyChooseUs = [
  {
    icon: Target,
    title: "Expert-Driven Solutions",
    description: "Customized strategies tailored to your business needs with proven expertise.",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: Users2,
    title: "End-to-End Services",
    description: "Comprehensive solutions from hiring to compliance and accounting.",
    color: "from-purple-500 to-purple-700"
  },
  {
    icon: Zap,
    title: "Human + Tech Synergy",
    description: "Perfect blend of personal expertise with powerful digital tools.",
    color: "from-orange-500 to-orange-700"
  },
  {
    icon: Award,
    title: "Industry Excellence",
    description: "Recognized for delivering outstanding business solutions.",
    color: "from-green-500 to-green-700"
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">Us</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional business solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;