import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFishes } from "../store/actions";
// import Whales from "./Whales";

const Fishes = ({ getFishes, isFetching, error }) => {
  useEffect(() => {
    getFishes();
  }, [getFishes]);

  if (isFetching) {
    return <h2>Fetching Whale Sighting Stats!</h2>;
  }
  return (
    <>
      <h2>Here are the latest Fish Population Statistics:</h2>
      <button onClick={getFishes}>Update Whale Stats Now!</button>
      {/* <Whales
        species={props.species}
        description={props.description}
        quantity={props.quantity}
        location={props.location}
      /> */}
    </>
  );
};

const mapStateToProps = state => {
  console.log("this is state", state);
  return {
    //photo: state.SpeciesIllustrationPhoto.src,
    species: state.species,
    description: state.description,
    quantity: state.quantity,
    location: state.location,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getFishes }
)(Fishes);
