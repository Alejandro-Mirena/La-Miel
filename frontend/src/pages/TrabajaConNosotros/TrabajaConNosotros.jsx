import { Link } from 'react-router-dom'
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
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Trabajá con nosotros</p>
        <h1 className={styles.title}>Sumate al equipo de La Miel</h1>
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
            <h2 className={styles.sectionTitle}>Enviá tu CV</h2>
            <p className={styles.sectionLead}>
              Completá el formulario y te contactamos.
            </p>
          </div>
          <form className={styles.form}>
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
                  pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]+"
                  title="Solo se permiten letras y espacios"
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
                    title="Ingresá 11 números sin el +58 (ej. 4121234567)"
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
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  title="Ingresá un correo válido (ej. nombre@dominio.com)"
                />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Puesto al que te postulás</span>
                <select className={styles.select} name="puesto" required>
                  <option value="">Seleccionar</option>
                  <option value="cocinero">Cocinero/a</option>
                  <option value="cajero">Cajero/a / Atención al cliente</option>
                  <option value="repostero">Repostero/a</option>
                  <option value="otro">Otro</option>
                </select>
              </label>
            </div>
            <label className={styles.field}>
              <span className={styles.label}>Contanos sobre vos</span>
              <textarea
                className={styles.textarea}
                rows="5"
                name="mensaje"
                placeholder="Experiencia, disponibilidad, horarios, etc."
                maxLength={500}
              />
            </label>
            <button className={styles.submit} type="submit">
              Enviar postulación
            </button>
            <p className={styles.note}>
              Este formulario es de demostración. Pronto habilitaremos el envío directo.
            </p>
          </form>
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>¿Tenés dudas?</h2>
        <p className={styles.ctaText}>
          Podés pasar por el local de Martes a Domingo con tu CV impreso.
        </p>
        <Link className={styles.ctaBtn} to="/#contacto">
          Ver sucursales
        </Link>
      </section>
    </div>
  )
}

export default TrabajaConNosotros
