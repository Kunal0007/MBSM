import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { fetchMagzines } from "../../store/magzines/operation";
import {
  magzinesSelector,
  magzineLoadingSelector,
} from "../../store/magzines/selector";
import Card from "react-bootstrap/Card";
import PdfImage from "../../assets/images/pdfImage.png";

const Magzines = () => {
  const dispatch = useDispatch();
  const magzines = useSelector(magzinesSelector);
  const magzinesLoading = useSelector(magzineLoadingSelector);

  useEffect(() => {
    dispatch(fetchMagzines());
  }, []);

  return (
    <div className="magzineMain">
      <div className="heading">
        <h1>Magzines</h1>
      </div>
      <Accordion>
        {magzinesLoading ? (
          <h1>Loading...</h1>
        ) : (
          magzines.map((item, index) => {
            return (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{item.year}</Accordion.Header>
                <Accordion.Body>
                  <div className="magzine">
                    {item.data.map((pdfInfo, index) => {
                      return (
                        <Card
                          key={index}
                          style={{ width: "18rem", height: "fit-content" }}
                        >
                          <a href={pdfInfo.pdfUrl}>
                            <Card.Img variant="top" src={PdfImage} />
                          </a>
                          <Card.Footer className="text-muted">
                            {pdfInfo.month}
                          </Card.Footer>
                        </Card>
                      );
                    })}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        )}
      </Accordion>
    </div>
  );
};

export default Magzines;
