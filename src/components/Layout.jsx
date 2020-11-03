import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import Search from "./Search";
import NavbarComponent from "./NavbarComponent";
import Categories from "./Categories";
import PopSelectCategory from "./PopSelectCategory";
import InfoCard from "./InfoCard";
import CategoryOfTheDay from "./CategoryOfTheDay";
import Footer from "./Footer";

function Layout() {
  return (
    <Container className="masterContainer rb bsb" fluid="?">
      <Container>
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
            <Col className="colTwo brownBG rb">
              <Row className="popBookCarousel rb">
                <Col id="displaySearchContent" className="colColor rb bsb">
                  Popular/Selected_Category
                </Col>
                <PopSelectCategory />
              </Row>
              <Row className="infoCard">
                <Col className="col" xs="2">
                  {/*.col_1*/}
                </Col>
                <Col className="col colColor rb bsb">Info_Card</Col>
                <InfoCard />
                <Col className="col rb" xs="2">
                  {/*.col_3*/}
                </Col>
              </Row>
              <Row className="catOfTheDay rb">
                <Col className="catBoxOfTheDay rb bsb">Category_of_the_Day</Col>
                <CategoryOfTheDay />
              </Row>
            </Col>
            <Col className="colThree col colColor rb bsb" xs="2">
              My_List
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    </Container>
  );
}

export default Layout;
