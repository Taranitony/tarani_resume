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

function applyBodyTheme(t: Theme) {
  document.body.style.backgroundColor = themes[t].bg
  document.body.style.color = themes[t].text
  document.documentElement.setAttribute('data-theme', t)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const stored = localStorage.getItem('theme') as Theme | null
  const initial: Theme = stored || 'dark'

  // Apply synchronously before first render to prevent flash
  applyBodyTheme(initial)

  const [theme, setThemeState] = useState<Theme>(initial)
  const [hasChosen, setHasChosenState] = useState<boolean>(!!stored)

  const setTheme = (t: Theme) => {
    // Update DOM first, then state — eliminates the flash
    applyBodyTheme(t)
    setThemeState(t)
    localStorage.setItem('theme', t)
  }

  const setHasChosen = (v: boolean) => {
    setHasChosenState(v)
  }

  useEffect(() => {
    applyBodyTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, tokens: themes[theme], setTheme, hasChosen, setHasChosen }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
