
import React, { useRef } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

const HomePage = () => {
  const clientsRef = useRef(null);
  const premiumServicesRef = useRef(null);

  const scrollToClients = () => {
    clientsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPremiumServices = () => {
    premiumServicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-16">
      <HeroSection onLearnMoreClick={scrollToClients} />
      <StatsSection forwardedRef={clientsRef} />
      <ServicesSection forwardedRef={premiumServicesRef} />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection onViewServicesClick={scrollToPremiumServices} />
    </div>
  );
};

export default HomePage;