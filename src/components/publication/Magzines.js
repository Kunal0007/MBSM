import React, { useEffect, useState, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/esm/Button";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  fetchMagzines,
  searchFetch,
  removeStatus,
} from "../../store/magzines/operation";
import {
  magzinesSelector,
  magzineLoadingSelector,
  SearchmagzinesSelector,
  SearchmagzineLoadingSelector,
  SearchmagzineStatusSelector,
} from "../../store/magzines/selector";
import Card from "react-bootstrap/Card";
import PdfImage from "../../assets/images/pdfImage.png";

const Magzines = () => {
  const dispatch = useDispatch();
  const magzines = useSelector(magzinesSelector);
  const Inputref = useRef(null);
  const magzinesLoading = useSelector(magzineLoadingSelector);
  const searchResult = useSelector(SearchmagzinesSelector);
  const searchloading = useSelector(SearchmagzineLoadingSelector);
  const searchStatus = useSelector(SearchmagzineStatusSelector);
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(fetchMagzines());
    return () => dispatch(removeStatus());
  }, []);

  const onSearch = () => {
    console.log("Idhar to aa rha hai =>", value);
    dispatch(searchFetch({ value }));
  };

  const onClickCross = () => {
    setValue("");
    dispatch(removeStatus());
    Inputref.current.value = "";
  };

  return (
    <div className="magzineMain">
      <div className="searchDiv">
        <FontAwesomeIcon color="#D3D3D3" size="2x" icon={faMagnifyingGlass} />
        <input
          ref={Inputref}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search Pdf"
          type="text"
          className="searchInput"
        />
        {searchStatus == "" && searchResult?.length == 0 ? (
          <Button onClick={onSearch} variant="primary">
            Search
          </Button>
        ) : (
          <FontAwesomeIcon
            onClick={onClickCross}
            color="black"
            size="2x"
            icon={faXmark}
          />
        )}
      </div>
      {searchloading ? (
        <h2>Loading..</h2>
      ) : searchStatus == "" ? (
        <div className="Searchmagzine">
          {searchResult.map((pdfInfo, index) => {
            return (
              <Card
                key={index}
                style={{ width: "9rem", height: "fit-content", margin: 10 }}
              >
                <a href={pdfInfo.pdfUrl}>
                  <Card.Img variant="top" src={PdfImage} />
                </a>
                <Card.Footer style={{ padding: 5 }} className="text-muted">
                  {pdfInfo.month + "(" + pdfInfo.year + ")"}
                </Card.Footer>
              </Card>
            );
          })}
        </div>
      ) : (
        <h5
          style={{
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
            margin: 20,
          }}
        >
          {searchStatus}
        </h5>
      )}

      <div className="heading">
        <h1>Magzines</h1>
      </div>
      <Accordion>
        {magzinesLoading ? (
          <h3>Loading...</h3>
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
