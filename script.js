let navlist = document.querySelector('.header .navbar-sm .nav-list-sm');
let menuIcon = document.querySelector('.navbar-sm .nav-icon button')

menuIcon.addEventListener("mouseover",()=>{
        navlist.style.display="block"  
})

menuIcon.addEventListener("mouseout",()=>{
        navlist.style.display="none"
})