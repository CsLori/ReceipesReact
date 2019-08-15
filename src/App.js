import React from 'react';
import './App.css';
import Header from './components/Header';
import Receipe from './components/Receipes';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Receipe />
       
      </div>
    );
  }
}

export default App;
