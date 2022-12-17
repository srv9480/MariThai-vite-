import { useState } from 'react'
import Navbar from '@components/Navbar/Navbar'
import Banner from '@components/Screen/index';
import Masters from '@components/Masters';

function App() {

  return (
    <div>
      <Navbar />
      <Banner />
      <Masters />
    </div>
  )
}

export default App
