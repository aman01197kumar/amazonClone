import React from "react";
// import SearchBar from "../Screens/SearchBar/SearchBar";
import SubHeader from "../SubHeader/SubHeader";
import SearchBar from "../SearchBar/SearchBar";

function Header({ title }) {
  return (
    <div>
      <SearchBar title={title} />
      <SubHeader />
    </div>
  );
}

export default Header;
