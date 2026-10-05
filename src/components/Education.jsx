import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Calendar,
  Building,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  BookOpen,
  ChevronRight
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function Education({ onOpenCertificate }) {
  return (
    <section id="education" className="py-20 lg:py-28 bg-slate-100/50 dark:bg-slate-900/40 relative">
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
            Scholastic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A consistent record of academic excellence from high school honors to specialized computer science engineering and national certifications.
          </p>
        </div>

        {/* Two-Column Grid: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <div
                className="p-2.5 rounded-xl transition-colors"
                style={{
                  backgroundColor: 'rgba(var(--theme-primary-rgb), 0.12)',
                  color: 'var(--theme-primary)',
                }}
              >
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Academic Background
              </h3>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800/85 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:border-violet-500/40 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 w-fit">
                      {edu.score}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5 mt-0.5 mb-3">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    {edu.institution}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                    {edu.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2"
                      >
                        <span className="text-violet-500 font-bold shrink-0 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Credentials & Honors
              </h3>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800/85 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:border-cyan-500/40 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                      {cert.status}
                    </span>
                    <span className="text-xs text-slate-400">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5 mb-3">
                    {cert.issuer}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.slice(0, 3).map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-[10px] font-medium text-slate-600 dark:text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenCertificate(cert.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                  >
                    View Credential Details
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Quick Education Quote / Summary Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-violet-600/10 via-indigo-600/10 to-cyan-500/10 border border-violet-500/20 text-xs text-slate-700 dark:text-slate-300 space-y-2">
              <p className="font-bold text-slate-900 dark:text-white text-sm">
                Commitment to Lifelong Learning
              </p>
              <p className="leading-relaxed">
                "Continuous upskilling through IIT NPTEL programs and real-world engineering sprints helps bridge core academic principles with real industry demand."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
