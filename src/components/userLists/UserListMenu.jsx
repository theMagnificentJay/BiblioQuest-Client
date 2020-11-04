import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Button } from "reactstrap";
import { BrowserRouter as Router } from "react-router-dom";
import ListRouter from "./ListRouter";
import CreateListModal from "./CreateListModal";

// App component
function UserList() {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return token ? (
    <div className="">
      <>
        <CreateListModal token={token} />
        <Router>
          <ListRouter token={token} />
        </Router>
      </>
    </div>
  ) : (
    <div>Login to create and view BookShelves!</div>
  );
}

export default UserList;
