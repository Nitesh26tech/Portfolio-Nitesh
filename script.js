
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

// Navigation -button
let navBtn = document.querySelector(".nav-icon");
let ul = document.querySelector("ul")

navBtn.addEventListener("click",()=>{
   ul.classList.toggle("showData");
 if(ul.className == "showData"){
    document.getElementById("icon").className ="fa-solid fa-xmark";
 }else{
    document.getElementById("icon").className="fa-solid fa-bars";
 }

});

 // Handle form submission
 document.getElementsByClassName('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Validate form data (you can add more validation if needed)
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Create a data object
    const formData = { name, email, message };

    // Save to local storage
    let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    messages.push(formData);
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    // Reset the form
    event.target.reset();

    // Notify the user
    alert('Your message has been saved successfully!');
});

// Optional: Function to display saved messages in the console
function displayMessages() {
    const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    console.log('Saved Messages:', messages);
}

// Call displayMessages() to see the saved data
displayMessages();