import React, { useEffect, useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
// import { Button } from "reactstrap";
import DisplayListModal from "./DisplayListModal";

const ListRouter = (props) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/list/allLists", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
    })
      .then((res) => res.json())
      .then((listData) => {
        setLists(listData);
      });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-list-styling">
        {lists.length > 0 ? (
          lists.map((list, index) => {
            return (
              <div key={index}>
                <DisplayListModal list={list} token={props.token} />
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ListRouter;
