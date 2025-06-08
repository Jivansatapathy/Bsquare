
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = ({ onViewServicesClick }) => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-[hsl(var(--primary)/0.8)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div 
            className="inline-block p-4 bg-white/20 rounded-full shadow-lg backdrop-blur-md mb-4"
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Rocket className="h-12 w-12 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-shadow-strong">
            Ready to Elevate Your Business to New Heights?
          </h2>
          <p className="text-xl text-[hsl(var(--primary-foreground)/0.9)] max-w-2xl mx-auto leading-relaxed">
            Join hundreds of forward-thinking businesses who have revolutionized their operations and achieved remarkable growth with B Square Global's expert guidance and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="btn-secondary text-secondary-foreground shadow-xl hover:shadow-2xl px-10 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/contact')}
            >
              Request a Free Consultation
              <PhoneCall className="ml-3 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/50 text-white hover:bg-white/10 hover:border-white px-10 py-3 text-lg font-semibold backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              onClick={onViewServicesClick}
            >
              Explore Our Services
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
