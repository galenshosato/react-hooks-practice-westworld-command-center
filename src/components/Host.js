import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({host, setSelectedDetails, setIsSelected, isSelected, setHostSelect}) {
  

  function handleClick(event) {
    setIsSelected(host.id)
    setSelectedDetails(host)
    setHostSelect(true)
  }

  return (
    <Card
      className={isSelected === host.id ? "host selected" : "host"}
      onClick={handleClick}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
