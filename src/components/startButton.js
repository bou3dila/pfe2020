import React from "react";
import "aframe";
import "super-hands";
import { Entity } from "aframe-react";
import "aframe-ui-widgets";

class StartButton extends React.Component {
  render() {
    return (
      <Entity
        events={{ pressed: this.props.event }}
        ui-button=""
        position="0.06 0.54 -0.001"
        rotation="90 0 0"
        sound={{ src: "#press", on: "pressed" }}
      ></Entity>
    );
  }
}

export default StartButton;
