import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../../index.css";

const UserList = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [listData, setListData] = useState(["Loading", "Loading"]);
  const [bookListData, setBookListData] = useState([]);
  const [token, setToken] = useState("");

  const toggle = async () => setDropdownOpen((prevState) => !prevState);

  /**************************
   * GETS ALL LISTS FOR DROPDOWN
   **************************/
  const listDataFetcher = async () => {
    fetch("http://localhost:3030/list/allLists", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: props.token,
      },
    })
      .then((response) => response.json())
      .then((listData) => {
        setListData(listData);
        console.log(listData);
      });
  };

  /*****************************
   * GETS ALL BOOKS FOR A LIST
   *****************************/
  const bookDataFetcher = async (id) => {
    console.log(props.token);
    fetch(`http://localhost:3030/book/listBooks/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: props.token,
      },
    })
      .then((response) => response.json())
      .then((bookListData) => {
        setBookListData(bookListData.data);
        console.log(bookListData);
      });
  };

  return (
    <div className="categoryScroll">
      <select onClick={(e) => listDataFetcher()}>
        {listData.map((list, index) => {
          return (
            <option key={index} onClick={(e) => bookDataFetcher(list.id)}>
              {list.title}
            </option>
          );
        })}
      </select>
      <div className="cardContainer">
        {bookListData ? (
          bookListData.map((book, index) => {
            return (
              <Card key={index}>
                <CardImg
                  src={book.smallThumbnailURL}
                  alt="blank"
                  style={{ height: "25%", width: "25%" }}
                />
                <CardBody>
                  <CardTitle>{book.title}</CardTitle>
                  <CardSubtitle>{book.subtitle}</CardSubtitle>
                  {/* <CardText>{book.description}</CardText> */}
                </CardBody>
              </Card>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UserList;
