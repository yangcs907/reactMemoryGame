import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card">
    <div className="img-container">
      <a onClick={() => props.selectImage(props.id)}
        className="img">
      <img alt={props.id} src={props.image} />
      </a>
    </div>
  </div>
);

export default ImageCard;
