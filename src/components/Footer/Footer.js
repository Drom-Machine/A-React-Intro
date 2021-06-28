import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footerB">
        @Copyright 2021 Steve H
      </div>
    );
  }
}

const styles = {
  backgroundStyle: {
    display: "flex",
    backgroundColor: "White",
    alignItems: "center",
    height: "15vh",
  },
};



export default Footer;