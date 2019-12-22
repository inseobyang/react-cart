import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["Beer 1", "Beer 2", "Beer 3"]
    //imageUrl: "https://picsum.photos/200"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>Hey, there are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  handleIncrement() {
    console.log("Increment clicked!");
  }

  render() {
    //needs to be one element
    // put in div, or use React.Fragment
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()};
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
