import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Copy,
  Check,
  Cpu,
  Layers,
  BarChart3,
  Code2,
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen || !project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-10"
        >
          {/* Header Banner */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-cyan-500/10 dark:from-violet-950/40 dark:via-slate-900 dark:to-cyan-950/40 border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-200/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-violet-500/20 text-violet-700 dark:text-violet-300 border border-violet-500/30">
                {project.badge || project.category}
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.period}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.shortDesc}
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-opacity"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  View GitHub Repository
                </a>
              )}
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Project Overview */}
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-500" />
                Comprehensive Overview
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.fullDesc}
              </p>
            </div>

            {/* Key Performance Metrics */}
            {project.metrics && (
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-cyan-500" />
                  Key Benchmarks & Results
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-center"
                    >
                      <div className="text-lg sm:text-xl font-extrabold text-violet-600 dark:text-violet-400">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Highlights */}
            {project.highlights && (
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Technical Highlights & Engineering Contributions
                </h3>
                <ul className="space-y-2.5">
                  {project.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* System Architecture Pipeline */}
            {project.architecture && (
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-500" />
                  System Architecture Pipeline
                </h3>
                <div className="space-y-2.5">
                  {project.architecture.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          {item.step}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Code Snippet Demonstration */}
            {project.codeSnippet && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-purple-500" />
                    Implementation Highlight Snippet
                  </h3>
                  <button
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy Code
                      </>
                    )}
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden bg-slate-950 p-4 border border-slate-800 shadow-inner">
                  <pre className="text-xs font-mono text-slate-200 overflow-x-auto whitespace-pre leading-relaxed">
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <span className="block text-xs font-semibold text-slate-400 mb-2">
                Technologies & Frameworks Utilized:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors"
                    style={{
                      backgroundColor: 'rgba(var(--theme-primary-rgb), 0.12)',
                      color: 'var(--theme-primary)',
                      border: '1px solid rgba(var(--theme-primary-rgb), 0.2)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
