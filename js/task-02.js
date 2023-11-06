const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

const Items = ingredients.map((ingredient) => {
  const liEl = document.createElement('li')
  liEl.textContent = ingredient
  liEl.classList.add('item')
  return liEl
})
list.append(...Items)
