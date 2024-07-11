// task 1

const blockEl = document.querySelector('.block')
const itemEl = document.createElement('div')
itemEl.className = 'item'
itemEl.textContent = 'Элемент внутри'
itemEl.style.color = 'blue'
itemEl.style.border = '1px solid black'
itemEl.style.backgroundColor = '#f8f8f8'
itemEl.style.padding = '16px'
itemEl.setAttribute('class', 'item_1')
blockEl.appendChild(itemEl)


// task 2

const textEl = document.querySelector('.text')
console.log(textEl.previousElementSibling)
console.log(textEl.parentElement)
console.log(textEl.parentElement.previousElementSibling)
console.log(document.querySelector('.elem').parentElement)
console.log(document.querySelector('.elem').parentNode)


// task 3

const subEl = document.querySelector('.subtitle')
// console.log(subEl.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)

let result = subEl.parentNode
while (result !== null) {
    console.log(result)
    result = result.parentNode
}


// task 4

const btnSend = document.querySelector('.btn')
const inputEl = document.querySelector('input')
const formEl = document.querySelector('form')
let msgError
btnSend.addEventListener('click', (event) => {
    event.preventDefault()
    if (inputEl.value === '') {
        if (!msgError) {
            msgError = document.createElement('h2')
            msgError.textContent = 'Вы не заполнили поле'
            msgError.style.color = 'red'
            inputEl.before(msgError)
        }
        inputEl.style.border = '1px solid red'
    } else {
        formEl.submit()
        formEl.reset()
        if (msgError) {
            msgError.remove()
            msgError = null
            inputEl.style.border = '1px solid black'
        }
    }
})


// task 5
