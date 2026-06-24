import React from 'react';
import HeroSection from '../../components/sections/HeroSection';
import TrustedBySection from '../../components/sections/TrustedBySection';
import MarketsSection from '../../components/sections/MarketsSection';
import EducationSection from '../../components/sections/EducationSection';
import WhyChooseUsSection from '../../components/sections/WhyChooseUsSection';
import NewsSection from '../../components/sections/NewsSection';
import MarketInsightsSection from '../../components/sections/MarketInsightsSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import FAQSection from '../../components/sections/FAQSection';
import CTASection from '../../components/sections/CTASection';

const Home = ({ setView }) => {
  return (
    <div className="flex flex-col w-full relative">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trusted By / Statistics */}
      <TrustedBySection />

      {/* 3. Markets Section */}
      <MarketsSection />

      {/* 4. Education Section */}
      <EducationSection />

      {/* 5. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 6. News Section */}
      <NewsSection />

      {/* 7. Market Insights */}
      <MarketInsightsSection />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. FAQ */}
      <FAQSection />

      {/* 10. CTA Section / Contact */}
      <CTASection />
    </div>
  );
};

export default Home;
