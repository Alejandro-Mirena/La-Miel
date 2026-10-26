import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Ubicacion.module.css'

const sucursales = [
  {
    name: 'La Miel San Diego',
    address: '727Q+MCR, San Diego 2006, Carabobo',
    principal: true,
    map: 'https://www.google.com/maps?q=727Q%2BMCR%20San%20Diego%202006%2C%20Carabobo%2C%20Venezuela&z=15&output=embed',
  },
  {
    name: 'La Miel San Diego Centro',
    address: 'Urb El, Av. Don Julio Centeno, San Diego 2006, Carabobo',
    principal: false,
    map: 'https://www.google.com/maps?q=Av.%20Don%20Julio%20Centeno%2C%20San%20Diego%202006%2C%20Carabobo%2C%20Venezuela&z=15&output=embed',
  },
  {
    name: 'La Miel Mariño',
    address: 'Mariño 6301, Nueva Esparta',
    principal: false,
    map: 'https://www.google.com/maps?q=Mari%C3%B1o%206301%2C%20Nueva%20Esparta%2C%20Venezuela&z=15&output=embed',
  },
]

const horarios = [
  { day: 'Lunes', hours: 'Cerrado', closed: true },
  { day: 'Martes a domingo', hours: '11:00 – 23:00' },
]

const telefono = '+58 000-0000000'

function Ubicacion() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="contacto" className={styles.ubicacion}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>Visítanos</p>
        <h2 className={styles.title}>Ubicación y horarios</h2>
      </div>

      <div className={styles.sucursales}>
        {sucursales.map((sucursal, index) => {
          const isOpen = openIndex === index
          return (
            <article key={sucursal.name} className={styles.sucursal}>
              <button
                type="button"
                className={styles.sucursalHead}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className={styles.sucursalTitle}>
                  <span className={styles.sucursalName}>{sucursal.name}</span>
                  {sucursal.principal && (
                    <span className={styles.principalTag}>Principal</span>
                  )}
                  <span className={styles.chevron} aria-hidden="true">
                    ▾
                  </span>
                </span>
                <span className={styles.sucursalAddress}>{sucursal.address}</span>
              </button>

              <div className={`${styles.map} ${isOpen ? styles.mapOpen : ''}`}>
                <iframe
                  className={styles.mapFrame}
                  src={sucursal.map}
                  title={`Ubicación de ${sucursal.name}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </article>
          )
        })}
      </div>

      <div className={styles.details}>
        <div className={styles.horarios}>
          <h3 className={styles.blockTitle}>Horarios</h3>
          <ul className={styles.horariosList}>
            {horarios.map((horario) => (
              <li key={horario.day} className={styles.horarioRow}>
                <span className={styles.horarioDay}>{horario.day}</span>
                <span
                  className={
                    horario.closed ? styles.horarioClosed : styles.horarioHours
                  }
                >
                  {horario.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contacto}>
          <h3 className={styles.blockTitle}>Contacto</h3>
          <p className={styles.contactText}>
            ¿Reservas o quieres hacer un pedido? Escribenos o llamanos.
          </p>
          <div className={styles.actions}>
            <Link className={styles.btnPrimary} to="/reservar">
              Reservar mesa
            </Link>
            <a className={styles.btnGhost} href={`tel:${telefono.replace(/\s/g, '')}`}>
              Llamar: {telefono}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ubicacion
