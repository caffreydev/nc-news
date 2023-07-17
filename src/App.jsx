import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'

import { Navbar, Home } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
