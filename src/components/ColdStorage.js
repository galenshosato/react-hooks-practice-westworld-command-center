import React from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList";

function ColdStorage({hostList, setSelectedDetails, setHostSelect, isSelected, setIsSelected}) {
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList hostList={hostList} setHostSelect={setHostSelect} setSelectedDetails={setSelectedDetails} isSelected={isSelected} setIsSelected={setIsSelected}/>
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
