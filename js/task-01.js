const list = document.querySelector('#categories')

const liEl = document.querySelectorAll('.item')
console.log(`Number of categories: ${document.querySelectorAll('.item').length}`)

const liElArr = [...liEl]
liElArr.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.lastElementChild.children.length}`)
})