import React from 'react';
import Addingredient from './AddIngredient';

class Receipe extends React.Component {
  state = {
    inputIngredient: '',
    ingredients: ['Garlic', 'Basil', 'Tomato', 'Salt']
  };

  render() {
    const { ingredients } = this.state;
    return (
      <React.Fragment>
        <ul>
          {ingredients.map((ingredient, index) => {
            return (
              <li key={index}> {ingredient} </li>
            ); /*INDEX needs to be changed later!!!! */
          })}

          <Addingredient
            inputIngredient={this.state.inputIngredient}
            addNewIngedient={this.addNewIngedient}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </ul>
      </React.Fragment>
    );
  }

  addNewIngedient = ingredientToAdd => {
    console.log(ingredientToAdd);
    this.setState(currentState => {
      return { ingredients: [...currentState.ingredients, ingredientToAdd] };
    });
  };

  handleChange = e => {
    this.setState({ inputIngredient: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addNewIngedient(this.state.inputIngredient);
    this.setState({ inputIngredient: '' });
  };
}

export default Receipe;
