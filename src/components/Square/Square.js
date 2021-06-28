import React, { Component } from "react";


export class Square extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={this.props.imageBox} alt={this.props.name} />
        
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default Square;