const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const UlEl = document.querySelector('#ingredients');
const itemEl = ingredients.map(element => {
  const listEl = document.createElement('li');
  listEl.textContent = element;
  console.log(listEl);
  return listEl;
});
UlEl.append(...itemEl);