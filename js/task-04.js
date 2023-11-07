let counter = 0;

const value = document.querySelector('#value');

const decrement = document.querySelector('[data-action = "decrement"]')
const increment = document.querySelector('[data-action = "increment"]')


function handleClickdecrement() {
    counter -= 1;
    value.textContent = counter
}

function handleClickIncrement() {
    counter += 1
    value.textContent = counter
}

decrement.addEventListener('click', handleClickdecrement)
increment.addEventListener('click', handleClickIncrement)