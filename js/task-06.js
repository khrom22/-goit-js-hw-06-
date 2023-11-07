

const input = document.getElementById('validation-input')


input.addEventListener('blur', handleText)

function handleText(event) {
    const inputLenght = Number(input.value.trim().length)
    const inputDataLenght = Number(input.dataset.length)
    if (inputDataLenght === inputLenght) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
    else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}