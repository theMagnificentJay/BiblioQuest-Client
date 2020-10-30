import React from "react";
import { Row } from "reactstrap";

const FooterComponent = (props) => {
  return (
    <Row className="footer">&copy;{new Date().getFullYear()} BiblioQuest</Row>
  );
};

export default FooterComponent;
