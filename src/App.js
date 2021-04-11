import './App.css'
import { ThemeContext } from './context/ThemeProvider'
import { useContext } from 'react'

function App() {
  const { state, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`App ${state.dark ? 'darkMode' : ''}`}>
      <h1>{state.dark ? 'Dark Mode' : 'Light Mode'}</h1>
      <p>
        <input
          type='checkbox'
          className={state.dark ? 'toggle dark' : 'toggle'}
          onChange={() => toggleTheme()}
          name='checkbox'
        />
        <span>{state.dark ? 'use Dark Mode' : 'use Light Mode'}</span>
      </p>
    </div>
  )
}

export default App
