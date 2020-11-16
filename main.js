let checkFetch = (response) => {
    if (!response.ok) {
        throw Error(`${response.statusText} - ${response.url}`)
    }
    return response
}

const getPosts = () => {
    fetch('https://randomuser.me/api/')
    .then(checkFetch)
    .then(res => {
        return res.json()
    })
    .then(posts => arrayOfPosts = posts)
    .catch(err => console.log(`Error,  ${err}`))
}
