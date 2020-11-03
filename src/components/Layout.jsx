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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [results, showResults] = useState([]);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

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
  console.log(
    results.length > 0 ? results[0].volumeInfo.imageLinks.thumbnail : null
  );

  function searchAuthor() {
    const searchInput = document.getElementById("searchInput").value;
    const searchAuthor = "inauthor:";

    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        searchAuthor +
        searchInput +
        "&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }

  function searchGenre() {
    const searchInput = document.getElementById("searchInput").value;
    const searchGenre = "subject:";

    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        searchGenre +
        searchInput +
        "&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }

  function searchTitle() {
    const searchInput = document.getElementById("searchInput").value;
    const searchTitle = "intitle:";

    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        searchTitle +
        searchInput +
        "&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }

  function searchPublisher() {
    const searchInput = document.getElementById("searchInput").value;
    const searchPublisher = "inPublisher:";

    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        searchPublisher +
        searchInput +
        "&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }

  function filterFictionYoungAdult() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Young+Adult&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterFictionFantasy() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Fantasy&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterFictionChildren() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Children&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterFictionScifi() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Science+Fiction&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterFictionThriller() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Thriller&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterFictionHorror() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Horror&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterFictionRomance() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Romance&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterNonFictionEducational() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Educational&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterNonFictionHistorical() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Historical&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterNonFictionSelfHelp() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Self+Help&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterNonFictionReligion() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Religion&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterNonFictionBiography() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Biography&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterNonFictionHistory() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:History&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterNonFictionHealth() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Health+and+Fitness&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterFiction() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }
  function filterNonFiction() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:Non-Fiction&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
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
              <InputGroupAddon addonType="prepend"><Button onClick={(e) => searchAll()}>Search</Button></InputGroupAddon>
                  {/* <DropdownToggle caret>Search</DropdownToggle>
                   <DropdownMenu>
                    <DropdownItem
                      className="searchAll"
                      onClick={(e) => searchAll()}
                    >
                      All
                    </DropdownItem>
                    <DropdownItem
                      className="searchAuthor"
                      onClick={(e) => searchAuthor()}
                    >
                      Author
                    </DropdownItem>
                    <DropdownItem
                      className="searchGenre"
                      onClick={(e) => searchGenre()}
                    >
                      Genre
                    </DropdownItem>
                    <DropdownItem
                      className="searchTitle"
                      onClick={(e) => searchTitle()}
                    >
                      Title
                    </DropdownItem>
                    <DropdownItem
                      className="searchPublisher"
                      onClick={(e) => searchPublisher()}
                    >
                      Publisher
                    </DropdownItem>
                  </DropdownMenu>
                  </InputGroupButtonDropdown> 
              </InputGroupAddon> */}
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
                <h5 onClick={(e) => filterFiction()}>Fiction</h5>
                <hr />
                <p onClick={(e) => filterFictionYoungAdult()}>Young Adult</p>
                <p onClick={(e) => filterFictionFantasy()}>Fantasy</p>
                <p onClick={(e) => filterFictionChildren()}>Children’s</p>
                <p onClick={(e) => filterFictionScifi()}>Science Fiction</p>
                <p onClick={(e) => filterFictionThriller}>Thrillers/Suspense</p>
                <p onClick={(e) => filterFictionHorror}>Horror</p>
                <p onClick={(e) => filterFictionRomance()}>Romance</p>
                <br />
                <h5 onClick={(e) => filterNonFiction()}>Non-Fiction</h5>
                <hr />
                <p onClick={(e) => filterNonFictionEducational()}>
                  Educational
                </p>
                <p onClick={(e) => filterNonFictionHistorical()}>Historical</p>
                <p onClick={(e) => filterNonFictionSelfHelp()}>Self-help</p>
                <p onClick={(e) => filterNonFictionReligion()}>
                  Religion/Spirituality
                </p>
                <p onClick={(e) => filterNonFictionBiography()}>Biography</p>
                <p onClick={(e) => filterNonFictionHistory()}>History</p>
                <p onClick={(e) => filterNonFictionHealth()}>
                  Health and Fitness
                </p>
              </div>
            </div>
          </Col>
          <Col className="colTwo brownBG rb">
            <Row className="popBookCarousel rb">
              <Col id="displaySearchContent" className="colColor rb bsb">
                {results.length > 0 ? ( <img src={results[0].volumeInfo.imageLinks.thumbnail} alt="" />) : null}
              </Col>
            </Row>
          </Col>
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
