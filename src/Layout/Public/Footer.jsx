import React, { useState } from 'react';
import { Mail, ArrowRight, Shield, Globe, Cpu, FolderGit, Briefcase, MessageSquare } from 'lucide-react';

const Footer = ({ view, setView }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      if (view !== 'landing') {
        setView('landing');
        setTimeout(() => {
          const target = document.getElementById(id);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      } else {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const currentYear = new Date().getFullYear();

  const footerGroups = [
    {
      title: 'Platform',
      links: [
        { label: 'Markets Dashboard', href: '#markets' },
        { label: 'Market News Feed', href: '#news' },
        { label: 'About Our Systems', href: '#why-choose-us' },
      ],
    },
    {
      title: 'Academy',
      links: [
        { label: 'Education Hub', href: '#education' },
        { label: 'Technical Analyses', href: '#insights' },
        { label: 'Free Trading Guides', href: '#education' },
        { label: 'Webinars', href: '#education' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#why-choose-us' },
        { label: 'Careers', href: '#' },
        { label: 'Blog & News', href: '#insights' },
        { label: 'Contact Support', href: '#cta' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Risk Disclosure', href: '#' },
        { label: 'Security Audits', href: '#' },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#0B1120] pt-20 pb-10 overflow-hidden border-t border-white/5 z-10">
      {/* Decorative glows */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00D26A]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#2563EB]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          {/* Logo & Newsletter */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-2"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#00D26A] flex items-center justify-center shadow-lg shadow-[#00D26A]/10">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-[#00D26A] bg-clip-text text-transparent">
                NEXIS<span className="text-[#00D26A]">TRADE</span>
              </span>
            </a>
            
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Empowering traders worldwide with institutional-grade tools, real-time analytics, and comprehensive training models across Crypto, Forex, and Stock Markets.
            </p>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-white">Subscribe to Market Insights</h4>
              <form onSubmit={handleSubmit} className="relative max-w-sm">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-[#111827] border border-white/10 rounded-xl py-3 pl-10 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00D26A] focus:ring-1 focus:ring-[#00D26A] transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#00D26A] hover:bg-[#00B85C] text-[#0B1120] font-semibold px-3 rounded-lg flex items-center justify-center transition-all cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
              {subscribed && (
                <span className="text-xs text-[#00D26A] font-medium animate-pulse">
                  Thanks for subscribing! Check your inbox soon.
                </span>
              )}
            </div>
          </div>

          {/* Nav groups */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">{group.title}</h4>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-gray-400 hover:text-white hover:translate-x-0.5 text-sm transition-all duration-200 inline-block cursor-pointer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-500 text-center md:text-left">
              &copy; {currentYear} NexisTrade Systems LLC. All rights reserved.
            </span>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 justify-center md:justify-start">
              <Shield className="w-3.5 h-3.5 text-[#00D26A]" />
              <span>Regulated platform &middot; Secure 256-bit encryption</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: Globe, href: '#', label: 'Website' },
              { icon: FolderGit, href: '#', label: 'GitHub' },
              { icon: Briefcase, href: '#', label: 'LinkedIn' },
              { icon: MessageSquare, href: '#', label: 'Telegram' },
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#00D26A] hover:bg-white/10 hover:border-[#00D26A]/20 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;