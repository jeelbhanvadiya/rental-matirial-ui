import React from "react";
import { Link } from "react-router-dom";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Greeting = ({ message}) => {
  return (
    <div className="greeting_container">
      <div className="greeting_title_content">
        <h2>Congratulation!</h2>
        <Link to="/">
          <HighlightOffIcon />
        </Link>
      </div>
      <div className="greeting_body_content">
        <div style={{ height: "1.5rem" }}></div>
        <div style={{ height: "1rem" }}></div>
          <div style={{ fontSize: "1rem" }} dangerouslySetInnerHTML={{__html: message}}/>
        <div style={{ height: "1.5rem" }}></div>
      </div>
    </div>
  );
};

export default Greeting;
