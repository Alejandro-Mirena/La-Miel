import styles from './Badges.module.css'

const badges = [
  { icon: '🍯', label: 'Miel de productores locales' },
  { icon: '👩‍🍳', label: 'Recetas de familia' },
  { icon: '🏡', label: 'Desde 2018' },
  { icon: '⭐', label: '4.9 en reseñas' },
]

function Badges() {
  return (
    <section className={styles.badges}>
      {badges.map((badge) => (
        <div key={badge.label} className={styles.badge}>
          <span className={styles.badgeIcon}>{badge.icon}</span>
          <span className={styles.badgeLabel}>{badge.label}</span>
        </div>
      ))}
    </section>
  )
}

export default Badges
