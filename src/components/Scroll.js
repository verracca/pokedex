import React from "react";
import "./../App.css";

function Scroll(props) {
  return (
    <div>
      <div className="scrollable">{props.children}</div>
    </div>
  );
}

export default Scroll;