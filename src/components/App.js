import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Navbar from './navbar'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
