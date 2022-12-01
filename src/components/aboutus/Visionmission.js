import React from "react";

const Mission = () => {
  return (
    <div className="mission">
      <div>
        <img
          width="100%"
          height="300"
          src="http://www.bsmbharat.org/wp-content/uploads/2021/10/banner_vision.jpg"
          class="attachment-full size-full"
          alt=""
          loading="lazy"
          srcset="http://www.bsmbharat.org/wp-content/uploads/2021/10/banner_vision.jpg 1600w, http://www.bsmbharat.org/wp-content/uploads/2021/10/banner_vision-1536x288.jpg 1536w, http://www.bsmbharat.org/wp-content/uploads/2021/10/banner_vision-600x113.jpg 600w"
          sizes="(max-width: 1600px) 100vw, 1600px"
        />
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
