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
import Login from "./Login";
import Register from "./Register";

const UserList = (props) => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [token, setToken] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lists, setLists] = useState([]);
  const [testList, setTestList] = useState([1, 2, 3, 4, 5, 6]);

  const toggle = async () => setDropdownOpen((prevState) => !prevState);

  useEffect(async () => {
    if (localStorage.getItem("token")) {
      await setToken(localStorage.getItem("token"));
      fetch("http://localhost:3030/list/allLists", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      })
        .then((response) => response.json())
        .then((listData) => {
          setLists(listData);
          console.log(listData);
        });
    }
  }, []);

  return (
    <div className="mainListDiv">
      {token ? (
        <div className="cardContainer">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Your Bookshelves</DropdownToggle>
            <DropdownMenu right>
              {lists.map((listObj, index) => {
                return <DropdownItem key={index}>{listObj.title}</DropdownItem>;
              })}
            </DropdownMenu>
          </Dropdown>
          <Card>
            <CardImg
              top
              width="100%"
              src="/assets/318x180.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserList;
