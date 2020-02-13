import React from "react";
import { Entity } from "aframe-react";


class Motor extends React.Component {
  render() {
    return (
      <Entity    
        src="#motor-obj"
        mtl="#motor-mtl"
        scale="0.01 0.01 0.01 "
        geometry="primitive: box; width: 0.33; height: 0.33; depth: 0.33"
        obj-model="obj: #motor-obj; mtl: #motor-mtl"
        position="1 1 0.5"
        color="red"
      ></Entity>
    );
  }
}

export default Motor;
