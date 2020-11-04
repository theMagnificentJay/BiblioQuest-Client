<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import {
  Input,
  InputGroup,
  Button,
  InputGroupAddon,
  // InputGroupButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";

import { Container, Row, Col } from "reactstrap";

function Layout() {
  const [results, showResults] = useState([]);

  function searchAll() {
    const searchInput = document.getElementById("searchInput").value;

    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        searchInput +
        "&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((res) => {
        showResults(res.items);
      });
  }
  console.log(results);

  function filterBook(filter) {
    console.log(filter);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${filter}&maxResults=40&printType=books`
    )
      .then((response) => response.json())
      .then((res) => {
        showResults(res.items);
      });
  }

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
            <InputGroup>
              <Input
                className="form-control"
                id="searchInput"
                placeholder="Search author, genre, title, or publisher . . ."
              />
              <InputGroupAddon addonType="append">
                <Button onClick={(e) => searchAll()}>Search</Button>
              </InputGroupAddon>
            </InputGroup>
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
            <div className="categoryScrollContainer">
              <h4>Categories</h4>
              <hr />
              <div className="categoryScroll">
                <h5>Featured</h5>
                <hr />
                <p>Staff List</p>
                <p>Popular</p>
                <br />
                <h5 onClick={(e) => filterBook("fiction")}>Fiction</h5>
                <hr />
                <p onClick={(e) => filterBook("young+adult")}>Young Adult</p>
                <p onClick={(e) => filterBook("fantasy")}>Fantasy</p>
                <p onClick={(e) => filterBook("children's")}>Children’s</p>
                <p onClick={(e) => filterBook("science+fiction")}>
                  Science Fiction
                </p>
                <p onClick={(e) => filterBook("thriller")}>
                  Thrillers/Suspense
                </p>
                <p onClick={(e) => filterBook("horror")}>Horror</p>
                <p onClick={(e) => filterBook("romance")}>Romance</p>
                <br />
                <h5 onClick={(e) => filterBook("nonfiction")}>Non-Fiction</h5>
                <hr />
                <p onClick={(e) => filterBook("educational")}>Educational</p>
                <p onClick={(e) => filterBook("historical")}>Historical</p>
                <p onClick={(e) => filterBook("self+help")}>Self-help</p>
                <p onClick={(e) => filterBook("religion")}>
                  Religion/Spirituality
                </p>
                <p onClick={(e) => filterBook("biography")}>Biography</p>
                <p onClick={(e) => filterBook("history")}>History</p>
                <p onClick={(e) => filterBook("health")}>Health and Fitness</p>
              </div>
            </div>
          </Col>
          <Col className="colTwo brownBG rb">
            <Row className="popBookCarousel rb">
              <Col id="displaySearchContent" className="displayBooks colColor rb bsb">
                {results.length > 0 ? (
                  results.map((bookItem) => {
                    return (
                      <div className="card-container">
                        <img
                          src={bookItem.volumeInfo.imageLinks.thumbnail}
                          alt=""
                        />
                      </div>
                    );
                  })
                ) : (
                  <p>empty</p>
                )}
              </Col>
            </Row>
          </Col>
          <Col className="colThree col colColor rb bsb" xs="2">
            My_List
          </Col>
        </Row>
      </Container>
      <Footer />
>>>>>>> bd590f03990f35efd449057e559d0a6ff4cd6eda
    </Container>
  );
}

export default Layout;
