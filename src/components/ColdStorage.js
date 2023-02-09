import React from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList";

function ColdStorage({hostList, isSelected, handleClick}) {
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList hostList={hostList} isSelected={isSelected} handleClick={handleClick} />
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
