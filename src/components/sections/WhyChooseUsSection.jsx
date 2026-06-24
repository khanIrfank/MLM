import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Zap, Activity, Lock, Landmark, CheckCircle } from 'lucide-react';

const WhyChooseUsSection = () => {
  const points = [
    {
      title: 'Sub-Millisecond Execution',
      description: 'Trades are routed directly to London and New York servers via fiber optics, securing fill speeds below 1.2ms without requotes.',
      icon: Zap,
      accent: 'border-[#00D26A]/20 hover:border-[#00D26A]/40 shadow-[#00D26A]/5',
      iconColor: 'text-[#00D26A]',
    },
    {
      title: 'Aggregate Deep Liquidity',
      description: 'Our routing engine combines order books from 15+ Tier-1 banking institutes. Minimize slippage even during high-impact news releases.',
      icon: Activity,
      accent: 'border-[#2563EB]/20 hover:border-[#2563EB]/40 shadow-[#2563EB]/5',
      iconColor: 'text-[#2563EB]',
    },
    {
      title: 'Vault-Grade Security',
      description: 'Assets are backed 1:1 in segregated accounts. Secured with multisig cold storage, AES-256 client cryptography, and SAFU reserves.',
      icon: Lock,
      accent: 'border-[#2563EB]/20 hover:border-[#2563EB]/40 shadow-[#2563EB]/5',
      iconColor: 'text-[#2563EB]',
    },
    {
      title: 'Multi-Regulated Status',
      description: 'Licensed and compliant across five financial jurisdictions. Fully audited quarterly reports ensure absolute system reliability.',
      icon: Landmark,
      accent: 'border-[#00D26A]/20 hover:border-[#00D26A]/40 shadow-[#00D26A]/5',
      iconColor: 'text-[#00D26A]',
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-24 bg-[#0B1120] z-10 border-b border-white/5">
      {/* Glow shapes */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#00D26A]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#00D26A] uppercase tracking-widest mb-3">Institutional Infrastructure</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            The Professional Edge, Made Retail
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Trade with structural safety, lightning routing pathways, and pricing spreads once reserved for elite investment banks.
          </p>
        </div>

        {/* 3D Tilt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <Tilt
                key={point.title}
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.12}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="16px"
                scale={1.015}
                tiltEnable={typeof window !== 'undefined' ? window.innerWidth > 768 : true}
                className="cursor-grab active:cursor-grabbing"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`h-full bg-[#111827] border rounded-2xl p-8 flex flex-col items-start text-left gap-4 shadow-xl transition-all duration-300 ${point.accent}`}
                >
                  <div className={`p-3.5 rounded-xl bg-white/5 ${point.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">{point.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
                  
                  {/* Small checkmarks list */}
                  <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/5 w-full text-xs text-gray-500 font-semibold">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00D26A]" /> Active
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00D26A]" /> Audited
                    </span>
                  </div>
                </motion.div>
              </Tilt>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
