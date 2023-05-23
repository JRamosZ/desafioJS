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


