const lightThemeClass = 'light-theme'
const darkThemeClass = 'dark-theme'

const keyTheme = 'theme'

export function applyTheme (theme) {
    document.body.classList.remove(lightThemeClass, darkThemeClass)
    document.body.classList.add(theme)
}

export function switchTheme () {
    const currentTheme = localStorage.getItem(keyTheme) || lightThemeClass
    const newTheme = currentTheme === lightThemeClass ? darkThemeClass : lightThemeClass
    localStorage.setItem(keyTheme, newTheme)
    applyTheme(newTheme)
}

export function initTheme () {
    const savedTheme = localStorage.getItem(keyTheme) || lightThemeClass
    applyTheme(savedTheme)
}