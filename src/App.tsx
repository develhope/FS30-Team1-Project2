import { useState } from 'react'
import Home from './pages/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
       <Home/>
      </div>
    </>
  )
}

export default App
