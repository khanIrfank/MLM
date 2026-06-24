import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Mail, Send } from 'lucide-react';

const CTASection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }
  };

  return (
    <section id="cta" className="relative py-24 bg-[#0B1120] z-10 overflow-hidden">
      {/* Dynamic Background Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#2563EB]/10 to-[#00D26A]/5 rounded-full filter blur-[120px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#111827]/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 glow-card-premium shadow-2xl">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-6">
            <span className="text-xs font-bold text-[#00D26A] uppercase tracking-widest bg-[#00D26A]/10 border border-[#00D26A]/20 px-3 py-1 rounded-full">
              System Access
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Unlock Your Premium Trading Key
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Join thousands of retail and fund managers routing transactions through the Nexis trade matrix. Setup takes less than 3 minutes.
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-3 mt-4">
              {[
                'Free Starter Sandbox (No Credit Card required)',
                'Segmented bank asset guarantees (1:1 reserves)',
                'Automated TradingView API bindings',
              ].map((text) => (
                <div key={text} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300 font-medium">
                  <ShieldCheck className="w-5 h-5 text-[#00D26A] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Pricing anchor scroll */}
            <button
              onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 bg-[#00D26A] hover:bg-[#00B85C] text-[#0B1120] font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-[#00D26A]/15 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>View Pricing Plans</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Contact Form block */}
          <div className="lg:col-span-6 bg-[#0B1120]/80 border border-white/5 p-6 sm:p-8 rounded-2xl w-full">
            <h4 className="font-bold text-lg text-white mb-2 text-left">Connect with our Trading Desk</h4>
            <p className="text-xs text-gray-400 mb-6 text-left">
              Have enterprise integration questions? Submit details below to talk to a broker advisor.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Irfan Khan"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                  className="w-full bg-[#111827] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00D26A] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  placeholder="name@domain.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                  className="w-full bg-[#111827] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00D26A] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message (Optional)</label>
                <textarea
                  placeholder="Let us know your requirements..."
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  className="w-full bg-[#111827] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00D26A] resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2563EB] hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/10"
              >
                <span>Submit Query</span>
                <Send className="w-4 h-4" />
              </button>

              {sent && (
                <span className="text-xs text-[#00D26A] font-medium flex items-center gap-1.5 mt-2 animate-pulse">
                  <CheckCircle2 className="w-4 h-4 text-[#00D26A]" /> Query dispatched. A broker will contact you shortly!
                </span>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
