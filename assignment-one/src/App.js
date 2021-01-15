import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: [
      { username: "Harsh" }
    ]
  }

  clickHandler = () => {
    this.setState({
      username: [
        { username: "Sharma" }
      ]
    })
  }

  changeHandler = (event) => {
    this.setState({
      username: [
        { username: event.target.value }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserOutput paragraph="This is paragraph one" newPara="This is paragraph two"
          clicked={() => this.clickHandler()} />
        <UserOutput username={this.state.username[0].username} />
        <UserInput username={this.state.username[0].username} changed={this.changeHandler} />
      </div>
    );
  }
}

export default App;
