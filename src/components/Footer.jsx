export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer_brand">© {currentYear} Lab 9 by Krylovska Varvara</p>
        <p>Побудовано на Vite + React</p>
      </div>
    </footer>
  )
}