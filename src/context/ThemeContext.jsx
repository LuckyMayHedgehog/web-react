import { createContext, useContext, useState, useMemo } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children, initial = 'light' }) {
  const [theme, setTheme] = useState(initial)

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  // Кешуємо об'єкт контексту, щоб дочірні компоненти рендерилися повторно лише при зміні theme
  const value = useMemo(() => ({ theme, toggleTheme }), [theme])

  return (
    <div data-theme={theme} className="app-theme-root">
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

// Кастомний хук для безпечного доступу до контексту
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme повинна використовуватися тільки всередині ThemeProvider')
  }
  return ctx
}   