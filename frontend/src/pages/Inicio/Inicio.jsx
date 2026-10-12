import { Link } from 'react-router-dom'
import styles from './Inicio.module.css'

const badges = [
  { icon: '🍯', label: 'Miel de productores locales' },
  { icon: '👩‍🍳', label: 'Recetas de familia' },
  { icon: '🏡', label: 'Desde 2018' },
  { icon: '⭐', label: '4.9 en reseñas' },
]

function Inicio() {
  return (
    <div className={styles.page}>
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

      <section className={styles.badges}>
        {badges.map((badge) => (
          <div key={badge.label} className={styles.badge}>
            <span className={styles.badgeIcon}>{badge.icon}</span>
            <span className={styles.badgeLabel}>{badge.label}</span>
          </div>
        ))}
      </section>

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
          src="/banner-Historia.jpg"
          alt="Interior cálido de La Miel con postres caseros"
        />
      </section>
    </div>
  )
}

export default Inicio