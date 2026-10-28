import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { notificarError, notificarExito } from '../../components/Toast/notificaciones'
import TrabajaConfirmacion from '../Confirmaciones/TrabajaConfirmacion'
import styles from './TrabajaConNosotros.module.css'

const puestos = [
  {
    title: 'Cocinero/a',
    tipo: 'Tiempo completo / Medio tiempo',
    descripcion: 'Preparación de platos del día, mise en place y control de producto.',
  },
  {
    title: 'Cajero/a / Atención al cliente',
    tipo: 'Tiempo completo / Medio tiempo',
    descripcion: 'Toma de pedidos, cobro, reservas y atención cálida al cliente.',
  },
  {
    title: 'Repostero/a',
    tipo: 'Medio tiempo',
    descripcion: 'Postres de la casa, decorado y apoyo en vitrina.',
  },
]

function TrabajaConNosotros() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    puesto: '',
    mensaje: '',
  })
  const [enviando, setEnviando] = useState(false)
  const [exito, setExito] = useState(false)
  const [errorEnvio, setErrorEnvio] = useState('')
  const errorEnvioRef = useRef(null)

  useEffect(() => {
    if (errorEnvio) {
      errorEnvioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [errorEnvio])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorEnvio('')
    setEnviando(true)

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
      const respuesta = await fetch(`${apiUrl}/postulaciones`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const datos = await respuesta.json()

      if (!respuesta.ok || !datos.success) {
        throw new Error(datos.message || 'No se pudo enviar la postulación')
      }

      notificarExito('Postulación enviada correctamente')
      setExito(true)
    } catch (error) {
      setErrorEnvio(error.message)
      notificarError(error.message)
    } finally {
      setEnviando(false)
    }
  }

  if (exito) {
    return <TrabajaConfirmacion nombre={formData.nombre} puesto={formData.puesto} />
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Trabaja con nosotros</p>
        <h1 className={styles.title}>Unete al equipo de La Miel</h1>
        <p className={styles.lead}>
          Buscamos personas con ganas de aprender, cuidar los detalles y tratar
          a cada cliente como en casa.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Oportunidades</p>
          <h2 className={styles.sectionTitle}>Puestos abiertos</h2>
          <p className={styles.sectionLead}>
            Si te gusta la cocina casera y el trato humano, nos gustaría conocerte.
          </p>
        </div>
        <div className={styles.cards}>
          {puestos.map((puesto) => (
            <article key={puesto.title} className={styles.card}>
              <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{puesto.title}</h3>
                <span className={styles.badge}>{puesto.tipo}</span>
              </div>
              <p className={styles.cardText}>{puesto.descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formWrap}>
          <div className={styles.formHead}>
            <p className={styles.sectionEyebrow}>Postulate</p>
            <h2 className={styles.sectionTitle}>Envia tu CV</h2>
            <p className={styles.sectionLead}>
              Completa el formulario y te contactamos.
            </p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.grid}>
              <label className={styles.field}>
                <span className={styles.label}>Nombre y apellido</span>
                <input
                  className={styles.input}
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre completo"
                  required
                  maxLength={40}
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Teléfono / WhatsApp</span>
                <div className={styles.phoneRow}>
                  <span className={styles.prefix}>+58</span>
                  <input
                    className={styles.phoneInput}
                    type="tel"
                    name="telefono"
                    placeholder="4121234567"
                    required
                    inputMode="numeric"
                    pattern="[0-9]{11}"
                    maxLength={11}
                    title="Ingresa 11 números sin el +58 (ej. 4121234567)"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Correo electrónico</span>
                <input
                  className={styles.input}
                  type="email"
                  name="correo"
                  placeholder="tu@correo.com"
                  required
                  maxLength={80}
                  value={formData.correo}
                  onChange={handleChange}
                />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Puesto al que te postulas</span>
                <select className={styles.select} name="puesto" required value={formData.puesto} onChange={handleChange}>
                  <option value="">Seleccionar</option>
                  <option value="Cocinero/a">Cocinero/a</option>
                  <option value="Cajero/a / Atención al cliente">Cajero/a / Atención al cliente</option>
                  <option value="Repostero/a">Repostero/a</option>
                  <option value="Otro">Otro</option>
                </select>
              </label>
            </div>
            <label className={styles.field}>
              <span className={styles.label}>Cuentanos sobre Tí</span>
              <textarea
                className={styles.textarea}
                rows="5"
                name="mensaje"
                placeholder="Experiencia, disponibilidad, horarios, etc."
                maxLength={500}
                value={formData.mensaje}
                onChange={handleChange}
              />
            </label>
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
            <button className={styles.submit} type="submit" disabled={enviando}>
              {enviando ? 'Enviando...' : 'Enviar postulación'}
            </button>

          </form>
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>¿Tienes dudas?</h2>
        <p className={styles.ctaText}>
          Puedes pasar por el local de Martes a Domingo con tu CV impreso.
        </p>
        <Link className={styles.ctaBtn} to="/#contacto">
          Ver sucursales
        </Link>
      </section>
    </div>
  )
}

export default TrabajaConNosotros
