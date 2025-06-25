import { useTheme } from 'next-themes'

export const useDarkMode = () => {
  const { theme, setTheme } = useTheme()

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleDarkMode, isDark: theme === 'dark' }
}
