import React from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";

function App() {
  return (
    <Segment id="app">
      <WestworldMap />
    </Segment>
  );
}

export default App;
