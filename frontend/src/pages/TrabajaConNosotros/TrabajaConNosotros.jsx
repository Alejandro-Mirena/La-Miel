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
            <h2 className={styles.sectionTitle}>Enviá tu CV</h2>
            <p className={styles.sectionLead}>
              Completa el formulario y te contactamos.
            </p>
          </div>
          <form className={styles.form}>
            <div className={styles.grid}>
              <label className={styles.field}>
                <span className={styles.label}>Nombre y apellido</span>
                <input className={styles.input} type="text" placeholder="Tu nombre completo" />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Teléfono / WhatsApp</span>
                <input className={styles.input} type="tel" placeholder="+58..." />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Correo electrónico</span>
                <input className={styles.input} type="email" placeholder="tu@correo.com" />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Puesto al que te postulás</span>
                <select className={styles.select}>
                  <option value="">Seleccionar</option>
                  <option value="cocinero">Cocinero/a</option>
                  <option value="cajero">Cajero/a / Atención al cliente</option>
                  <option value="repostero">Repostero/a</option>
                  <option value="otro">Otro</option>
                </select>
              </label>
            </div>
            <label className={styles.field}>
              <span className={styles.label}>Cuentanos sobre tí</span>
              <textarea
                className={styles.textarea}
                rows="5"
                placeholder="Experiencia, disponibilidad, horarios, etc."
              />
            </label>
            <button className={styles.submit} type="submit" >
              Enviar postulación
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
