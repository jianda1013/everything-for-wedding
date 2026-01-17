import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { availableLanguages, Language } from '../i18n'
import './LandingPage.css'

function LandingPage() {
  const navigate = useNavigate()
  const { t, language, setLanguage } = useI18n()

  const handleChooseDirection = (startFromEnd: boolean) => {
    navigate(`/book?direction=${startFromEnd ? 'backward' : 'forward'}`)
  }

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
  }

  const languageLabels: Record<Language, string> = {
    'en': 'English',
    'zh-TW': '中文'
  }

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="language-switcher">
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              className={`language-button ${language === lang ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang)}
            >
              {languageLabels[lang]}
            </button>
          ))}
        </div>
        <div className="landing-header">
          <h1 className="landing-title">{t('landing.title')}</h1>
          <button
            className="wedding-info-link"
            onClick={() => navigate('/wedding-info')}
          >
            <span className="link-icon">💒</span>
            <span className="link-text">{t('landing.weddingInfoLink')}</span>
          </button>
        </div>
        <p className="landing-subtitle">{t('landing.subtitle')}</p>
        <div className="landing-buttons">
          <button
            className="landing-button landing-button-forward"
            onClick={() => handleChooseDirection(false)}
          >
            <span className="button-icon">📖</span>
            <span className="button-text">{t('landing.startFromBeginning')}</span>
            <span className="button-description">{t('landing.readNinaStory')}</span>
          </button>
          <button
            className="landing-button landing-button-backward"
            onClick={() => handleChooseDirection(true)}
          >
            <span className="button-icon">📕</span>
            <span className="button-text">{t('landing.startFromEnd')}</span>
            <span className="button-description">{t('landing.readJiandaStory')}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
