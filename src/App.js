import React from 'react'
import logo from './ironhack-logo.svg';
import './App.css';
import Button from './Button';






class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Say Hello to React JS</h1>
        <p>You will learn how to use the most popular frontend library and become a super Ninja 
          Developer.</p>
          <Button text="Awesome"/>
      </header>
      </div>
    )
  }
}


export default App;
