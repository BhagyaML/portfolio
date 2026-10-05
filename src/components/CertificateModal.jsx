import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Award,
  Calendar,
  Building,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function CertificateModal({ certId, isOpen, onClose }) {
  if (!isOpen || !certId) return null;

  const cert = certificationsData.find((c) => c.id === certId) || certificationsData[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-violet-600/15 via-indigo-600/15 to-cyan-500/15 dark:from-violet-950/40 dark:to-cyan-950/40 border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-200/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                {cert.status}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Year: {cert.year}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {cert.title}
            </h3>
            <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mt-1 flex items-center gap-1.5">
              <Building className="w-4 h-4" />
              {cert.issuer}
            </p>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Credential Description & Scope
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Competencies & Knowledge Verified
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cert.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Footer Note */}
            <div className="p-4 rounded-2xl bg-violet-50/50 dark:bg-violet-950/20 border border-violet-200/60 dark:border-violet-800/40 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Recipient: Thirunam Bhagyasri
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
                  Verified Academic & Professional Achievement Record
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-violet-600 text-white hover:bg-violet-700 transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
