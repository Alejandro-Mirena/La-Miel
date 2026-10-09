import styles from './Footer.module.css'
import { DropletIcon } from './icons'

const year = new Date().getFullYear()

const columns = [
  {
    title: 'Menú',
    links: ['Postres', 'Comida de casa', 'Bebidas', 'Promociones'],
  },
  {
    title: 'La Miel',
    links: ['Nuestra historia', 'Sucursales', 'Trabajá con nosotros', 'Contacto'],
  },
]

function Footer() {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a className={styles.logo} href="#inicio">
              <span className={styles.logoIcon}>
                <DropletIcon size={20} />
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
                    <li key={link}>
                      <a className={styles.link} href="#menu">
                        {link}
                      </a>
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