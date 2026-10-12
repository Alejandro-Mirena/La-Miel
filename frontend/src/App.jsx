import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <main className={styles.content} />
      <Footer />
    </>
  )
}

export default App