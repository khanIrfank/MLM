import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle, Award } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Full-time FX Trader',
      metric: '+184% Return (12M)',
      rating: 5,
      content: 'NexisTrade completely revamped my strategy execution. Spreads are consistently sub-pip, and order fills are virtually instantaneous, even during high-volatility news sessions.',
      seed: 'Sarah',
    },
    {
      name: 'Marcus Vance',
      role: 'Algo Fund Manager',
      metric: '$2.4M Assets Copied',
      rating: 5,
      content: 'The PineScript integration is flawless. I can map webhook triggers directly from TradingView, automating my entries with micro-second routing and zero slippage.',
      seed: 'Marcus',
    },
    {
      name: 'David Lowenstein',
      role: 'Retail Options Trader',
      metric: '+46% Annual Option Yield',
      rating: 5,
      content: 'Access to aggregated derivative orderbooks and real-time Greek analysis in a single SPA layout is a massive game-changer. Excellent client-relations desk as well.',
      seed: 'David',
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-[#0B1120] z-10 border-b border-white/5">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2563EB]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#00D26A] uppercase tracking-widest mb-3">Client Verifications</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Endorsed by Active Retail & Fund Traders
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            See how system developers, retail traders, and portfolio managers leverage the Nexis architecture.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111827] border border-white/5 hover:border-white/10 rounded-2xl p-8 flex flex-col justify-between gap-6 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote bubble absolute */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/[0.02] pointer-events-none" />

              <div className="flex flex-col gap-4 text-left">
                {/* Rating Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(test.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#00D26A] text-[#00D26A]" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic">
                  "{test.content}"
                </p>
              </div>

              {/* User Profiling block */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1120] border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                    <img src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${test.seed}`} alt={test.name} className="w-full h-full" />
                  </div>
                  <div className="text-left">
                    <h5 className="font-bold text-sm text-white flex items-center gap-1">
                      {test.name}
                      <CheckCircle className="w-3.5 h-3.5 text-[#00D26A]" />
                    </h5>
                    <span className="text-xs text-gray-500">{test.role}</span>
                  </div>
                </div>

                {/* Verified Return */}
                <div className="bg-[#00D26A]/10 border border-[#00D26A]/20 px-3 py-1.5 rounded-lg flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#00D26A]" />
                  <span className="text-[10px] font-black text-[#00D26A] uppercase tracking-wider">
                    {test.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
