import React from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList";

function ColdStorage({hostList, setSelectedDetails, setIsSelected, isSelected}) {
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList hostList={hostList} setSelectedDetails={setSelectedDetails} setIsSelected={setIsSelected} isSelected={isSelected}/>
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
