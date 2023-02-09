import React, {useState} from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";
import HostInfo from "./HostInfo";

function Headquarters({hostList}) {
  const [selectedDetails, setSelectedDetails] =useState({})
  console.log(selectedDetails)

  
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage hostList={hostList} setSelectedDetails={setSelectedDetails} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details host={selectedDetails} />
        <HostInfo />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
