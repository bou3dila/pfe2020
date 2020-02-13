import React from "react";
import "aframe";
import "super-hands";
import { Scene, Entity } from "aframe-react";
import "./App.css";
import Assets from "./components/assets";
import Controllers from "./components/controllers";
import ControlPanel from "./components/controlPanel";
import Motor from "./components/motor";

class App extends React.Component {
  state = {
    x: 0.05,
    color: "red",
    v: 2
  };

  show = e => {
    this.setState({ v: e.detail.value });
  };

  switch = () => {
    if (this.state.color == "red") {
      this.setState({ color: "green" });
    } else {
      this.setState({ color: "red" });
    }
  };

  render() {
    return (
      <Scene>
        <Assets />
        <Controllers />
        <ControlPanel switch={this.switch} show={this.show} />
        <Motor />
        <Entity
          position="0 0 -3 "
          geometry="primitive: plane; width: 4; height: auto"
          material="color: blue"
          text={{ value: this.state.v }}
        ></Entity>
        <Entity
          geometry={{
            primitive: "box",
            width: 0.33,
            height: 0.33,
            depth: 0.33
          }}
          material={{ color: this.state.color }}
          position={{ x: this.state.value, y: 2, z: -0.5 }}
        />
      </Scene>
    );
  }
}

export default App;
