import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { themes, type Theme, type ThemeTokens } from './theme'

interface ThemeContextType {
  theme: Theme
  tokens: ThemeTokens
  setTheme: (t: Theme) => void
  hasChosen: boolean
  setHasChosen: (v: boolean) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  tokens: themes.dark,
  setTheme: () => {},
  hasChosen: false,
  setHasChosen: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const stored = localStorage.getItem('theme') as Theme | null
  const [theme, setThemeState] = useState<Theme>(stored || 'dark')
  const [hasChosen, setHasChosenState] = useState<boolean>(!!stored)

  const setTheme = (t: Theme) => {
    setThemeState(t)
    localStorage.setItem('theme', t)
  }

  const setHasChosen = (v: boolean) => {
    setHasChosenState(v)
  }

  useEffect(() => {
    document.body.style.background = themes[theme].bg
    document.body.style.color = themes[theme].text
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, tokens: themes[theme], setTheme, hasChosen, setHasChosen }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
