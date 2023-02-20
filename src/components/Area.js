import React from "react";
import "../stylesheets/Area.css";
import Host from "./Host";


function Area({area, hostList, selectedDetails, setSelectedDetails, hostSelect, setHostSelect, isSelected, setIsSelected}) {


  function cleanUpArea (name) {
    let cleanName = name.replace(/_/g, " ")
    let cleanNameUP = cleanName.toUpperCase()
    return cleanNameUP
  }

  let filterList = hostList.filter(host => {
    return host.area === area.name && host.active
  })

  return (
    <div
      className="area"
      id={area.name}
    >
      <h3 className="labels">
        {cleanUpArea(area.name)}
      </h3>
      {filterList.map(host => {
        return <Host key={host.id} host={host} selectedDetails={selectedDetails} setSelectedDetails={setSelectedDetails} hostSelect={hostSelect} setHostSelect={setHostSelect} isSelected={isSelected} setIsSelected={setIsSelected}  />
      })}
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
