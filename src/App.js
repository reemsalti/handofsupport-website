import React from 'react'
// import Main from './components/Main';
import { HashRouter, Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <>
      <HashRouter>
        <Main />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;