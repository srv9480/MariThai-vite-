import { useState } from 'react'
import Navbar from '@components/Navbar/Navbar'
import Banner from './components/Screen/index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  )
}

export default App
