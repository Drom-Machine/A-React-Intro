import React, { Component } from "react";
import "./Sidebar.css";




export class Sidebar extends Component {
  state = {

    sideColor: "purple",

  };

  handleColorChange = (color) => {
    this.setState({
      sideColor: color,
    });
  };
  render() {
    return (
      <div
        className="sidebar"
        style={{ backgroundColor: this.state.sideColor, cursor: "pointer" }} 
      >
        <ul>
          <li onClick={() => this.handleColorChange("purple")}>Purple</li>
          <li onClick={() => this.handleColorChange("blue")}>Blue</li>
          <li onClick={() => this.handleColorChange("red")}>Red</li>
        </ul>
      </div>
    );
  }
}
export default Sidebar;