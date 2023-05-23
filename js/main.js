/*hamburger botton*/ 
function deployMenu() {
    let navlateral = document.querySelector("#navlateralOpen");
    let hamburgerBotton = document.querySelector("#hamburgerButton");
    hamburgerBotton.addEventListener("click", () => {
        navlateral.classList.toggle("d-none");
    });
};
deployMenu();

/*icon login botton*/
function deployMenuLogin() {
    let menuLogin = document.querySelector("#menu_login_open");
    let loginBotton = document.querySelector("#login_icon_open");
    loginBotton.addEventListener("click", () => {
        menuLogin.classList.toggle("openMenuLogin");
    });
};
deployMenuLogin();


