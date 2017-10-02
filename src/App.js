import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from './components/Main'


class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'General Mathematics Test',
      questions: [],
      answers: []
    };
  }
  
  render() {
    return (
      <div className="App container-fluid">

        <Header title={this.state.title} />

        <Main  />
       
      </div>
    );
  }
}

export default App;
