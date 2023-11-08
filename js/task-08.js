
const form = document.querySelector('.login-form')
form.addEventListener('submit', handleSubmit)


function handleSubmit(event) {
    event.preventDefault()
    const { email, password } = event.currentTarget.elements
    const formObj = {
        email: email.value,
        password: password.value,
    }

    if (formObj.email === '' || formObj.password === '') {
        alert('Всі поля повинні бути заповнені')
    }

    console.log(formObj)
    event.currentTarget.reset()
}


