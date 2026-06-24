import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Newspaper, Clock, ArrowRight, Eye, Sparkles } from 'lucide-react';

const NewsSection = () => {
  const [filter, setFilter] = useState('all');

  const newsArticles = [
    {
      title: 'Bitcoin Crosses $95K Amid ETF Inflow Surge',
      category: 'crypto',
      time: '15m ago',
      read: '3 min read',
      impact: 'High Impact',
      impactStyle: 'bg-red-500/10 text-red-400 border-red-500/20',
      description: 'Institutional volume reaches record highs as spot exchange-traded funds report over $1.2B in weekly capital inflows.',
      date: 'June 24, 2026',
    },
    {
      title: 'European Inflation Drops Closer to ECB 2% Target',
      category: 'forex',
      time: '1h ago',
      read: '5 min read',
      impact: 'Medium Impact',
      impactStyle: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      description: 'Consumer indices across the Eurozone ease to 2.1% in June, lifting investor expectations for rate cuts next week.',
      date: 'June 24, 2026',
    },
    {
      title: 'NVIDIA Launches Custom AI Silicon for Auto Terminals',
      category: 'stocks',
      time: '3h ago',
      read: '4 min read',
      impact: 'High Impact',
      impactStyle: 'bg-red-500/10 text-red-400 border-red-500/20',
      description: 'The GPU giant introduces custom autonomous architecture, establishing strategic partnerships with three global EV brands.',
      date: 'June 24, 2026',
    },
    {
      title: 'Ether Gas Fees Decline to Multi-Year Lows in Upgrade Wake',
      category: 'crypto',
      time: '5h ago',
      read: '3 min read',
      impact: 'Low Impact',
      impactStyle: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'Layer-2 rollup efficiency increases, leading to a substantial decrease in Layer-1 smart contract transaction fees.',
      date: 'June 23, 2026',
    },
    {
      title: 'Bank of Japan Hints at Further Margin Tightening',
      category: 'forex',
      time: '8h ago',
      read: '6 min read',
      impact: 'Medium Impact',
      impactStyle: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      description: 'Governor statements point towards narrowing yield gap margins to defend USD/JPY exchange levels.',
      date: 'June 23, 2026',
    },
    {
      title: 'Tesla Stock Recovers on Autonomous Fleet Approvals',
      category: 'stocks',
      time: '12h ago',
      read: '4 min read',
      impact: 'High Impact',
      impactStyle: 'bg-red-500/10 text-red-400 border-red-500/20',
      description: 'Shares jump 4.2% as transportation regulators approve preliminary autopilot operations for commercial public services.',
      date: 'June 23, 2026',
    },
  ];

  const filteredArticles = filter === 'all' 
    ? newsArticles 
    : newsArticles.filter(art => art.category === filter);

  return (
    <section id="news" className="relative py-24 bg-[#0B1120] z-10 border-b border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00D26A]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
            >
              <Newspaper className="w-4 h-4 text-[#00D26A]" />
              <span className="text-xs font-semibold text-gray-300">Nexis Live Feed</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real-Time Global Market News
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-lg">
              Stay ahead of volatile macro reports, high-volume coin breaks, and corporate earnings.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#111827] rounded-xl border border-white/5 shrink-0">
            {['all', 'crypto', 'forex', 'stocks'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-[#00D26A] text-[#0B1120] shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, i) => (
              <motion.div
                key={article.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Tilt
                  perspective={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                  scale={1.01}
                  className="h-full cursor-grab active:cursor-grabbing"
                >
                  <div className="bg-[#111827] border border-white/5 hover:border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-6 shadow-xl h-full relative overflow-hidden transition-all duration-300">
                    
                    {/* Glow light effect */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#00D26A]/5 rounded-full filter blur-xl pointer-events-none" />

                    <div className="flex flex-col gap-4 text-left">
                      {/* Meta information */}
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-0.5 text-[9px] font-bold uppercase rounded border ${article.impactStyle}`}>
                            {article.impact}
                          </span>
                          <span className="text-[10px] text-gray-500">{article.time}</span>
                        </div>
                      </div>

                      {/* Title & Desc */}
                      <h4 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#00D26A] transition-all">
                        {article.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {article.description}
                      </p>
                    </div>

                    {/* Card Footer info */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-2">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.read}
                      </span>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          // Simulating reading news details
                        }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#00D26A] hover:underline"
                      >
                        <span>Full Coverage</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global callout banner */}
        <div className="mt-16 bg-[#111827]/60 border border-white/5 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left flex items-start gap-4">
            <div className="p-3 bg-[#00D26A]/10 text-[#00D26A] rounded-xl shrink-0">
              <Sparkles className="w-5 h-5 text-[#00D26A]" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Unlock Custom News Webhooks</h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-normal max-w-xl">
                Bind notifications to Slack, Discord, or custom REST APIs. Never miss high-impact central bank announcements again.
              </p>
            </div>
          </div>
          <button
            onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
            className="shrink-0 bg-[#2563EB] hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all cursor-pointer shadow-lg shadow-blue-500/10"
          >
            Upgrade to Pro
          </button>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
