import React, { useState } from 'react'
import { HashRouter, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import GetInvolved from './components/pages/GetInvolved';
import Blog from './components/pages/Blog'
import Donate from './components/pages/Donate';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer/Footer';




function App() {


  const [isOpen, setIsOpen] = useState(false)
    
  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <HashRouter>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/getinvolved' element={<GetInvolved />} />
            <Route path='/donate' element={<Donate />} />
        </Routes>
        <Footer/>
      </HashRouter>
    </>
  );
}

export default App;