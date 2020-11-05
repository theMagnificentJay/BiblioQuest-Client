import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import BookAdderModal from "./BookAdderModal";

const UserCard = (props) => {
  return (
    <div>
      <Card style={{ display: "flex" }}>
        <CardImg
          top
          width="100%"
          src={
            props.book.volumeInfo.imageLinks === undefined
              ? "../assets/nocover.png"
              : props.book.volumeInfo.imageLinks.thumbnail
          }
          alt="Card image cap"
          style={{ width: "10em", height: "15em" }}
        />
        <CardBody>
          <CardTitle tag="h5">{props.book.volumeInfo.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.book.volumeInfo.subtitle ? (
              props.book.volumeInfo.subtitle
            ) : (
              <></>
            )}
          </CardSubtitle>
          <CardText>{`Author(s): ${props.book.volumeInfo.authors}`}</CardText>
          <BookAdderModal token={props.token} book={props.book} />
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;
