import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Radio, Clock, TrendingUp, UserCheck, Flame } from 'lucide-react';

const MarketInsightsSection = () => {
  const [sentimentVal, setSentimentVal] = useState(72); // 0-100 gauge (0: extreme bear, 100: extreme bull)
  const [activeDialText, setActiveDialText] = useState('Bullish');
  const [rotationAngle, setRotationAngle] = useState(45); // degree rotation for dial pointer

  // Oscillate sentiment slightly to make it look active
  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Math.floor((Math.random() - 0.47) * 4);
      setSentimentVal((prev) => {
        let next = prev + diff;
        if (next > 95) next = 95;
        if (next < 5) next = 5;
        
        // Calculate needle rotation (range is roughly -90deg to +90deg)
        const angle = ((next / 100) * 180) - 90;
        setRotationAngle(angle);

        // Update labels
        if (next < 25) setActiveDialText('Extreme Fear');
        else if (next < 45) setActiveDialText('Fear');
        else if (next < 55) setActiveDialText('Neutral');
        else if (next < 78) setActiveDialText('Bullish');
        else setActiveDialText('Extreme Greed');

        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const newsItems = [
    {
      title: 'Federal Reserve Signals Interest Rate Adjustments in Q3',
      source: 'FED WIRE',
      time: '12m ago',
      category: 'Macro',
      impact: 'High Impact',
      impactColor: 'bg-red-500/10 text-red-400 border-red-500/20',
      description: 'The Open Market Committee highlights core inflation cooling factors, opening discussions on potential rate cuts.',
    },
    {
      title: 'Bitcoin Mining Difficulty Hits New All-Time High',
      source: 'BLOCKCHAIN DETECT',
      time: '45m ago',
      category: 'Crypto',
      impact: 'Medium Impact',
      impactColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      description: 'Hashrate aggregations grow 8.5% over the weekend, reflecting strong validator capital commitments.',
    },
    {
      title: 'ECB Intervenes in Forex Spreads to Support Local Currency',
      source: 'EURO FX',
      time: '2h ago',
      category: 'Forex',
      impact: 'Low Impact',
      impactColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'European Central Bank governors indicate readiness to maintain current interest margins to match USD strength.',
    },
  ];

  return (
    <section id="insights" className="relative py-24 bg-[#0B1120] z-10 border-b border-white/5">
      {/* Dec glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00D26A]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#00D26A] uppercase tracking-widest mb-3">Intelligence Stream</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Market Insights & Sentiment Analysis
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Harness multi-source feed processors and algorithmic sentiment scoring to evaluate market positions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sentiment Dial Gauge */}
          <div className="lg:col-span-4 bg-[#111827] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-between text-center min-h-[380px] shadow-xl">
            <div className="w-full flex justify-between items-center pb-4 border-b border-white/5">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                <Gauge className="w-4 h-4 text-[#00D26A]" /> Global Fear & Greed
              </span>
              <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-pulse" />
            </div>

            {/* SVG Speedometer Needle */}
            <div className="relative w-44 h-24 mt-8 flex justify-center overflow-hidden">
              <svg width="176" height="176" viewBox="0 0 100 100" className="absolute top-0">
                {/* Dial background track */}
                <path
                  d="M 10 90 A 40 40 0 0 1 90 90"
                  fill="none"
                  stroke="#1F2937"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Active value track (green scale) */}
                <path
                  d="M 10 90 A 40 40 0 0 1 90 90"
                  fill="none"
                  stroke="url(#sentimentGrad)"
                  strokeWidth="8"
                  strokeDasharray="125"
                  strokeDashoffset={125 - (125 * sentimentVal) / 100}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="sentimentGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="50%" stopColor="#EAB308" />
                    <stop offset="100%" stopColor="#00D26A" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Indicator Needle */}
              <div
                className="absolute bottom-0 w-1.5 h-16 bg-white origin-bottom rounded-full transition-transform duration-1000 ease-out"
                style={{
                  transform: `rotate(${rotationAngle}deg)`,
                  transformOrigin: '50% 100%',
                }}
              />
              {/* Core knob */}
              <div className="absolute bottom-0 w-5 h-5 rounded-full bg-white border-4 border-[#111827] -translate-y-1.5" />
            </div>

            <div className="flex flex-col gap-1 mt-4">
              <span className="text-3xl font-black text-white">{sentimentVal}</span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00D26A]">{activeDialText}</span>
            </div>

            <p className="text-gray-400 text-xs mt-4 leading-relaxed px-2">
              Aggregated from media sentiment, order book imbalance, and derivatives funding ratios.
            </p>
          </div>

          {/* Live News Feed List */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {newsItems.map((news) => (
              <div
                key={news.title}
                className="bg-[#111827] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all flex flex-col gap-3 text-left relative group overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                      <Radio className="w-3.5 h-3.5 text-[#2563EB] animate-pulse" /> {news.source}
                    </span>
                    <span className="text-gray-600">&middot;</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {news.time}
                    </span>
                  </div>
                  <span className={`px-2.5 py-0.5 text-[10px] font-semibold border rounded-full ${news.impactColor}`}>
                    {news.impact}
                  </span>
                </div>

                <h4 className="font-bold text-base text-white group-hover:text-[#00D26A] transition-colors leading-snug">
                  {news.title}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {news.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default MarketInsightsSection;
