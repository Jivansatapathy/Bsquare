
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    text: "B Square Global transformed our HR processes. Their payroll management is flawless and saves us countless hours.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "Growth Ventures",
    text: "The accounting services are top-notch. Monthly reports are always accurate and delivered on time.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    company: "Innovation Labs",
    text: "Their training programs helped our team master new technologies. Highly professional and engaging.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with B Square Global.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-none text-white h-full">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-blue-100 text-lg italic mb-6">
                    "{testimonial.text}"
                  </CardDescription>
                  <div className="text-center">
                    <CardTitle className="text-white text-lg font-semibold">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-blue-200 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;