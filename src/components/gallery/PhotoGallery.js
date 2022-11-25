import React, { useEffect } from "react";
import "../../css/gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";


const PhotoGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
    AOS.refresh();
  }, []);
  return (
    <div className="main">
      <div>
        <b className="photoGalleryB">{`Photo Gallery `}</b>
      </div>
        <img data-aos="fade-in" data-aos-id="super-duper"
          className="rectangleIcon"
          alt=""
          src="/photos/rectangle-75@2x.png"
        />
        <img data-aos="fade-left"
          className="rectangleIcon1"
          alt=""
          src="/photos/rectangle-76@2x.png"
        />
        <img data-aos="fade-right"
          className="rectangleIcon2"
          alt=""
          src="/photos/rectangle-77@2x.png"
        />
        <img data-aos="fade-left"
          className="rectangleIcon3"
          alt=""
          src="/photos/rectangle-78@2x.png"
        /> 
        <img data-aos="fade-right"
          className="rectangleIcon4"
          alt=""
          src="/photos/rectangle-79@2x.png"
        />
        <img data-aos="fade-left"
          className="rectangleIcon5"
          alt=""
          src="/photos/rectangle-80@2x.png"
        />
        <img data-aos="fade-right"
          className="rectangleIcon6"
          alt=""
          src="/photos/rectangle-85@2x.png"
        />
        <img data-aos="fade-left"
          className="rectangleIcon7"
          alt=""
          src="/photos/rectangle-84@2x.png"
        />
        <img data-aos="fade-right"
          className="rectangleIcon8"
          alt=""
          src="/photos/rectangle-86@2x.png"
        />
        <img data-aos="fade-left"
          className="rectangleIcon9"
          alt=""
          src="/photos/rectangle-87@2x.png"
        />
    </div>
  );
};

export default PhotoGallery;
