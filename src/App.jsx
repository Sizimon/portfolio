import { useState } from 'react'
import Hero from './components/Hero'
import { SmoothScroll } from './components/SmoothScroll'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className='bg-MainDark'>
      <SmoothScroll />
    </div>
  )
}

export default App
