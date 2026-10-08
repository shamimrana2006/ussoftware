"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { FaGoogle, FaFacebookF, FaApple, FaGithub } from "react-icons/fa";

export default function LoginPage() {
  const { t, language } = useLanguage();
  const isEn = language === "en";
  const loginT = t.loginPage;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!email || !password) {
      setErrorMsg(isEn ? "Please fill in all fields." : "সবগুলো ঘর পূরণ করুন।");
      return;
    }

    setIsLoading(true);

    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMsg(loginT.loginSuccess);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#f0f7ff] flex flex-col font-sans select-none overflow-x-hidden relative">
      <Header />

      <main className="flex-grow flex items-center justify-center py-12 sm:py-20 px-4 relative z-10">
        
        {/* ========================================================================= */}
        {/* ETHEREAL SKY BACKGROUND WITH SOFT CLOUDS & GLOWING LIGHT ARCS (As per image) */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          {/* Ethereal Sky Gradient Fill */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#bde0fe]/40 via-[#e0f2fe]/60 to-[#f8fafc]" />
          
          {/* Soft Ethereal Glowing Light Arc (matching reference image) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] border border-white/60 rounded-full blur-2xl opacity-70 pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-sky-200/50 via-white/70 to-transparent blur-3xl rounded-full pointer-events-none" />

          {/* Floating Subtle Clouds */}
          <motion.div
            animate={{ x: [0, 25, 0], y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-96 h-48 bg-white/40 blur-3xl rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-[450px] h-60 bg-white/50 blur-3xl rounded-full pointer-events-none"
          />
        </div>

        {/* ========================================================================= */}
        {/* CENTERED FROSTED GLASS CARD (Matching uploaded image input_file_0.png)     */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_25px_70px_rgba(0,0,0,0.07)] rounded-[32px] p-7 sm:p-10 relative overflow-hidden"
        >
          {/* Subtle Ambient Card Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/40 rounded-full blur-2xl pointer-events-none" />

          {/* Mode Switcher Pill */}
          <div className="flex items-center justify-center p-1 bg-slate-100/90 rounded-2xl mb-6 max-w-[240px] mx-auto border border-slate-200/80">
            <Link
              href="/login"
              className="flex-1 py-1.5 rounded-xl font-extrabold text-xs text-center transition-all bg-[#008744] text-white shadow-xs"
            >
              {isEn ? "Sign In" : "সাইন ইন"}
            </Link>
            <Link
              href="/register"
              className="flex-1 py-1.5 rounded-xl font-bold text-xs text-center transition-all text-slate-600 hover:text-slate-900"
            >
              {isEn ? "Register" : "রেজিস্টার"}
            </Link>
          </div>

          {/* Top Icon Badge in rounded square (Matching reference image icon) */}
          <div className="flex justify-center mb-4">
            <div className="w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-tr from-[#008744] to-[#056839] text-white rounded-2xl flex items-center justify-center shadow-md border border-emerald-400/40 group">
              <LogIn size={22} className="text-white group-hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Card Title & Subtitle */}
          <div className="text-center mb-6 space-y-1.5">
            <h1 className="text-2xl sm:text-[26px] font-black text-slate-900 tracking-tight">
              {loginT.title}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-500 max-w-xs mx-auto leading-relaxed">
              {loginT.subtitle}
            </p>
          </div>

          {/* Notification Messages */}
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-semibold text-red-600 flex items-center gap-2"
            >
              <AlertCircle size={15} className="flex-shrink-0" />
              <span>{errorMsg}</span>
            </motion.div>
          )}

          {successMsg && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-semibold text-emerald-700 flex items-center gap-2"
            >
              <CheckCircle2 size={15} className="flex-shrink-0 text-emerald-600" />
              <span>{successMsg}</span>
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Field */}
            <div className="space-y-1 text-left">
              <label className="text-xs font-bold text-slate-700 ml-1">
                {loginT.emailLabel}
              </label>
              <div className="relative flex items-center bg-slate-100/90 hover:bg-slate-100 focus-within:bg-white border border-slate-200/90 focus-within:border-[#008744] focus-within:ring-2 focus-within:ring-[#008744]/20 rounded-xl px-3.5 py-3 transition-all">
                <Mail size={18} className="text-slate-400 mr-2.5 flex-shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={loginT.emailPlaceholder}
                  className="w-full bg-transparent border-none outline-none text-sm text-slate-800 placeholder-slate-400 font-medium"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1 text-left">
              <label className="text-xs font-bold text-slate-700 ml-1">
                {loginT.passwordLabel}
              </label>
              <div className="relative flex items-center bg-slate-100/90 hover:bg-slate-100 focus-within:bg-white border border-slate-200/90 focus-within:border-[#008744] focus-within:ring-2 focus-within:ring-[#008744]/20 rounded-xl px-3.5 py-3 transition-all">
                <Lock size={18} className="text-slate-400 mr-2.5 flex-shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={loginT.passwordPlaceholder}
                  className="w-full bg-transparent border-none outline-none text-sm text-slate-800 placeholder-slate-400 font-medium pr-2"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-400 hover:text-slate-600 focus:outline-none transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a
                href="#forgot"
                onClick={(e) => {
                  e.preventDefault();
                  alert(isEn ? "Password reset link sent to your email!" : "পাসওয়ার্ড রিসেট লিংক আপনার ইমেইলে পাঠানো হয়েছে!");
                }}
                className="text-xs font-semibold text-slate-500 hover:text-[#008744] transition-colors cursor-pointer"
              >
                {loginT.forgotPassword}
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#008744] hover:bg-[#007038] text-white py-3.5 rounded-xl font-extrabold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>{loginT.submitBtn}</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>

          </form>

          {/* Social Auth Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="h-[1px] bg-slate-200 flex-grow" />
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {loginT.orSignInWith}
            </span>
            <div className="h-[1px] bg-slate-200 flex-grow" />
          </div>

          {/* Social Buttons Dock (Google, Facebook, Apple) */}
          <div className="flex items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => alert("Google Login")}
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-sm flex items-center justify-center text-slate-700 hover:scale-105 transition-all cursor-pointer"
              title="Sign in with Google"
            >
              <FaGoogle size={17} className="text-red-500" />
            </button>

            <button
              type="button"
              onClick={() => alert("Facebook Login")}
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-sm flex items-center justify-center text-slate-700 hover:scale-105 transition-all cursor-pointer"
              title="Sign in with Facebook"
            >
              <FaFacebookF size={17} className="text-blue-600" />
            </button>

            <button
              type="button"
              onClick={() => alert("Apple Login")}
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-sm flex items-center justify-center text-slate-700 hover:scale-105 transition-all cursor-pointer"
              title="Sign in with Apple"
            >
              <FaApple size={19} className="text-slate-900" />
            </button>

            <button
              type="button"
              onClick={() => alert("GitHub Login")}
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-sm flex items-center justify-center text-slate-700 hover:scale-105 transition-all cursor-pointer"
              title="Sign in with GitHub"
            >
              <FaGithub size={18} className="text-slate-900" />
            </button>
          </div>

          {/* Bottom Switch Prompt */}
          <div className="text-center mt-6 text-xs font-medium text-slate-600">
            <span>{loginT.dontHaveAccount} </span>
            <Link
              href="/register"
              className="font-bold text-[#008744] hover:underline cursor-pointer"
            >
              {loginT.signUpLink}
            </Link>
          </div>

        </motion.div>

      </main>

      <Footer />
    </div>
  );
}
