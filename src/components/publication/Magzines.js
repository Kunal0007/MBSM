import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch } from "react-redux";
import { fetchMagzines } from "../../store/magzines/operation";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
// import { Link } from 'react-router-dom';
import { db } from "../../firebase.config";

const data = [2018, 2017, 2016, 2015, 2014];

const Magzines = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchMagzines());
  }, []);

  return (
    <div className="main">
      <div className="heading">
        <h1>Magzines</h1>
      </div>
      <Accordion>
        {data.map((year, index) => {
          return (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>{year}</Accordion.Header>
              <Accordion.Body>
                <div className="magzine">
                  <Card style={{ width: "18rem", height: "fit-content" }}>
                    <a href="/pdfs/Apr-18.pdf">
                      <Card.Img
                        variant="top"
                        src="/Screenshot 2022-10-15 001908.jpg"
                      />
                    </a>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                  </Card>
                  <Card style={{ width: "18rem", height: "fit-content" }}>
                    <a href="/pdfs/Apr-18.pdf">
                      <Card.Img
                        variant="top"
                        src="/Screenshot 2022-10-15 001908.jpg"
                      />
                    </a>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                  </Card>
                  <Card style={{ width: "18rem", height: "fit-content" }}>
                    <a href="/pdfs/Apr-18.pdf">
                      <Card.Img
                        variant="top"
                        src="/Screenshot 2022-10-15 001908.jpg"
                      />
                    </a>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                  </Card>
                  <Card style={{ width: "18rem", height: "fit-content" }}>
                    <a href="/pdfs/Apr-18.pdf">
                      <Card.Img
                        variant="top"
                        src="/Screenshot 2022-10-15 001908.jpg"
                      />
                    </a>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                  </Card>
                  <Card style={{ width: "18rem", height: "fit-content" }}>
                    <a href="/pdfs/Apr-18.pdf">
                      <Card.Img
                        variant="top"
                        src="/Screenshot 2022-10-15 001908.jpg"
                      />
                    </a>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                  </Card>
                  <Card style={{ width: "18rem", height: "fit-content" }}>
                    <a href="/pdfs/Apr-18.pdf">
                      <Card.Img
                        variant="top"
                        src="/Screenshot 2022-10-15 001908.jpg"
                      />
                    </a>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                  </Card>
                  <Card style={{ width: "18rem", height: "fit-content" }}>
                    <a href="/pdfs/Apr-18.pdf">
                      <Card.Img
                        variant="top"
                        src="/Screenshot 2022-10-15 001908.jpg"
                      />
                    </a>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                  </Card>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Magzines;
