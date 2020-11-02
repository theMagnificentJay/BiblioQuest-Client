import React from "react";

// Implement and add API Call functionality ~Jay

const Categories = (props) => {
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
    <div className="categoryScrollContainer">
      <h4>Categories</h4>
      <hr />
      <div className="categoryScroll">
        <h5>Featured</h5>
        <hr />
        <p>Staff List</p>
        <p>Popular</p>
        <br />
        <h5 onClick={e => filterFiction()}>Fiction</h5>
        <hr />
        <p onClick={(e) => filterFictionYoungAdult()}>Young Adult</p>
        <p onClick={(e) => filterFictionFantasy()}>Fantasy</p>
        <p onClick={(e) => filterFictionChildren()}>Children’s</p>
        <p onClick={e => filterFictionScifi()}>Science Fiction</p>
        <p onClick={e => filterFictionThriller}>Thrillers/Suspense</p>
        <p onClick={e => filterFictionHorror}>Horror</p>
        <p onClick={e => filterFictionRomance()}>Romance</p>
        <br />
        <h5 onClick={e => filterNonFiction()}>Non-Fiction</h5>
        <hr />
        <p onClick={e => filterNonFictionEducational()}>Educational</p>
        <p onClick={e => filterNonFictionHistorical()}>Historical</p>
        <p onClick={e => filterNonFictionSelfHelp()}>Self-help</p>
        <p onClick={e => filterNonFictionReligion()}>Religion/Spirituality</p>
        <p onClick={e => filterNonFictionBiography()}>Biography</p>
        <p onClick={e => filterNonFictionHistory()}>History</p>
        <p onClick={e => filterNonFictionHealth()}>Health and Fitness</p>
      </div>
    </div>
  );
};

export default Categories;
