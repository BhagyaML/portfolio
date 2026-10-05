import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSelector({ variant = 'desktop' }) {
  const { themeId, currentTheme, themes, changeTheme, toggleMode, isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mobile drawer inline variant
  if (variant === 'mobile') {
    return (
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-2.5 px-1">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <Palette className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
            <span>Visual Theme (3 Options)</span>
          </div>
          <button
            onClick={toggleMode}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 cursor-pointer active:scale-95"
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
                <span>Dark</span>
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {themes.map((t) => {
            const isSelected = t.id === themeId;
            return (
              <button
                key={t.id}
                onClick={() => changeTheme(t.id)}
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[var(--theme-primary)] bg-[var(--theme-primary)]/10 shadow-sm'
                    : 'border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                }`}
              >
                <span className="text-xl mb-1">{t.emoji}</span>
                <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate w-full">
                  {t.name.split(' ')[0]}
                </span>
                <div className="flex gap-1 mt-1.5">
                  {t.swatches.map((c, i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop Navbar Popover variant
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        id="theme-selector-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200/90 dark:hover:bg-slate-700/90 border border-slate-200/90 dark:border-slate-700/90 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm"
        aria-label="Select website visual theme"
        title="Switch Visual Theme (3 Options)"
      >
        <span className="text-sm">{currentTheme.emoji}</span>
        <span className="hidden xl:inline">{currentTheme.name}</span>
        <div className="flex gap-0.5 items-center">
          {currentTheme.swatches.map((c, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 mt-2.5 w-76 p-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl z-50 text-left"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-[var(--theme-primary)]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Visual Themes
                </span>
              </div>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] font-mono">
                3 Themes
              </span>
            </div>

            {/* Theme Options Cards */}
            <div className="space-y-1.5">
              {themes.map((t) => {
                const isSelected = t.id === themeId;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      changeTheme(t.id);
                      setIsOpen(false);
                    }}
                    className={`w-full group flex items-center justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[var(--theme-primary)] bg-[var(--theme-primary)]/10 shadow-sm'
                        : 'border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-base shadow-sm shrink-0 border border-white/20"
                        style={{
                          background: `linear-gradient(135deg, ${t.primaryColor}, ${t.secondaryColor})`,
                        }}
                      >
                        {t.emoji}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            {t.name}
                          </p>
                          {isSelected && (
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-[var(--theme-primary)] text-white">
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                          {t.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex -space-x-1">
                        {t.swatches.map((color, idx) => (
                          <span
                            key={idx}
                            className="w-2.5 h-2.5 rounded-full border border-white dark:border-slate-900"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      {isSelected ? (
                        <Check className="w-4 h-4 text-[var(--theme-primary)] stroke-[2.5]" />
                      ) : (
                        <div className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Dark/Light Mode Switch */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                Appearance Mode
              </span>
              <button
                onClick={toggleMode}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-all cursor-pointer active:scale-95 border border-slate-200 dark:border-slate-700"
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Light Mode</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
