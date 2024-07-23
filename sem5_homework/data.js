export const characters = await fetch('https://rickandmortyapi.com/api/character')
    .then(response => {return response.json()})
    .catch(error => {return error})