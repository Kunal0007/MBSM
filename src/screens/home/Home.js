import React from "react";
import Slider from "../../components/home/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Gatvidhi from "../../components/home/Gatvidhi";
import "../../css/Home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home">
      <Slider />
      <div className="intro">
        <h3 className="title">Bhartiya Shikshan Mandal</h3>
        <p>
          Bharatiya Shikshan Mandal was founded on the auspicious day of Rama
          Navami in the year 1969 is working with the objective of national
          resurgence in the field of education. It aims at evolving National
          Education Policy, Curriculum, System &Methodology based on integral
          Bharatiya vision, rooted in its eternal ethos and centered at overall
          development of the country. A number of educational, Intellectual and
          experimental activities are being conducted in all parts of the
          country both at school and higher education levels to actualize this
          noble mission of reestablishing Bharatiya Education System.
        </p>
      </div>
      <div className="perks">
        <div className="perkItem">
          <FontAwesomeIcon color="white" size="3x" icon={faPaperPlane} />
          <p>No of District Units</p>
          <h2>1872</h2>
        </div>

        <div className="perkItem">
          <FontAwesomeIcon color="white" size="3x" icon={faUser} />
          <p>Individual Memberships</p>
          <h2>76999</h2>
        </div>

        <div className="perkItem">
          <FontAwesomeIcon color="white" size="3x" icon={faUsers} />
          <p>Institutional Memberships</p>
          <h2>191</h2>
        </div>

        <div className="perkItem">
          <FontAwesomeIcon color="white" size="3x" icon={faBuildingColumns} />
          <p>No of University Units</p>
          <h2>80</h2>
        </div>
      </div>
      <div className="eventAndNews">
        <Card className="events">
          <Card.Header as="h5">Events</Card.Header>
          <Card.Body>
            <Card.Text>No events.</Card.Text>
            <Button variant="primary">View</Button>
          </Card.Body>
        </Card>
        <Card className="update">
          <Card.Header as="h5">Latest Updates</Card.Header>
          <Swiper pagination={{
            clickable: true,
          }} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <Gatvidhi />
     
    </div>
  );
};

export default Home;
