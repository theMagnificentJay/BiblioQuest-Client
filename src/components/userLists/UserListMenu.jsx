import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
// import { BrowserRouter as Router } from "react-router-dom";
import ListModals from "./ListModals";

// App component
function UserList(props) {
  return props.token ? (
    <div className="">
      <>
        <ListModals token={props.token} />
      </>
    </div>
  ) : (
    <div>Login to create and view BookShelves!</div>
  );
}

export default UserList;
