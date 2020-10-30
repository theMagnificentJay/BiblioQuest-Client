import React from "react";
import "./App.css";

import Search from "./components/Search";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <Container className="masterContainer rb" fluid="?">
      <Row className="navRow">
        <NavbarComponent />
      </Row>
      <Container className="mainContainer rb" fluid="?">
        <Row className="topRow row rb">
          <Col className="colOne col rb" xs="2">
            blank_space
          </Col>
          <Col className="colTwo colColor rb">
            <Search />
          </Col>
          <Col className="colThree col rb" xs="2">
            blank_space
          </Col>
        </Row>
        <Row className="rowOne row rb">
          <Col className="colOne col colColor rb" xs="2">
            Categories
          </Col>
          <Col className="colTwo brownBG rb">
            <Row className="popBookCarousel rb">
              <Col className="colColor rb">Popular/Selected_Category</Col>
            </Row>
            <Row className="infoCard">
              <Col className="col" xs="2">
                .col_1
              </Col>
              <Col className="col colColor rb">Info_Card</Col>
              <Col className="col rb" xs="2">
                .col_3
              </Col>
            </Row>
            <Row className="catOfTheDay rb">
              <Col className="catBoxOfTheDay rb">Category_of_the_Day</Col>
            </Row>
          </Col>
          <Col className="colThree col colColor rb" xs="2">
            .col_3
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
