import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, useTranslation, defaultLanguage, LANGUAGE_STORAGE_KEY, availableLanguages } from './index'

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Get language from localStorage or use default
function getStoredLanguage(): Language {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }
  
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored && availableLanguages.includes(stored as Language)) {
      return stored as Language
    }
  } catch (error) {
    console.warn('Failed to read language from localStorage:', error)
  }
  
  return defaultLanguage
}

// Save language to localStorage
function saveLanguageToStorage(language: Language) {
  if (typeof window === 'undefined') {
    return
  }
  
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  } catch (error) {
    console.warn('Failed to save language to localStorage:', error)
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getStoredLanguage)
  const { t } = useTranslation(language)

  // Save to localStorage whenever language changes
  useEffect(() => {
    saveLanguageToStorage(language)
  }, [language])

  // Wrapper function to update both state and localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
