import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true
    }
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
  }

  render() {
    <div className="App" >
      <button onClick={this.mountCounter} disabled={this.state.mount}>
        Mount Counter
      </button>
      <button onClck={this.unmountCounter} disabled={!this.state.mount}>
        Unmount Counter
      </button>
      {this.state.mount ? <Counter /> : null}
    </div >
  };
}

export default App;
