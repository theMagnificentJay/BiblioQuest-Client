import React from "react";
import { Container } from "reactstrap";
import BookCard from "./BookCard";

const DefaultBookList = (props) => {
  return (
    <Container className="list">
      {props.books.map((book, i) => {
        return (
          <BookCard
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            published={book.volumeInfo.publishedDate}
          />
        );
      })}
    </Container>
  );
};

export default DefaultBookList;
