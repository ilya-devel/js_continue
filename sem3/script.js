// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

const body = document.querySelector('body')
body.insertAdjacentHTML('beforebegin', '<button>Push me</button>')

const btn = document.querySelector('button')

window.onload = () => console.log('Page loaded')

btn.onclick = () => {
    console.log('Event onclick')
}

btn.addEventListener('click', function (e) {
    console.log('Event addEventListener')
})



// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

for (let index = 0; index < 3; index++) {
    body.insertAdjacentHTML('beforeend', `<button class="btn btn-${index}">Push me ${index}</button>`)
}

body.addEventListener('click', function (e) {
    if (e.target.nodeName === 'BUTTON') {
        console.log(`we pressed by ${e.target.textContent}`)
    }
})

localStorage.setItem('counter', 0)

body.insertAdjacentHTML('beforeend', '<button class="btn-counter">Counter</button>')
document.querySelector('.btn-counter').addEventListener('click', function (e) {
    localStorage.setItem('counter', +localStorage.getItem('counter') + 1)
    console.log(`Counter pressed: ${localStorage.getItem('counter')}`)
})

body.insertAdjacentHTML('beforeend', '<button class="btn-change">Original</button>')
const change = document.querySelector('.btn-change')
change.addEventListener('click', function (e) {
    change.textContent = 'Change text'
})

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

const btn2 = document.createElement('button')
btn2.textContent = 'Add h1'
body.appendChild(btn2)
btn2.addEventListener('click', function (e) {
    const header = document.createElement('h1')
    header.textContent = 'Header'
    btn2.insertAdjacentElement('afterend', header)
})

const btn3 = document.createElement('button')
btn3.textContent = 'Remove h1'
body.appendChild(btn3)
btn3.addEventListener('click', function (e) {
    document.querySelector('h1').remove()
})

const btn4 = document.createElement('button')
btn4.textContent = 'Hover'
body.appendChild(btn4)
btn4.addEventListener('mouseover', function (e) {
    console.log(`You hover by ${e.target.textContent}`)
})
btn4.addEventListener('mouseout', function (e) {
    console.log(`You out by ${e.target.textContent}`)
})


// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

const addElBtn = document.createElement('button')
addElBtn.textContent = 'Add new element'
body.appendChild(addElBtn)
const lst = document.querySelector('ol')
console.log(lst)
addElBtn.addEventListener('click', function (e) {
    const liEl = document.createElement('li')
    liEl.textContent = 'new book'
    lst.insertAdjacentElement('beforeend', liEl)
})

const delElBtn = document.createElement('button')
delElBtn.textContent = 'Del first element'
body.appendChild(delElBtn)
delElBtn.addEventListener('click', function (e) {
    const liEl = lst.firstChild
    lst.removeChild(liEl)
})

const addNewClsBtn = document.createElement('button')
addNewClsBtn.textContent = 'add new class'
body.appendChild(addNewClsBtn)
addNewClsBtn.addEventListener('click', function (e) {
    addNewClsBtn.classList.add('click')
})