import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Inicio from './pages/Inicio/Inicio'
import Nosotros from './pages/Nosotros/Nosotros'
import Menu from './pages/Menu/Menu'
import TrabajaConNosotros from './pages/TrabajaConNosotros/TrabajaConNosotros'
import styles from './App.module.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App