import React from "react";
import "../css/Header.css";
const Header = () => {
  return (
    <div className="header1">
      {/* <div className="imgLogo">
      <a href="http://bsmbharat.org/"> */}
        <img
          style={{ height: 80 }}
          src="http://bsmbharat.org/wp-content/uploads/elementor/thumbs/rfr-logo-pdxx8z7xf4n5q53w1tjmsomv3eyw7k23bnbw19t5vw.png"
          title="rfr-logo"
          alt="rfr-logo"
        />
      {/* </a>
      </div> */}
      <img
        className="textLogo"
        src="http://bsmbharat.org/wp-content/uploads/2021/02/letter_head.png"
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default Header;
