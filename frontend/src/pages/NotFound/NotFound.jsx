import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.page}>
      <section className={styles.content}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Página no encontrada</h1>
        <p className={styles.text}>
          La página que buscas no existe o fue movida. Volvamos al inicio para seguir
          disfrutando de <span className={styles.highlight}>La Miel</span>.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} to="/">
            Ir al inicio
          </Link>
          <Link className={styles.ghost} to="/menu">
            Ver el menú
          </Link>
        </div>
      </section>
    </div>
  )
}

export default NotFound
