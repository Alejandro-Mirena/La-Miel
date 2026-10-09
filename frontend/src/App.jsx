import Header from './components/Header'
import Footer from './components/Footer'
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