import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Boxes,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  MapPin,
  Calendar,
  BookOpen,
  Award
} from 'lucide-react';
import { personalInfo, coreStrengths } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function About() {
  const [activeTab, setActiveTab] = useState('strengths');

  const strengthIcons = {
    Boxes: <Boxes className="w-6 h-6 text-violet-500" />,
    Cpu: <Cpu className="w-6 h-6 text-cyan-500" />,
    Database: <Database className="w-6 h-6 text-blue-500" />,
    Layers: <Layers className="w-6 h-6 text-emerald-500" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-purple-500" />,
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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
            Background & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A disciplined Computer Science & Engineering graduate committed to crafting reliable, maintainable, and high-performance software.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/80 dark:border-slate-700/80 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('strengths')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'strengths'
                  ? 'bg-white dark:bg-slate-700 shadow-md font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              style={activeTab === 'strengths' ? { color: 'var(--theme-primary)' } : {}}
            >
              Core Engineering Strengths
            </button>
            <button
              onClick={() => setActiveTab('journey')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'journey'
                  ? 'bg-white dark:bg-slate-700 shadow-md font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              style={activeTab === 'journey' ? { color: 'var(--theme-primary)' } : {}}
            >
              My Journey
            </button>
            <button
              onClick={() => setActiveTab('philosophy')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'philosophy'
                  ? 'bg-white dark:bg-slate-700 shadow-md font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              style={activeTab === 'philosophy' ? { color: 'var(--theme-primary)' } : {}}
            >
              Engineering Philosophy
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Tab Area (8 Cols) */}
          <div className="lg:col-span-8">
            {activeTab === 'strengths' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 perspective-card"
              >
                {coreStrengths.map((item) => (
                  <TiltCard key={item.id} maxTilt={7} glare={true} scale={1.02} className="h-full rounded-2xl">
                    <div
                      className="h-full p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-violet-500/50 shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700/60 w-fit mb-4 group-hover:scale-110 transition-transform">
                        {strengthIcons[item.icon]}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                        {item.skills.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/50 text-[11px] font-medium text-slate-600 dark:text-slate-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </motion.div>
            )}

            {activeTab === 'journey' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      From Scholastic Excellence to Software Engineering
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Academic Rigor & Hands-on Development
                    </p>
                  </div>
                </div>

                <p>
                  My educational journey began with a strong interest in science and analytical thinking. I completed my schooling at <strong className="text-slate-900 dark:text-white">Z.P.H. Girls High School, Chandragiri</strong> with a near-perfect <strong className="text-violet-600 dark:text-violet-400">9.7 / 10.0 GPA</strong>, followed by intermediate studies at <strong className="text-slate-900 dark:text-white">Sri Chaitanya Junior College, Tirupati</strong>, scoring an exceptional <strong className="text-violet-600 dark:text-violet-400">961 / 1000 (96.1%)</strong> in Mathematics, Physics, and Chemistry.
                </p>

                <p>
                  Driven by a desire to build real-world software, I pursued a <strong className="text-slate-900 dark:text-white">B.Tech in Computer Science and Engineering</strong> at <strong className="text-slate-900 dark:text-white">Gokula Krishna College of Engineering</strong>, maintaining a top-tier <strong className="text-emerald-600 dark:text-emerald-400">8.23 / 10.0 CGPA</strong>.
                </p>

                <p>
                  During my academic years, I expanded from foundational coursework into practical industry applications—interning as a <strong className="text-slate-900 dark:text-white">Software Developer at Invezoro</strong> where I engineered an end-to-end Java & MySQL Bank Account Management System, and conducting research on <strong className="text-slate-900 dark:text-white">Android Malware Detection using Machine Learning</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-750 border border-slate-200/60 dark:border-slate-700/60">
                    <p className="text-xs text-slate-500">Degree</p>
                    <p className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">B.Tech CSE (2022-2026)</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-750 border border-slate-200/60 dark:border-slate-700/60">
                    <p className="text-xs text-slate-500">Undergrad CGPA</p>
                    <p className="font-bold text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm">8.23 / 10.0</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-750 border border-slate-200/60 dark:border-slate-700/60">
                    <p className="text-xs text-slate-500">Specialization</p>
                    <p className="font-bold text-violet-600 dark:text-violet-400 text-xs sm:text-sm">Software Dev & ML</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'philosophy' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-600 shrink-0 h-fit">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        Code for Reliability and Clarity
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        I believe software should be written first for maintainability and correctness. Clean abstraction, adherence to OOP design principles, and comprehensive exception handling save hours of downstream debugging.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 shrink-0 h-fit">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        Data Integrity as First-Class Priority
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        Whether working with MySQL JDBC transactions or Android security dataset preprocessing, data must remain normalized, atomic, and sanitized against corruption or vulnerabilities.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0 h-fit">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        Relentless Curiosity & Collaborative Mindset
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        Continuous learning is at the heart of my work—from earning NPTEL certifications in Cloud Computing and Advanced Computer Architecture to exploring machine learning algorithms and collaborating in agile team sprints.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Quick Snapshot Card (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600/5 via-indigo-600/5 to-cyan-500/5 dark:from-violet-950/30 dark:via-slate-900/60 dark:to-cyan-950/30 border border-slate-200 dark:border-slate-700/80 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-violet-500" />
                Profile Snapshot
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-slate-400 text-xs">College</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {personalInfo.college}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-slate-400 text-xs">Degree & CGPA</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      B.Tech CSE — <strong className="text-emerald-500">8.23 / 10.0</strong>
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-slate-400 text-xs">Graduation</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Class of 2026
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-slate-400 text-xs">Location</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700/80">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  {personalInfo.statusText}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
