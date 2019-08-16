import React from 'react';
import './App.css';
import Header from './components/Header';
import Receipe from './components/Ingredients';
import Footer from './components/Footer';
import SpahettiInstruction from './components/SpaghettiInstruction';



class App extends React.Component {
  state = {
    dishes: [{
      spahetti: {
        ingredients: ['salt', 'pepper', 'tomatoe', 'basil', 'garlic'],
        instructions: ['blah', 'first blah']
      }
    }, {
      pizza: {
        indgredients: ['cheese', 'onion', 'oregano'],
        instructions: ['blah', 'second blah']
      }
    }],
    givenIngredients: ['Garlic', 'Basil', 'Tomato', 'Salt'],
    inputIngredient: ''
  }

  render() {
    const { givenIngredients } = this.state;
    return (
      <div className="App">
        <Header />
        <indgredients givenIngredients={givenIngredients} />
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
