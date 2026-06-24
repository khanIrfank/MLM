import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Cpu, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = ({ setView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    
    setLoading(true);
    // Simulate login API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setView('landing'); // Redirect to home
      }, 1500);
    }, 1500);
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center py-16 px-4 z-10">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00D26A]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#2563EB]/5 rounded-full filter blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl glow-card-green relative"
      >
        {/* Back arrow */}
        <button
          onClick={() => setView('landing')}
          className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold uppercase cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        {/* Logo and Header */}
        <div className="flex flex-col items-center gap-3 mt-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-[#00D26A] flex items-center justify-center shadow-lg shadow-[#00D26A]/20">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">Nexis Account Login</h2>
          <p className="text-xs text-gray-400 text-center max-w-[280px]">
            Input credentials to access your trading portfolios and algorithmic configurations.
          </p>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-5 p-3.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl flex items-center gap-2 text-left">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}
        {success && (
          <div className="mb-5 p-3.5 bg-[#00D26A]/10 border border-[#00D26A]/20 text-[#00D26A] text-xs rounded-xl flex items-center gap-2 text-left animate-pulse">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Authentication success! Accessing terminal...</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="email"
                placeholder="name@domain.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || success}
                className="w-full bg-[#0B1120] border border-white/10 focus:border-[#00D26A] rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Password</label>
              <a href="#" className="text-[10px] font-bold text-[#00D26A] hover:underline">Forgot password?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading || success}
                className="w-full bg-[#0B1120] border border-white/10 focus:border-[#00D26A] rounded-xl py-3.5 pl-11 pr-11 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading || success}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white p-1"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || success}
            className="w-full mt-2 bg-[#00D26A] hover:bg-[#00B85C] disabled:opacity-50 text-[#0B1120] font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-[#00D26A]/20 cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? <span>Connecting...</span> : <span>Login to Dashboard</span>}
          </button>
        </form>

        {/* Register Switch */}
        <div className="mt-8 text-center text-xs text-gray-400">
          <span>Don't have an account? </span>
          <button
            onClick={() => setView('register')}
            className="text-white hover:text-[#00D26A] font-bold hover:underline cursor-pointer"
          >
            Create an Account
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default Login;
