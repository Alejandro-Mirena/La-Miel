import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Postres · Comida casera · Reservas</p>
        <h1 className={styles.title}>El sabor de hogar, servido en tu mesa</h1>
        <p className={styles.subtitle}>
          En La Miel todo se cocina el mismo día: miel de productores del valle,
          recetas que pasan de generación en generación y un café que invita a
          quedarse un rato más.
        </p>
        <div className={styles.actions}>
          <Link className={styles.btnPrimary} to="/#reserva">
            Reservar mesa
          </Link>
          <a className={styles.btnGhost} href="#menu">
            Ver el menú
          </a>
        </div>
        <p className={styles.meta}>Abierto hoy hasta las 23 h · Valencia, Venezuela</p>
      </div>
    </section>
  )
}

export default Hero
