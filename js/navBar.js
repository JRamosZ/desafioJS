/*hamburger botton*/ 
function deployMenuNav() {
    let navlateral = document.querySelector("#navlateralOpen");
    let hamburgerBotton = document.querySelector("#hamburgerButton");
    hamburgerBotton.addEventListener("click", () => {
        navlateral.classList.toggle("d-none");
    });
};
deployMenuNav();

/*close botton*/ 
function closeMenuNav() {
    let navlateral = document.querySelector("#navlateralOpen");
    let closeBotton = document.querySelector("#navlateralClose");
    closeBotton.addEventListener("click", () => {
        navlateral.classList.add("d-none");
    });
};
closeMenuNav();

/*icon login botton*/
function deployMenuLogin() {
    let menuLogin = document.querySelector("#menu_login_open");
    let loginBotton = document.querySelector("#login_icon_open");
    loginBotton.addEventListener("click", () => {
        menuLogin.classList.toggle("openMenuLogin");
    });
};
deployMenuLogin();

/**/ 
const BASE_URL2 = 'https://desafiojs-1edc9-default-rtdb.firebaseio.com'
let userId = ''

const getUserId = () => {
    let params = new URLSearchParams(document.location.search);
    userId = params.get('userId')
    console.log(userId)
    return userId
}

const getUserData = async (userId) => {
    let response = await fetch(`${BASE_URL2}/users/${userId}.json`)
    let data = await response.json()
    return data
}

const printUserData = async () => {
    getUserId()
    let data = await getUserData(userId)
    let user =  document.getElementById('userDropName')
    user.textContent = `${data.userName} ${data.userLastname}`
    let userNick = document.getElementById('userDropNick')
    userNick.textContent = `@${data.userNickName}`
    buttonsNewPostFunctionality()
}
console.log('aqui')
printUserData()
    
const buttonsNewPostFunctionality = () => {
    let createPostButtonList = document.querySelectorAll('.create-post')
    createPostButtonList.forEach(item => {
        item.addEventListener('click', (event) => {
            window.location.replace(`newPost.html?userId=${userId}`)
        })
    })}