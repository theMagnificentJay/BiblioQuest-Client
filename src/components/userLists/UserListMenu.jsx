import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
// import { BrowserRouter as Router } from "react-router-dom";
import ListModals from "./ListModals";
import CreateListModal from "./CreateListModal";

// App component
function UserList(props) {
  const [token, setToken] = useState("");
  const [componentRefresh, setComponentRefresh] = useState("");

  const componentRefresher = (value) => {
    setComponentRefresh(value);
  };

  return props.token ? (
    <div className="">
      <>
        <CreateListModal token={props.token} />
        <ListModals
          token={props.token}
          componentRefresher={componentRefresher}
        />
      </>
    </div>
  ) : (
    <div>Login to create and view BookShelves!</div>
  );
}

export default UserList;
