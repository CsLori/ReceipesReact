import React from 'react';

class Receipe extends React.Component {
  state = {
    inputIngredient: '',
    ingredients: ['Garlic', 'Basil', 'Tomato', 'Salt']
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.ingredients.map(ingredient => {
            return <li key={ingredient}>{ingredient}</li>;
          })}
          <form onSubmit={this.handleSubmit}>
            <input id="newIngredient" name="inputIngredient" type="text" />{' '}
            <br />
            <button
              id="btn"
              type="submit"
              onClick={() => this.addNewIngedient(this.state.newIngredient)}
            >
              Add your ingredient
            </button>
          </form>
        </ul>
      </React.Fragment>
    );
  }

  addNewIngedient = newIngredient => {
    this.setState(currentState => {
        return { ingredients: [...currentState.ingredients, newIngredient] };
    });
    console.log(this.state.ingredients)
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    this.addNewIngedient(e.target.newIngredient);
  };
}

export default Receipe;
