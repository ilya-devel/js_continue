// Task 1

const block = document.querySelector('#block p')
console.log(block)

console.log(document.querySelector('.www'))


// Task 2

const linkEl = document.querySelector('.link')
linkEl.textContent = 'link text js'
linkEl.href = 'https://developer.mozilla.org/ru/'

const imgEl = document.querySelector('.photo')
imgEl.src = 'https://avatars.mds.yandex.net/i?id=20f1f730eede3696e11e8bcbe3ab7b8d11c82b25b33f8f12-11846351-images-thumbs&n=13'


// Task 3

const newEl = document.createElement('p')
const contentEl = document.querySelector('.content')
newEl.textContent = 'Новый текстовый элемент'
contentEl.appendChild(newEl)
// newEl.remove()

// Task 4

localStorage.removeItem('count')
const btnNew = document.createElement('button')
btnNew.textContent = 'Push me'
contentEl.appendChild(btnNew)
btnNew.onclick = () => {
    if (localStorage.getItem('count')) {
        localStorage.setItem('count', +localStorage.getItem('count') + 1)
    } else {
        localStorage.setItem('count', 1)
    }
    console.log(localStorage.getItem('count'))
}


const btnNewSecond = document.createElement('button')
btnNewSecond.textContent = 'Отправить'
contentEl.appendChild(btnNewSecond)
btnNewSecond.onclick = () => {
    btnNewSecond.textContent = 'Отправлено'
}