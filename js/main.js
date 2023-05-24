
const BASE_URL = "https://desafiojs-1edc9-default-rtdb.firebaseio.com"

const createCard= (post)=>{
  console.log(post)
let {postAuthor,postDateDay,postDateMonth,postImageURL,postTitle}=post

let card = document.createElement("div")
card.classList.add("w-100", "cardList","mb-2")

let imgCard= document.createElement("img")
imgCard.setAttribute("src",postImageURL)
imgCard.classList.add("card-img-top","w-100","imgList")

let divCard = document.createElement("div")
divCard.classList.add("card", "ps-3", "border", "border-secondary-subtle","pb-3")

let divData = document.createElement("div")
divData.classList.add("data-name")

let imgAuthor = document.createElement("img")
imgAuthor.setAttribute("src",postImageURL)
imgAuthor.classList.add("card-img-top","img-circle")

let divAuthor = document.createElement("div")
divAuthor.classList.add("card-body","pb-1")

let h5Author = document.createElement("h5")
h5Author.classList.add("card-title", "name-author")
namAuthor = document.createTextNode(postAuthor)
let pAuthor = document.createElement("p")
pAuthor.classList.add("card-text", "date-author", "text-mute")
let dateAuthor = document.createTextNode(`${postDateDay} ${postDateMonth}`)

h5Author.appendChild(namAuthor)
pAuthor.appendChild(dateAuthor)

let aTitle = document.createElement("a")
aTitle.classList.add("ms-5","h4")
titleText = document.createTextNode(postTitle)
aTitle.appendChild(titleText)

let divHashtag = document.createElement("div")
divHashtag.classList.add("d-flex", "gap-2", "hashtag","py-2")

let spanReact = document.createElement("span")
let spanJavascript = document.createElement("span")
let spanNextjs = document.createElement("span")
let spanProgramming = document.createElement("span")

let textReact = document.createTextNode("#React")
let textJavascript = document.createTextNode("#Javascript")
let textNextjs = document.createTextNode("#Nextjs")
let textProgramming = document.createTextNode("#Programming")
///////////////////////////////////////////////////////////
let divSpan = document.createElement("div")
divSpan.classList.add("d-flex", "justify-content-between", "px-lg-5", "px-md-4", "px-sm-2", "align-items-center", "flex-wrap")

let spanContainer = document.createElement("span")
spanContainer.classList.add("icons_container")

let spanReaction = document.createElement("span")
spanReaction.classList.add("reactions","px-2")
let textReaction = document.createTextNode("22 Reactions")

spanReaction.appendChild(textReaction)

let aComments = document.createElement("a")
aComments.classList.add("text-decoration-none", "text-black")
let svgComments = document.createElement("svg")
svgComments.classList.add("crayons-icon","w-25")
let pathComments = document.createElement("patch")

pathComments.setAttribute("d","M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z")

let aCommentText= document.createTextNode("12 Comments")

let spanIcon = document.createElement("span")
let imgIcon = document.createElement("img")
imgIcon.setAttribute("src","https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg")
imgIcon.style.width='18px'
imgIcon.style.height='18px'

let imgIcon2 = document.createElement("img")
imgIcon2.setAttribute("src","https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg")
imgIcon2.style.width='18px'
imgIcon2.style.height='18px'

let imgIcon3 = document.createElement("img")
imgIcon3.setAttribute("src","https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg")
imgIcon3.style.width='18px'
imgIcon3.style.height='18px'

let imgIcon4 = document.createElement("img")
imgIcon4.setAttribute("src","https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg")
imgIcon4.style.width='18px'
imgIcon4.style.height='18px'

let imgIcon5 = document.createElement("img")
imgIcon5.setAttribute("src","https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg")
imgIcon5.style.width='18px'
imgIcon5.style.height='18px'




spanIcon.append(imgIcon,imgIcon2,imgIcon3,imgIcon4,imgIcon5)


svgComments.appendChild(pathComments)
aComments.append(svgComments,aCommentText)
spanContainer.append(spanIcon,spanReaction,aComments)
divSpan.appendChild(spanContainer)

spanReact.appendChild(textReact)
spanJavascript.appendChild(textJavascript)
spanNextjs.appendChild(textNextjs)
spanProgramming.appendChild(textProgramming)

divHashtag.append(spanReact,spanJavascript,spanNextjs,spanProgramming)
divAuthor.append(h5Author,pAuthor)
divData.append(imgAuthor,divAuthor)
divCard.append(divData,aTitle,divHashtag,divSpan)

card.append(imgCard,divCard)
   return card

}


const getAllPosts = async () =>{
  let response = await fetch(`${BASE_URL}/posts/.json`)
  let postsData = await response.json()
  return postsData
}

const printAllPosts = async (listtId) =>{
  let list = document.getElementById(listtId)
  let allPosts = await getAllPosts()
  for(key in allPosts){
    let response = allPosts[key]
    let card = createCard(response)
    list.appendChild(card)
  }
}

printAllPosts("postCard")