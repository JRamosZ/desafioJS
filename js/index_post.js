const BASE_URL = "https://desafiojs-1edc9-default-rtdb.firebaseio.com"
const getPostId = () => {
    let params = new URLSearchParams(document.location.search);
    postId = params.get('postId')
    return postId
}

const getPostData = async (postId) => {
    let response = await fetch(`${BASE_URL}/posts/${postId}.json`)
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







