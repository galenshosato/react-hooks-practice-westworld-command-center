import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList({hostList, setSelectedDetails, setHostSelect, isSelected, setIsSelected}) {

  let coldList = hostList.filter(host => {
    return !host.active 
  })
  
  return (
    <Card.Group itemsPerRow={6}>
      {coldList.map(host => {
       return <Host key={host.id} host={host} setSelectedDetails={setSelectedDetails} setIsSelected={setIsSelected} isSelected={isSelected} setHostSelect={setHostSelect} />
      })}
    </Card.Group>
  );
}

export default HostList;
