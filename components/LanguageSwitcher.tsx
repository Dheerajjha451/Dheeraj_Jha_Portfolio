'use client';

import { useState } from 'react';
import { supportedLocales, getLocaleInfo, getLocalePath, type SupportedLocale } from '@/lib/locale';

interface LanguageSwitcherProps {
  currentLocale?: SupportedLocale;
  className?: string;
}

export default function LanguageSwitcher({ 
  currentLocale = 'en-US', 
  className = '' 
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentLocaleInfo = getLocaleInfo(currentLocale);

  const handleLocaleChange = (locale: SupportedLocale) => {
    const path = getLocalePath(locale);
    const currentPath = window.location.pathname;
    
    const cleanPath = currentPath.replace(/^\/(en-gb|de|ar|nl|fr|es|it|pt|sv|da|no|fi|de-at|de-ch|ar-ae|nl-be|fr-be|fr-ch)/, '');
    
    window.location.href = `${path}${cleanPath}`;
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Select language"
      >
        <span className="text-lg">{currentLocaleInfo.flag}</span>
        <span className="hidden sm:inline">{currentLocaleInfo.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-64 bg-black border border-gray-700 rounded-md shadow-lg z-20 max-h-96 overflow-y-auto">
            <div className="py-1">
              {supportedLocales.map((locale) => (
                <button
                  key={locale.code}
                  onClick={() => handleLocaleChange(locale.code)}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 hover:bg-gray-800 transition-colors duration-200 ${
                    locale.code === currentLocale ? 'bg-gray-800 text-white' : 'text-gray-300'
                  }`}
                  dir={locale.dir}
                >
                  <span className="text-lg">{locale.flag}</span>
                  <span>{locale.name}</span>
                  {locale.code === currentLocale && (
                    <svg className="w-4 h-4 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
