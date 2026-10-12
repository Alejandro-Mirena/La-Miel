import { Link } from 'react-router-dom'
import styles from './Historia.module.css'

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

function Historia() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Nuestra historia</p>
        <h1 className={styles.title}>De un tarro de miel a un hogar</h1>
        <p className={styles.lead}>
          La Miel nació como un sueño de fin de semana y hoy es el lugar donde
          cada visita se siente como llegar a la casa de la abuela.
        </p>
      </section>

      <section className={styles.body}>
        <h2 className={styles.bodyTitle}>Cómo empezó todo</h2>
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
          <span className={styles.eyebrow}> La Miel.</span>
        </p>
        <p className={styles.paragraph}>
          Cada fin de semana aprendíamos algo nuevo: qué sabores pedía el barrio,
          cuánto esperaba la gente sentirse en casa, cómo un postre bien servido
          se convierte en recuerdo. Esa escuela de domingos es la que seguimos
          usando hoy, con platos que cambian según la estación y una mesa que se
          reserva para que nadie se quede afuera.
        </p>
      </section>

      <section className={styles.timeline}>
        {milestones.map((milestone) => (
          <article key={milestone.year} className={styles.card}>
            <span className={styles.year}>{milestone.year}</span>
            <h3 className={styles.cardTitle}>{milestone.title}</h3>
            <p className={styles.cardText}>{milestone.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>¿Quieres conocerla en persona?</h2>
        <p className={styles.ctaText}>
          Pasa por el local o reserva tu mesa. El café ya está calentando.
        </p>
        <Link className={styles.ctaBtn} to="/#reserva">
          Reserva tu mesa
        </Link>
      </section>
    </div>
  )
}

export default Historia