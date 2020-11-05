import React, { useEffect, useState } from "react";
// import { Button } from "reactstrap";
import DisplayListModal from "./DisplayListModal";

const ListRouter = (props) => {
  const [lists, setLists] = useState([]);
  const [err, setErr] = useState([]);

  useEffect(() => {
    fetch("https://biblioquest.herokuapp.com/list/allLists", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
    })
      .then((res) => res.json())
      .then((listData) => {
        setLists(listData);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-list-styling">
        {lists.length > 0 ? (
          lists.map((list, index) => {
            return (
              <div key={index}>
                <DisplayListModal
                  list={list}
                  token={props.token}
                  componentRefresher={props.componentRefresher}
                />
              </div>
            );
          })
        ) : err ? (
          <p>{err}</p>
        ) : (
          <p>Create some bookshelves!</p>
        )}
      </div>
    </div>
  );
};

export default ListRouter;
