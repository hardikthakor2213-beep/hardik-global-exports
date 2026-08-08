// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});

// Navbar Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 5px 20px rgba(0,0,0,.2)";

}else{

header.style.boxShadow="none";

}

});

// Contact Form - WhatsApp
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "918469795585";

   const whatsappMessage =
    "Hello Hardik Global Exports,%0A%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Email: " + encodeURIComponent(email) + "%0A" +
    "Message: " + encodeURIComponent(message);

const whatsappURL =
    "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

window.open(whatsappURL, "_blank");

this.reset();
   
});