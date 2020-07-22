import React from "react";
import "./../App.css";

function Scroll(props) {
  return (
    <div className="scrollContainer">
      <div className="scrollable">{props.children}</div>
    </div>
  );
}

export default Scroll;
