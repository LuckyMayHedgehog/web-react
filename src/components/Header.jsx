export default function Header() {
  return (
    <header className="header">
      <div className="header_inner">
        <h1 style={{ margin: 0, color: 'var(--brand)' }}>Лабораторна робота № 9</h1>
      </div>
      <nav className="nav" aria-label="Головна навігація">
        <a className="nav_link" href="#">Головна</a>
        <a className="nav_link" href="#">Про нас</a>
        <a className="nav_link nav_link-cta" href="#">Контакти</a>
      </nav>
    </header>
  )
}