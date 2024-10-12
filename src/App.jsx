import { useState, useEffect } from 'react'
import './App.css'
import CounterJsX from './features/counter/Counter.jsX'
import axios from 'axios'

function App() {

  const [quote, setQuote] = useState([{}])


  useEffect(() =>{
     axios.get('https://lucifer-quotes.vercel.app/api/quotes')
     .then((res)=>{
      setQuote(res.data);
      console.log(res.data)
     })
     .catch((error)=>{
      console.error(error)
     })
  },[])


  return (
    <>
          <CounterJsX/>
          <p>
             {quote[0].quote + " - " + quote[0].author}
          </p>
      {/* <div>
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
      </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
