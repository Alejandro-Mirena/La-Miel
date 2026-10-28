import { useEffect, useRef, useState } from 'react'
import { notificarError, notificarExito } from '../../components/Toast/notificaciones'
import ReservaConfirmacion from '../Confirmaciones/ReservaConfirmacion'
import styles from './Reserva.module.css'

const pasos = ['Tu visita', 'Tus datos', 'Confirma']
const sucursales = [
  'La Miel San Diego',
  'La Miel San Diego Centro',
  'La Miel Mariño',
]

function obtenerFechaLocal() {
  const hoy = new Date()
  const año = hoy.getFullYear()
  const mes = String(hoy.getMonth() + 1).padStart(2, '0')
  const dia = String(hoy.getDate()).padStart(2, '0')
  return `${año}-${mes}-${dia}`
}

function Reserva() {
  const [paso, setPaso] = useState(0)
  const [errorHorario, setErrorHorario] = useState('')
  const [errorEnvio, setErrorEnvio] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [exito, setExito] = useState(false)
  const errorEnvioRef = useRef(null)
  const fechaMinima = obtenerFechaLocal()
  const [reserva, setReserva] = useState({
    sucursal: '',
    fecha: '',
    hora: '',
    personas: '',
    nombre: '',
    telefono: '',
    nota: '',
  })

  useEffect(() => {
    if (errorEnvio) {
      errorEnvioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [errorEnvio])

  const actualizar = (event) => {
    const { name, value } = event.target

    if (name === 'fecha' && value) {
      if (value < fechaMinima) {
        setReserva((actual) => ({ ...actual, fecha: '' }))
        setErrorHorario('Selecciona hoy o una fecha futura.')
        return
      }

      const [año, mes, dia] = value.split('-').map(Number)
      if (new Date(año, mes - 1, dia).getDay() === 1) {
        setReserva((actual) => ({ ...actual, fecha: '' }))
        setErrorHorario('Los lunes estamos cerrados. Elige otro día.')
        return
      }

      setErrorHorario('')
    }

    if (name === 'hora' && value) {
      if (value < '11:00' || value > '23:00') {
        setReserva((actual) => ({ ...actual, hora: '' }))
        setErrorHorario('Nuestro horario es de martes a domingo, de 11:00 a 23:00.')
        return
      }

      setErrorHorario('')
    }

    setReserva((actual) => ({ ...actual, [name]: value }))
  }

  const avanzar = (event) => {
    event.preventDefault()

    if (paso === 0) {
      if (!reserva.fecha || !reserva.hora) {
        setErrorHorario('Selecciona una fecha y una hora dentro de nuestro horario.')
        return
      }

      const [año, mes, dia] = reserva.fecha.split('-').map(Number)
      const fechaSeleccionada = new Date(año, mes - 1, dia)
      if (reserva.fecha < fechaMinima) {
        setErrorHorario('Selecciona hoy o una fecha futura.')
        return
      }
      if (fechaSeleccionada.getDay() === 1) {
        setErrorHorario('Los lunes estamos cerrados. Elige otro día.')
        return
      }
      if (reserva.hora < '11:00' || reserva.hora > '23:00') {
        setErrorHorario('Nuestro horario es de martes a domingo, de 11:00 a 23:00.')
        return
      }
    }

    setErrorHorario('')
    setPaso((actual) => Math.min(actual + 1, pasos.length - 1))
  }

  const retroceder = () => {
    setErrorHorario('')
    setPaso((actual) => Math.max(actual - 1, 0))
  }

  const enviarReserva = async () => {
    setErrorEnvio('')
    setEnviando(true)

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
      const respuesta = await fetch(`${apiUrl}/reservas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reserva),
      })

      const datos = await respuesta.json()

      if (!respuesta.ok || !datos.success) {
        throw new Error(datos.message || 'No se pudo enviar la reserva')
      }

      notificarExito('Reserva enviada correctamente')
      setExito(true)
    } catch (error) {
      setErrorEnvio(error.message)
      notificarError(error.message)
    } finally {
      setEnviando(false)
    }
  }

  if (exito) {
    return (
      <ReservaConfirmacion
        nombre={reserva.nombre}
        personas={reserva.personas}
        fecha={reserva.fecha}
        hora={reserva.hora}
        sucursal={reserva.sucursal}
        telefono={reserva.telefono}
      />
    )
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Tu momento en La Miel</p>
          <h1 className={styles.title}>Hagamos espacio para ti</h1>
          <p className={styles.lead}>
            Elige dónde y cuándo nos visitas. En unos pocos pasos tendrás tu
            reserva lista.
          </p>
          <div className={styles.heroNote}>
            <span className={styles.heroIcon} aria-hidden="true">✦</span>
            Buena comida, café y una mesa esperándote.
          </div>
        </div>
      </section>

      <section className={styles.section} aria-label="Formulario de reserva">
        <div className={styles.layout}>
          <div className={styles.formColumn}>
            <ol className={styles.progress} aria-label="Pasos de la reserva">
              {pasos.map((nombre, index) => (
                <li
                  key={nombre}
                  className={`${styles.progressStep} ${
                    index === paso
                      ? styles.progressCurrent
                      : index < paso
                        ? styles.progressComplete
                        : ''
                  }`}
                  aria-current={index === paso ? 'step' : undefined}
                >
                  <span className={styles.progressNumber}>
                    {index < paso ? '✓' : index + 1}
                  </span>
                  <span className={styles.progressLabel}>{nombre}</span>
                </li>
              ))}
            </ol>

            <form className={styles.card} onSubmit={avanzar}>
              {paso === 0 && (
                <div className={styles.stepContent}>
                  <div className={styles.stepHead}>
                    <p className={styles.stepEyebrow}>Paso 1 de 3</p>
                    <h2 className={styles.stepTitle}>¿Cuándo nos visitas?</h2>
                    <p className={styles.stepDescription}>
                      Elige tu sucursal y el momento que mejor te venga.
                    </p>
                  </div>

                  <div className={styles.fields}>
                    <label className={`${styles.field} ${styles.fullField}`}>
                      <span className={styles.label}>Sucursal</span>
                      <select
                        className={styles.input}
                        name="sucursal"
                        value={reserva.sucursal}
                        onChange={actualizar}
                        required
                      >
                        <option value="" disabled>Selecciona una sucursal</option>
                        {sucursales.map((sucursal) => (
                          <option key={sucursal} value={sucursal}>{sucursal}</option>
                        ))}
                      </select>
                    </label>
                    <label className={styles.field}>
                      <span className={styles.label}>Fecha</span>
                      <input
                        className={styles.input}
                        type="date"
                        name="fecha"
                        min={fechaMinima}
                        value={reserva.fecha}
                        onChange={actualizar}
                        aria-describedby="horario-reserva"
                        required
                      />
                    </label>
                    <label className={styles.field}>
                      <span className={styles.label}>Hora</span>
                      <input
                        className={styles.input}
                        type="time"
                        name="hora"
                        min="11:00"
                        max="23:00"
                        step="1800"
                        value={reserva.hora}
                        onChange={actualizar}
                        aria-describedby="horario-reserva"
                        required
                      />
                    </label>
                    <label className={`${styles.field} ${styles.fullField}`}>
                      <span className={styles.label}>¿Cuántas personas?</span>
                      <select
                        className={styles.input}
                        name="personas"
                        value={reserva.personas}
                        onChange={actualizar}
                        required
                      >
                        <option value="" disabled>Selecciona la cantidad</option>
                        {[1, 2, 3, 4, 5, 6].map((cantidad) => (
                          <option key={cantidad} value={cantidad}>
                            {cantidad} {cantidad === 1 ? 'persona' : 'personas'}
                          </option>
                        ))}
                        <option value="7 o más">7 o más personas</option>
                      </select>
                    </label>
                  </div>
                  <p
                    className={errorHorario ? styles.validationError : styles.scheduleHint}
                    id="horario-reserva"
                    aria-live="polite"
                  >
                    {errorHorario || 'Horario: martes a domingo, de 11:00 a 23:00. Cerrado los lunes.'}
                  </p>
                </div>
              )}

              {paso === 1 && (
                <div className={styles.stepContent}>
                  <div className={styles.stepHead}>
                    <p className={styles.stepEyebrow}>Paso 2 de 3</p>
                    <h2 className={styles.stepTitle}>¿A nombre de quién?</h2>
                    <p className={styles.stepDescription}>
                      Déjanos tus datos para tener todo preparado a tu llegada.
                    </p>
                  </div>

                  <div className={styles.fields}>
                    <label className={`${styles.field} ${styles.fullField}`}>
                      <span className={styles.label}>Nombre y apellido</span>
                      <input
                        className={styles.input}
                        type="text"
                        name="nombre"
                        placeholder="Tu nombre completo"
                        autoComplete="name"
                        value={reserva.nombre}
                        onChange={actualizar}
                        required
                      />
                    </label>
                    <label className={`${styles.field} ${styles.fullField}`}>
                      <span className={styles.label}>Teléfono / WhatsApp</span>
                      <input
                        className={styles.input}
                        type="tel"
                        name="telefono"
                        placeholder="Tu número de contacto"
                        autoComplete="tel"
                        value={reserva.telefono}
                        onChange={actualizar}
                        required
                      />
                    </label>
                    <label className={`${styles.field} ${styles.fullField}`}>
                      <span className={styles.label}>Nota para el equipo <span className={styles.optional}>Opcional</span></span>
                      <textarea
                        className={`${styles.input} ${styles.textarea}`}
                        name="nota"
                        rows="3"
                        placeholder="¿Celebras algo o tienes alguna petición?"
                        value={reserva.nota}
                        onChange={actualizar}
                      />
                    </label>
                  </div>
                </div>
              )}

              {paso === 2 && (
                <div className={styles.stepContent}>
                  <div className={styles.stepHead}>
                    <p className={styles.stepEyebrow}>Paso 3 de 3</p>
                    <h2 className={styles.stepTitle}>Revisa tu visita</h2>
                    <p className={styles.stepDescription}>
                      Así tenemos anotada tu solicitud.
                    </p>
                  </div>
                  <dl className={styles.summary}>
                    <div className={styles.summaryRow}>
                      <dt>Sucursal</dt><dd>{reserva.sucursal}</dd>
                    </div>
                    <div className={styles.summaryRow}>
                      <dt>Fecha</dt><dd>{reserva.fecha}</dd>
                    </div>
                    <div className={styles.summaryRow}>
                      <dt>Hora</dt><dd>{reserva.hora}</dd>
                    </div>
                    <div className={styles.summaryRow}>
                      <dt>Personas</dt><dd>{reserva.personas}</dd>
                    </div>
                    <div className={styles.summaryRow}>
                      <dt>A nombre de</dt><dd>{reserva.nombre}</dd>
                    </div>
                    <div className={styles.summaryRow}>
                      <dt>Teléfono</dt><dd>{reserva.telefono}</dd>
                    </div>
                    {reserva.nota && (
                      <div className={styles.summaryRow}>
                        <dt>Nota</dt><dd>{reserva.nota}</dd>
                      </div>
                    )}
                  </dl>
                  {errorEnvio && (
                    <p
                      ref={errorEnvioRef}
                      className={styles.validationError}
                      role="alert"
                      tabIndex={-1}
                    >
                      {errorEnvio}
                    </p>
                  )}
                  <p className={styles.notice}>
                    Al confirmar se enviará tu solicitud directamente al equipo de La Miel.
                  </p>
                </div>
              )}

              <div className={styles.actions}>
                {paso > 0 ? (
                  <button
                    className={styles.backButton}
                    type="button"
                    onClick={retroceder}
                  >
                    Volver
                  </button>
                ) : <span />}

                {paso < pasos.length - 1 ? (
                  <button className={styles.nextButton} type="submit">
                    Continuar <span aria-hidden="true">→</span>
                  </button>
                ) : (
                  <button
                    className={styles.nextButton}
                    type="button"
                    onClick={enviarReserva}
                    disabled={enviando}
                  >
                    {enviando ? 'Enviando...' : 'Confirmar reserva'}
                  </button>
                )}
              </div>
            </form>
          </div>

          <aside className={styles.aside}>
            <div className={styles.asideIcon} aria-hidden="true">☕</div>
            <p className={styles.asideEyebrow}>Un plan que sabe bien</p>
            <h2 className={styles.asideTitle}>Nos alegra que vengas.</h2>
            <p className={styles.asideText}>
              Queremos que disfrutes desde que eliges tu mesa. Cuéntanos tus
              planes y nosotros ponemos el café.
            </p>
            <div className={styles.asideDivider} />
            <p className={styles.asideFoot}>La Miel · Hecho para compartir</p>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default Reserva
