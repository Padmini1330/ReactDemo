import React from 'react';
import './App.css';
import logo from '../src/assets/images/BL_logo.jpg';

class App extends React.Component {
  url = "https://www.bridgelabz.com/"

  constructor() {
    super()
    this.state = {
      title: 'Hello from Bridgelabz'
    }
  }

  //onclick function
  onClick = ($event) => {
    console.log("save button is clicked!",$event);
    window.open(this.url, "_blank");
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick}
          alt="The Bridgelabz logo : a Bridge to employment through lab works"/>
      </div>
    );   
  }
}

export default App;