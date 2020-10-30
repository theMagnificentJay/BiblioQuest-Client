import React from "react";
import { Input, InputGroup, Button, InputGroupAddon } from "reactstrap";

const Search = (props) => {
  return (
      <InputGroup>
        <Input 
        class="form-control"
            id="searchComponent"
            placeholder="Search author, book title, genre, etc."/>
        <InputGroupAddon addonType="append">
          <Button color="secondary">Search</Button>
        </InputGroupAddon>
      </InputGroup>
  );
};

export default Search;
