import React from 'react';

function Addingredient(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input id="ingredient"
        onChange={props.handleChange}
        name="ingredientToAdd"
        value={props.inputIngredient}
      />
      <br></br>
      <button id="btn" type="submit">
        Add your ingredient
      </button>
    </form>
  );
}

export default Addingredient;
