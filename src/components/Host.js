import React, {useState} from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({host, setSelectedDetails, setIsSelected, isSelected}) {
  

  function handleClick(event) {
    setIsSelected(!isSelected)
    setSelectedDetails(host)
  }

  return (
    <Card
      className={isSelected ? "host selected" : "host"}
      onClick={handleClick}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
