import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  ExternalLink,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Experience({ onOpenCertificate, onOpenProject }) {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 transition-colors"
            style={{
              backgroundColor: 'rgba(var(--theme-primary-rgb), 0.12)',
              color: 'var(--theme-primary)',
              border: '1px solid rgba(var(--theme-primary-rgb), 0.25)',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Industry Exposure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & <span className="gradient-text">Internship</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real-world software engineering practice delivering secure database interactions and modular Java architectures.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-6 sm:pl-10 border-l-2 pb-8 last:pb-0"
              style={{ borderColor: 'rgba(var(--theme-primary-rgb), 0.3)' }}
            >
              {/* Timeline Marker Pulse */}
              <div
                className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 shadow-md flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: 'var(--theme-primary)',
                  boxShadow: '0 0 12px var(--theme-glow)',
                }}
              >
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </div>

              {/* Experience Card */}
              <TiltCard maxTilt={4} glare={true} scale={1.01} className="rounded-3xl">
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/85 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:border-[var(--theme-primary)]/40 transition-all">
                  
                  {/* Header Information */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs font-bold">
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2">
                        {exp.role}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-violet-600 dark:text-violet-400 flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-4 h-4" />
                        {exp.company} • <span className="text-slate-700 dark:text-slate-300 font-medium">{exp.project}</span>
                      </p>
                    </div>

                    {/* Credential Action Button */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenCertificate('invezoro-cert')}
                        className="shimmer-button inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 transition-all hover:scale-105 active:scale-95"
                      >
                        <Award className="w-3.5 h-3.5" />
                        View Certificate
                      </button>
                    </div>
                  </div>

                  {/* Brief Overview */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {exp.overview}
                  </p>

                  {/* Detailed Responsibilities List */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                      Key Responsibilities & Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Achievements Grid */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-750/70 border border-slate-200/60 dark:border-slate-700/60 mb-6">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-4 h-4 text-violet-500" />
                      Key Milestones & Engineering Impact
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {exp.achievements.map((ach, idx) => (
                        <div key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-violet-500 font-bold">•</span>
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Badges & Project Link */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-medium text-slate-400 mr-1">Stack:</span>
                      {exp.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenProject('bank-account-system')}
                      className="inline-flex items-center gap-1 text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                    >
                      View Project Case Study
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
