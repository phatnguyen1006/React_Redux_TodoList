import React from "react";
import FilterLink from "../Containers/FilterLink";

// start:
const Footer = () => {
  return (
    <p>
      SHOW: <FilterLink filter={"SHOW_ALL"}>ALL</FilterLink>{" "}
      <FilterLink filter={"COMPLETED"}>COMPLETED</FilterLink>{" "}
      <FilterLink filter={"ACTIVE"}>ACTIVE</FilterLink>
    </p>
  );
};

export default Footer;
