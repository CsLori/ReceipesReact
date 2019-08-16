import React from 'react';
import './App.css';
import Header from './components/Header';
import Ingredients from './components/Ingredients';
import Footer from './components/Footer';
import AddIngredient from './components/AddIngredient';

// import SpahettiInstruction from './components/SpaghettiInstruction';

class App extends React.Component {
  state = {
    dishes: {
      spaghetti: {
        ingredients: ['salt', 'pepper', 'tomatoe', 'basil', 'garlic'],
        instructions: ['blah', 'first blah']
      },

      pizza: {
        indgredients: ['cheese', 'onion', 'oregano'],
        instructions: ['blah', 'second blah']
      }
    },
    givenIngredients: ['Garlic', 'Basil', 'Tomato', 'Salt'],
    inputIngredient: ''
  };

  render() {
    // console.log(this.state.dishes[0])
    const { givenIngredients, inputIngredient } = this.state;
    return (
      <div className="App">
        <Header />
        <Ingredients
          givenIngredients={givenIngredients}
          inputIngredient={inputIngredient}
        />
        <div id="image">
          <img
            src="receipesbackground.jpg"
            alt="ingredients"
            width="800"
            height="400"
          />
        </div>
        <AddIngredient
          inputIngredient={this.props.inputIngredient}
          addNewIngedient={this.addNewIngedient}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div id="listDiv">
          <Footer />
        </div>
      </div>
    );
  }
  addNewIngedient = ingredientToAdd => {
    // console.log(ingredientToAdd);
    this.setState(currentState => {
      console.log(currentState);
      return {
        givenIngredients: [...currentState.givenIngredients, ingredientToAdd]
      };
    });
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({ inputIngredient: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addNewIngedient(this.state.inputIngredient);
    this.setState({ inputIngredient: '' });
  };

  compareIngredients = () => {
    const { dishes } = this.state;
    this.setState(currentState => {
      console.log(currentState);
    });
  };
}
export default App;
