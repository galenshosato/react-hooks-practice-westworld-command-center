import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {
  const [hostList, setHostList] = useState([])
  const [selectedDetails, setSelectedDetails] =useState({})
  const [hostSelect, setHostSelect] =useState(false)
  const [isSelected, setIsSelected] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/hosts')
    .then(resp => resp.json())
    .then(data => setHostList(data))
  }, [])

  return (
    <Segment id="app">
      <WestworldMap hostList={hostList} selectedDetails={selectedDetails} setSelectedDetails={setSelectedDetails} hostSelect={hostSelect} setHostSelect={setHostSelect} isSelected={isSelected} setIsSelected={setIsSelected} />
      <Headquarters hostList={hostList} selectedDetails={selectedDetails} setSelectedDetails={setSelectedDetails} hostSelect={hostSelect} setHostSelect={setHostSelect} isSelected={isSelected} setIsSelected={setIsSelected}/>
    </Segment>
  );
}

export default App;
