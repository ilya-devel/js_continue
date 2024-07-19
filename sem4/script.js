// Task 1
// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”


const checkbox = document.querySelector('#agree')
const btnAgree = document.querySelector('#sub-btn-agree')
let isErr = false
btnAgree.addEventListener('click', function (e) {
    if (!checkbox.checked) {
        const errMsg = document.createElement('p')
        errMsg.textContent = 'Необходимо согласиться с условиями'
        if (!isErr) {
            btnAgree.insertAdjacentElement('beforebegin', errMsg)
        }
        isErr = true
        e.preventDefault()
    }
})


// Task 2
// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

const drinks = document.querySelectorAll('[name="drink"]')
const btnDrink = document.querySelector('#sub-btn-drink')
btnDrink.addEventListener('click', function (e) {
    drinks.forEach((element) => {
        if (element.checked) {
            const drink = document.querySelector(`[for="${element.id}"]`).textContent
            alert(`${drink} закончился`)
        }
    })
    e.preventDefault()
})







// Task 3
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

const password = document.querySelector('#password')
const btnLogIn = document.querySelector('#sub-btn-password')
btnLogIn.addEventListener('click', function (e) {
    if (password.value === 'Пароль') {
        password.style.border = '1px solid green'
    } else {
        const errMsg = document.createElement('p')
        errMsg.textContent = 'пароль неверный'
        errMsg.style.color = 'red'
        btnLogIn.insertAdjacentElement('beforebegin', errMsg)
        password.style.border = '1px solid red'
    }
    e.preventDefault()
})


// Task 4
// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода


const inputText = document.querySelector('#input-text')
const showText = document.querySelector('#show-input-text')

inputText.addEventListener('input', function (e) {
    showText.textContent = inputText.value
})