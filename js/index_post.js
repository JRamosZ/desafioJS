const BASE_URL3 = "https://desafiojs-1edc9-default-rtdb.firebaseio.com"
const getPostId = () => {
    let params = new URLSearchParams(document.location.search);
    postId = params.get('postId')
    console.log(postId)
    return postId
}

const getPostData = async (postId) => {
    let response = await fetch(`${BASE_URL3}/posts/${postId}.json`) // ESTA LINEA ES LA BUENA
    let data = await response.json()
    return data
}

const getUserData = async (UserId) => {
    let response = await fetch(`${BASE_URL3}/users/${UserId}.json`)
    let data = await response.json()
    return data
}

const fillAllData = async  () =>{
    let postId = getPostId ()
    let postData = await getPostData (postId)
    let userData = await getUserData(postData.postAuthorId)
    let nameAutor = document.getElementById ("author-name")
    nameAutor.textContent = postData.postAuthor
    let datePost = document.getElementById ("posted-date")
    datePost.textContent = `Posted on ${postData.postDateMonth} ${postData.postDateDay}`
    let textPost = document.getElementById ("titlePost")
    textPost.textContent = postData.postTitle
    let contentPost = document.getElementById("postContent")
    contentPost.textContent = postData.postContent 
    let authorImage = document.getElementById('authorImage')
    authorImage.setAttribute('src', userData.userImage)
}

fillAllData ()

const fillUserCardData = async  () =>{
    let postId = getPostId ()
    let postData = await getPostData (postId)
    let userData = await getUserData(postData.postAuthorId)
    let authorPhoto = document.getElementById("asideCard1AuthorImg")
    authorPhoto.setAttribute("src", userData.userImage)
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

// <!-- <a href="#" class="aside-card2__anchor2">
//     <p class="aside-card2__paragraph1">Join the WeCoded Virtual Meetup 🌟</p>
//     <p class="aside-card2__paragraph2">#wecoded&nbsp;&nbsp;#meta</p>
// </a>

const createCard2Aside = (userPost) => {
    let {postTitle, postTags}= userPost ;

    let paragraph1 = document.createElement("p")
    paragraph1.classList.add("aside-card2__paragraph1")
    let textParagraph1 = document.createTextNode(postTitle) 
    paragraph1.appendChild(textParagraph1)

    let paragraph2 = document.createElement("p")
    paragraph2.classList.add("aside-card2__paragraph2")
    for(key in postTags){
        let textParagraph2 = document.createTextNode(`#${key}`) 
        paragraph2.appendChild(textParagraph2)
    }

    let anchor = document.createElement("a")
    anchor.classList.add("aside-card2__anchor2")
    anchor.setAttribute("href", "#")

    anchor.appendChild(paragraph1)
    anchor.appendChild(paragraph2)

    return anchor
    
    // let asideCard2 = document.getElementById("asideCard2")
    // asideCard2.appendChild(anchor)
    // console.log(asideCard2)
    // return asideCard2
}

const getAllPosts = async () =>{
    let response = await fetch(`${BASE_URL3}/posts/.json`)
    let postsData = await response.json()
    return postsData
}
const printAllAnchors = async () =>{
    let allPosts = await getAllPosts()
    let asideCard2 = document.getElementById("asideCard2")
    for(key in allPosts){
        let response = allPosts[key]
        let card = createCard2Aside(response)
        asideCard2.appendChild(card)
    }
}
printAllAnchors()






/*nav side index post close-and-open*/
function deployMenuNavPost() {
    let navlateralPost = document.querySelector("#navSide_post");
    let hamburgerBottonPost = document.querySelector("#hamburgerButton");
    hamburgerBottonPost.addEventListener("click", () => {
        navlateralPost.classList.toggle("openNavPost");
    });
};
deployMenuNavPost();

function closeMenuNavPost() {
    let navlateralPost = document.querySelector("#navSide_post");
    let hamburgerBottonPost = document.querySelector("#navlateralClose_post");
    hamburgerBottonPost.addEventListener("click", () => {
        navlateralPost.classList.toggle("openNavPost");
    });
};
closeMenuNavPost();







