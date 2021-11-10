import React from 'react';
import './App.css';
import logo from '../src/assets/images/BL_logo.jpg';

class App extends React.Component {
  url = "https://www.bridgelabz.com/"

  constructor() {
    super()
    this.state = {
      userName: '',
      nameError: ''
    }
  }

  //onclick function
  onClick = ($event) => {
    console.log("save button is clicked!",$event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is ",event.target.value);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({userName:event.target.value});
    if(nameRegex.test(event.target.value)){
      this.setState({nameError: ""})
    }
    else{
      this.setState({nameError: "Name is Incorrect"})
    }
  }
  render() {
    return (
      <>
        <div id="body1">
        <h1>Hello {this.state.userName} from Bridgelabz</h1>
        <img src={logo} onClick={this.onClick}
          alt="The Bridgelabz logo : a Bridge to employment through lab works"/>
          <br/>
        <input class="textField" onChange={this.onNameChange} />
        <span className= "error-output">{this.state.nameError}</span>

        <p>At Bridgelabz,we are a techie community of</p>
        <ul>
            <li>Technologists</li>
            <li>Thinkers</li>
            <li>Builders</li>
        </ul>
        <p> Working together to keep the tech Employablility of Engineers alive and accessible, 
            so Tech Companies worldwide can get contributors and creators for technology solutions.
            We believe this act of human collaboration accross an employability platform is essential
            to individual growth and our collective future</p>
        <p> To know about us, visit <a href="https://www.bridgelabz.com/">BridgeLabz</a>
            to learn even more about our mission i.e, <strong>Employablility to all</strong></p>
      </div>
    </>
    );   
  }    
}




export default App;