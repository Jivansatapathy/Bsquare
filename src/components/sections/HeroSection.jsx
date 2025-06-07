
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GetStartedForm from '@/components/GetStartedForm';

const HeroSection = ({ onLearnMoreClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 hero-pattern"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-shadow">
            Elevate Your Business with
            <span className="block text-orange-400">Professional Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive HR, Accounting, and Training solutions designed to streamline your operations and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GetStartedForm 
              trigger={
                <Button size="lg" className="btn-secondary text-white px-8 py-4 text-lg">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              }
            />
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg"
              onClick={onLearnMoreClick}
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;