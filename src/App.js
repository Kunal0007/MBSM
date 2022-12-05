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
import QuestionPapers from "./screens/publication/QuestionPapers";
import Team from "./components/team/TeamMemebers";
import PrakashanBooks from "./screens/publication/PrakashanBooks";
import Mbsm from "./screens/publication/Mbsm";
import Bsm from "./screens/publication/Bsm";

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
          <Route
            path="/gallery/photogallery"
            element={<PhotoGallery />}
          ></Route>
        </Routes>
        <Routes>
          <Route path="/team/teammember" element={<Team />}></Route>
        </Routes>
        <Routes>
          <Route
            path="/publication/question-papers"
            element={<QuestionPapers />}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/publication/prakashan-books"
            element={<PrakashanBooks />}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/publication/mbsm-books"
            element={<Mbsm />}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/publication/bsm-books"
            element={<Bsm />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
