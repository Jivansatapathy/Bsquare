
import React from 'react';
import { motion } from 'framer-motion';
import CounterAnimation from '@/components/CounterAnimation';

const StatsSection = ({ forwardedRef }) => {
  const stats = [
    { value: 500, suffix: "+", label: "Happy Clients" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: "24/7", label: "Support Available", isStatic: true }
  ];

  return (
    <section ref={forwardedRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.isStatic ? stat.value : (
                  <CounterAnimation end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;