import React from "react";
import Fishes from "./components/Fishes";

function App() {
  return (
    <div className="App">
      <h1>Whale Sightings Graph</h1>
      <Fishes />
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     fish: [],
//     type: "",
//     population: "",
//     isFetching: state.isFetching,
//     error: state.error
//   };
// };

// export default connect(
//   mapStateToProps,
//   { Fishes }
// )(App);
export default App;
