import React, { useState, useEffect } from "react";
import "./App.css";

<<<<<<< HEAD
import Layout from "./components/Layout";

function App() {
  return <Layout />;
=======
import Search from "./components/Search";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import UserListMenu from "./components/userLists/UserListMenu";

import { Container, Row, Col } from "reactstrap";

function App() {
  const [token, setToken] = useState("");

  useEffect(async () => {
    if (localStorage.getItem("token")) {
      await setToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    console.log(newToken);
  };

  return (
    <Container className="masterContainer rb bsb" fluid="?">
      <div className="bookRibbon" />
      <Row className="navRow">
        <NavbarComponent updateToken={updateToken} />
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
          <Col className="colThree col colColor rb bsb" xs="2">
            <UserListMenu token={token} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
>>>>>>> JNBS somewhat functional list display
}

export default App;
