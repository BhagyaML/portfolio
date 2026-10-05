import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ExternalLink,
  ChevronRight,
  Code2,
  Brain,
  Coffee,
  Database,
  ShieldAlert,
  BarChart,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import TiltCard from './TiltCard';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning & Security' },
    { id: 'java', label: 'Java & Databases' },
    { id: 'web', label: 'Web Development' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ml') return p.category.includes('Machine Learning');
    if (activeFilter === 'java') return p.category.includes('Java') || p.category.includes('Database');
    if (activeFilter === 'web') return p.category.includes('Web');
    return true;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 transition-colors"
            style={{
              backgroundColor: 'rgba(var(--theme-primary-rgb), 0.12)',
              color: 'var(--theme-primary)',
              border: '1px solid rgba(var(--theme-primary-rgb), 0.25)',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real-world systems spanning machine learning cybersecurity models, multi-tier Java banking architectures, and modern web applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  style={isActive ? { background: 'var(--theme-btn-gradient)' } : {}}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="h-full"
              >
                <TiltCard maxTilt={6} glare={true} scale={1.015} className="h-full rounded-3xl">
                  <div
                    className={`flex flex-col justify-between h-full rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-800/90 border shadow-sm hover:shadow-2xl transition-all group ${
                      project.featured
                        ? 'border-[var(--theme-primary)]/40 ring-1 ring-[var(--theme-primary)]/20'
                        : 'border-slate-200/80 dark:border-slate-700/80'
                    }`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{
                            backgroundColor: 'rgba(var(--theme-primary-rgb), 0.12)',
                            color: 'var(--theme-primary)',
                            border: '1px solid rgba(var(--theme-primary-rgb), 0.25)',
                          }}
                        >
                          {project.badge}
                        </span>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {project.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-[var(--theme-primary)] transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        {project.shortDesc}
                      </p>

                      {/* Key Highlights Bullet points */}
                      <div className="space-y-2 mb-6">
                        {project.highlights.slice(0, 3).map((h, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                          >
                            <span className="font-bold shrink-0 mt-0.5" style={{ color: 'var(--theme-primary)' }}>•</span>
                            <span className="line-clamp-2">{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Metrics Pills (if available) */}
                      {project.metrics && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                          {project.metrics.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-750/70 border border-slate-200/60 dark:border-slate-700/60 text-center"
                            >
                              <div className="text-sm font-extrabold" style={{ color: 'var(--theme-primary)' }}>
                                {m.value}
                              </div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between gap-3 pt-2">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="shimmer-button inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                          style={{
                            background: 'var(--theme-btn-gradient)',
                            boxShadow: '0 4px 14px 0 var(--theme-glow)',
                          }}
                        >
                          Explore Case Study
                          <ChevronRight className="w-4 h-4" />
                        </button>

                        <div className="flex items-center gap-2">
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/70 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 hover:text-[var(--theme-primary)] transition-colors"
                              title="View on GitHub"
                              aria-label="View on GitHub"
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
