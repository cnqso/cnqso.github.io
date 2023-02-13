import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>William Kelly</h1>
      <div className="card">
      <p className="read-the-docs">
        Welcome to my site
      </p>
        <p>
          I'm a full stack engineer in Detroit, MI. 
        </p>
      </div>

    </div>
  )
}

export default App
