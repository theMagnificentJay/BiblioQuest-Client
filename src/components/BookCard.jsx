import React from "react";
import { Container } from 'reactstrap';

const BookCard = (props) => {
  return (
    <Container className="card-container">
      <img src={props.image} alt="" />
      <Container className="desc">
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.publishedDate}</p>
      </Container>
    </Container>
  );
};

export default BookCard;
