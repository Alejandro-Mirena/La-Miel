import Hero from './sections/Hero/Hero'
import Badges from './sections/Badges/Badges'
import About from './sections/About/About'
import Dishes from './sections/Dishes/Dishes'
import Promos from './sections/Promos/Promos'
import Resenas from './sections/Resenas/Resenas'
import Cta from './sections/Cta/Cta'
import Ubicacion from './sections/Ubicacion/Ubicacion'
import styles from './Inicio.module.css'

function Inicio() {
  return (
    <div className={styles.page}>
      <Hero />
      <Badges />
      <About />
      <Dishes />
      <Promos />
      <Resenas />
      <Cta />
      <Ubicacion />
    </div>
  )
}

export default Inicio
