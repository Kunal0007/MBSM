import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const PhotoGallery = () => {
  // useEffect(() => {
  //   AOS.init({
  //     offset: 200,
  //     duration: 600,
  //     easing: 'ease-in-sine',
  //     delay: 100,
  //   });
  //   AOS.refreshHard()    
  // }, []);
  return (
    <div className="main">
      <div>
        <h1 className="text-center">{`Photo Gallery `}</h1>
      </div>
      <div className="mx-0 px-2">
        <div className="row m-3">
          <div className="col col-sm-8" data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
            <img 
              alt=""
              width="100%"
              src="/photos/rectangle-75@2x.png"
            />
          </div>
        </div>
        <div className="row m-3">
          <div className="col order-1" data-aos="fade-left">
            <img 
              alt=""
              width="100%"
              src="/photos/rectangle-76@2x.png"
            />
          </div>
          <div className="col-sm-4">

          </div>
        </div>
        <div className="row m-3">
          <div className="col col-sm-8">
            <img data-aos="fade-right"
              alt=""
              width='100%'
              src="/photos/rectangle-77@2x.png"
            />
          </div>
        </div>
        <div className="row m-3">
          <div className="col order-1">
            <img data-aos="fade-left"
              alt=""
              width='100%'
              src="/photos/rectangle-78@2x.png"
            />
          </div>
          <div className="col-sm-4">

          </div>
        </div>
        <div className="row m-3">
          <div className="col col-sm-8">
            <img data-aos="fade-right"
              alt=""
              width='100%'
              src="/photos/rectangle-80@2x.png"
            />
          </div>
        </div>
        <div className="row m-3">
          <div className="col order-1">
            <img data-aos="fade-left"
              alt=""
              width='100%'
              src="/photos/rectangle-85@2x.png"
            />
          </div>
          <div className="col-sm-4">

          </div>
        </div>
        <div className="row m-3">
          <div className="col col-sm-8">
            <img data-aos="fade-right"
              alt=""
              width='100%'
              src="/photos/rectangle-84@2x.png"
            />
          </div>
        </div>
        <div className="row m-3">
          <div className="col order-1">
            <img data-aos="fade-left"
              alt=""
              width='100%'
              src="/photos/rectangle-86@2x.png"
            />
          </div>
          <div className="col-sm-4">

          </div>
        </div>
        <div className="row m-3">
          <div className="col col-sm-8">
            <img data-aos="fade-right"
              alt=""
              width='100%'
              src="/photos/rectangle-87@2x.png"
            />
          </div>
        </div>
      </div>



    </div>
  );
};

export default PhotoGallery;
