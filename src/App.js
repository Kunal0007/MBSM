import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/home/Home";
import CustomNavbar from "./components/CustomNavbar";
import Magzines from "./components/publication/Magzines";
import Intro from "./components/aboutus/Introduction";
import Mission from "./components/aboutus/Visionmission";
import History from "./components/aboutus/History";
import Footer from "./components/Footer";
import PhotoGallery from "./components/gallery/PhotoGallery";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/publication/magzines" element={<Magzines />}></Route>
        </Routes>
        <Routes>
          <Route path="/aboutus/history" element={<History />}></Route>
        </Routes>
        <Routes>
          <Route path="/aboutus/introduction" element={<Intro />}></Route>
        </Routes>
        <Routes>
          <Route path="/aboutus/vision&mission" element={<Mission />}></Route>
        </Routes>
        <Routes>
          <Route path="/gallery/photogallery" element={<PhotoGallery/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
