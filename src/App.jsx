import { useState } from 'react'
import Navbar from '@components/Navbar/Navbar'
import Banner from '@components/Screen/index';
import Masters from '@components/Masters';
import Price from './components/PriceDropDown/Price';
import Mycontact from './components/Mycontacts/index.jsx';
import './index.css'

function App() {

  return (
    <div>
<Navbar />
      <Banner /> 
      {/* <Price /> 
      <Masters />
      <Mycontact /> */}
    </div>
  )
}

export default App
