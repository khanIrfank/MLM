import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, TrendingUp, TrendingDown, RefreshCw, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Sparkline from '../Sparkline';

const HeroSection = () => {
  // Live mock price simulator
  const [btcPrice, setBtcPrice] = useState(94250.75);
  const [eurUsd, setEurUsd] = useState(1.0842);
  const [tslaPrice, setTslaPrice] = useState(187.35);
  const [lastUpdated, setLastUpdated] = useState('Just now');
  const [direction, setDirection] = useState({ btc: 'up', eur: 'up', tsla: 'down' });

  useEffect(() => {
    const interval = setInterval(() => {
      const btcDiff = (Math.random() - 0.48) * 15;
      const eurDiff = (Math.random() - 0.5) * 0.0005;
      const tslaDiff = (Math.random() - 0.52) * 0.2;

      setBtcPrice((prev) => {
        setDirection(d => ({ ...d, btc: btcDiff >= 0 ? 'up' : 'down' }));
        return +(prev + btcDiff).toFixed(2);
      });
      setEurUsd((prev) => {
        setDirection(d => ({ ...d, eur: eurDiff >= 0 ? 'up' : 'down' }));
        return +(prev + eurDiff).toFixed(4);
      });
      setTslaPrice((prev) => {
        setDirection(d => ({ ...d, tsla: tslaDiff >= 0 ? 'up' : 'down' }));
        return +(prev + tslaDiff).toFixed(2);
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const btcSparkline = [93500, 93800, 93700, 94100, 93900, 94300, btcPrice];
  const eurSparkline = [1.0820, 1.0825, 1.0818, 1.0835, 1.0830, 1.0838, eurUsd];
  const tslaSparkline = [190.20, 189.50, 188.40, 189.10, 187.90, 187.10, tslaPrice];

  const handleCTA = () => {
    const target = document.getElementById('pricing');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Decorative center spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#2563EB]/10 to-[#00D26A]/5 rounded-full filter blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Text content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left gap-6">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-white/5 shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-pulse" />
            <span className="text-xs font-semibold text-gray-300">
              V4 Engine Live &middot; Algorithmic Execution
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Navigate Markets With{' '}
            <span className="bg-gradient-to-r from-[#00D26A] to-[#2563EB] bg-clip-text text-transparent text-glow-green">
              AI Precision
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg leading-relaxed max-w-xl"
          >
            A high-frequency terminal that integrates Crypto, Forex, and Stocks. Built for institutional speeds, equipped with advanced machine-learning insights, and designed with absolute simplicity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={handleCTA}
              className="bg-[#00D26A] hover:bg-[#00B85C] text-[#0B1120] font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#00D26A]/20 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#111827] hover:bg-white/5 border border-white/10 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Academy Demo</span>
            </button>
          </motion.div>

          {/* Social Proof Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4 pt-4 border-t border-white/5 w-full justify-start"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-[#111827] border-2 border-[#0B1120] flex items-center justify-center overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=user${i}`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#00D26A] text-[#00D26A]" />
                ))}
                <span className="text-sm font-semibold text-white ml-1">4.9/5</span>
              </div>
              <p className="text-xs text-gray-400">Trusted by 180,000+ Active Retail Traders</p>
            </div>
          </motion.div>

        </div>

        {/* Right 3D Glass Dashboard */}
        <div className="lg:col-span-6 flex justify-center relative perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            className="w-full max-w-[500px] bg-[#111827]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/40 transform-style-3d glow-card-blue animate-float"
          >
            {/* Window header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-gray-400 font-semibold ml-2">NEXIS TERMINAL v4.1</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium bg-[#0B1120] py-1 px-2.5 rounded-lg border border-white/5">
                <RefreshCw className="w-3 h-3 animate-spin text-[#00D26A]" />
                <span>Simulating Live Stream</span>
              </div>
            </div>

            {/* Dashboard widgets list */}
            <div className="flex flex-col gap-4">
              
              {/* Crypto Row (BTC) */}
              <div className="flex items-center justify-between p-3.5 bg-[#0B1120]/60 rounded-xl border border-white/5 hover:border-white/10 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 font-bold">₿</div>
                  <div>
                    <h4 className="font-bold text-sm text-white">BTC / USDT</h4>
                    <span className="text-xs text-gray-500">Bitcoin Network</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Sparkline data={btcSparkline} color={direction.btc === 'up' ? '#00D26A' : '#EF4444'} />
                  <div className="text-right">
                    <span className="font-bold text-sm block">${btcPrice.toLocaleString()}</span>
                    <span className={`inline-flex items-center text-xs font-semibold gap-0.5 ${direction.btc === 'up' ? 'text-[#00D26A]' : 'text-red-500'}`}>
                      {direction.btc === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {direction.btc === 'up' ? '+0.42%' : '-0.15%'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Forex Row (EUR/USD) */}
              <div className="flex items-center justify-between p-3.5 bg-[#0B1120]/60 rounded-xl border border-white/5 hover:border-white/10 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">€</div>
                  <div>
                    <h4 className="font-bold text-sm text-white">EUR / USD</h4>
                    <span className="text-xs text-gray-500">Euro FX Market</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Sparkline data={eurSparkline} color={direction.eur === 'up' ? '#00D26A' : '#EF4444'} />
                  <div className="text-right">
                    <span className="font-bold text-sm block">${eurUsd}</span>
                    <span className={`inline-flex items-center text-xs font-semibold gap-0.5 ${direction.eur === 'up' ? 'text-[#00D26A]' : 'text-red-500'}`}>
                      {direction.eur === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {direction.eur === 'up' ? '+0.08%' : '-0.04%'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stock Row (TSLA) */}
              <div className="flex items-center justify-between p-3.5 bg-[#0B1120]/60 rounded-xl border border-white/5 hover:border-white/10 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 font-bold">T</div>
                  <div>
                    <h4 className="font-bold text-sm text-white">TSLA</h4>
                    <span className="text-xs text-gray-500">Tesla Motors Inc</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Sparkline data={tslaSparkline} color={direction.tsla === 'up' ? '#00D26A' : '#EF4444'} />
                  <div className="text-right">
                    <span className="font-bold text-sm block">${tslaPrice}</span>
                    <span className={`inline-flex items-center text-xs font-semibold gap-0.5 ${direction.tsla === 'up' ? 'text-[#00D26A]' : 'text-red-500'}`}>
                      {direction.tsla === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {direction.tsla === 'up' ? '+0.12%' : '-0.28%'}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick action bar */}
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D26A]" />
                Execution API Latency: 1.2ms
              </span>
              <span>Spread: 0.1 pips</span>
            </div>
          </motion.div>

          {/* Floating design shapes behind dashboard mock */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00D26A]/20 rounded-2xl filter blur-2xl z-0" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#2563EB]/20 rounded-2xl filter blur-2xl z-0" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
