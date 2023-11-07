const inputName = document.querySelector('#name-input')
const userName = document.querySelector('#name-output')

inputName.addEventListener('input', handleName)
function handleName(event) {
    if (event.currentTarget.value != '') {
        userName.textContent = event.currentTarget.value
    }
    else {
        userName.textContent = 'Anonymous'
    }
}


