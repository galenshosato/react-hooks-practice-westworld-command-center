import React, {useState} from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";


function Headquarters({hostList}) {
  const [selectedDetails, setSelectedDetails] =useState({})
  const [isSelected, setIsSelected] =useState(false)

  
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage hostList={hostList} setSelectedDetails={setSelectedDetails} setIsSelected={setIsSelected} isSelected={isSelected} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details host={selectedDetails} isSelected={isSelected} />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
