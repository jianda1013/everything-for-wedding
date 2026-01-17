import { useState } from 'react'
import Book from './components/Book'
import LandingPage from './components/LandingPage'
import './App.css'

function App() {
  const [readingDirection, setReadingDirection] = useState<'forward' | 'backward' | null>(null)

  const handleChooseDirection = (startFromEnd: boolean) => {
    setReadingDirection(startFromEnd ? 'backward' : 'forward')
  }

  if (readingDirection === null) {
    return <LandingPage onChooseDirection={handleChooseDirection} />
  }

  return (
    <div className="app">
      <Book startFromEnd={readingDirection === 'backward'} />
    </div>
  )
}

export default App
