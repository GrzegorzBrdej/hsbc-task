import React, { useState } from 'react'
import TimezoneSelect from './components/timezone-select'
import './App.css'
import TimeDisplay from './components/time-display'

function App () {
  const [timezone, setTimezone] = useState<string>('')

  const handleTimezoneChange = (selected: string) => {
    setTimezone(selected)
  }

  return (
    <div className='App'>
      <TimezoneSelect onChange={handleTimezoneChange} timezone={timezone} />

      <TimeDisplay timezone={timezone} />
    </div>
  )
}

export default App
