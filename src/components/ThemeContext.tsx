import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 
  | 'light' 
  | 'dark' 
  | 'yellow-dark' 
  | 'dark-yellow' 
  | 'blue-light' 
  | 'purple-dark' 
  | 'green-light' 
  | 'orange-dark';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isDark: boolean;
  getAccentColor: () => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeConfig = {
  light: {
    isDark: false,
    accent: 'blue',
    classes: 'theme-light'
  },
  dark: {
    isDark: true,
    accent: 'blue',
    classes: 'theme-dark'
  },
  'yellow-dark': {
    isDark: true,
    accent: 'yellow',
    classes: 'theme-yellow-dark'
  },
  'dark-yellow': {
    isDark: true,
    accent: 'yellow',
    classes: 'theme-dark-yellow'
  },
  'blue-light': {
    isDark: false,
    accent: 'blue',
    classes: 'theme-blue-light'
  },
  'purple-dark': {
    isDark: true,
    accent: 'purple',
    classes: 'theme-purple-dark'
  },
  'green-light': {
    isDark: false,
    accent: 'green',
    classes: 'theme-green-light'
  },
  'orange-dark': {
    isDark: true,
    accent: 'orange',
    classes: 'theme-orange-dark'
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as ThemeType;
      if (saved && themeConfig[saved]) {
        return saved;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    Object.values(themeConfig).forEach(config => {
      root.classList.remove(config.classes);
    });
    
    // Add current theme classes
    const config = themeConfig[theme];
    root.classList.add(config.classes);
    
    // Add dark class for compatibility
    if (config.isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  const getAccentColor = () => {
    return themeConfig[theme].accent;
  };

  const isDark = themeConfig[theme].isDark;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, getAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};