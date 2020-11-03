import React from "react";

import Search from "./Search";
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import Categories from "./Categories";
import DisplayResults from "./DisplayResults";

import { Container, Row, Col } from "reactstrap";

function Layout() {
  return (
    <Container className="masterContainer rb bsb" fluid="?">
      <div className="bookRibbon" />
      <Row className="navRow">
        <NavbarComponent />
      </Row>
      <Container className="mainContainer rb" fluid="?">
        <Row className="topRow row rb">
          <Col className="colOne col rb" xs="2">
            {/*blank_space*/}
          </Col>
          <Col className="colTwo colColor rb bsb">
            <Search />
          </Col>
          <Col className="colThree col rb" xs="2">
            {/*blank_space*/}
          </Col>
        </Row>
        <Row className="rowOne row rb">
          <Col
            className="colOne col colColor rb bsb"
            xs="2"
            style={{ zIndex: "2" }}
          >
            <Categories />
          </Col>
          <DisplayResults />
          <Col className="colThree col colColor rb bsb" xs="2">
            My_List
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default Layout;
