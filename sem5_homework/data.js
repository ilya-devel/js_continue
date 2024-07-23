export const characters = await fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .catch(error => {
        return {"error": error}
    })