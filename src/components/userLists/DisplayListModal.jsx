import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Alert,
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody,
  CardImg,
  CardHeader,
} from "reactstrap";

const DisplayListModal = (props) => {
  const [books, setBooks] = useState([]);
  const [modal, setModal] = useState(false);
  const [err, setErr] = useState("");
  const [update, setUpdate] = useState("");
  const [newListTitle, setNewListTitle] = useState("");
  const [deleteResponse, setDeleteResponse] = useState("");
  const [updateResponse, setUpdateResponse] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  const buttonTitleUpdater = () => {
    setUpdate(!update);
  };

  useEffect(() => {
    fetch(`https://biblioquest.herokuapp.com/book/listBooks/${props.list.id}`, {
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

  const listDeleter = () => {
    fetch(
      `https://biblioquest.herokuapp.com/list/deletelist/${props.list.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: props.token,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setDeleteResponse(res.message);
        props.componentRefresher(res.message);
        // toggle();
      })
      .catch((err) => {
        setErr(err);
        console.log(err);
      });
  };

  const listUpdater = () => {
    fetch(`https://biblioquest.herokuapp.com/list/update/${props.list.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
      body: JSON.stringify({ title: newListTitle }),
    })
      .then((res) => res.json())
      .then((res) => {
        setUpdateResponse(res.message);
        toggle();
      })
      .catch((err) => {
        setErr(err);
        console.log(err);
      });
  };

  const bookUpdater = (book) => {
    fetch(`https://biblioquest.herokuapp.com/book/update/${book.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
      body: JSON.stringify({ read: !book.read }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);
      })
      .catch((err) => {
        setErr(err);
        console.log(err);
      });
  };

  return (
    <div>
      <p onClick={toggle}>{props.list.title}</p>
      <Modal isOpen={modal} toggle={toggle} className="{className}">
        <ModalHeader toggle={toggle}>{props.list.title}</ModalHeader>
        <ModalBody>
          {update ? (
            <>
              <Label for="newListTitle" className="sr-only" />
              <Input
                onChange={(e) => setNewListTitle(e.target.value)}
                type="text"
                className="form-control"
                id="newListTitle"
                placeholder="e.g. Philosophy"
              />
              {updateResponse && modal ? (
                <Alert>{updateResponse}</Alert>
              ) : (
                <></>
              )}
              <Button onClick={(e) => listUpdater()}> Submit Update</Button>
            </>
          ) : books.length > 0 ? (
            books.map((book, index) => {
              return (
                <div>
                  <Card key={index} style={{ display: "flex" }}>
                    <CardImg
                      top
                      width="100%"
                      src={book.smallThumbnailURL}
                      alt="Card image cap"
                      style={{ width: "10em", height: "15em" }}
                    />
                    <CardBody>
                      <CardTitle tag="h5">{book.title}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {book.subtitle ? book.subtitle : <></>}
                      </CardSubtitle>
                      <CardText>{`Author: ${book.author}`}</CardText>
                      {book.read ? (
                        <div>
                          <Input
                            type="checkbox"
                            onClick={(e) => bookUpdater(book)}
                            value="Read?"
                          ></Input>
                          <span>Read?</span>
                        </div>
                      ) : (
                        <div>
                          <Input
                            type="checkbox"
                            onClick={(e) => bookUpdater(book)}
                            value="Read?"
                            defaultChecked
                          ></Input>
                          <span>Read?</span>
                        </div>
                      )}
                    </CardBody>
                  </Card>
                </div>
              );
            })
          ) : err ? (
            <p>{err}</p>
          ) : (
            <p>
              No books on your shelf yet. Search some books and add the ones you
              find interesting!
            </p>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={(e) => listDeleter()}>
            Delete Bookshelf
          </Button>
          <Button color="primary" onClick={buttonTitleUpdater}>
            {update ? <>Cancel Update</> : <>Update Bookshelf Title?</>}
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DisplayListModal;
