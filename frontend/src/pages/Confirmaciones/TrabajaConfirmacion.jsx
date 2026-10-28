import { Link } from 'react-router-dom'
import styles from '../TrabajaConNosotros/TrabajaConNosotros.module.css'

function TrabajaConfirmacion({ nombre, puesto }) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Únete al equipo</p>
          <h1 className={styles.title}>¡Postulación enviada!</h1>
          <p className={styles.lead}>
            Gracias {nombre}, recibimos tu postulación para {puesto}.
          </p>
          <p className={styles.lead}>
            Revisaremos tu información y te contactaremos pronto.
          </p>
          <div className={styles.actions} style={{ marginTop: '2rem', justifyContent: 'center' }}>
            <Link className={styles.nextButton} to="/">
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrabajaConfirmacion
