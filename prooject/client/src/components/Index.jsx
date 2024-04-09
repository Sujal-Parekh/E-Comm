import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Featrued from './Featrued'
import Categories from './Categories'
import Offers from './Offers'
import Products from './Products'
import Vendoras from './Vendoras'
import Footer from './Footer'
import Example from './Example'

function Index() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      {/* <Example/> */}
      <Featrued/>
      <Categories/>
      <Offers/>
      <Products/>
      <Vendoras/>
      <Footer/>
    </div>
  )
}

export default Index
