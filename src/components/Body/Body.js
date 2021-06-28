
import React, { Component } from "react";
import Square from "../Square/Square";
import "./Body.css";


import imageBox0 from "./images/DaliIcon_Image.png";
import imageBox1 from "./images/Square1_Image.png";
import imageBox2 from "./images/Square2_Image.png";
import imageBox3 from "./images/Square3_Image.png";



export class Body extends Component {
  render() {
    return (
      <div className="body">
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Square name="DaliIcon" imageBox={imageBox0} />
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras dui arcu, feugiat eget dignissim sed, imperdiet vitae ante. 
            Nunc eros sem, hendrerit sed viverra ut, eleifend id metus. Proin 
            convallis ornare odio, sed elementum ante aliquam ac. Suspendisse 
            massa tellus, blandit nec ultricies id, ornare quis tortor.....
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "150px",
              marginRight: "150px",
            }}
          >
            <Square name="Square1" imageBox={imageBox1} />
            <Square name="Square2" imageBox={imageBox2} />
            <Square name="Square3" imageBox={imageBox3} />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;