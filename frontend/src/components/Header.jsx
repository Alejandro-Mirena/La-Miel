import { useState } from 'react'
import styles from './Header.module.css'
import { DropletIcon } from './icons'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Menú', href: '#menu' },
  { label: 'Contacto', href: '#contacto' },
]

function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <a className={styles.logo} href="#inicio" onClick={close}>
          <span className={styles.logoIcon}>
            <DropletIcon size={20} />
          </span>
          La Miel
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} className={styles.link} href={link.href} onClick={close}>
              {link.label}
            </a>
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