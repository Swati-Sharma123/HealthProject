import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Info from './Components/Info/Info'
import Lounger from './Components/Lounger/Lounger'
import Travelers from './Components/Travelers/Travelers'
import Subscriber from './Components/Subscriber/Subscriber'
import Footer from './Components/Footer/Footer'
import Support from './Components/Support/Support'

export default function App() {
  return (
    <div>
<Navbar/>
<Home/>
<Search/>
<Support/>
<Info/>
<Lounger/>
<Travelers/>
<Subscriber/>
<Footer/>
    </div>
  )
}

