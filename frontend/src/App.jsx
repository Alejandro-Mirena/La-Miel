import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Inicio from './pages/Inicio/Inicio'
import Historia from './pages/Historia/Historia'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/historia" element={<Historia />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App