import React from "react";

const Header = ({ children }) => {
  console.log("Header rendered");

  return <header>{children || <h1>My React App</h1>}</header>;
};

export default React.memo(Header);
