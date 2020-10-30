import React from "react";
import "./App.css";

import Search from "./components/Search";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <Container className="masterContainer" fluid="?">
      <Row className="navRow">
        <NavbarComponent />
      </Row>
      <Container className="mainContainer" fluid="?">
        <Row className="topRow row">
          <Col className="colOne col" xs="2">
            blank_space
          </Col>
          <Col className="colTwo">
            <Search />
          </Col>
          <Col className="colThree col" xs="2">
            blank_space
          </Col>
        </Row>
        <Row className="rowOne row">
          <Col className="colOne col" xs="2">
            Categories
          </Col>
          <Col className="colTwo">
            <Row className="popBookCarousel">
              <Col>Popular/Selected_Category</Col>
            </Row>
            <Row className="infoCard">
              <Col className="col mid3Boxes" xs="2">
                .col_1
              </Col>
              <Col className="col mid3Boxes">Info_Card</Col>
              <Col className="col mid3Boxes" xs="2">
                .col_3
              </Col>
            </Row>
            <Row className="catOfTheDay">
              <Col className="catBoxOfTheDay">Category_of_the_Day</Col>
            </Row>
          </Col>
          <Col className="colThree col" xs="2">
            .col_3
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
