import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Sun, Moon, Sparkles, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function FloatingThemeDock() {
  const { themeId, themes, changeTheme, toggleMode, isDark, currentTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside
      aria-label="Theme Customizer"
      className="fixed bottom-5 right-5 z-40 flex items-center select-none"
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="dock-expanded"
            initial={{ opacity: 0, scale: 0.85, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, x: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xl shadow-black/20"
          >
            {/* Dock Label / Icon */}
            <div className="flex items-center gap-1.5 pl-2.5 pr-1.5 py-1 text-xs font-bold text-slate-700 dark:text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-[var(--theme-primary)] animate-pulse" />
              <span className="hidden sm:inline font-mono text-[11px] text-slate-500 dark:text-slate-400">
                Themes:
              </span>
            </div>

            {/* The 3 Themes */}
            <div className="flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1 rounded-xl">
              {themes.map((t) => {
                const isActive = t.id === themeId;
                return (
                  <button
                    key={t.id}
                    onClick={() => changeTheme(t.id)}
                    className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'text-white shadow-md shadow-[var(--theme-primary)]/20'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                    }`}
                    title={`${t.name} - ${t.tagline}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFloatingThemePill"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: `linear-gradient(135deg, ${t.primaryColor}, ${t.secondaryColor})`,
                        }}
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 text-sm leading-none">{t.emoji}</span>
                    <span className="relative z-10 hidden md:inline text-[11px] font-bold">
                      {t.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Dark/Light Toggle */}
            <button
              onClick={toggleMode}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle dark/light mode"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Minimize button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Collapse theme bar"
              aria-label="Collapse theme bar"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ) : (
          <motion.button
            key="dock-collapsed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xl text-slate-700 dark:text-slate-200 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            title="Expand Theme Switcher (3 Themes)"
            aria-label="Open Theme Switcher"
          >
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center text-xs"
              style={{
                background: `linear-gradient(135deg, ${currentTheme.primaryColor}, ${currentTheme.secondaryColor})`,
              }}
            />
            <Palette className="w-4 h-4 text-[var(--theme-primary)] group-hover:rotate-12 transition-transform" />
            <span className="text-xs font-bold hidden sm:inline">Theme</span>
          </motion.button>
        )}
      </AnimatePresence>
    </aside>
  );
}
