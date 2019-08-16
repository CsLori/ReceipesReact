import React from 'react';
//import getSpaghettiInstruction from './SpaghettiInstruction';

class Ingredients extends React.Component {
  render() {
    const { givenIngredients } = this.props;
    return (
      <React.Fragment>
        <ul>
          {givenIngredients.map((ingredient, index) => {
            return (
              <li key={index}> {ingredient} </li>
            ); /*INDEX needs to be changed later!!!! */
          })}
        </ul>
      </React.Fragment>
    );
  }
}
export default Ingredients;
