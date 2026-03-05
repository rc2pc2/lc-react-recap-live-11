import { useState, useEffect } from 'react'

function App() {
  const [contenuto, setContenuto] = useState({
    nomino: "Valore di nomino",
    nomone: "Valore di nomone",
    nometto: "Valore di nometto",
  })

  function aggiornaInput(evento) {
    setContenuto((informazioni) => ({
      ...informazioni,
      [evento.target.name]: evento.target.value
    }))
  }

  return (
    <>
      <main className="container">
        <h1>
          Input reattivo
        </h1>
        <section className="row">
          <form className="grid">
            <p>{contenuto.nomino}</p>

            <input
              className='input'
              type="text"
              onChange={aggiornaInput}
              value={contenuto.nomino}
              name='nomino'
            />

            <p>{contenuto.nomone}</p>
            <input
              className='input'
              type="text"
              onChange={aggiornaInput}
              value={contenuto.nomone}
              name='nomone'
            />

            <p>{contenuto.nometto}</p>
            <input
              className='input'
              type="text"
              onChange={aggiornaInput}
              value={contenuto.nometto}
              name='nometto'
            />
          </form>
        </section>
      </main >
    </>
  )
}

export default App
