import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Prakashan from "../../assets/images/Prakashan.jpeg";
import Anusandhan from "../../assets/images/Anusandhan.jpeg";
import Sngathan from "../../assets/images/Sngathan.jpeg";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";

export default function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Sngathan}
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img            
            className="d-block w-100"
            src={Prakashan}
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img            
            className="d-block w-100"
            src={Anusandhan}
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"            
            src={img1}
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"            
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
