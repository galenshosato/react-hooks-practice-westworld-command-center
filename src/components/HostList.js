import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList({hostList, isSelected, handleClick}) {
  return (
    <Card.Group itemsPerRow={6}>
      {hostList.map(host => {
       return <Host key={host.id} host={host} isSelected={isSelected} handleClick={handleClick}/>
      })}
    </Card.Group>
  );
}

export default HostList;
