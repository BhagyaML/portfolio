import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  Code2,
  Database,
  Coffee,
  Brain,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import TiltCard from './TiltCard';
import { personalInfo, stats } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Hero({ onOpenResume, onShowToast }) {
  const { currentTheme } = useTheme();
  const [copiedItem, setCopiedItem] = useState(null);
  const [currentAvatar, setCurrentAvatar] = useState('/profile.png');

  // Realistic Typewriter specializations
  const roles = [
    "Computer Science & Engineering Graduate",
    "Java & MySQL Database Developer",
    "Python & Machine Learning Specialist",
    "Software Developer (2026 Batch)",
    "Invezoro Software Intern (Banking System)",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText.length <= 1) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
        if (displayedText === fullText) {
          timeout = setTimeout(() => setIsDeleting(true), 2400);
        }
      }, 70);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        message: `Copied ${type === 'email' ? 'Email' : 'Phone'} to clipboard!`,
      });
    }
    setTimeout(() => {
      setCopiedItem(null);
    }, 2500);
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Glowing Ambient Orbs dynamically reacting to theme */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-ambient-glow transition-colors duration-700"
          style={{ backgroundColor: currentTheme.ambientOrbs[0] }}
        />
        <div
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full blur-3xl animate-ambient-glow transition-colors duration-700"
          style={{
            backgroundColor: currentTheme.ambientOrbs[1],
            animationDelay: '4s',
          }}
        />
        <div
          className="absolute top-40 left-1/3 w-80 h-80 rounded-full blur-3xl animate-pulse transition-colors duration-700"
          style={{ backgroundColor: currentTheme.ambientOrbs[2] }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Availability Badge with Realistic Radar Wave */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-radar-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Time Roles | 2026 Graduate</span>
            </div>

            {/* Main Greeting and Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4">
              Hello, I'm <br className="hidden sm:inline" />
              <span className="gradient-text drop-shadow-sm">
                {personalInfo.name}
              </span>
            </h1>

            {/* Realistic Dynamic Typewriter Role Subheading */}
            <div className="min-h-[36px] flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span style={{ color: 'var(--theme-primary)' }} className="text-lg">❖</span>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                <span>{displayedText}</span>
                <span
                  className="inline-block w-0.5 h-5 ml-1 animate-blink-cursor align-middle"
                  style={{ backgroundColor: 'var(--theme-primary)' }}
                />
              </h2>
            </div>

            {/* Tagline / Elevator Pitch */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              {personalInfo.tagline}
            </p>

            {/* Quick Contact & Copy Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 text-xs sm:text-sm">
              {/* Email quick copy */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300">
                <Mail className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--theme-primary)' }} />
                <span className="font-mono">{personalInfo.email}</span>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="ml-1 p-1 text-slate-400 hover:text-[var(--theme-primary)] transition-colors rounded hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone quick copy */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300">
                <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--theme-secondary)' }} />
                <span className="font-mono">{personalInfo.phone}</span>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="ml-1 p-1 text-slate-400 hover:text-[var(--theme-secondary)] transition-colors rounded hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
                  title="Copy Phone"
                  aria-label="Copy Phone"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Social Link Badges */}
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:text-[var(--theme-primary)] hover:border-[var(--theme-primary)] transition-all hover:scale-105"
                  title="Visit GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:text-[var(--theme-secondary)] hover:border-[var(--theme-secondary)] transition-all hover:scale-105"
                  title="Visit LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Primary Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="shimmer-button inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm shadow-lg transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                style={{
                  background: 'var(--theme-btn-gradient)',
                  boxShadow: '0 10px 25px -5px var(--theme-glow)',
                }}
              >
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenResume}
                className="shimmer-button inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800/90 text-slate-800 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 shadow-sm transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <Download className="w-4 h-4" style={{ color: 'var(--theme-primary)' }} />
                Download Resume
              </button>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-[var(--theme-primary)] font-semibold text-sm hover:bg-[var(--theme-primary)]/10 transition-colors cursor-pointer"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait with Circular Frame & Realistic 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center perspective-card"
          >
            <div className="relative w-72 sm:w-80 lg:w-96 flex flex-col items-center">
              
              {/* Outer Glowing Gradient Ring */}
              <div
                className="absolute top-2 w-64 h-64 sm:w-72 sm:h-72 lg:w-84 lg:h-84 rounded-full opacity-70 blur-2xl animate-ambient-glow -z-10 transition-all duration-700"
                style={{ background: 'var(--theme-text-gradient)' }}
              />

              {/* Realistic 3D Tilt Container for Circular Photo */}
              <TiltCard maxTilt={8} glare={true} scale={1.03} className="rounded-full shadow-2xl">
                <div
                  className="relative p-2 sm:p-2.5 rounded-full shadow-2xl transition-all duration-700"
                  style={{ background: 'var(--theme-btn-gradient)' }}
                >
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-slate-900 border-4 border-white/20 dark:border-slate-800/80">
                    <img
                      src={currentAvatar}
                      alt="Thirunam Bhagyasri - Software Developer"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />

                    {/* Subtle Circular Vignette */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </TiltCard>

              {/* Bottom Identity Card overlapping the circle base */}
              <div className="relative -mt-8 sm:-mt-10 w-[92%] sm:w-[95%] p-3.5 rounded-2xl bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-xl border border-white/15 shadow-2xl z-30 text-left">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-white text-sm font-bold tracking-wide truncate">
                      {personalInfo.name}
                    </p>
                    <p className="text-xs text-cyan-300 font-medium truncate">
                      B.Tech CSE • Gokula Krishna College
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40 shrink-0">
                    8.23 CGPA
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: Java (Top Right) */}
              <div className="absolute -top-3 -right-2 sm:-right-4 animate-float-natural z-20 pointer-events-none">
                <div className="pointer-events-auto flex items-center gap-2 px-3 py-2 rounded-xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl text-xs font-semibold text-slate-800 dark:text-white hover:scale-110 transition-transform">
                  <div className="p-1.5 rounded-lg bg-orange-500/10 text-orange-500">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Core Expertise</p>
                    <p className="font-bold">Java & OOP</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Python / ML (Top Left) */}
              <div className="absolute top-10 -left-4 sm:-left-8 animate-float-subtle z-20 pointer-events-none" style={{ animationDelay: '1.2s' }}>
                <div className="pointer-events-auto flex items-center gap-2 px-3 py-2 rounded-xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl text-xs font-semibold text-slate-800 dark:text-white hover:scale-110 transition-transform">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Specialization</p>
                    <p className="font-bold">Python & ML</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: MySQL (Bottom Left) */}
              <div className="absolute bottom-16 -left-6 sm:-left-10 animate-float-natural z-20 pointer-events-none" style={{ animationDelay: '2.5s' }}>
                <div className="pointer-events-auto flex items-center gap-2 px-3 py-2 rounded-xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl text-xs font-semibold text-slate-800 dark:text-white hover:scale-110 transition-transform">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-500">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Database</p>
                    <p className="font-bold">MySQL & JDBC</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800/80 text-center hover:border-[var(--theme-primary)]/50 transition-colors"
              >
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--theme-primary)' }}>
                    {stat.unit}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
