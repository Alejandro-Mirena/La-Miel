import styles from './Badges.module.css'

const badges = [
  { icon: '🍯', label: 'Miel de productores locales' },
  { icon: '👩‍🍳', label: 'Recetas de familia' },
  { icon: '🏡', label: 'Desde 2018' },
  { icon: '⭐', label: '4.9 en reseñas' },
]

const REPEATS = 3
const items = Array.from({ length: REPEATS }, () => badges).flat()

function Badges() {
  return (
    <section className={styles.badges}>
      <div className={styles.track}>
        {[0, 1].map((group) => (
          <div
            key={group}
            className={styles.group}
            aria-hidden={group === 1 ? 'true' : undefined}
          >
            {items.map((badge, index) => (
              <div key={`${badge.label}-${index}`} className={styles.badge}>
                <span className={styles.badgeIcon}>{badge.icon}</span>
                <span className={styles.badgeLabel}>{badge.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Badges
