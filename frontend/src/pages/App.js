import React, { Component } from "react";
import { render } from "react-dom";
import Home_page from "./Home_page";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Home_page />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);