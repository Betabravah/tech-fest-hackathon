import React, { useRef } from "react";
import { TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const searchRef = useRef("");

  return (
    <div className="flex items-center">
      <TextField
        fullWidth={true}
        placeholder="Search"
        variant="standard"
        inputRef={searchRef}
      />
      <FontAwesomeIcon icon={faSearch} className="mr-3" />
    </div>
  );
}
