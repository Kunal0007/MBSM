import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/home/Home';
import CustomNavbar from './components/CustomNavbar'
import Magzines from './components/publication/Magzines';


const App = () => {
  return (
    <>
      <BrowserRouter basename='https://Kunal0007.github.io/mbsm'>
        <Header />
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/publication/magzines" element={<Magzines />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
