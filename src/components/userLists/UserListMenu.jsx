import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Button } from "reactstrap";
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
import ListRouter from "./ListRouter";
=======
// import { BrowserRouter as Router } from "react-router-dom";
import ListModals from "./ListModals";
>>>>>>> 1f9a85071f55c9a8f38513c728a47b06d44e468b
import CreateListModal from "./CreateListModal";

// App component
function UserList(props) {
  const [token, setToken] = useState("");
<<<<<<< HEAD

  // useEffect(() => {
  //   setToken(localStorage.getItem("token"));
  // }, []);
=======
  const [componentRefresh, setComponentRefresh] = useState("");

  const componentRefresher = (value) => {
    setComponentRefresh(value);
  };
>>>>>>> 1f9a85071f55c9a8f38513c728a47b06d44e468b

  return props.token ? (
    <div className="">
      <>
        <CreateListModal token={props.token} />
<<<<<<< HEAD
        <Router>
          <ListRouter token={props.token} />
        </Router>
=======
        <ListModals
          token={props.token}
          componentRefresher={componentRefresher}
        />
>>>>>>> 1f9a85071f55c9a8f38513c728a47b06d44e468b
      </>
    </div>
  ) : (
    <div>Login to create and view BookShelves!</div>
  );
}

export default UserList;
