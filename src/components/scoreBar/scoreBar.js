import React from "react";
import "./scoreBar.css";

const scoreBar = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li><a href="/">Memory Game!</a></li>
                {props.message}
            <li>Score: <span style={{color: "red"}}>{props.currentScore}</span>
          </li>
        </ul>
    </div>
);

export default scoreBar;
