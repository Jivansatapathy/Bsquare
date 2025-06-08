
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Priya Sharma",
    company: "Innovate Solutions Ltd.",
    text: "B Square Global's HR expertise has been invaluable. They streamlined our onboarding and payroll, allowing us to focus on core growth. Their team is responsive and truly understands our needs.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29130?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=80",
    highlight: "Streamlined HR & Payroll"
  },
  {
    name: "Rajesh Kumar",
    company: "Apex Manufacturing",
    text: "The accounting team at B Square Global is exceptional. Their meticulous financial reporting and proactive tax advice have significantly improved our financial clarity and efficiency.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=80",
    highlight: "Exceptional Financial Reporting"
  },
  {
    name: "Anjali Desai",
    company: "Creative Minds Agency",
    text: "The corporate training programs are outstanding. Our team's skills in new software and leadership have seen a remarkable boost. Highly engaging and practical content!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=80",
    highlight: "Skill-Boosting Training"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-[hsl(var(--primary)/0.8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-shadow-strong">
            Loved by Businesses Like Yours
          </h2>
          <div className="w-28 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-[hsl(var(--primary-foreground)/0.9)] max-w-3xl mx-auto">
            Hear directly from our clients about the transformative impact of B Square Global's services on their operations and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="bg-white/90 backdrop-blur-md border-none text-foreground h-full shadow-2xl flex flex-col rounded-xl overflow-hidden">
                <CardHeader className="pt-6 pb-4 px-6 bg-secondary/10">
                  <div className="flex items-center space-x-4">
                    <img  
                      className="w-16 h-16 rounded-full object-cover border-2 border-secondary shadow-sm" 
                      alt={testimonial.name}
                      src={testimonial.avatar}
                     src="https://images.unsplash.com/photo-1649399045831-40bfde3ef21d" />
                    <div>
                      <CardTitle className="text-primary text-lg font-semibold">
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-6 py-5 flex-grow flex flex-col justify-between">
                  <CardDescription className="text-gray-700 text-base italic mb-5 leading-relaxed">
                    "{testimonial.text}"
                  </CardDescription>
                  <div>
                    <div className="flex items-center justify-start mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                       {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star key={`empty-${i}`} className="h-5 w-5 text-yellow-200 fill-yellow-200" />
                      ))}
                    </div>
                    <div className="flex items-center text-sm font-medium text-primary">
                      <Award className="h-4 w-4 mr-2" /> 
                      <span>{testimonial.highlight}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
