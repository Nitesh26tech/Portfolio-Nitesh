
// Typing animation - home section
var typed = new Typed('#element', {
    strings: ['A Programmer', 'Web Developer'],
    typeSpeed: 50,
    loop: false
});

// Tab link - About section
function openTab(tabName) {

    var tabLinks = document.querySelectorAll(".tab-links");
    var tabContents = document.querySelectorAll(".tab-contents");

    tabLinks.forEach(link => link.classList.remove("active-link"));
    tabContents.forEach(content => content.classList.remove("active-tab"));

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

//Scroll btn - contact section
const scrollBtn = document.querySelector('#Ontopbtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

// scrollBtn.addEventListener('click',()=>{
//     window.scrollTo({
//         top:0,
//         behavior:"smooth",
//     });
// });
