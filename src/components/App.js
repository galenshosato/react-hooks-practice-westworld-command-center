import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {
  const [hostList, setHostList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/hosts')
    .then(resp => resp.json())
    .then(data => setHostList(data))
  }, [])

  return (
    <Segment id="app">
      <WestworldMap hostList={hostList} />
      <Headquarters hostList={hostList}/>
    </Segment>
  );
}

export default App;
