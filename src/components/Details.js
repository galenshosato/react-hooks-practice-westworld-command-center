import React from "react";
import { Segment, Image } from "semantic-ui-react";


function Details({host}) {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  return (
    <Segment id="details" className="HQComps">
      {<Image size="medium" src={host.imageUrl} />}
    </Segment>
  );
}

export default Details;
