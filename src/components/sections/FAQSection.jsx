import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'What asset markets can I trade on NexisTrade?',
      a: 'NexisTrade hosts multi-asset dashboards covering three core markets: Cryptocurrencies (spot, perpetual futures, margin accounts), Forex majors and cross pairs (with fractional pip spreads), and Stock CFDs (including major tech stocks like Apple, NVIDIA, and Tesla) with leverage access.',
    },
    {
      q: 'How does the Social Copy Trading system operate?',
      a: 'Our social ledger monitors certified traders and maps their entries directly onto your account. When they open or modify a position, our API duplicates it in real-time according to your allocation percentage. You retain absolute control over maximum drawdown, stop limits, and can disconnect instantly.',
    },
    {
      q: 'Are there hidden fees or commission markups on transactions?',
      a: 'No. NexisTrade aggregates order books directly from Tier-1 liquidity providers to offer raw spreads. We charge flat transaction commissions as low as 0.02% for starter portfolios and lower for enterprise clients, with zero spread markups or account administration costs.',
    },
    {
      q: 'How do I connect webhooks and external trading indicators?',
      a: 'Under the Pro Systems tier, you receive unique webhook URLs. You can map these inside TradingView alert notifications or custom Python scripts. When your custom indicator prints a buy or sell condition, it sends a secure JSON package to NexisTrade for sub-millisecond execution.',
    },
    {
      q: 'How is my trading capital safeguarded?',
      a: 'All client funds are held in segregated bank accounts separated from operational company registers. Our security stack utilizes multi-signature cold wallets, cryptographic database encryption, and is backed by a $50M Secure Asset Fund (SAFU) to cover unforeseen liquidity hazards.',
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-[#0B1120] z-10 border-b border-white/5">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00D26A]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <HelpCircle className="w-4 h-4 text-[#00D26A]" />
            <span className="text-xs font-semibold text-gray-300">Client Support Center</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Queries
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Get clear, technical clarifications on spreads, automation routing, and security vaults.
          </p>
        </div>

        {/* Accordions List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-[#111827] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-white pr-4">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00D26A]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
