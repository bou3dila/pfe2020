import React from "react";
import "aframe";
import "super-hands";
import press from "../assets/erro.mp3";
import slide from "../assets/slide.flac";
import objmotor from "../assets/motor.obj";
import mtlmotor from "../assets/motor.mtl";
class Assets extends React.Component {
  render() {
    return (
      <a-assets>
        <a-asset-item id="motor-obj" src={objmotor}></a-asset-item>
        <a-asset-item id="motor-mtl" src={mtlmotor}></a-asset-item>
        <audio src={press} id="press"></audio>
        <audio src={slide} id="slide"></audio>
      </a-assets>
    );
  }
}

export default Assets;
