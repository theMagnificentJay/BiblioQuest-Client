import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Label,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Form,
} from "reactstrap";

const BookAdderModal = (props) => {
  const [response, setResponse] = useState("");
  const [err, setErr] = useState("");
  const [lists, setLists] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const toggle2 = () => setDropdownOpen((prevState) => !prevState);

  const bookAddFetch = (listTitle) => {
    console.log(listTitle);
    fetch(`https://biblioquest.herokuapp.com/book/addBook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
      body: JSON.stringify({
        book: {
          listTitle: listTitle,
          title: props.book.volumeInfo.title,
          subTitle: props.book.volumeInfo.subtitle,
          author: props.book.volumeInfo.authors,
          read: false,
          description: props.book.volumeInfo.description,
          costRetail: null,
          length: props.book.volumeInfo.pageCount,
          category: props.book.volumeInfo.categories,
          publisher: props.book.volumeInfo.publisher,
          publicationDate: props.book.volumeInfo.publishedDate,
          ISBN: props.book.volumeInfo.industryIdentifiers[0].identifier,
          smallThumbnailURL: props.book.volumeInfo.imageLinks.smallThumbnail,
          thumbnailURL: props.book.volumeInfo.imageLinks.thumbnail,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message);
        console.log(data.message);
      })
      .catch((err) => {
        setErr(err);
        console.log(err);
      });
  };

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
  }, [props.token]);

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button onClick={toggle}>Add to Bookshelf</Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle} className="yoyo">
        <ModalHeader toggle={toggle}>
          Would you like to add this volume to your Bookshelf?{" "}
        </ModalHeader>
        <ModalBody>
          {`Just select a list and click "Add" to have  added to your bookshelf.`}
          <Label></Label>
          <Dropdown isOpen={dropdownOpen} toggle={toggle2}>
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu>
              {lists.length > 0 ? (
                lists.map((list) => {
                  return (
                    <DropdownItem
                      onClick={(e) => bookAddFetch(e.target.innerText)}
                    >
                      {list.title}
                    </DropdownItem>
                  );
                })
              ) : err ? (
                <DropdownItem>{err.message}</DropdownItem>
              ) : (
                <></>
              )}
            </DropdownMenu>
          </Dropdown>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default BookAdderModal;
