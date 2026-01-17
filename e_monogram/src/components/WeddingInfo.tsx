import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import weddingInfo from '../configs/weddingInfo.json'
import './WeddingInfo.css'

function WeddingInfo() {
  const navigate = useNavigate()
  const { t, language } = useI18n()

  // Format date from YYYY-MM-DD to a readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const locale = language === 'zh-TW' ? 'zh-TW' : 'en-US'
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: weddingInfo.TZ === 'UTC+8' ? 'Asia/Taipei' : undefined
    })
  }

  // Create Google Maps embed URL from coordinates (using standard embed format)
  const mapEmbedUrl = `https://www.google.com/maps?q=${weddingInfo.hotel.map.latitude},${weddingInfo.hotel.map.longitude}&hl=${language === 'zh-TW' ? 'zh-TW' : 'en'}&z=15&output=embed`

  return (
    <div className="wedding-info-page">
      <button className="wedding-info-back-button" onClick={() => navigate('/')}>
        {t('weddingInfo.backButton')}
      </button>

      <div className="wedding-info-container">
        <h1 className="wedding-info-title">{t('weddingInfo.title')}</h1>

        <div className="wedding-info-section">
          <h2 className="section-title">{t('weddingInfo.dateTime.sectionTitle')}</h2>
          <div className="info-item">
            <span className="info-label">{t('weddingInfo.dateTime.weddingDate')}</span>
            <span className="info-value">{formatDate(weddingInfo.date)}</span>
          </div>
          <div className="info-item">
            <span className="info-label">{t('weddingInfo.dateTime.ceremonyTime')}</span>
            <span className="info-value">{weddingInfo.ceremonyTime}</span>
          </div>
          <div className="info-item">
            <span className="info-label">{t('weddingInfo.dateTime.receptionTime')}</span>
            <span className="info-value">{weddingInfo.receptionTime}</span>
          </div>
        </div>

        <div className="wedding-info-section">
          <h2 className="section-title">{t('weddingInfo.location.sectionTitle')}</h2>
          <div className="info-item">
            <span className="info-label">{t('weddingInfo.location.hotelVenue')}</span>
            <span className="info-value">{weddingInfo.hotel.location.name}</span>
          </div>
          <div className="info-item">
            <span className="info-label">{t('weddingInfo.location.address')}</span>
            <span className="info-value">{weddingInfo.hotel.location.address}</span>
          </div>
          <div className="map-container">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('weddingInfo.location.mapTitle')}
            ></iframe>
          </div>
        </div>

        <div className="wedding-info-section">
          <h2 className="section-title">{t('weddingInfo.traffic.sectionTitle')}</h2>
          <div className="traffic-content">
            {weddingInfo.hotel.traffic.extra_instructions && (
              <p className="traffic-instructions">{weddingInfo.hotel.traffic.extra_instructions}</p>
            )}
            <ul>
              {weddingInfo.hotel.traffic.suggestions.map((suggestion, index) => (
                <li key={index}>
                  <strong>{suggestion.title}:</strong> {suggestion.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="wedding-info-section">
          <h2 className="section-title">{t('weddingInfo.dressCode.sectionTitle')}</h2>
          <div className="dress-code-content">
            <p>{t('weddingInfo.dressCode.request')}</p>
            <p className="dress-code-emphasis">{weddingInfo.dress_code}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeddingInfo
