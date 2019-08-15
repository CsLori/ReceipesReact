import React from 'react';
import './App.css';
import Header from './components/Header';
import Receipe from './components/Receipes';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="image">
          <img src="receipesbackground.jpg" alt="ingredients" width="800" height="400" ></img>
        </div>
        <div id="listDiv">
          <Receipe />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
