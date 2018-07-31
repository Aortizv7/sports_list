import React, { Component } from "react";
import "./App.css";
import data from "./data";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      originalList: data,
      modifiedList: data,
      message: ""
    };
    this.handleReset = this.handleReset.bind(this);
  }

  handleDeletion(element) {
    let newItem = element;
    let message = " Oh no, you deleted all the sports :( ";
    const sports = this.state.modifiedList.filter(
      sport => sport.id !== newItem.id
    );
    if (sports.length === 0) {
      this.setState({ message: message });
    }
    this.setState({ modifiedList: sports });
  }

  handleReset() {
    this.setState({ modifiedList: this.state.originalList });
    this.setState({ message: "" });
  }

  render() {
    let sport = this.state.modifiedList.map((element, i) => {
      return (
        <section key={i}>
          <div
            className="individual_sport"
            onClick={e => this.handleDeletion(element)}
            value={element.id}
            defaultChecked={false}
          >
            {element.name}
          </div>
        </section>
      );
    });
    return (
      <main className="main_bod">
        <div className="wrapper">
          <section className="small_section">
              <h2 className="title">
                Click on your least favorite sports below, to delete them until
                you have three left...
              </h2>
          </section>
          <section className="sports_container">
            <div className="message">{this.state.message}</div>
            {sport}
          </section>
          <section className="small_section">
            <button onClick={this.handleReset} className="reset_btn">
              Reset
            </button>
          </section>
        </div>
      </main>
    );
  }
}
