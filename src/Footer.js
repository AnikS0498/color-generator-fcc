import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <footer className="text-center text-secondary py-3 my-4 border-top">
          Made by Anikesh inspired by {" "}
          <a
            style={{ color: "inherit" }}
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noreferrer"
          >
            Freecodecamp
          </a>
        </footer>
      </div>
    );
  }
}
