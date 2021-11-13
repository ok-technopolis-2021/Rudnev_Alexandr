function changeTheme() {
    let bodyCardClassList = document.querySelector("body").classList;
    bodyCardClassList.toggle("dark-theme");
    bodyCardClassList.toggle("light-theme");
}

document.addEventListener("DOMContentLoaded", function () {
    const classname = document.querySelector('#switch-theme-button');
    classname.addEventListener('click', changeTheme);
});