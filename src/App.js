import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/home/Home';
import CustomNavbar from './components/CustomNavbar'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
