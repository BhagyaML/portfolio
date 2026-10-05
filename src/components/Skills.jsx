import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Coffee,
  Database,
  Globe,
  Palette,
  FileCode,
  Boxes,
  Server,
  Binary,
  Brain,
  GitBranch,
  Terminal,
  Code,
  FileSpreadsheet,
  MessageSquare,
  Users,
  Clock,
  Lightbulb,
  Search,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { skillCategories, skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const iconMap = {
    Code2: <Code2 className="w-5 h-5" />,
    Coffee: <Coffee className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
    FileCode: <FileCode className="w-5 h-5" />,
    Boxes: <Boxes className="w-5 h-5" />,
    Server: <Server className="w-5 h-5" />,
    Binary: <Binary className="w-5 h-5" />,
    Brain: <Brain className="w-5 h-5" />,
    GitBranch: <GitBranch className="w-5 h-5" />,
    Terminal: <Terminal className="w-5 h-5" />,
    Code: <Code className="w-5 h-5" />,
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5" />,
    MessageSquare: <MessageSquare className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
    Clock: <Clock className="w-5 h-5" />,
    Lightbulb: <Lightbulb className="w-5 h-5" />,
  };

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory =
        activeCategory === 'all' || skill.category === activeCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
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
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Categorized toolkit encompassing modern languages, database engines, engineering concepts, and collaborative practices.
          </p>
        </div>

        {/* Filter Bar and Search Box */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm w-full md:w-auto">
            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50'
                  }`}
                  style={isActive ? { background: 'var(--theme-btn-gradient)' } : {}}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Java, Python, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)] shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No skills found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs font-semibold hover:underline cursor-pointer"
              style={{ color: 'var(--theme-primary)' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <AnimatePresence>
              {filteredSkills.map((skill) => {
                const isCardSelected = selectedSkill === skill.name;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    key={skill.name}
                    onClick={() => setSelectedSkill(isCardSelected ? null : skill.name)}
                    className={`p-5 rounded-2xl bg-white dark:bg-slate-800/85 border transition-all cursor-pointer group ${
                      isCardSelected
                        ? 'border-[var(--theme-primary)] ring-2 ring-[var(--theme-primary)]/30 shadow-lg'
                        : 'border-slate-200/80 dark:border-slate-700/80 hover:border-[var(--theme-primary)]/50 shadow-sm hover:shadow-md hover:-translate-y-1'
                    }`}
                  >
                    {/* Top Bar: Icon + Level Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-700/60 dark:to-slate-700/30 text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform">
                        {iconMap[skill.icon] || <Code2 className="w-5 h-5" />}
                      </div>
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                        style={{
                          backgroundColor: 'rgba(var(--theme-primary-rgb), 0.12)',
                          color: 'var(--theme-primary)',
                          border: '1px solid rgba(var(--theme-primary-rgb), 0.2)',
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-between">
                      <span>{skill.name}</span>
                      <span className="text-xs font-mono text-slate-400">
                        {skill.percentage}%
                      </span>
                    </h3>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 dark:bg-slate-700/60 rounded-full h-1.5 mb-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color || 'from-violet-500 to-cyan-500'}`}
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3 line-clamp-2">
                      {skill.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {skill.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700/50 text-[10px] font-medium text-slate-600 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
