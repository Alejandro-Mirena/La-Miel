import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Nosotros.module.css'

const milestones = [
  {
    year: '2018',
    title: 'El primer puesto',
    text: 'Un tarrito de miel y las recetas de la abuela armadas en una mesa del mercado. Bastó un verano para quedarnos sin stock casi todos los fines de semana.',
  },
  {
    year: '2021',
    title: 'Local propio',
    text: 'Apostamos a un local chiquito, con cocina a la vista y olor a pan recién hecho. Ahí sumamos la comida de casa que hoy nos acompaña todos los días.',
  },
  {
    year: '2024',
    title: 'Postres y reservas',
    text: 'Crecimos con mesas que se reservan, postres de temporada y un equipo que cuida cada detalle. Misma receta, misma miel, más hogar.',
  },
]

const valores = [
  {
    icon: '🍯',
    title: 'Miel de productores locales',
    text: 'Trabajamos con apicultores de la zona y compramos directo, sin intermediarios.',
  },
  {
    icon: '👩‍🍳',
    title: 'Recetas de familia',
    text: 'Platos que pasan de generación en generación, cocinados sin atajos ni conservantes.',
  },
  {
    icon: '🥘',
    title: 'Todo del día',
    text: 'Preparamos en tandas chicas: si se acaba, se acaba, porque siempre queremos servirlo fresco.',
  },
  {
    icon: '🏡',
    title: 'Atención de casa',
    text: 'Tratamos a cada visita como a alguien esperado, con la mesa lista y el café caliente.',
  },
]

const pasos = [
  {
    step: '01',
    title: 'Elegimos',
    text: 'Compramos a productores locales y de temporada, lo más cerca posible de la cocina.',
  },
  {
    step: '02',
    title: 'Cocinamos',
    text: 'Todo se prepara el mismo día, en tandas chicas, con las recetas de la abuela.',
  },
  {
    step: '03',
    title: 'Servimos',
    text: 'Con porciones generosas, pan recién horneado y una mesa que siempre está lista.',
  },
]

function Nosotros() {
  useEffect(() => {
    const { hash } = window.location
    if (!hash) return
    const target = document.getElementById(hash.slice(1))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Nosotros</p>
        <h1 className={styles.title}>La casa detrás de La Miel</h1>
        <p className={styles.lead}>
          Somos un equipo chico que cocina como en casa: con producto de la zona,
          recetas de familia y ganas de que nadie se vaya con hambre.
        </p>
      </section>

      <section id="historia" className={styles.historia}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Nuestra historia</p>
          <h2 className={styles.sectionTitle}>De un tarro de miel a un hogar</h2>
        </div>

        <figure className={styles.figure}>
          <img
            className={styles.banner}
            src="/banner-Historia.jpg"
            alt="Un rincón de La Miel, entre miel y pan recién horneado"
          />
        </figure>

        <p className={styles.paragraph}>
          En 2018, abrimos un puesto en la feria del barrio con un solo objetivo:
          vender la miel que producía la familia y los cheescakes de la abuela.
          Sin cartel grande ni carta impresa: tres sabores y una jarra de café.
        </p>
        <p className={styles.paragraph}>
          La gente volvía por el trato más que por el producto. Nos pedían
          recetas, nos esperaban con las sobras del finde y, sin darnos cuenta,
          el puesto se convirtió en una esquina de encuentro. Eso fue lo que
          quisimos proteger cuando crecimos.
        </p>
        <p className={styles.paragraph}>
          Hoy La Miel tiene cocina propia, postres de temporada y un sistema de
          reservas para que nadie se quede sin mesa. Pero el mandato sigue siendo
          el mismo: todo lo que servimos tiene que saber a hogar.
        </p>
        <p className={styles.paragraph}>
          El nombre tampoco fue casualidad. Lo eligió la abuela mayor después de
          pasear por la feria el primer día: "si el puesto huele a miel y a pan
          recién horneado, nadie se va rápido". Y como nunca se fue nadie, quedó
          <span className={styles.brandWord}> La Miel.</span>
        </p>

        <div className={styles.timeline}>
          {milestones.map((milestone) => (
            <article key={milestone.year} className={styles.card}>
              <span className={styles.year}>{milestone.year}</span>
              <h3 className={styles.cardTitle}>{milestone.title}</h3>
              <p className={styles.cardText}>{milestone.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.valores}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Lo que nos hace distintos</p>
          <h2 className={styles.sectionTitle}>Nuestros valores</h2>
        </div>
        <div className={styles.valoresGrid}>
          {valores.map((valor) => (
            <article key={valor.title} className={styles.valor}>
              <span className={styles.valorIcon}>{valor.icon}</span>
              <h3 className={styles.valorTitle}>{valor.title}</h3>
              <p className={styles.valorText}>{valor.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.pasos}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>De la cocina a tu mesa</p>
          <h2 className={styles.sectionTitle}>Cómo trabajamos</h2>
        </div>
        <div className={styles.pasosGrid}>
          {pasos.map((paso) => (
            <article key={paso.step} className={styles.paso}>
              <span className={styles.pasoNum}>{paso.step}</span>
              <h3 className={styles.pasoTitle}>{paso.title}</h3>
              <p className={styles.pasoText}>{paso.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>¿Quieres conocernos?</h2>
        <p className={styles.ctaText}>
          Pasa por el local o reserva tu mesa. El café ya está calentando.
        </p>
        <Link className={styles.ctaBtn} to="/reservar">
          Reservar mesa
        </Link>
      </section>
    </div>
  )
}

export default Nosotros
