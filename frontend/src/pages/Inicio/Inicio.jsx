import Hero from './sections/Hero/Hero'
import Badges from './sections/Badges/Badges'
import About from './sections/About/About'
import Dishes from './sections/Dishes/Dishes'
import Promos from './sections/Promos/Promos'
import styles from './Inicio.module.css'

function Inicio() {
  return (
    <div className={styles.page}>
      <Hero />
      <Badges />
      <About />
      <Dishes />
      <Promos />
    </div>
  )
}

export default Inicio
