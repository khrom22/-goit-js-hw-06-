const input = document.getElementById('font-size-control')

const text = document.getElementById('text')

function textFontSize(event) {
    text.style.fontSize = event.currentTarget.value + 'px'
}

input.addEventListener('input', textFontSize)
