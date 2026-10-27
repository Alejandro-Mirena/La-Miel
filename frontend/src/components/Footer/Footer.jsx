import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const year = new Date().getFullYear()

const columns = [
  {
    title: 'Menú',
    links: [
      { label: 'Postres', to: '/menu#postres' },
      { label: 'Comida de casa', to: '/menu#comida' },
      { label: 'Bebidas', to: '/menu#bebidas' },
      { label: 'Promociones', to: '/menu#promociones' },
    ],
  },
  {
    title: 'La Miel',
    links: [
      { label: 'Nuestra historia', to: '/nosotros#historia' },
      { label: 'Sucursales', to: '/#contacto' },
      { label: 'Trabaja con nosotros', to: '/trabaja-con-nosotros' },
      { label: 'Contacto', href: '/#contacto' },
    ],
  },
]

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a className={styles.logo} href="/">
              <span className={styles.logoIcon}>
                <img className={styles.logoImg} src="/favicon.png" alt="" />
              </span>
              La Miel
            </a>
            <p className={styles.tagline}>
              Postres, comida casera y reservas en un solo lugar, para que cada
              visita sepa a hogar.
            </p>
          </div>

          <div className={styles.cols}>
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className={styles.colTitle}>{column.title}</h4>
                <ul className={styles.list}>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.to ? (
                        <Link className={styles.link} to={link.to}>
                          {link.label}
                        </Link>
                      ) : (
                        <a className={styles.link} href={link.href}>
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} La Miel. Todos los derechos reservados.</span>
          <span>Hecho por Alejandro Mirena</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer