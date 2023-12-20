  import React from 'react'
  import { BrowserRouter, Routes,Route } from 'react-router-dom'
  import './App.css'
  import Navbar from './Components/Navbar/Navbar'
  import Home from './Components/Home/Home'
  import Search from './Components/Search/Search'
  import Info from './Components/Info/Info'
  import Lounger from './Components/Lounger/Lounger'
  import Travelers from './Components/Travelers/Travelers'
  import Subscriber from './Components/Subscriber/Subscriber'
  import Footer from './Components/Footer/Footer'
  import Support from './Components/Support/Support';
  export default function App() {
    return (
      // <div>
      // <Navbar/>
 
      // <Home/>
      // <Search/>
      // <Support/>
      // <Info/>
      // <Lounger/>
      // <Travelers/>
      // <Subscriber/>
      // <Footer/>

      // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Navbar/>}>
          <Route index element={<Home />} />  
          <Route path="search" element={<Search />} />
          <Route path="support" element={<Support />} />
          <Route path="info" element={<Info />} />
          <Route path="lounger" element={<Lounger />} />
          <Route path="travelers" element={<Travelers />} />
          <Route path="subscriber" element={<Subscriber />} />
          <Route path="footer" element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
  }

