import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { I18nProvider } from './i18n/context'
import Book from './components/Book'
import LandingPage from './components/LandingPage'
import WeddingInfo from './components/WeddingInfo'
import './App.css'

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/book" 
            element={
              <div className="app">
                <Book />
              </div>
            } 
          />
          <Route path="/wedding-info" element={<WeddingInfo />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
