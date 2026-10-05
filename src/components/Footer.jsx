import React from 'react';
import { ArrowUp, Mail, Phone, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-200 dark:border-slate-800">
          
          {/* Left Monogram & Info */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl text-white font-bold text-lg shadow-md transition-all duration-300"
              style={{
                background: 'var(--theme-btn-gradient)',
                boxShadow: '0 4px 14px 0 var(--theme-glow)',
              }}
            >
              TB
            </div>
            <div>
              <p className="font-extrabold text-base text-slate-900 dark:text-white">
                {personalInfo.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-[var(--theme-primary)] transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-[var(--theme-primary)] transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-[var(--theme-primary)] transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-[var(--theme-primary)] transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-[var(--theme-primary)] transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-[var(--theme-primary)] transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[var(--theme-primary)] transition-all hover:scale-105"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[var(--theme-secondary)] transition-all hover:scale-105"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[var(--theme-primary)] transition-all hover:scale-105"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl text-white shadow-md transition-all hover:scale-105 cursor-pointer"
              style={{
                background: 'var(--theme-btn-gradient)',
                boxShadow: '0 4px 14px 0 var(--theme-glow)',
              }}
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" /> in React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
