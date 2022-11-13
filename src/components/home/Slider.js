import React from "react";
import Carousel from "react-bootstrap/Carousel";
import publication from "../../assets/images/publication.jpeg";
import research from "../../assets/images/research.jpeg";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";

export default function Slider() {
  return (
    <div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://bsmbharat.org/wp-content/uploads/2021/02/banner5-1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={publication} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={research} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" height="613px" src={img1} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" height="613px" src={img2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}
