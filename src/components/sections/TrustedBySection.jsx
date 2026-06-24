import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Landmark, Award, Users, BarChart3 } from 'lucide-react';

const CountUpNumber = ({ value, suffix = '', duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseInt(value.replace(/[^0-9]/g, ''), 10);
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = 30;
    const totalSteps = totalMiliseconds / incrementTime;
    const stepIncrement = end / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  // Format count if it's large
  const displayVal = count >= 1000 && value.includes('K') 
    ? `${(count / 1000).toFixed(0)}K` 
    : count >= 1000 && value.includes('B') 
      ? `${(count / 1000).toFixed(1)}B` 
      : count;

  return (
    <span ref={ref} className="font-extrabold text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
      {displayVal}{suffix}
    </span>
  );
};

const TrustedBySection = () => {
  const stats = [
    { label: 'Quarterly Volume', value: '4B', suffix: '$+', icon: BarChart3, color: 'text-[#00D26A]' },
    { label: 'Registered Traders', value: '180K', suffix: '+', icon: Users, color: 'text-[#2563EB]' },
    { label: 'Execution Speed', value: '1ms', suffix: '', icon: Award, color: 'text-[#00D26A]' },
    { label: 'Global Licenses', value: '6', suffix: '+', icon: Landmark, color: 'text-[#2563EB]' },
  ];

  const partners = [
    'BINANCE',
    'COINBASE',
    'NASDAQ',
    'GOLDMAN SACHS',
    'BLACKROCK',
    'REVOLUT',
    'ROBINHOOD',
    'FIDELITY',
  ];

  return (
    <section className="relative py-16 bg-[#0B1120] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-[#111827]/40 rounded-2xl border border-white/5 relative group hover:border-[#00D26A]/20 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl bg-white/5 mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex items-baseline justify-center mb-1">
                  <CountUpNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <span className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Partners Banner */}
        <div className="pt-8 border-t border-white/5">
          <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
            Liquidity Providers & Institutional Partners
          </p>
          
          {/* Loop horizontal scroll list */}
          <div className="relative w-full overflow-hidden mask-horizontal">
            {/* Fade overlays on edges */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0B1120] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0B1120] to-transparent z-10 pointer-events-none" />

            <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
              {/* First loop */}
              {partners.map((partner, i) => (
                <span
                  key={i}
                  className="text-gray-500 hover:text-white font-extrabold text-sm sm:text-base tracking-widest transition-colors cursor-default"
                >
                  {partner}
                </span>
              ))}
              {/* Second loop for seamless scrolling */}
              {partners.map((partner, i) => (
                <span
                  key={`copy-${i}`}
                  className="text-gray-500 hover:text-white font-extrabold text-sm sm:text-base tracking-widest transition-colors cursor-default"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }
        .mask-horizontal {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}} />
    </section>
  );
};

export default TrustedBySection;
