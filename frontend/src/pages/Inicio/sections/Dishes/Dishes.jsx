import { Link } from 'react-router-dom'
import styles from './Dishes.module.css'

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

function Dishes() {
  return (
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
  )
}

export default Dishes
