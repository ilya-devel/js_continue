import { initTheme, switchTheme } from "./theme.js"
import { fetchRepos } from "./api.js"


const usernameInput = document.querySelector('.usernameInput')
const btnThemeSwitch = document.querySelector('.themeSwitcher')
const btnSearch = document.querySelector('.searchButton')
const reposBox = document.querySelector('.repos')
const favoriteBox = document.querySelector('.favorites')

const favoritesKey = 'favRepos'

initTheme()

btnThemeSwitch.addEventListener('click', switchTheme)
btnSearch.addEventListener('click', async () => {
    const username = usernameInput.value
    if (username) {
        const repos = await fetchRepos(username)
        if (!repos.err) {
            displayRepos(repos)
        } else {
            console.log('not found')
        }
    }
})

function displayRepos(repos) {
    reposBox.innerHTML = ''
    repos.forEach(element => {
        const isFavoriteRepo = isFavorite(element.id)
        reposBox.insertAdjacentHTML('beforeend', `
            <div class="repo-card">
                <h3>${element.name}</h3>
                <button class="fav-button ${isFavoriteRepo ? 'favourited' : ''}" data-repo-id="${element.id}">
                    ${isFavoriteRepo ? 'Unfavourite' : 'Favourite'}
                </button>
            </div>
            `)
    })

    document.querySelectorAll('.fav-button').forEach((btn) => {
        btn.addEventListener('click', () => {
            const repoId = btn.getAttribute('data-repo-id')
            const repo = repos.find((r) => r.id == repoId)
            toggleFavorite(repo)
            btn.classList.toggle('favourited')
            btn.textContent = btn.classList.contains('favourited') ? 'Unfavourite' : 'Favourite'
        })
    })
}

function toggleFavorite(repo) {
    const favorites = getFavorites()
    const index = favorites.findIndex((fav) => fav.id === repo.id)
    if (index === -1) {
        favorites.push(repo)
        localStorage.setItem(favoritesKey, JSON.stringify(favorites))
        displayFavorites()
    } else {
        favorites.splice(index, 1)
    }
}

function isFavorite(repoId) {
    const favorites = getFavorites()
    return favorites.some((fav) => fav.id === repoId)
}

function getFavorites() {
    return JSON.parse(localStorage.getItem(favoritesKey)) || []
}

function displayFavorites() {
    favoriteBox.innerHTML = ''
    const favorites = getFavorites()
    favorites.forEach(repo => {
        favoriteBox.insertAdjacentHTML('beforeend', `
                <li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
            `)
    })
}

document.addEventListener('DOMContentLoaded', displayFavorites())