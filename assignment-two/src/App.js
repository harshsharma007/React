import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
import charComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    textLength: 0,
    text: ''
  }

  lengthChangedListener = (event) => {
    this.setState({
      textLength: event.target.value.length,
      text: event.target.value
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.text.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({ text: updatedText })
  }

  render() {
    const charList = this.state.text.split('').map((char, index) => {
      return <CharComponent alphabet={char} key={index} click={() => this.deleteCharHandler(index)} />
    })

    return (
      <div className="App">
        <input onChange={this.lengthChangedListener} type="text" value={this.state.text} />
        <p>{this.state.text}</p>
        <br />
        <span>{this.state.textLength}</span>
        <ValidationComponent textLength={this.state.textLength} />
        {charList}
      </div>
    );
  }
}

export default App;
