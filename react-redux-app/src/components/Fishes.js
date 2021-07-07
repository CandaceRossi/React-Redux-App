import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFishes } from "../store/actions";
import Whales from "./Whales";

const Fishes = props => {
  useEffect(() => {
    getFishes();
  }, []);

  if (props.isFetching) {
    return <h2>Fetching Whale Sighting Stats!</h2>;
  }
  return (
    <div className="fish-style">
      {props.error} <p>{props.error}</p>
      {props.fishFacts.map(fish => (
        <Whales
          // getFishes={fish}
          species={fish.species}
          description={fish.description}
          quantity={fish.quantity}
          latitude={fish.latitude}
          longitude={fish.longitude}
          location={fish.location}
        />
      ))}
      <div>
        <button className="fish-button" onClick={props.getFishes}>
          Update Whale Stats Now!
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("this is state", state);
  return {
    //photo: state.SpeciesIllustrationPhoto.src,
    fishFacts: state.fishFacts,
    // species: state.fishFacts.species,
    // description: state.fishFacts.description,
    // quantity: state.fishFacts.quantity,
    // location: state.fishFacts.location,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getFishes }
)(Fishes);
