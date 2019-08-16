import React from 'react';





const getSpaghettiInstruction = () => {
  const spaghettiIngredients = ['Garlic', 'Basil', 'Tomato', 'Salt', 'Pepper'];

  const instructions = ['Put a large saucepan on a medium heat and add 1 tbsp olive oil.', 'Add 4 finely chopped bacon rashers and fry for 10 mins until golden and crisp.', 'Reduce the heat and add the 2 onions, 2 carrots, 2 celery sticks, 2 garlic cloves and the leaves from 2-3 sprigs rosemary, all finely chopped, then fry for 10 mins. Stir the veg often until it softens.', 'Increase the heat to medium-high, add 500g beef mince and cook stirring for 3-4 mins until the meat is browned all over.', 'Increase the heat to medium-high, add 500g beef mince and cook stirring for 3-4 mins until the meat is browned all over.', 'Bring to the boil, reduce to a gentle simmer and cover with a lid. Cook for 1 hr 15 mins stirring occasionally, until you have a rich, thick sauce.', 'Add the 75g grated parmesan, check the seasoning and stir.', 'When the Bolognese is nearly finished, cook 400g spaghetti following the pack instructions.', 'Drain the spaghetti and stir into the Bolognese sauce. Serve with more grated parmesan, the remaining basil leaves and crusty bread, if you like.'];

  return (
    <React.Fragment>
      <ol>{instructions.map(instruction => {
        return (<li key={instruction}>{instruction}</li>)
      })}</ol>
    </React.Fragment>
  )
}

export default getSpaghettiInstruction;