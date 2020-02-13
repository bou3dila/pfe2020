import React from "react";
import "aframe";
import "super-hands";
import StartButton from "./startButton";
import Slider from "./slider";
import "aframe-gui";

class Cotnrollers extends React.Component {
  render() {
    return (
      <a-gui-flex-container
        flex-direction="column"
        align-items="normal"
        component-padding="0.1"
        opacity="1"
        width="1.5"
        height="2"
        position="0.75 1 -0.5"
        rotation="0 -90 0"
      >
        <a-gui-label
          value="1-phase AC capacitor start Induction run motor"
          height="0.3"
          font-size="24px"
        ></a-gui-label>
        <StartButton event={this.props.switch} />
        <Slider event={this.props.show} y={0.3}></Slider>
        <Slider event={this.props.show} y={-0.1}></Slider>
      </a-gui-flex-container>
    );
  }
}

export default Cotnrollers;
