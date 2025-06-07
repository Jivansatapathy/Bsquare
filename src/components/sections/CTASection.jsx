
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = ({ onViewServicesClick }) => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have streamlined their operations with our professional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-500 hover:text-white transition-colors px-8 py-4 text-lg font-semibold"
              onClick={() => navigate('/contact')}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              onClick={onViewServicesClick}
            >
              View Our Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;