import styles from './Resenas.module.css'

const resenas = [
  {
    name: 'David',
    role: 'Cliente frecuente',
    rating: 5,
    text: 'El guiso de la casa es lo más parecido a comer en la cocina de mi abuela. Porciones generosas y pan recién horneado.',
  },
  {
    name: 'Neicle',
    role: 'Vecina del barrio',
    rating: 5,
    text: 'Los postres son otro nivel: el cheesecake con miel de la casa me dejó sin palabras. Vuelvo todas las semanas.',
  },
  {
    name: 'Jesús',
    role: 'Cliente',
    rating: 5,
    text: 'El café de especialidad y el ambiente tranquilo lo hacen ideal para quedarse un rato largo. Atención de diez.',
  },
  {
    name: 'Alberto',
    role: 'Celebrando en familia',
    rating: 5,
    text: 'Reservamos para el cumpleaños de mi mamá y nos trataron como en casa. La limonada de jengibre, imperdible.',
  },
]

function Resenas() {
  return (
    <section className={styles.resenas}>
      <div className={styles.resenasHead}>
        <p className={styles.resenasEyebrow}>Lo que dicen de nosotros</p>
        <h2 className={styles.resenasTitle}>Clientes que vuelven por más</h2>
      </div>

      <div className={styles.resenasGrid}>
        {resenas.map((resena) => (
          <article key={resena.name} className={styles.card}>
            <span className={styles.stars} aria-label={`${resena.rating} de 5 estrellas`}>
              {'★'.repeat(resena.rating)}
            </span>
            <p className={styles.text}>“{resena.text}”</p>
            <div className={styles.author}>
              <span className={styles.avatar}>{resena.name.charAt(0)}</span>
              <span className={styles.authorInfo}>
                <span className={styles.authorName}>{resena.name}</span>
                <span className={styles.authorRole}>{resena.role}</span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Resenas
