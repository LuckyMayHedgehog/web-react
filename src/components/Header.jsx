import { useTheme } from '../context/ThemeContext.jsx'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <div className="header_inner">
        <h1 style={{ margin: 0, color: 'var(--brand)' }}>Лабораторна робота № 10</h1>
      </div>
      <nav className="nav" aria-label="Головна навігація">
        <a className="nav_link" href="#">Головна</a>
        <a className="nav_link" href="#">Про нас</a>
        <a className="nav_link nav_link-cta" href="#">Контакти</a>
        <div style={{ marginLeft: 'auto', display: 'flex' }}>
          <button
            type="button"
            className="nav_link nav_link-cta"
            onClick={toggleTheme}
            title="Перемикач теми"
            style={{ cursor: 'pointer' }}
          >
            {theme === 'light' ? 'Темна' : 'Світла'}
          </button>
        </div>
      </nav>
    </header>
  )
}