export async function fetchRepos (username) {
    const repos = await fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .catch(error => { return {err: `${error.message}`}})

    return repos
}