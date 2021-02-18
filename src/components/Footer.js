import React from "react";
import FilterLink from "../Containers/FilterLink";

// start:
const Footer = () => {
  return (
    <p>
      SHOW: <FilterLink filter={"SHOW_ALL"}>ALL</FilterLink>{" "}
      <FilterLink filter={"SHOW_COMPLETED"}>COMPLETED</FilterLink>{" "}
      <FilterLink filter={"SHOW_ACTIVE"}>ACTIVE</FilterLink>
    </p>
  );
};

export default Footer;
