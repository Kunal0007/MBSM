import React from "react";
import banner_vision from "../../assets/images/banner_vision.jpg";

const Mission = () => {
  return (
    <div className="mission">
      <div className="head_img">
        <img src={banner_vision} style={{width: '100%' , height: '100%' , objectFit: 'contain'}} />        
      </div>
      <div className="content">
        <div className="mission_head">
          <h2>ध्येय विधान</h2>
        </div>
        <div className="details">
          <p>
            {" "}
            "ज्या शिक्षणाचा आधार 'भारतीयत्व'च आहे ते शिक्षण लोक-जीवनात एकात्म
            करण्यासाठी, तो 'स्वभाव 'बनण्यासाठी, हा आधार अधिकाधिक भक्कम
            करण्यासाठी संशोधन, शिक्षक शिक्षण, प्रबोधन, लेखन, प्रकाशन, वितरण व
            संघटन ही सर्व साधने समर्थपणे प्रभावी, उपयुक्त व्हावीत म्हणून शालेय
            स्तरावरील शिक्षकांना कार्यरत ठेवणे तसेच त्यांची विचार यात्रा
            अधिकाधिक गतिमान राहण्यासाठी प्रयत्न करणे.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;