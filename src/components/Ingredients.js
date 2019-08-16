import React from 'react';
import Addingredient from './AddIngredient';
//import getSpaghettiInstruction from './SpaghettiInstruction';

class Receipe extends React.Component {
  // state = {
  //   inputIngredient: '',
  //   ingredients: ['Garlic', 'Basil', 'Tomato', 'Salt']
  // };
  function(props) {
    console.log(props)
  }

  render() {
    //const { ingredients } = this.state;
    return (
      <React.Fragment>
        <ul>
          {this.props.ingredients.map((ingredient, index) => {
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
    console.log(this.state.ingredients)
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
    //console.log(this.state.ingredients)
  }

}

export default Receipe;
