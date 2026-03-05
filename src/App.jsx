import { useState, useEffect } from 'react'

function App() {
  const [contenuto, setContenuto] = useState('')
  const [isLoading, setIsLoading] = useState(true);

  const funzionaSciangula = () => {
    setContenuto(`Contenuto generato: ${Math.floor(Math.random() * 99999999999) + 1}`);

    if (isLoading === true) {
      setIsLoading(false);
    }
  }


  return (
    <>
      <main className="container">
        <h1>
          Loader alternativo
        </h1>
        <section className="row">
          <div className="grid">

            {isLoading &&
              <div className="loader">
                <div className="spinner"></div>
                <div className="spinner"></div>
                <div className="spinner"></div>
                <div className="spinner"></div>
                <div className="spinner"></div>
                <div className="spinner"></div>
                <div className="spinner"></div>
              </div>
            }

            <p>{contenuto}</p>

            <button className="btn" onClick={funzionaSciangula}>
              Aggiorna testo
            </button>
          </div>
        </section>
      </main >
    </>
  )
}

export default App
