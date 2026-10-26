import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { categorias, platos } from '../../data/menu'
import Promos from '../../components/Promos/Promos'
import styles from './Menu.module.css'

function Menu() {
  const location = useLocation()
  const hashId = location.hash.slice(1)
  const activa = categorias.some((categoria) => categoria.id === hashId)
    ? hashId
    : 'todo'

  // Plato cuya imagen está ampliada (null = lightbox cerrado)
  const [platoAmpliado, setPlatoAmpliado] = useState(null)

  useEffect(() => {
    if (!location.hash) return
    // FIX: antes se comparaba el elemento con un string (siempre false)
    const target =
      hashId === 'promociones'
        ? document.getElementById('promociones')
        : document.getElementById('menu')
    if (target) {
      const headerOffset = 96
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }, [location.hash, hashId])

  // Lightbox: cerrar con Escape y bloquear el scroll del fondo mientras está abierto
  useEffect(() => {
    if (!platoAmpliado) return

    const alPresionarTecla = (e) => {
      if (e.key === 'Escape') setPlatoAmpliado(null)
    }

    const overflowPrevio = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', alPresionarTecla)

    // Cleanup: restaurar scroll y quitar el listener
    return () => {
      document.body.style.overflow = overflowPrevio
      window.removeEventListener('keydown', alPresionarTecla)
    }
  }, [platoAmpliado])

  const visibles =
    activa === 'todo'
      ? platos
      : platos.filter((plato) => plato.categoria === activa)

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Nuestro menú</p>
        <h1 className={styles.title}>Carta de la casa</h1>
        <p className={styles.lead}>
          Todo se cocina el mismo día. Elegí una categoría o mirá la carta completa.
        </p>
      </section>

      <section id="menu" className={styles.menu}>
        <aside className={styles.sidebar}>
          <p className={styles.sideHead}>Categorías</p>
          <nav className={styles.sideNav}>
            {categorias.map((categoria) => (
              <Link
                key={categoria.id}
                to={categoria.id === 'todo' ? '/menu' : `/menu#${categoria.id}`}
                className={`${styles.sideLink} ${activa === categoria.id ? styles.sideLinkActive : ''
                  }`}
                aria-current={activa === categoria.id ? 'page' : undefined}
              >
                {categoria.label}
              </Link>
            ))}
          </nav>
        </aside>

        <div className={styles.content}>
          <div className={styles.tabs}>
            {categorias.map((categoria) => (
              <Link
                key={categoria.id}
                to={categoria.id === 'todo' ? '/menu' : `/menu#${categoria.id}`}
                className={`${styles.tab} ${activa === categoria.id ? styles.tabActive : ''
                  }`}
                aria-current={activa === categoria.id ? 'page' : undefined}
              >
                {categoria.label}
              </Link>
            ))}
          </div>

          <ul className={styles.list}>
            {visibles.map((plato) => (
              <li key={plato.nombre} className={styles.item}>
                {plato.imagen && (
                  // Botón (no div) para que sea accesible con teclado
                  <button
                    type="button"
                    className={styles.thumbBtn}
                    onClick={() => setPlatoAmpliado(plato)}
                    aria-label={`Ampliar imagen de ${plato.nombre}`}
                  >
                    <img className={styles.thumb} src={plato.imagen} alt="" />
                    <span className={styles.zoomIcon} aria-hidden="true">
                      ⤢
                    </span>
                  </button>
                )}
                <div className={styles.itemBody}>
                  <div className={styles.itemTop}>
                    <span className={styles.itemName}>{plato.nombre}</span>
                    {plato.tags?.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                    <span className={styles.dots} aria-hidden="true" />
                    <span className={styles.itemPrice}>{plato.precio}</span>
                  </div>
                  <p className={styles.itemDesc}>{plato.descripcion}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div id="promociones">
        <Promos />
      </div>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>¿Reservamos tu mesa?</h2>
        <p className={styles.ctaText}>
          Te esperamos con la carta del día y el café listo.
        </p>
        <Link className={styles.ctaBtn} to="/#reserva">
          Reservar mesa
        </Link>
      </section>

      {/* Lightbox: clic en el fondo cierra, clic dentro de la figura no */}
      {platoAmpliado && (
        <div
          className={styles.lightbox}
          onClick={() => setPlatoAmpliado(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen de ${platoAmpliado.nombre}`}
        >
          <figure
            className={styles.lightboxFigure}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => setPlatoAmpliado(null)}
              aria-label="Cerrar imagen"
              autoFocus
            >
              ✕
            </button>
            <img
              className={styles.lightboxImg}
              src={platoAmpliado.imagen}
              alt={platoAmpliado.nombre}
            />
            <figcaption className={styles.lightboxCaption}>
              <span className={styles.lightboxName}>{platoAmpliado.nombre}</span>
              <span className={styles.lightboxPrice}>{platoAmpliado.precio}</span>
              <p className={styles.lightboxDesc}>{platoAmpliado.descripcion}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  )
}

export default Menu