import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GetStartedForm from '@/components/GetStartedForm';

const HeroSection = ({ onLearnMoreClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 hero-pattern opacity-60"></div>
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl animate-pulse-slow"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      ></motion.div>
      <motion.div 
        className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white text-shadow-strong"
            initial={{ opacity:0, y:20}}
            animate={{ opacity:1, y:0}}
            transition={{delay: 0.3, duration:0.7}}
          >
            Your Partner in
            <span className="block text-[hsl(var(--secondary))] mt-2 md:mt-3">Business Excellence</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-[hsl(var(--primary-foreground)/0.9)] max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity:0, y:20}}
            animate={{ opacity:1, y:0}}
            transition={{delay: 0.5, duration:0.7}}
          >
            Unlock peak performance with B Square Global. We deliver comprehensive HR, cutting-edge Accounting, and transformative Training solutions, meticulously designed to streamline your operations and propel sustainable growth. Our dedicated experts leverage innovative strategies and deep industry knowledge to ensure your business thrives in a competitive landscape.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity:0, y:20}}
            animate={{ opacity:1, y:0}}
            transition={{delay: 0.7, duration:0.7}}
          >
            <GetStartedForm 
              trigger={
                <Button size="lg" className="btn-secondary text-secondary-foreground shadow-lg hover:shadow-xl px-8 py-3 text-lg font-semibold">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              }
            />
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-[hsl(var(--primary-foreground)/0.3)] text-white hover:bg-white/20 px-8 py-3 text-lg font-semibold backdrop-blur-sm"
              onClick={onLearnMoreClick}
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div 
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.9 } }
            }}
          >
            {[
              { icon: Briefcase, text: "Expert HR Solutions" },
              { icon: Users, text: "Dynamic Training Programs" },
              { icon: TrendingUp, text: "Strategic Accounting" },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center justify-center text-sm text-[hsl(var(--primary-foreground)/0.8)] gap-2 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 shadow-sm"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <item.icon className="h-5 w-5 text-[hsl(var(--secondary))]" />
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;