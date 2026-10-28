import { Link } from 'react-router-dom'
import styles from '../Reserva/Reserva.module.css'

function ReservaConfirmacion({ nombre, personas, fecha, hora, sucursal, telefono }) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Tu momento en La Miel</p>
          <h1 className={styles.title}>¡Reserva enviada!</h1>
          <p className={styles.lead}>
            Gracias {nombre}, recibimos tu solicitud para {personas}{' '}
            {personas === '1' ? 'persona' : 'personas'} el {fecha} a las{' '}
            {hora} en {sucursal}.
          </p>
          <p className={styles.lead}>
            Te contactaremos por WhatsApp al {telefono} para confirmar tu mesa.
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

export default ReservaConfirmacion
