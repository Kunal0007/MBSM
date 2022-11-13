import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/home/Home";
import CustomNavbar from "./components/CustomNavbar";
import Magzines from "./components/publication/Magzines";
import Mission from "./components/aboutus/Missionvision";
import History from "./components/aboutus/History";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/publication/magzines" element={<Magzines />}></Route>
        </Routes>
        <Routes>
          <Route path="/aboutus/history" element={<History />}></Route>
        </Routes>
        <Routes>
          <Route path="/aboutus/missionvision" element={<Mission />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
