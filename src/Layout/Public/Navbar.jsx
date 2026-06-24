import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ view, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Markets', href: '#markets', id: 'markets' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'News', href: '#news', id: 'news' },
    { name: 'Blog', href: '#insights', id: 'insights' },
    { name: 'About Us', href: '#why-choose-us', id: 'why-choose-us' },
    { name: 'Contact', href: '#cta', id: 'cta' },
  ];

  // Track scroll position for header glassmorphism and active link
  useEffect(() => {
    if (view !== 'landing') return;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in viewport
      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + 150;

      for (let i = 0; i < sections.length; i++) {
        const sect = sections[i];
        if (sect) {
          const top = sect.offsetTop;
          const height = sect.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(navLinks[i].id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (view !== 'landing') {
      setView('landing');
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    
    window.history.pushState(null, null, `#${id}`);
    setActiveSection(id);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || view !== 'landing'
            ? 'bg-[#0B1120]/80 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, 'hero')}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#00D26A] flex items-center justify-center shadow-lg shadow-[#00D26A]/20 transition-transform group-hover:scale-105">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-[#00D26A] bg-clip-text text-transparent">
                NEXIS<span className="text-[#00D26A]">TRADE</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all relative ${
                    view === 'landing' && activeSection === link.id
                      ? 'text-[#00D26A]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {view === 'landing' && activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#00D26A]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setView('login')}
                className={`text-sm font-semibold hover:text-[#00D26A] transition-colors px-4 py-2 cursor-pointer ${
                  view === 'login' ? 'text-[#00D26A]' : 'text-white'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setView('register')}
                className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#00D26A] rounded-xl" />
                <div className={`px-5 py-2.5 rounded-[11px] hover:bg-transparent transition-all duration-300 relative text-sm font-semibold flex items-center gap-1 text-white ${
                  view === 'register' ? 'bg-transparent' : 'bg-[#0B1120]'
                }`}>
                  <span>Get Started</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none cursor-pointer"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-45 bg-[#0B1120]/95 backdrop-blur-lg border-b border-white/5 py-6 px-4 flex flex-col gap-4 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    view === 'landing' && activeSection === link.id
                      ? 'bg-[#00D26A]/10 text-[#00D26A]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <hr className="border-white/5 my-2" />

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => { setIsOpen(false); setView('login'); }}
                className={`flex-1 py-3 text-center rounded-xl font-semibold transition-colors cursor-pointer ${
                  view === 'login' ? 'bg-[#00D26A]/20 text-[#00D26A] border border-[#00D26A]/30' : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => { setIsOpen(false); setView('register'); }}
                className="flex-1 py-3 text-center rounded-xl bg-gradient-to-r from-[#2563EB] to-[#00D26A] text-white hover:opacity-90 font-semibold transition-all shadow-lg shadow-[#00D26A]/15 cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;