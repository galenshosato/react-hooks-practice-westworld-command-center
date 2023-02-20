import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";


function Headquarters({hostList, selectedDetails, setSelectedDetails, hostSelect, setHostSelect, isSelected, setIsSelected}) {

  
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage hostList={hostList} setHostSelect={setHostSelect} setSelectedDetails={setSelectedDetails} isSelected={isSelected} setIsSelected={setIsSelected} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details host={selectedDetails} hostSelect={hostSelect} />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
