import React, { useEffect, useState, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import PdfImage from "../../assets/images/pdfImage.png";
import DefaultPdf from "../../assets/pdf/Apr-18.pdf";
const classes = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];

const QuestionPapers = () => {
  return (
    <div className="magzineMain">
      <div className="heading">
        <h1>Question Papers</h1>
      </div>
      <Accordion>
        {classes.map((item, index) => {
          return (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>Standard {item}</Accordion.Header>
              <Accordion.Body>
                <div className="magzine">
                  <Card
                    key={index}
                    style={{ width: "12rem", height: "fit-content" }}
                  >
                    <a href={DefaultPdf}>
                      <Card.Img variant="top" src={PdfImage} />
                    </a>
                    <Card.Footer className="text-muted">
                      Class {item}
                    </Card.Footer>
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

export default QuestionPapers;
