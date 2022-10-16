import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMailForward } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Header.css";
const Header = () => {
  return (
    <div className="header1">
      {/* <div className="imgLogo">
      <a href="http://bsmbharat.org/"> */}
        <img
          style={{ height: 80,margin:10 }}
          src="http://bsmbharat.org/wp-content/uploads/elementor/thumbs/rfr-logo-pdxx8z7xf4n5q53w1tjmsomv3eyw7k23bnbw19t5vw.png"
          title="rfr-logo"
          alt="rfr-logo"
        />
      {/* </a>
      </div> */}
    <div className="titleHeader">
      <h2>महाराष्ट्र भारतीय शिक्षण मंडळ</h2>
      <h5>Maharashtra Bhartiya Shiksan Mandal</h5>
    </div>
    <div className="address">
<p><FontAwesomeIcon color="#86003e" size="x" icon={faLocationDot} /> : 189 Ashish Charkop Mumbai-400067</p>
<p> <FontAwesomeIcon color="#86003e" size="x" icon={faPhone} /> : 02228691908/1503</p>
<p><FontAwesomeIcon color="#86003e" size="x" icon={faMailForward} /> : mbsmmandal@gmail.com</p>
    </div>
    </div>
  );
};

export default Header;
