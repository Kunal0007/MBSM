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
import OrganizationalStructure from "./screens/organizationalStructure/OrganizationalStructure";
import Activity from "./screens/activity/Activity";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publication/magzines" element={<Magzines />} />
          <Route path="/aboutus/history" element={<History />} />
          <Route path="/aboutus/introduction" element={<Intro />} />
          <Route path="/aboutus/vision&mission" element={<Mission />} />
          <Route path="/gallery/photogallery" element={<PhotoGallery />} />
          <Route path="/team/teammember" element={<Team />} />
          <Route
            path="/publication/question-papers"
            element={<QuestionPapers />}
          />
          <Route
            path="/publication/prakashan-books"
            element={<PrakashanBooks />}
          />
          <Route path="/publication/mbsm-books" element={<Mbsm />} />
          <Route path="/publication/bsm-books" element={<Bsm />} />
          <Route
            path="/organizational-structure"
            element={<OrganizationalStructure />}
          />
          <Route path="/activity" element={<Activity />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
