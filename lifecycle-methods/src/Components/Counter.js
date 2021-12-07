import React from "react";

export default class Counter extends React.component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      counter: 0
    }

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount() {
    console.log('component did mount');
    console.log('___________________');
  }

  componentDidUpdate(prevProps, prevState, shapshot) {
    console.log('component did update');
  }

  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">
          Counter: {0}
        </div>
      </div>

    )
  }
}