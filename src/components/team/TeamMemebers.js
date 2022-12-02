import React from "react";
// import Card from "react-bootstrap/Card";
import Omkar from "../../assets/images/Omkar.jpeg";
import Kunal from "../../assets/images/Kunal.jpeg";
import Hod from "../../assets/images/Hod.jpg";
import GaneshSir from "../../assets/images/GaneshSir.jpeg";
import Abhishek from "../../assets/images/Abhishek1.jpeg";

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
            <img alt="profile" width="100px" src="/profile.png" />
          </div>
          <div className="details">
            <div className="name">Hemant Selmokar</div>
            <div className="subname">Faculty Co-Ordinator</div>
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
          <div className="details">
            <div className="name">Dr. K. Rajeswari</div>
            <div className="subname">Faculty Co-Ordinator</div>
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
          <div className="details">
            <div className="name">Prof. Ganesh Deshmukh</div>
            <div className="subname">Faculty Co-Ordinator</div>
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
            <img alt="profile" className="profilePic" src={Omkar} />
          </div>
          <div className="details">
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
          <div className="details">
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
          <div className="details">
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
