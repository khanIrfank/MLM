import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Search, ArrowUpRight } from 'lucide-react';
import Sparkline from '../Sparkline';

const MarketsSection = () => {
  const [activeTab, setActiveTab] = useState('crypto');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Market lists with price simulations
  const [marketData, setMarketData] = useState({
    crypto: [
      { name: 'Bitcoin', symbol: 'BTC', price: 94250.75, change: 2.45, high: 95100.00, low: 91800.00, history: [91800, 92400, 93100, 92900, 93800, 94100, 94250] },
      { name: 'Ethereum', symbol: 'ETH', price: 3480.20, change: 1.82, high: 3540.00, low: 3390.00, history: [3400, 3420, 3450, 3410, 3460, 3490, 3480] },
      { name: 'Solana', symbol: 'SOL', price: 164.45, change: -1.25, high: 169.50, low: 161.20, history: [168, 166, 163, 165, 162, 161, 164] },
      { name: 'Ripple', symbol: 'XRP', price: 0.584, change: 0.12, high: 0.595, low: 0.572, history: [0.575, 0.578, 0.581, 0.572, 0.589, 0.585, 0.584] },
      { name: 'Cardano', symbol: 'ADA', price: 0.442, change: -2.35, high: 0.461, low: 0.435, history: [0.458, 0.452, 0.449, 0.441, 0.438, 0.435, 0.442] },
    ],
    forex: [
      { name: 'Euro / US Dollar', symbol: 'EUR/USD', price: 1.0842, change: 0.15, high: 1.0870, low: 1.0810, history: [1.0815, 1.0822, 1.0840, 1.0832, 1.0855, 1.0848, 1.0842] },
      { name: 'Pound / US Dollar', symbol: 'GBP/USD', price: 1.2685, change: -0.22, high: 1.2725, low: 1.2640, history: [1.2710, 1.2695, 1.2680, 1.2655, 1.2670, 1.2690, 1.2685] },
      { name: 'US Dollar / Yen', symbol: 'USD/JPY', price: 154.62, change: 0.48, high: 155.10, low: 153.80, history: [153.90, 154.10, 154.40, 154.20, 154.80, 154.50, 154.62] },
      { name: 'Aussie / US Dollar', symbol: 'AUD/USD', price: 0.6612, change: 0.32, high: 0.6645, low: 0.6585, history: [0.6590, 0.6598, 0.6605, 0.6592, 0.6620, 0.6615, 0.6612] },
      { name: 'US Dollar / CAD', symbol: 'USD/CAD', price: 1.3695, change: -0.11, high: 1.3735, low: 1.3650, history: [1.3720, 1.3710, 1.3685, 1.3690, 1.3705, 1.3698, 1.3695] },
    ],
    stocks: [
      { name: 'Apple Inc.', symbol: 'AAPL', price: 189.84, change: 1.12, high: 191.05, low: 187.60, history: [187.80, 188.40, 189.20, 188.90, 190.10, 189.60, 189.84] },
      { name: 'Nvidia Corp.', symbol: 'NVDA', price: 914.50, change: 4.86, high: 922.00, low: 885.00, history: [886, 892, 905, 898, 918, 910, 914] },
      { name: 'Tesla Inc.', symbol: 'TSLA', price: 187.35, change: -3.42, high: 194.20, low: 185.10, history: [193.50, 192.10, 189.40, 191.00, 188.50, 186.20, 187.35] },
      { name: 'Microsoft Corp.', symbol: 'MSFT', price: 421.90, change: 0.72, high: 424.50, low: 418.20, history: [418.50, 419.80, 420.50, 419.60, 422.10, 421.30, 421.90] },
      { name: 'Amazon.com Inc.', symbol: 'AMZN', price: 178.15, change: -0.85, high: 180.40, low: 176.90, history: [179.80, 179.10, 178.40, 177.20, 178.90, 177.80, 178.15] },
    ],
  });

  const [flashing, setFlashing] = useState({});

  // Simulate pricing movements
  useEffect(() => {
    const timer = setInterval(() => {
      const tabs = ['crypto', 'forex', 'stocks'];
      const targetTab = tabs[Math.floor(Math.random() * tabs.length)];
      const targetIndex = Math.floor(Math.random() * marketData[targetTab].length);
      
      setMarketData((prev) => {
        const list = [...prev[targetTab]];
        const asset = { ...list[targetIndex] };
        
        // Random multiplier
        const factor = targetTab === 'crypto' ? 12 : targetTab === 'forex' ? 0.0006 : 0.8;
        const changeVal = (Math.random() - 0.5) * factor;
        const oldPrice = asset.price;
        asset.price = +(oldPrice + changeVal).toFixed(targetTab === 'forex' ? 4 : 2);
        
        // Keep history capped at 7 items and append the new price
        asset.history = [...asset.history.slice(1), asset.price];
        
        // Calculate new high/low
        if (asset.price > asset.high) asset.high = asset.price;
        if (asset.price < asset.low) asset.low = asset.price;
        
        // Change percentage
        asset.change = +((changeVal >= 0 ? asset.change + 0.05 : asset.change - 0.05)).toFixed(2);
        list[targetIndex] = asset;
        
        // Trigger flashing effect
        const id = `${targetTab}-${asset.symbol}`;
        setFlashing((prevFlash) => ({
          ...prevFlash,
          [id]: changeVal >= 0 ? 'up' : 'down',
        }));
        
        // Clear flashing after 1 second
        setTimeout(() => {
          setFlashing((prevFlash) => {
            const next = { ...prevFlash };
            delete next[id];
            return next;
          });
        }, 800);

        return {
          ...prev,
          [targetTab]: list,
        };
      });
    }, 1800);

    return () => clearInterval(timer);
  }, [marketData]);

  // Filter lists based on search
  const filteredData = marketData[activeTab].filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="markets" className="relative py-24 bg-[#0B1120] z-10 border-b border-white/5">
      {/* Decorative Blur Bubble */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00D26A]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-xs font-bold text-[#00D26A] uppercase tracking-widest mb-3">Live Trading Terminals</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Explore Global Assets Real-Time
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-lg">
              Monitor spreads, percentage swings, and technical trend lines with instant latency indicators.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search symbol or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111827] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#2563EB] transition-all"
            />
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex items-center gap-2 p-1.5 bg-[#111827] rounded-xl border border-white/5 w-fit mb-8">
          {['crypto', 'forex', 'stocks'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSearchQuery('');
              }}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#00D26A] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto bg-[#111827]/50 backdrop-blur-xl border border-white/5 rounded-2xl glow-card-green">
          <table className="w-full min-w-[700px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/5 text-xs text-gray-400 uppercase font-semibold">
                <th className="py-5 px-6">Name / Symbol</th>
                <th className="py-5 px-4">Live Price</th>
                <th className="py-5 px-4">24h Change</th>
                <th className="py-5 px-4">24h High / Low</th>
                <th className="py-5 px-4">Trend (7 Days)</th>
                <th className="py-5 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout">
                {filteredData.map((asset) => {
                  const flashKey = `${activeTab}-${asset.symbol}`;
                  const flashState = flashing[flashKey];
                  const isPositive = asset.change >= 0;

                  return (
                    <motion.tr
                      key={asset.symbol}
                      layoutId={`row-${asset.symbol}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                    >
                      {/* Name / Icon */}
                      <td className="py-4.5 px-6 flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                          activeTab === 'crypto' 
                            ? 'bg-orange-500/10 text-orange-500' 
                            : activeTab === 'forex' 
                              ? 'bg-blue-500/10 text-blue-500' 
                              : 'bg-green-500/10 text-green-500'
                        }`}>
                          {asset.symbol.substring(0, 2)}
                        </div>
                        <div>
                          <span className="font-bold text-sm block text-white">{asset.name}</span>
                          <span className="text-xs text-gray-500">{asset.symbol}</span>
                        </div>
                      </td>

                      {/* Price (Flashing on update) */}
                      <td className="py-4.5 px-4">
                        <span
                          className={`font-mono font-bold text-sm transition-all duration-300 px-1.5 py-0.5 rounded ${
                            flashState === 'up'
                              ? 'bg-[#00D26A]/20 text-[#00D26A] scale-105'
                              : flashState === 'down'
                                ? 'bg-red-500/20 text-red-500 scale-105'
                                : 'text-white'
                          }`}
                        >
                          {activeTab === 'forex' ? '' : '$'}
                          {asset.price.toLocaleString(undefined, { minimumFractionDigits: activeTab === 'forex' ? 4 : 2 })}
                        </span>
                      </td>

                      {/* 24h Change */}
                      <td className="py-4.5 px-4">
                        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                          isPositive ? 'bg-[#00D26A]/10 text-[#00D26A]' : 'bg-red-500/10 text-red-500'
                        }`}>
                          {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                          {isPositive ? '+' : ''}{asset.change}%
                        </span>
                      </td>

                      {/* High/Low */}
                      <td className="py-4.5 px-4 font-mono text-xs text-gray-400">
                        <div className="flex flex-col">
                          <span>H: ${asset.high.toLocaleString(undefined, { minimumFractionDigits: activeTab === 'forex' ? 4 : 2 })}</span>
                          <span className="opacity-60">L: ${asset.low.toLocaleString(undefined, { minimumFractionDigits: activeTab === 'forex' ? 4 : 2 })}</span>
                        </div>
                      </td>

                      {/* Sparkline trend */}
                      <td className="py-4.5 px-4">
                        <Sparkline
                          data={asset.history}
                          color={isPositive ? '#00D26A' : '#EF4444'}
                          width={120}
                          height={32}
                        />
                      </td>

                      {/* Action */}
                      <td className="py-4.5 px-6 text-right">
                        <button className="inline-flex items-center gap-1 bg-[#111827] hover:bg-[#00D26A] hover:text-[#0B1120] border border-white/10 hover:border-transparent text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer">
                          <span>Trade</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </td>
                    </motion.tr>
                  );
                })}
              </AnimatePresence>
            </tbody>
          </table>
          
          {filteredData.length === 0 && (
            <div className="text-center py-12 text-gray-500 text-sm">
              No assets matching your query were found.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default MarketsSection;
