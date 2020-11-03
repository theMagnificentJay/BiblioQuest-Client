import React, { useState } from "react";
import {
  Input,
  InputGroup,
  // Button,
  InputGroupAddon,
  InputGroupButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

const Search = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const data =

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  function searchAll() {
    var searchInput = document.getElementById("searchInput").value;

    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        searchInput +
        "&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }

  function searchAuthor() {
    var searchInput = document.getElementById("searchInput").value;
    var searchAuthor = "inauthor:";

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
    var searchInput = document.getElementById("searchInput").value;
    var searchGenre = "subject:";

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
    var searchInput = document.getElementById("searchInput").value;
    var searchTitle = "intitle:";

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
    var searchInput = document.getElementById("searchInput").value;
    var searchPublisher = "inPublisher:";

    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        searchPublisher +
        searchInput +
        "&maxResults=40&printType=books"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  }

  return (
    <InputGroup>
      <Input
        className="form-control"
        id="searchInput"
        placeholder="Search author, genre, title, or publisher . . ."
      />
      <InputGroupAddon addonType="append">
        <InputGroupButtonDropdown
          addonType="append"
          isOpen={dropdownOpen}
          toggle={toggleDropDown}
        >
          <DropdownToggle caret>Search</DropdownToggle>
          <DropdownMenu>
            <DropdownItem className="searchAll" onClick={(e) => searchAll()}>
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
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Search;
