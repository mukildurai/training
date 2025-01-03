

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/FunctionComponent/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About college="kec" clg2="kic" clg3="kac" />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>







    </div>
  )
}

export default App;
