import React from "react";
import "aframe";
import "super-hands";
import { Entity } from "aframe-react";

class Cotnrollers extends React.Component {
  render() {
    return (
      <Entity>
        <Entity id="rhand" hand-controls="right"></Entity>
        <Entity id="lhand" hand-controls="left"></Entity>
      </Entity>
    );
  }
}

export default Cotnrollers;
