import React from "react";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Search from "./components/Search";
import DefaultBookList from "./components/DefaultBookList";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <Container className="masterContainer" fluid="?">
      <Row className="navRow">
      <Nav />
      Navbar
      </Row>
      <Container className="mainContainer" fluid="?">
        <Row className="topRow row">
          <Col className="colOne col" xs="2">
            blank_space
          </Col>
          <Col className="colTwo">Search Bar</Col>
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
              <Col className="col" xs="2">.col_1</Col>
              <Col>Info_Card</Col>
              <Col className="col" xs="2">.col_3</Col>
            </Row>
            <Row className="catOfTheDay">
              <Col>Category_of_the_Day</Col>
            </Row>
          </Col>
          <Col className="colThree col" xs="2">
            .col_3
          </Col>
        </Row>
      </Container>
      <Row className="footer">
        <Footer />
        Footer
      </Row>
    </Container>
  );
}

export default App;
