import React, { Component } from 'react';
import TitleBar from './components/TitleBar';
import InputForm from './components/InputForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <InputForm />
      </div>
    )
  }
}

export default App;
