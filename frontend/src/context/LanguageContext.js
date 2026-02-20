import { createContext, useContext, useState, useCallback } from 'react';

const LanguageContext = createContext(null);

const LANGUAGES = [
  { code: 'it', label: 'IT', name: 'Italiano' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Francais' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
];

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('it');

  const changeLanguage = useCallback((lang) => {
    setLanguage(lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
