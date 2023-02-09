import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList({hostList, setSelectedDetails}) {
  return (
    <Card.Group itemsPerRow={6}>
      {hostList.map(host => {
       return <Host key={host.id} host={host} setSelectedDetails={setSelectedDetails} />
      })}
    </Card.Group>
  );
}

export default HostList;
