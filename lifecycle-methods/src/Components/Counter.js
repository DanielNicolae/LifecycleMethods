import React from "react";

const ErrorComponent = () => <div>{this.props.nonexistentVal}</div>;

export default class Counter extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
      initializer: true
    }

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    console.log('get derived state from props');
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      }
    }
    return null;
  }



  shouldComponentUpdate(nextProps, nextStates) {
    console.log('should component update');
    if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
      console.log('should component update - DO NOT RENDER');
      console.log('___________________');
      return false;
    }
    console.log('should component update - RENDER');
    console.log('___________________');
    return true;
  }

  componentDidUpdate(prevProps, prevState, shapshot) {
    console.log('component did update');
    console.log('___________________');
  }

  render() {
    console.log('render');
    if (this.state.error && this.props.showErrorComponent) {
      return (<div>We have encountered an error!
        {this.state.error.message}
      </div>)
    }
    if (this.state.initializer) {
      return (<div>Initializing...</div>);
    }
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">
          Counter: {this.props.counter}
        </div>
        {this.props.showErrorComponent ? <ErrorComponent /> : null}
      </div>
    )
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get snapshot before update");
    return null;
  }

  componentDidMount() {
    console.log('component did mount');
    setTimeout(() => {
      this.setState({ initializer: false })
    }, 500)
    console.log('___________________');
  }

  componentWillUnmount() {
    console.log('component will unmount');
    console.log('___________________');
  }

  componentDidCatch(error, info) {
    console.log('component did catch');
    this.setState(error, info)
  }
}