let navlist = document.querySelector('.header .navbar-sm .nav-list-sm');
let menuIcon = document.querySelector('.navbar-sm .nav-icon button')

menuIcon.addEventListener("click", () => {
     navlist.style.display == "none" ? navlist.style.display = "block"
          : navlist.style.display = "none"
})
