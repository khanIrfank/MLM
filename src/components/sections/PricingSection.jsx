import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info, HelpCircle } from 'lucide-react';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annually'

  const plans = [
    {
      name: 'Starter Pilot',
      price: { monthly: 0, annually: 0 },
      desc: 'Test the Nexis platform engine with core features.',
      features: [
        'Delayed data stream (1s latency)',
        'Basic charts & indicators',
        'Standard order execution routes',
        'Max 50 positions per day',
        'Community email support',
      ],
      cta: 'Start Free Sandbox',
      popular: false,
      glow: 'border-white/5 shadow-xl',
    },
    {
      name: 'Pro Systems',
      price: { monthly: 29, annually: 23 },
      desc: 'For active retail traders and automation developers.',
      features: [
        'Sub-millisecond data execution streams',
        '100+ Indicators & drawing terminals',
        'Access to 3 Copy-Trading strategies',
        '15 automated webhook signals/day',
        'Priority live help desk (24/7)',
        'Zero execution platform markups',
      ],
      cta: 'Begin Professional Trial',
      popular: true,
      glow: 'glow-card-green ring-1 ring-[#00D26A]/30 scale-100 lg:scale-105 z-10',
    },
    {
      name: 'Institutional Elite',
      price: { monthly: 149, annually: 119 },
      desc: 'Maximum bandwidth and dark pool co-location.',
      features: [
        'Co-located server access (LD4 & NY4)',
        'Unlimited automated webhook scripts',
        'Institutional API key credentials',
        'Full depth-of-market (DOM) access',
        'Custom slippage thresholds',
        'Dedicated account liquidity advisor',
      ],
      cta: 'Acquire Institutional Key',
      popular: false,
      glow: 'glow-card-blue border-[#2563EB]/25 shadow-xl',
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-[#0B1120] z-10 border-b border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#2563EB]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-[#00D26A] uppercase tracking-widest mb-3">Transparent Subscriptions</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Plans Engineered For Every Scale
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Choose starter sandboxes, professional retail setups, or deep-routed institutional keys.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <span className={`text-sm font-semibold transition-all ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Billed Monthly
            </span>
            <button
              onClick={() => setBillingCycle(c => c === 'monthly' ? 'annually' : 'monthly')}
              className="w-12 h-6.5 rounded-full bg-[#111827] border border-white/10 p-0.5 flex items-center transition-all cursor-pointer relative"
            >
              <div
                className={`w-5 h-5 rounded-full bg-[#00D26A] transition-transform duration-300 ${
                  billingCycle === 'annually' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-semibold transition-all flex items-center gap-1.5 ${billingCycle === 'annually' ? 'text-[#00D26A]' : 'text-gray-400'}`}>
              Billed Annually
              <span className="text-[10px] bg-[#00D26A]/10 text-[#00D26A] border border-[#00D26A]/20 px-2 py-0.5 rounded-full font-bold">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-12 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-[#111827] border rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-8 relative overflow-hidden transition-all duration-300 ${plan.glow}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-6 bg-gradient-to-r from-[#2563EB] to-[#00D26A] text-[#0B1120] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-b-xl shadow">
                  Most Popular
                </div>
              )}

              {/* Title & Price */}
              <div className="flex flex-col gap-4 text-left">
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">{plan.name}</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{plan.desc}</p>
                
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-4xl sm:text-5xl font-black text-white">$</span>
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                    {billingCycle === 'monthly' ? plan.price.monthly : plan.price.annually}
                  </span>
                  <span className="text-gray-500 text-sm font-semibold ml-1">/ month</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-3.5 text-left border-t border-white/5 pt-6">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-gray-300">
                    <div className="p-0.5 rounded-full bg-[#00D26A]/10 text-[#00D26A] mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Action button */}
              <button className={`w-full py-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                plan.popular
                  ? 'bg-[#00D26A] hover:bg-[#00B85C] text-[#0B1120] shadow-lg shadow-[#00D26A]/20'
                  : 'bg-[#0B1120] hover:bg-white/5 border border-white/10 text-white'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
