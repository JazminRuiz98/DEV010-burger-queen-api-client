// import { useState } from 'react'
import logoBurger from './assets/logo-burger-queen-1.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={logoBurger} className="logo" alt="Logo Burger Queen" />
          <h1>Burger Queen</h1>
      </div>
      <div className="card">
        <div>
          <textarea className="" placeholder='Ingrese el correo electronico del empleado'></textarea>
        </div>
        <div>
          <textarea type="password" placeholder='Contraseña'></textarea>
        </div>
      </div>
      <button>
          Ingresar
      </button>
    </>
  )
}

export default App

/*
Código ejemplo 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
