import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Menú', to: '/menu' },
  { label: 'Contacto', href: '#contacto' },
]

function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <Link className={styles.logo} to="/" onClick={close}>
          <span className={styles.logoIcon}>
            <img className={styles.logoImg} src="/favicon.png" alt="" />
          </span>
          La Miel
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Principal">
          {links.map((link) => (
            link.to ? (
              <Link key={link.label} className={styles.link} to={link.to} onClick={close}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} className={styles.link} href={link.href} onClick={close}>
                {link.label}
              </a>
            )
          ))}
          <a className={`${styles.cta} ${styles.ctaPanel}`} href="#reserva" onClick={close}>
            Reservar
          </a>
        </nav>

        <a className={styles.cta} href="#reserva" onClick={close}>
          Reservar
        </a>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header