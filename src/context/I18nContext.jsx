import { createContext, useState, use } from 'react';

const I18nContext = createContext({
  language: 'he',
  changeLanguage: (_newLang) => {},
});

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState('he');

  const changeLanguage = (newLang) => {
    const allowedLanguages = ['he', 'en', 'fr'];
    if (allowedLanguages.includes(newLang)) {
      setLanguage(newLang);
    }
  };

  return (
    <I18nContext value={{ language, changeLanguage }}>
      {children}
    </I18nContext>
  );
}

export function useI18nContext() {
  const context = use(I18nContext);
  if (!context) {
    throw new Error('useI18nContext must be used within an I18nProvider');
  }
  return context;
}