import React from "react";
import "../../css/Home.css";
import rect1 from "../../assets/images/rect1.png";
import rect2 from "../../assets/images/rect2.png";
import rect3 from "../../assets/images/rect3.png";
import Ellipse1 from "../../assets/images/Ellipse1.png";
import Ellipse2 from "../../assets/images/Ellipse2.png";
import Ellipse3 from "../../assets/images/Ellipse3.png";
import Ellipse4 from "../../assets/images/Ellipse4.png";
import { getWordCount } from "../../utils/helper";
const gatvidhi = [
  {
    title: "Institutional Projects",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et consectetur adipiscing elit Ut et",
    imglogo: Ellipse1,
    img: rect1,
  },
  {
    title: "Projects for Women",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et",
    imglogo: Ellipse2,
    img: rect2,
  },
  {
    title: "Research Cell",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et",
    imglogo: Ellipse3,
    img: rect2,
  },
  {
    title: "Gurukula Projects",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et",
    imglogo: Ellipse4,
    img: rect3,
  },
];

export default function Gatvidhi() {
  return (
    <div className="gatvidhiDiv">
      <div className="gatvidhi">
        <h3>Gatvidhi</h3>
        <div className="gatvidhiCardDiv">
          {gatvidhi.map((item, index) => {
            return (
              <div key={index} className="gatvishiCard">
                <img style={{ width: "100%" }} src={item.img} alt=""/>
                <div className="cardtext">
                  <div className="logoDiv">
                    <img src={item.imglogo} className="gatvidhiLogo" alt=""/>
                  </div>
                  <p>
                    {getWordCount(item.content) > 9
                      ? item.content.slice(0, 50)
                      : item.content}
                    <br />
                    <a
                      href="#"
                      style={{ color: "blue", textDecoration: "none" }}
                    >
                      Know more
                    </a>
                  </p>
                  <h5>{item.title}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
