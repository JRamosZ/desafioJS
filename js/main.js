/*
<img src="https://picsum.photos/500/250" class="card-img-top w-100" alt="...">
                        
                        <div class="card ps-3 border border-secondary-subtle">
                          <div class="data-name">
                            <img src="https://picsum.photos/600/300" class="card-img-top img-circle" alt="...">
                            <div class="card-body pb-1">
                              <h5 class="card-title name-author">Luis Antonio</h5>
                              <p class="card-text date-author text-mute">may 23.</p>
                            </div>
                          </div>
                          <h2 class="ms-5"><b>Lorem ipsum dolor sit amet consectetur adipisicing.</b></h2>
                          <div class="d-flex gap-3 hashtag">
                            
                            <span>#react</span><span>#javascript</span><span>#nextjs</span><span>#programming</span>
                          </div>
                          
                          <div class="d-flex justify-content-between px-5 align-items-center">
                            
                            <span class="icons_container " dir="rtl">
                              <span class="reactions" title="Number of reactions">Reactions 22</span>
                              
                              
                            
                            <div class="leyen d-flex pt-3">
                              
                              <p class="">8 min read</p>
                              <svg class="crayons-icon c-btn__icon" aria-hidden="true" focusable="false" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 4.5h10.5a.75.75 0 0 1 .75.75v14.357a.375.375 0 0 1-.575.318L12 16.523l-5.426 3.401A.375.375 0 0 1 6 19.607V5.25a.75.75 0 0 1 .75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path></svg>
                            </div>
                          </div>
                        </div>

*/

const createCard= (post)=>{

let imgCard= document.createElement("img")
imgCard.setAttribute("src",imgCard)
imgCard.classList.add("card-img-top","w-100")

let divCard = document.createElement("div")
divCard.classList.add("card", "ps-3", "border", "border-secondary-subtle")

let divData = document.createElement("div")
divData.classList.add("data-name")

let imgAuthor = document.createElement("img")
imgAuthor.setAttribute("src",img)
imgAuthor.classList.add("card-img-top","img-circle")

let divAuthor = document.createElement("div")
divAuthor.classList.add("card-body","pb-1")

let h5Author = document.createElement("h5")
h5Author.classList.add("card-title", "name-author")
namAuthor = document.createTextNode("luis")
let pAuthor = document.createElement("p")
pAuthor.classList.add("card-text", "date-author", "text-mute")
let dateAuthor = document.createTextNode("fecha")

h5Author.appendChild(namAuthor)
pAuthor.appendChild(dateAuthor)

let aTitle = document.createElement("a")
aTitle.classList.add("ms-5")
titleText = document.createTextNode("title")

let divHashtag = document.createElement("div")
divHashtag.classList.add("d-flex", "gap-3", "hashtag")

let spanReact = document.createElement("span")
let spanJavascript = document.createElement("span")
let spanNextjs = document.createElement("span")
let spanProgramming = document.createElement("span")

let textReact = document.createTextNode("#React")
let textJavascript = document.createTextNode("#Javascript")
let textNextjs = document.createTextNode("#Nextjs")
let textProgramming = document.createTextNode("#Programming")

spanReact.appendChild(textReact)
spanJavascript.appendChild(textJavascript)
spanNextjs.appendChild(textNextjs)
spanProgramming.appendChild(textProgramming)

divHashtag.append(spanReact,spanJavascript,spanNextjs,spanProgramming)
divAuthor.append(h5Author,pAuthor)
divData.append(imgAuthor,divAuthor)
divCard.appendChild(divData,aTitle,divHashtag)

console.log(divCard)

}
