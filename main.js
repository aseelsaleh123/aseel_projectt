var body = document.querySelector("body");
var darkbtn = document.querySelector(".changemode");
function changemode(){
    body.classList.toggle("dark");
}

darkbtn.onclick = changemode; 




const navbar = document.getElementById('navbar');


window.addEventListener('scroll', () => {
    
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
