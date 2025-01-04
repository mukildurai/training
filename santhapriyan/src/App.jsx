
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/FunctionComponent/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Useeffect from './Components/FunctionComponent/Useeffect';
import UseRef from './Components/FunctionComponent/Useref';
import UseContext from './Components/FunctionComponent/UseContext';
import UseMemo from './Components/FunctionComponent/UseMemo';
import Signup from './Components/Signup';
import Login from './Components/Login';


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
          <Route path='/Useeffect' element={<Useeffect />}></Route>
          <Route path='/UseRef' element={<UseRef />}></Route>
          <Route path='/UseContext' element={<UseContext />}></Route>
          <Route path='/UseMemo' element={<UseMemo />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>







    </div>
  )
}

export default App;
