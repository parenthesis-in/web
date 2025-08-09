import React, { useState } from 'react';
import { Palette, Check, X } from 'lucide-react';
import { useTheme, ThemeType } from './ThemeContext';

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes: { id: ThemeType; name: string; preview: string; colors: string[] }[] = [
    {
      id: 'light',
      name: 'Light',
      preview: 'Clean & Bright',
      colors: ['bg-white', 'bg-blue-500', 'bg-gray-100']
    },
    {
      id: 'dark',
      name: 'Dark',
      preview: 'Classic Dark',
      colors: ['bg-gray-900', 'bg-blue-500', 'bg-gray-800']
    },
    {
      id: 'yellow-dark',
      name: 'Yellow Dark',
      preview: 'Golden Night',
      colors: ['bg-gray-900', 'bg-yellow-500', 'bg-yellow-900']
    },
    {
      id: 'dark-yellow',
      name: 'Dark Yellow',
      preview: 'Amber Glow',
      colors: ['bg-yellow-900', 'bg-yellow-400', 'bg-gray-800']
    },
    {
      id: 'blue-light',
      name: 'Blue Light',
      preview: 'Ocean Breeze',
      colors: ['bg-blue-50', 'bg-blue-600', 'bg-blue-100']
    },
    {
      id: 'purple-dark',
      name: 'Purple Dark',
      preview: 'Royal Night',
      colors: ['bg-gray-900', 'bg-purple-500', 'bg-purple-900']
    },
    {
      id: 'green-light',
      name: 'Green Light',
      preview: 'Nature Fresh',
      colors: ['bg-green-50', 'bg-green-600', 'bg-green-100']
    },
    {
      id: 'orange-dark',
      name: 'Orange Dark',
      preview: 'Sunset Mode',
      colors: ['bg-gray-900', 'bg-orange-500', 'bg-orange-900']
    }
  ];

  const handleThemeSelect = (themeId: ThemeType) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        aria-label="Select theme"
      >
        <Palette size={18} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-black bg-opacity-25"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Theme Selector Panel */}
          <div className="absolute right-0 top-12 z-50 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Choose Theme
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.id}
                  onClick={() => handleThemeSelect(themeOption.id)}
                  className={`relative p-3 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                    theme === themeOption.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  {/* Theme Preview */}
                  <div className="flex space-x-1 mb-2">
                    {themeOption.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full ${color}`}
                      />
                    ))}
                  </div>
                  
                  {/* Theme Info */}
                  <div className="text-left">
                    <div className="font-medium text-gray-900 dark:text-white text-sm">
                      {themeOption.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {themeOption.preview}
                    </div>
                  </div>
                  
                  {/* Selected Indicator */}
                  {theme === themeOption.id && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-blue-500 text-white rounded-full p-1">
                        <Check size={10} />
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Theme preference is saved automatically
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSelector;