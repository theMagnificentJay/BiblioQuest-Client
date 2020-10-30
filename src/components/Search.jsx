import React, { useState } from "react";
import {
  Input,
  InputGroup,
  // Button,
  InputGroupAddon,
  InputGroupButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

const Search = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  return (
    <InputGroup>
      <Input
        class="form-control"
        id="searchComponent"
        placeholder="Search author, genre, title, or publisher . . ."
      />
      <InputGroupAddon addonType="append">
        <InputGroupButtonDropdown
          addonType="append"
          isOpen={dropdownOpen}
          toggle={toggleDropDown}
        >
          <DropdownToggle caret>Search</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Author</DropdownItem>
            <DropdownItem>Genre</DropdownItem>
            <DropdownItem>Title</DropdownItem>
            <DropdownItem>Publisher</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Search;
