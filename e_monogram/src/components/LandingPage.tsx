import './LandingPage.css'

interface LandingPageProps {
  onChooseDirection: (startFromEnd: boolean) => void
}

function LandingPage({ onChooseDirection }: LandingPageProps) {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">E-Monogram</h1>
        <p className="landing-subtitle">Choose how you'd like to begin reading</p>
        <div className="landing-buttons">
          <button
            className="landing-button landing-button-forward"
            onClick={() => onChooseDirection(false)}
          >
            <span className="button-icon">📖</span>
            <span className="button-text">Start from Beginning</span>
            <span className="button-description">Read Nina's story</span>
          </button>
          <button
            className="landing-button landing-button-backward"
            onClick={() => onChooseDirection(true)}
          >
            <span className="button-icon">📕</span>
            <span className="button-text">Start from End</span>
            <span className="button-description">Read Jianda's story</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
