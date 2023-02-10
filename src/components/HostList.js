import React, {useState} from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList({hostList, setSelectedDetails, setHostSelect}) {
  const [isSelected, setIsSelected] = useState(null)
  return (
    <Card.Group itemsPerRow={6}>
      {hostList.map(host => {
       return <Host key={host.id} host={host} setSelectedDetails={setSelectedDetails} setIsSelected={setIsSelected} isSelected={isSelected} setHostSelect={setHostSelect} />
      })}
    </Card.Group>
  );
}

export default HostList;
