import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";

const DisplayListContent = (props) => {
  const [books, setBooks] = useState([]);
  const [modal, setModal] = useState(false);
  const [err, setErr] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    fetch(`http://localhost:3030/book/listBooks/${props.list.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
    })
      .then((res) => res.json())
      .then((booksData) => {
        console.log(booksData);
        setBooks(booksData.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        {"Create a Bookshelf!"}
      </Button> */}
      <p onClick={toggle}>{props.list.title}</p>
      <Modal isOpen={modal} toggle={toggle} className="{className}">
        <ModalHeader toggle={toggle}>{props.list.title}</ModalHeader>
        <ModalBody>
          {books.length > 0 ? (
            books.map((book) => {
              return <img src={book.smallThumbnailURL} alt="" />;
            })
          ) : err ? (
            <p>{err}</p>
          ) : (
            <p>
              No Books on your shelf yet. Search some books and add the one's
              you find interesting!
            </p>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="danger">Delete Bookshelf</Button>
          <Button color="primary">Update Bookshelf Title</Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DisplayListContent;
