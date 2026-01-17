import enTranslations from './translations/en.json'
import zhTWTranslations from './translations/zh-TW.json'

export type Language = 'en' | 'zh-TW'

export const translations = {
  en: enTranslations,
  'zh-TW': zhTWTranslations,
}

export const defaultLanguage: Language = 'zh-TW'
export const LANGUAGE_STORAGE_KEY = 'e-monogram-language'

export const availableLanguages: Language[] = ['en', 'zh-TW']

// Helper function to get nested translation value
function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path
}

// Translation hook/function
export function useTranslation(language: Language = defaultLanguage) {
  const t = (key: string): string => {
    return getNestedValue(translations[language], key)
  }

  return { t, language }
}

// Simple translation function for use outside React components
export function translate(key: string, language: Language = defaultLanguage): string {
  return getNestedValue(translations[language], key)
}
