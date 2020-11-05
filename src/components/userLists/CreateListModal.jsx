import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Alert,
} from "reactstrap";

const CreateListModal = (props) => {
  const { token } = props;
  const [modal, setModal] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const [listResponse, setListResponse] = useState("");

  const toggle = () => {
    setModal(!modal);
    setListResponse("");
  };

  const createList = () => {
    fetch("https://biblioquest.herokuapp.com/list/newList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
      body: JSON.stringify({ title: listTitle }),
    })
      .then((res) => res.json())
      .then((data) => {
        setListResponse(data.message);
      });
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {"Create a Bookshelf!"}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="{className}">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <p>
            Biblioquest's Bookshelves are a great way to keep your reading items
            ordered and remind yourself about that great book you wanted to
            read!
          </p>
          <Label for="listTitle" className="sr-only" />
          <Input
            onChange={(e) => setListTitle(e.target.value)}
            type="text"
            className="form-control"
            id="listTitle"
            placeholder="e.g. Philosophy"
          />
          {listResponse && modal ? <Alert>{listResponse}</Alert> : <></>}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(e) => createList()}>
            Create Bookshelf
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateListModal;
