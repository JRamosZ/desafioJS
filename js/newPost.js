const BASE_URL = 'https://desafiojs-1edc9-default-rtdb.firebaseio.com/'

let textBlock1 = document.getElementById('popText1')
let textBlock2 = document.getElementById('popText2')
let textBlock3 = document.getElementById('popText3')

document.getElementById('postTitle').addEventListener('click', () => {
    textBlock1.classList = []
    textBlock2.classList.add('visually-hidden')
    textBlock3.classList.add('visually-hidden')
})

document.getElementById('postTags').addEventListener('click', () => {
    textBlock1.classList.add('visually-hidden')
    textBlock2.classList = []
    textBlock3.classList.add('visually-hidden')
})

document.getElementById('postContent').addEventListener('click', () => {
    textBlock1.classList.add('visually-hidden')
    textBlock2.classList.add('visually-hidden')
    textBlock3.classList = []
})

const getNewPostInputs = () => {
    let post = {}
    let inputs = document.querySelectorAll('input')
    inputs.forEach (item => {
        post[item.id] = item.value
    })
    let postContent = document.querySelector('textarea')
    post[postContent.id] = postContent.value

    for (key in post) {
        if (post[key]=== '') {
            alert(`El campo ${key} está vacío`)
            return none
        }
    } 
    return post
}

const saveNewPost = async(post) => {
    let response = await fetch(`${BASE_URL}/posts/.json`, {
        method: "POST",
        body: JSON.stringify(post)
    });

    let data = await response.json();
    return data;
}

let publishButton = document.getElementById('publishButton')
publishButton.addEventListener('click', event => {
    let post = getNewPostInputs()
    post ? saveNewPost(post) : null
    alert('Post guardado con éxito')
    window.location.replace('./index.html')
})