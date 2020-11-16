let checkFetch = (response) => {
    if (!response.ok) {
        throw Error(`${response.statusText} - ${response.url}`)
    }
    return response
}

const getPosts = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(checkFetch)
    .then(res => {
        return res.json()
    })
    .then(posts => arrayOfPosts = posts)
    .catch(err => console.log(`Error,  ${err}`))
}
