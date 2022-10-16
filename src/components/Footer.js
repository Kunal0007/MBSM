import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Home.css"
export default function Footer() {
  return (
    <div className="footer">
        <div className="footerContent">
          <div className="footerInfo1">
            <h3>Bharatiya Shikshan Mandal</h3>
            <p>
              Sheshadri Sadan, Tulsibag Marg, Mahal, Nagpur – 440032, Bharat.
            </p>
            <p>
              RFRF- Knowledge Resource Center Kanad, Behind NEERI, Opposite
              Baljagat Main Gate, Laxminagar, Nagpur 440020, Bharat
            </p>
            <h3 style={{ fontWeight: "bolder" }}>Follow Us</h3>
          </div>
          <div className="footerInfo2">
            <h3>Get Started</h3>
            <ul className="footerTabs">
              <Link href="#">About Us</Link>
              <Link href="#">Events</Link>
              <Link href="#">Organization Structure</Link>
              <Link href="#">Publication</Link>
              <Link href="#">Join BSM</Link>
            </ul>
          </div>
        </div>
        <div className="copyRight">
          <p>© Copyright 2021 Bhartiya Shikshan Mandal. All Rights Reserved</p>
        </div>
      </div>
  )
}
