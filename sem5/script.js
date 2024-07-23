// import 'data'

// await const dogs2 = fetch('https://dog.ceo/api/breeds/image/random/10')


const body = document.querySelector('body')
const jsonBox = document.createElement('div')
jsonBox.classList.add('json-box')

JSON.parse(dogs).message.forEach(element => {
    // const img = document.createElement('img')
    // img.src = element
    // img.alt = 'dog'
    // jsonBox.insertAdjacentElement('afterbegin', img)
    jsonBox.insertAdjacentHTML('afterbegin',
        `<figure>
        <img src="${element}" alt="Elephant at sunset" />
        <figcaption>An elephant at sunset</figcaption>
        </figure>
        `
    )
});



body.insertAdjacentElement('afterbegin', jsonBox)


const url = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

    url.forEach(element => {
        const p = document.createElement('p')
        p.textContent = element.name
        jsonBox.insertAdjacentElement('beforeend',
           p
        )
    })
    // .then(element => console.log(element))
    // .catch(error => console.log(`Error: ${error.message}`))


// async function getUsers(url) {
//     const response = await fetch(url)
//     const json = await response.json()
//     return json
// }
// try {
//     console.log(getUsers('https://jsonplaceholder.typicode.com/useers'))
// } catch (error) {
//     console.log(`Error: ${error.message}`)
// }

console.log(url)