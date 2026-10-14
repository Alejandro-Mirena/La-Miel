import { Link } from 'react-router-dom'
import styles from './About.module.css'

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutText}>
        <h2 className={styles.aboutTitle}>Más que un restaurante, una tradición</h2>
        <p className={styles.paragraph}>
          Empezamos como un puesto de miel en la feria del barrio y hoy somos el
          lugar donde el barrio se encuentra a comer algo casero. Cada plato nace
          de una receta familiar, cocinada sin apuro y con ingredientes de la zona.
        </p>
        <p className={styles.paragraph}>
          Vienes por un postre y te quedas por el clima: mesas grandes para
          compartir, café de especialidad y la atención de siempre.
        </p>
        <Link className={styles.aboutLink} to="/historia">
          Conoce nuestra historia →
        </Link>
      </div>
      <img
        className={styles.aboutImg}
        src="/Inicio-imagen.jpg"
        alt="venta de miel en la feria del barrio"
      />
    </section>
  )
}

export default About
