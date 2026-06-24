import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Cpu, User, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Register = ({ setView }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (!agree) {
      setError('You must accept the Risk Disclosure Policy & Terms.');
      return;
    }

    setLoading(true);
    // Simulate API registration call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setView('login'); // Redirect to login
      }, 1500);
    }, 1500);
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center py-16 px-4 z-10">
      {/* Decorative spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#00D26A]/5 rounded-full filter blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl glow-card-blue relative animate-float"
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
        <div className="flex flex-col items-center gap-3 mt-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-[#00D26A] flex items-center justify-center shadow-lg shadow-[#2563EB]/20">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">Create Nexis Account</h2>
          <p className="text-xs text-gray-400 text-center max-w-[280px]">
            Join our trading execution network and configure algorithmic scripts.
          </p>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-4 p-3.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl flex items-center gap-2 text-left">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}
        {success && (
          <div className="mb-4 p-3.5 bg-[#00D26A]/10 border border-[#00D26A]/20 text-[#00D26A] text-xs rounded-xl flex items-center gap-2 text-left animate-pulse">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Registration success! Redirecting to login...</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 text-left">
          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="e.g. Irfan Khan"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading || success}
                className="w-full bg-[#0B1120] border border-white/10 focus:border-[#2563EB] rounded-xl py-3 px-4 pl-11 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
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
                className="w-full bg-[#0B1120] border border-white/10 focus:border-[#2563EB] rounded-xl py-3 px-4 pl-11 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Minimum 6 characters"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading || success}
                className="w-full bg-[#0B1120] border border-white/10 focus:border-[#2563EB] rounded-xl py-3 px-4 pl-11 pr-11 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
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

          {/* Confirm Password */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading || success}
                className="w-full bg-[#0B1120] border border-white/10 focus:border-[#2563EB] rounded-xl py-3 px-4 pl-11 pr-11 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2.5 my-2">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              disabled={loading || success}
              className="mt-1 w-4 h-4 rounded bg-[#0B1120] border border-white/10 text-[#2563EB] focus:ring-0 focus:ring-offset-0 accent-[#2563EB]"
            />
            <label htmlFor="agree" className="text-[10px] text-gray-400 leading-normal select-none">
              I certify that I have read and agree to the <a href="#" className="text-white hover:text-[#2563EB] font-bold underline">Risk Disclosures</a>, and accept the <a href="#" className="text-white hover:text-[#2563EB] font-bold underline">Terms of Service</a>.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || success}
            className="w-full bg-[#2563EB] hover:bg-blue-600 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/20 cursor-pointer flex items-center justify-center"
          >
            {loading ? <span>Processing Account...</span> : <span>Register Account Key</span>}
          </button>
        </form>

        {/* Login Switch */}
        <div className="mt-6 text-center text-xs text-gray-400">
          <span>Already have an account? </span>
          <button
            onClick={() => setView('login')}
            className="text-white hover:text-[#2563EB] font-bold hover:underline cursor-pointer"
          >
            Sign In Here
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default Register;
