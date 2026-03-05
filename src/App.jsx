import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((counter) => counter + 1);
  }


  function decrement() {
    if (counter <= -15) {
      console.warn("LIMITE NEGATIVO RAGGIUNTO")
    } else {
      setCounter((counter) => counter - 1);
    }
  }

  return (
    <>
      <main className="container">
        <section className="row">
          <div className="grid">
            <h1>
              Contatore
            </h1>
          </div>
          <div className="grid">
            <p>
              Valore del contatore: {counter}
            </p>
            <button className="btn" onClick={increment}>
              Incrementa contatore
            </button>
            <button className="btn" onClick={decrement}>
              Decrementa contatore
            </button>
          </div>
        </section>
      </main >
    </>
  )
}

export default App
