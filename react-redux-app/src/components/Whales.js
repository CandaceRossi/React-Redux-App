import React from "react";

const Whales = props => {
  return (
    <div>
      <h2>{props.species}</h2>
      <p>{props.description}</p>
      <p>{props.quantity}</p>
      <p>{props.location}</p>
    </div>
  );
};

export default Whales;
