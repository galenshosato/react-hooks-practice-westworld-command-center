import React from "react";
import { Segment, Image } from "semantic-ui-react";
import HostInfo from "./HostInfo.js"


function Details({host, hostSelect}) {
  

  return (
    <Segment id="details" className="HQComps">
      {!hostSelect ? <Image size="medium" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhKdcy5h_5VNWeWTy5NnhnA30_1kQKzbWhuA&usqp=CAU" /> : <HostInfo host={host} /> }
    </Segment>
  );
}

export default Details;
