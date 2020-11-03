import React from 'react';
import { Row, Col } from "reactstrap";

const DisplayResults = (results) => {

return (
    <Col className="colTwo brownBG rb">
    <Row className="popBookCarousel rb">
      <Col id="displaySearchContent" className="colColor rb bsb">
      {results.length > 0 ? <img src={results[0].volumeInfo.imageLinks.thumbnail} alt=""/> : null}
      </Col>
    </Row>
    <Row className="infoCard">
      <Col className="col" xs="2">
        {/*.col_1*/}
      </Col>
      <Col className="col colColor rb bsb">Info_Card</Col>
      <Col className="col rb" xs="2">
        {/*.col_3*/}
      </Col>
    </Row>
    <Row className="catOfTheDay rb">
      <Col className="catBoxOfTheDay rb bsb">Category_of_the_Day</Col>
    </Row>
  </Col>
)
}

export default DisplayResults;