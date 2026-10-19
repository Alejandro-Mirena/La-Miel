import styles from './Promos.module.css'

const promos = [
  {
    icon: '🍰',
    tag: 'Martes',
    title: '2x1 en postres',
    description: 'Llevá dos porciones de la vitrina al precio de una, todos los martes.',
    code: 'MIEL2X1',
    note: 'Solo para consumo en el local',
  },
  {
    icon: '☕',
    tag: 'Mañanas',
    title: 'Café + porción',
    description: 'Desayuno con café de especialidad y un dulce de la casa recién hecho.',
    code: 'DESAYUNO',
    note: 'Hasta las 12 h',
  },
  {
    icon: '👨‍👩‍👧',
    tag: 'Fin de semana',
    title: 'Mesa familiar',
    description: 'Menú para compartir entre 4, con un postre de la casa de regalo.',
    code: 'FAMILIA',
    note: 'Sábados y domingos',
  },
]

function Promos() {
  return (
    <section className={styles.promos}>
      <div className={styles.promosInner}>
        <div className={styles.promosHead}>
          <p className={styles.promosEyebrow}>Especiales de temporada</p>
          <h2 className={styles.promosTitle}>Promociones que se acaban pronto</h2>
        </div>

        <div className={styles.promosGrid}>
          {promos.map((promo) => (
            <article key={promo.title} className={styles.coupon}>
              <div className={styles.couponMain}>
                <span className={styles.couponIcon}>{promo.icon}</span>
                <span className={styles.couponTag}>{promo.tag}</span>
                <h3 className={styles.couponTitle}>{promo.title}</h3>
                <p className={styles.couponText}>{promo.description}</p>
              </div>
              <div className={styles.couponStub}>
                <span className={styles.couponCode}>{promo.code}</span>
                <span className={styles.couponNote}>{promo.note}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Promos
