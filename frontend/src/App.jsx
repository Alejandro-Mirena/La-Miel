import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Inicio from './pages/Inicio/Inicio'
import Nosotros from './pages/Nosotros/Nosotros'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App