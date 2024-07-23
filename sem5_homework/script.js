import {characters} from './data.js'

const content = document.querySelector('.content')

if (!characters.error) {
    characters.results.forEach(character => {
        const characterBox = document.createElement('div')
        characterBox.classList.add('character-box')

        const characterImage = document.createElement('img')
        characterImage.classList.add('image')
        characterImage.src = character.image
        characterImage.alt = character.name

        const characterName = document.createElement('p')
        characterName.classList.add('title')
        characterName.textContent = character.name

        const characterLocation = document.createElement('p')
        characterLocation.textContent = `Родился в: ${character.location.name}`

        characterBox.insertAdjacentElement('beforeend', characterImage)
        characterBox.insertAdjacentElement('beforeend', characterName)
        characterBox.insertAdjacentElement('beforeend', characterLocation)
        content.insertAdjacentElement('beforeend', characterBox)
    })
} else {
    alert(characters.error.message)
}
