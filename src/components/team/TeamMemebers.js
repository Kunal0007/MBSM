import React from "react";
// import Card from "react-bootstrap/Card";
import Omkar from "../../assets/images/Omkar.jpeg";
import Kunal from "../../assets/images/Kunal.jpeg";
import Hod from "../../assets/images/Hod.jpg";
import GaneshSir from "../../assets/images/GaneshSir.jpeg";
import Abhishek from "../../assets/images/Abhishek1.jpeg";
import HemantSir from "../../assets/images/HemantSir.jpg";
import Director from "../../assets/images/director-PCCoE.jpg";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="maint">
      <div className="heading">
        <h1>Team Members</h1>
      </div>

      <div className="team">
        <div className="profile">
          <div className="image">
            <img alt="profile" className="profilePic" src={Director} />
          </div>
          <div className="detailst">
            <div className="name">Dr. Govind Kulkarni</div>
            <div className="subname">Mentor</div>
            <div className="line"></div>
            <div className="socials">
              <img
                alt="socials"
                src="https://img.icons8.com/color/30/null/linkedin.png"
              />
              <img
                alt="socials"
                src="https://img.icons8.com/color/30/null/gmail--v1.png"
              />
              <img
                alt="socials"
                src="https://img.icons8.com/ios-glyphs/30/null/github.png"
              />
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="image">
            <img alt="profile" className="profilePic" src={HemantSir} />
          </div>
          <div className="detailst">
            <div className="name">Hemant Selmokar</div>
            <div className="subname">Mentor</div>
            <div className="line"></div>
            <div className="socials">
              <img
                alt="socials"
                src="https://img.icons8.com/color/30/null/linkedin.png"
              />
              <img
                alt="socials"
                src="https://img.icons8.com/color/30/null/gmail--v1.png"
              />
              <img
                alt="socials"
                src="https://img.icons8.com/ios-glyphs/30/null/github.png"
              />
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="image">
            <img alt="profile" className="profilePic" src={Hod} />
          </div>
          <div className="detailst">
            <div className="name">Dr. K. Rajeswari</div>
            <div className="subname">Mentor</div>
            <div className="line"></div>
            <div className="socials">
              <img
                alt="socials"
                src="https://img.icons8.com/color/30/null/linkedin.png"
              />
              <img
                alt="socials"
                src="https://img.icons8.com/color/30/null/gmail--v1.png"
              />
              <img
                alt="socials"
                src="https://img.icons8.com/ios-glyphs/30/null/github.png"
              />
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="image">
            <img alt="profile" className="profilePic" src={GaneshSir} />
          </div>
          <div className="detailst">
            <div className="name">Prof. Ganesh Deshmukh</div>
            <div className="subname">Mentor</div>
            <div className="line"></div>
            <div className="socials">
              <img
                alt="socials"
                src="https://img.icons8.com/color/30/null/linkedin.png"
              />
              <img
                alt="socials"
                src="https://img.icons8.com/color/30/null/gmail--v1.png"
              />
              <img
                alt="socials"
                src="https://img.icons8.com/ios-glyphs/30/null/github.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="webteam">
        <div className="profile">
          <div className="image">
            <img alt="profile" className="profilePic" src={Omkar} />
          </div>
          <div className="detailst">
            <div className="name">Omkar Salapurkar</div>
            <div className="subname">Web Developer</div>
            <div className="line"></div>
            <div className="socials">
              <img
                alt="socials"
                src="https://img.icons8.com/color/30/null/linkedin.png"
              />
              <img
                alt="socials"
                src="https://img.icons8.com/color/30/null/gmail--v1.png"
              />
              <img
                alt="socials"
                src="https://img.icons8.com/ios-glyphs/30/null/github.png"
              />
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="image">
            <img alt="profile" className="profilePic" src={Abhishek} />
          </div>
          <div className="detailst">
            <div className="name">Abhishek Bhadane</div>
            <div className="subname">UI Designer</div>
            <div className="line"></div>
            <div className="socials">
              <img
                alt="socials"
                src="https://img.icons8.com/color/30/null/linkedin.png"
              />
              <img
                alt="socials"
                src="https://img.icons8.com/color/30/null/gmail--v1.png"
              />
              <img
                alt="socials"
                src="https://img.icons8.com/ios-glyphs/30/null/github.png"
              />
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="image">
            <img alt="profile" className="profilePic" src={Kunal} />
          </div>
          <div className="detailst">
            <div className="name">Kunal Patil</div>
            <div className="subname">Web Developer</div>
            <div className="line"></div>
            <div className="socials">
              <img
                alt="socials"
                src="https://img.icons8.com/color/30/null/linkedin.png"
              />
              <img
                alt="socials"
                src="https://img.icons8.com/color/30/null/gmail--v1.png"
              />
              <img
                alt="socials"
                src="https://img.icons8.com/ios-glyphs/30/null/github.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
