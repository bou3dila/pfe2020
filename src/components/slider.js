import React from "react";
import "aframe";
import "super-hands";
import { Entity } from "aframe-react";
import "aframe-ui-widgets";

class Slider extends React.Component {
  render() {
    return (
      <Entity
        events={{ change: this.props.event }}
        ui-slider={{ min: 0, max: 10, value: this.props.value }}
        position={{ x: 0.06, y: this.props.y, z: -0.001 }}
        rotation="90 0 0"
        sound={{ src: "#slide", on: "change" }}
      ></Entity>
    );
  }
}

export default Slider;
