import { Link } from 'react-router-dom'
import styles from './Cta.module.css'

function Cta() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <p className={styles.eyebrow}>Te esperamos</p>
        <h2 className={styles.title}>¿Te guardamos una mesa?</h2>
        <p className={styles.text}>
          Cuéntanos cuándo vienes y te reservamos el mejor lugar. También puedes
          pedir para llevar.
        </p>
        <div className={styles.actions}>
          <Link className={styles.btnPrimary} to="/#reserva">
            Reservar mesa
          </Link>
          <Link className={styles.btnGhost} to="/menu">
            Ver el menú
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
