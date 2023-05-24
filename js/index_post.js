const BASE_URL = "https://desafiojs-1edc9-default-rtdb.firebaseio.com"
const getPostId = () => {
    let params = new URLSearchParams(document.location.search);
    postId = params.get('postId')
    console.log(postId)
    return postId
}

const getPostData = async (postId) => {
    // Let response = await fetch(`${BASE_URL}/posts/${postId}.json`) // ESTA LINEA ES LA BUENA
    let response = await fetch(`https://javascript-25g-ba0a0-default-rtdb.firebaseio.com/postss/${postId}.json`) // ESTA LINEA ES DE PRUEBA
    let data = await response.json()
    return data
}

const getUserData = async (UserId) => {
    let response = await fetch(`${BASE_URL}/users/${UserId}.json`)
    let data = await response.json()
    return data
}

const fillAllData = async  () =>{
    let postId = getPostId ()
    let postData = await getPostData (postId)
    let nameAutor = document.getElementById ("author-name")
    nameAutor.textContent = postData.postAuthor
    let datePost = document.getElementById ("posted-date")
    datePost.textContent = `Posted on ${postData.postDateMonth} ${postData.postDateDay}`
    let textPost = document.getElementById ("titlePost")
    textPost.textContent = postData.postTitle
    let contentPost = document.getElementById("postContent")
    contentPost.textContent = postData.postContent
    
}

fillAllData ()

const fillUserCardData = async  () =>{
    let postId = getPostId ()
    let postData = await getPostData (postId)
    let userData = await getUserData(postData.postAuthorId)
    // let authorPhoto = document.getElementById("asideCard1AuthorImg")
    // authorPhoto.setAttribute("src", userData.userImage)
    let authorPostName = document.getElementById("asideCard1AuthorName")
    authorPostName.textContent = `${userData.userName} ${userData.userLastname}`
    let authordescription = document.getElementById("asideCard1Description")
    authordescription.textContent = userData.userdescription
    let authorLocation = document.getElementById("asideCard1Location")
    authorLocation.textContent = userData.userLocation
    let authorEducation = document.getElementById("asideCard1Education")
    authorEducation.textContent = userData.userEducation
    let authorDateJoined = document.getElementById("asideCard1Joined")
    authorDateJoined.textContent = userData.userJoined
}

fillUserCardData()


