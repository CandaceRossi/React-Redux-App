import React from "react";

const Whales = props => {
  return (
    <div className="whale-style">
      <h2>Species: {props.species}</h2>
      <h3>Description:</h3>
      <p> {props.description}</p>
      <h3>Quantity:</h3>
      <p> {props.quantity}</p>
      <h3>Latitude:</h3>
      <p> {props.latitude}</p>
      <h3>Longitude:</h3>
      <p> {props.longitude}</p>
      <h3>Location:</h3>
      <p> {props.location}</p>
    </div>
  );
};

export default Whales;
