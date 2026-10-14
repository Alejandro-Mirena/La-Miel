import { Link } from 'react-router-dom'
import styles from './Inicio.module.css'

const badges = [
  { icon: '🍯', label: 'Miel de productores locales' },
  { icon: '👩‍🍳', label: 'Recetas de familia' },
  { icon: '🏡', label: 'Desde 2018' },
  { icon: '⭐', label: '4.9 en reseñas' },
]

const dishes = [
  {
    image: '/cheescake-imagen.jpg',
    category: 'Postre',
    name: 'Cheesecake de la abuela',
    description: 'Receta original, con miel de la casa y frutos rojos.',
    price: '$4.500',
  },
  {
    image: '/torta-miel-y-nueces.jpg',
    category: 'Postre',
    name: 'Torta de miel y nueces',
    description: 'Húmeda y especiada, con nueces del valle.',
    price: '$4.200',
  },
  {
    image: '/Guiso-de-la-casa.jpg',
    category: 'Comida de casa',
    name: 'Guiso de la casa',
    description: 'Cocinado lento, con pan recién horneado.',
    price: '$5.800',
  },
  {
    image: '/Limonada-De-La-Casa.jpg',
    category: 'Bebidas',
    name: 'Limonada de miel y jengibre',
    description: 'Bien fría, con un toque de menta fresca.',
    price: '$2.500',
  },
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
          src="/Inicio-imagen.jpg"
          alt="venta de miel en la feria del barrio"
        />
      </section>

      <section className={styles.dishes}>
        <div className={styles.dishesHead}>
          <p className={styles.dishesEyebrow}>Lo más pedido</p>
          <h2 className={styles.dishesTitle}>Platos destacados</h2>
        </div>

        <div className={styles.dishesGrid}>
          {dishes.map((dish) => (
            <article key={dish.name} className={styles.dish}>
              <div className={styles.dishMedia}>
                <img className={styles.dishImage} src={dish.image} alt={dish.name} />
                <span className={styles.dishTag}>{dish.category}</span>
              </div>
              <div className={styles.dishBody}>
                <h3 className={styles.dishName}>{dish.name}</h3>
                <p className={styles.dishDescription}>{dish.description}</p>
                <span className={styles.dishPrice}>{dish.price}</span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.dishesCta}>
          <Link className={styles.ctaBtn} to="/menu">
            Ver la carta completa →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Inicio