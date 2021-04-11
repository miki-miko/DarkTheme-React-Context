import { createContext, useReducer } from 'react'

import ThemeReducer from './ThemeReducer'

const themeState = {
  dark: false,
  toggleTheme: () => {},
}

export const ThemeContext = createContext(themeState)

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, themeState)

  const toggleTheme = () => dispatch({ type: 'toggleMode' })

  return (
    <ThemeContext.Provider
      value={{
        state,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
