import { useTheme } from '../context/ThemeContext.jsx'

export default function Header({ onNavigate }) {
  const { theme, toggleTheme } = useTheme()

  function go(e, to) {
    e.preventDefault()
    onNavigate?.(to)
  }

  return (
    <header className="header">
      <div className="header_inner">
        <h1 style={{ margin: 0, color: 'var(--brand)' }}>Лабораторна робота № 10</h1>
      </div>
      <nav className="nav" aria-label="Головна навігація">
        <a className="nav_link" href="#" onClick={(e) => go(e, 'home')}>
          Головна
        </a>
        <a className="nav_link" href="#" onClick={(e) => go(e, 'about')}>
          Про нас
        </a>
        <a className="nav_link nav_link-cta" href="#" onClick={(e) => e.preventDefault()}>
          Контакти
        </a>
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