import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = [
  {
    id: 'cosmic',
    name: 'Cosmic Violet',
    tagline: 'Cyber Nebula & Electric Cyan',
    emoji: '🌌',
    badge: 'Signature',
    primaryColor: '#8b5cf6',
    secondaryColor: '#06b6d4',
    accentColor: '#6366f1',
    primaryRgb: '139, 92, 246',
    secondaryRgb: '6, 182, 212',
    accentRgb: '99, 102, 241',
    previewGradient: 'from-violet-500 via-indigo-500 to-cyan-400',
    swatches: ['#8b5cf6', '#6366f1', '#06b6d4'],
    dark: {
      bgMain: '#0b0f19',
      bgSecondary: '#0f172a',
      cardBg: 'rgba(15, 23, 42, 0.75)',
      cardBorder: 'rgba(255, 255, 255, 0.08)',
      borderGlow: 'rgba(139, 92, 246, 0.35)',
      glow: 'rgba(139, 92, 246, 0.25)',
      textGradient: 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 50%, #818cf8 100%)',
      btnGradient: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #06b6d4 100%)',
    },
    light: {
      bgMain: '#f8fafc',
      bgSecondary: '#f1f5f9',
      cardBg: 'rgba(255, 255, 255, 0.85)',
      cardBorder: 'rgba(139, 92, 246, 0.15)',
      borderGlow: 'rgba(139, 92, 246, 0.25)',
      glow: 'rgba(139, 92, 246, 0.15)',
      textGradient: 'linear-gradient(135deg, #7c3aed 0%, #0284c7 50%, #4f46e5 100%)',
      btnGradient: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #0284c7 100%)',
    },
    particles: {
      hues: [265, 195],
      filament: 'rgba(139, 92, 246, ',
    },
    ambientOrbs: [
      'rgba(139, 92, 246, 0.22)',
      'rgba(6, 182, 212, 0.18)',
      'rgba(99, 102, 241, 0.15)',
    ],
  },
  {
    id: 'emerald',
    name: 'Emerald Matrix',
    tagline: 'Cyber Jade & Electric Mint',
    emoji: '⚡',
    badge: 'High-Tech',
    primaryColor: '#10b981',
    secondaryColor: '#14b8a6',
    accentColor: '#06b6d4',
    primaryRgb: '16, 185, 129',
    secondaryRgb: '20, 184, 166',
    accentRgb: '6, 182, 212',
    previewGradient: 'from-emerald-400 via-teal-500 to-cyan-400',
    swatches: ['#10b981', '#14b8a6', '#06b6d4'],
    dark: {
      bgMain: '#041410',
      bgSecondary: '#07231c',
      cardBg: 'rgba(6, 29, 23, 0.75)',
      cardBorder: 'rgba(255, 255, 255, 0.08)',
      borderGlow: 'rgba(16, 185, 129, 0.35)',
      glow: 'rgba(16, 185, 129, 0.25)',
      textGradient: 'linear-gradient(135deg, #34d399 0%, #2dd4bf 50%, #38bdf8 100%)',
      btnGradient: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #0284c7 100%)',
    },
    light: {
      bgMain: '#f0fdf4',
      bgSecondary: '#e6f7ef',
      cardBg: 'rgba(255, 255, 255, 0.85)',
      cardBorder: 'rgba(16, 185, 129, 0.15)',
      borderGlow: 'rgba(16, 185, 129, 0.25)',
      glow: 'rgba(16, 185, 129, 0.15)',
      textGradient: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #0284c7 100%)',
      btnGradient: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #0284c7 100%)',
    },
    particles: {
      hues: [158, 178],
      filament: 'rgba(16, 185, 129, ',
    },
    ambientOrbs: [
      'rgba(16, 185, 129, 0.22)',
      'rgba(20, 184, 166, 0.18)',
      'rgba(6, 182, 212, 0.15)',
    ],
  },
  {
    id: 'sunset',
    name: 'Sunset Amber',
    tagline: 'Velvet Twilight & Solar Rose',
    emoji: '🌅',
    badge: 'Solar Luxe',
    primaryColor: '#f43f5e',
    secondaryColor: '#f59e0b',
    accentColor: '#fb923c',
    primaryRgb: '244, 63, 94',
    secondaryRgb: '245, 158, 11',
    accentRgb: '251, 146, 60',
    previewGradient: 'from-rose-500 via-amber-500 to-orange-400',
    swatches: ['#f43f5e', '#fb923c', '#f59e0b'],
    dark: {
      bgMain: '#140b16',
      bgSecondary: '#1d0f20',
      cardBg: 'rgba(28, 14, 30, 0.75)',
      cardBorder: 'rgba(255, 255, 255, 0.08)',
      borderGlow: 'rgba(244, 63, 94, 0.35)',
      glow: 'rgba(244, 63, 94, 0.25)',
      textGradient: 'linear-gradient(135deg, #fb7185 0%, #fb923c 50%, #f59e0b 100%)',
      btnGradient: 'linear-gradient(135deg, #e11d48 0%, #ea580c 50%, #d97706 100%)',
    },
    light: {
      bgMain: '#fff7ed',
      bgSecondary: '#ffedd5',
      cardBg: 'rgba(255, 255, 255, 0.85)',
      cardBorder: 'rgba(244, 63, 94, 0.15)',
      borderGlow: 'rgba(244, 63, 94, 0.25)',
      glow: 'rgba(244, 63, 94, 0.15)',
      textGradient: 'linear-gradient(135deg, #e11d48 0%, #ea580c 50%, #d97706 100%)',
      btnGradient: 'linear-gradient(135deg, #e11d48 0%, #ea580c 50%, #d97706 100%)',
    },
    particles: {
      hues: [348, 38],
      filament: 'rgba(244, 63, 94, ',
    },
    ambientOrbs: [
      'rgba(244, 63, 94, 0.22)',
      'rgba(245, 158, 11, 0.18)',
      'rgba(251, 146, 60, 0.15)',
    ],
  },
];

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  // Theme ID state: 'cosmic', 'emerald', 'sunset'
  const [themeId, setThemeId] = useState(() => {
    return localStorage.getItem('bhagyasri_theme') || 'cosmic';
  });

  // Mode state: 'dark' or 'light'
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('bhagyasri_mode') || 'dark';
  });

  // Active theme object
  const currentTheme = THEMES.find((t) => t.id === themeId) || THEMES[0];

  // Apply theme attributes and CSS variables to document root
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Set data-theme attribute
    root.setAttribute('data-theme', themeId);
    body.setAttribute('data-theme', themeId);

    // Set dark mode class
    if (mode === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
      root.classList.remove('light');
      body.classList.remove('light');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      root.classList.add('light');
      body.classList.add('light');
    }

    // Determine current mode values
    const currentModeVals = mode === 'dark' ? currentTheme.dark : currentTheme.light;

    // Inject CSS variables directly on root
    root.style.setProperty('--theme-primary', currentTheme.primaryColor);
    root.style.setProperty('--theme-secondary', currentTheme.secondaryColor);
    root.style.setProperty('--theme-accent', currentTheme.accentColor);
    root.style.setProperty('--theme-primary-rgb', currentTheme.primaryRgb);
    root.style.setProperty('--theme-secondary-rgb', currentTheme.secondaryRgb);
    root.style.setProperty('--theme-accent-rgb', currentTheme.accentRgb);

    root.style.setProperty('--theme-bg-main', currentModeVals.bgMain);
    root.style.setProperty('--theme-bg-secondary', currentModeVals.bgSecondary);
    root.style.setProperty('--theme-card-bg', currentModeVals.cardBg);
    root.style.setProperty('--theme-card-border', currentModeVals.cardBorder);
    root.style.setProperty('--theme-border-glow', currentModeVals.borderGlow);
    root.style.setProperty('--theme-glow', currentModeVals.glow);
    root.style.setProperty('--theme-text-gradient', currentModeVals.textGradient);
    root.style.setProperty('--theme-btn-gradient', currentModeVals.btnGradient);

    // Save to localStorage
    localStorage.setItem('bhagyasri_theme', themeId);
    localStorage.setItem('bhagyasri_mode', mode);
  }, [themeId, mode, currentTheme]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const changeTheme = (newThemeId) => {
    if (THEMES.some((t) => t.id === newThemeId)) {
      setThemeId(newThemeId);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        themeId,
        mode,
        currentTheme,
        themes: THEMES,
        changeTheme,
        setMode,
        toggleMode,
        isDark: mode === 'dark',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
