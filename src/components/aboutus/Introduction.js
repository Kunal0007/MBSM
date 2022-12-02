import React from "react";
import Card from "react-bootstrap/Card";

const Intro = () => {
  return (
    <div>
      <div className="head_img">
        <img
          src="http://www.bsmbharat.org/wp-content/uploads/2021/02/banner_introduction.jpg"
          class="attachment-full size-full"
          alt=""
          loading="lazy"
          srcset="http://www.bsmbharat.org/wp-content/uploads/2021/02/banner_introduction.jpg 1600w, http://www.bsmbharat.org/wp-content/uploads/2021/02/banner_introduction-1536x288.jpg 1536w, http://www.bsmbharat.org/wp-content/uploads/2021/02/banner_introduction-600x113.jpg 600w"
          sizes="(max-width: 1600px) 100vw, 1600px"
        />
      </div>
      <div className="content">
        <div className="intro_head">
          <h2>ओळख</h2>
        </div>
        <div className="details">
          <p>
            भारत स्वतंत्र झाल्या नंतर शिक्षण हे भारतीय राज्य संस्थेकडे
            हस्तांतरित झाले. भारतीय जनतेच्या शिक्षणासंबंधी अपेक्षा वाढल्या.
            सामाजिक परिवर्तनाचे साधन म्हणून शिक्षणा कडे पाहण्याची दृष्टी विकसित
            झाली. शिक्षण हा विषय केवळ शासनाचा, राज्य सत्तेचा विषय नाही. तो
            शिक्षण क्षेत्रातील काम करणाऱ्या प्रत्येकाचा विषय आहे. प्रत्येकाला या
            बाबत व्यक्त व्हायचे आहे. याच हेतूने 'भारतीय शिक्षण 'मासिकाचा पहिली
            पायरी म्हणून प्रारंभ झाला आहे
          </p>
        </div>
        <div className="cards">
          {/* <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card> */}
        </div>
        <div className="img1">
          <img
            src="http://www.bsmbharat.org/wp-content/uploads/2021/10/about_infographic.png"
            class="attachment-large size-large"
            alt=""
            loading="lazy"
            srcset="http://www.bsmbharat.org/wp-content/uploads/2021/10/about_infographic.png 1000w, http://www.bsmbharat.org/wp-content/uploads/2021/10/about_infographic-600x370.png 600w"
          />
        </div>
        <div className="img2">
          <img
            src="http://www.bsmbharat.org/wp-content/uploads/2021/10/about-us-image-1024x720.jpg"
            class="attachment-large size-large"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
