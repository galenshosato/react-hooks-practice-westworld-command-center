import React, {useState} from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel"

function Headquarters({hostList}) {
  const [isSelected, setIsSelected] =useState(false)
  const [selectedDetails, setSelectedDetails] =useState({})

  function handleClick (event) {
    setIsSelected(prev => !prev)
    
  }
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage hostList={hostList} isSelected={isSelected} handleClick={handleClick} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
