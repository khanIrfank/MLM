import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, ShieldCheck, Compass, Code, GraduationCap, ArrowRight } from 'lucide-react';

const EducationSection = () => {
  const pillars = [
    {
      title: 'Technical Analysis',
      description: 'Decode chart geometry, Candlestick formulas, and mathematical indicators. Learn how to identify trends and structural pivot zones.',
      icon: LineChart,
      color: 'from-emerald-500 to-green-400',
      tag: 'Analysis',
    },
    {
      title: 'Risk Management',
      description: 'Master the math behind capital preservation. Learn stop-loss placement, position sizing models, and risk-to-reward ratios.',
      icon: ShieldCheck,
      color: 'from-blue-600 to-indigo-500',
      tag: 'Preservation',
    },
    {
      title: 'Market Psychology',
      description: 'Understand the behavioral patterns that drive volume. Overcome FOMO, grid bias, and emotional trading loops.',
      icon: Compass,
      color: 'from-purple-600 to-pink-500',
      tag: 'Psychology',
    },
    {
      title: 'Algorithmic Coding',
      description: 'Automate systems using PineScript, Python, and webhook APIs. Run strict historical backtests without code bloat.',
      icon: Code,
      color: 'from-orange-500 to-yellow-400',
      tag: 'Automation',
    },
  ];

  return (
    <section id="education" className="relative py-24 bg-[#0B1120] z-10 border-b border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <GraduationCap className="w-4 h-4 text-[#00D26A]" />
            <span className="text-xs font-semibold text-gray-300">Nexis Academy</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Learn the Science of Trading
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
            Trading is not gambling; it's a quantitative science. Discover our core educational paths designed to take you from a complete novice to a fully systemized algorithm trader.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#111827] border border-white/5 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start relative group overflow-hidden hover:border-white/10 transition-all duration-300 shadow-xl"
              >
                {/* Accent Hover Line */}
                <div className={`absolute top-0 left-0 bottom-0 w-[4px] bg-gradient-to-b ${pillar.color} opacity-80`} />

                {/* Pillar Icon Box */}
                <div className={`p-4 rounded-2xl bg-gradient-to-tr ${pillar.color} text-[#0B1120] shrink-0 shadow-lg shadow-black/20 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text Context */}
                <div className="flex flex-col items-start text-left gap-3">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 bg-white/5 px-2.5 py-1 rounded-full">
                    {pillar.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00D26A] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  <a
                    href="#courses"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#00D26A] hover:underline pt-2 group/btn"
                  >
                    <span>Explore syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Callout section */}
        <div className="mt-16 bg-gradient-to-r from-[#2563EB]/10 to-[#00D26A]/5 rounded-2xl p-8 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-bold text-lg text-white">Join our Live Webinars every Friday</h4>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">Get real-time market analysis and trade breakdowns from our lead analysts.</p>
          </div>
          <button 
            onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
            className="shrink-0 bg-[#00D26A] hover:bg-[#00B85C] text-[#0B1120] font-bold px-6 py-3.5 rounded-xl text-sm transition-all cursor-pointer shadow-lg shadow-[#00D26A]/10"
          >
            Claim Free Seat
          </button>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
