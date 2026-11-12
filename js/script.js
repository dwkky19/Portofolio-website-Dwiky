// Subscrbe YouTube Tamzidan Mahdiyin

function hamburg() {
  const navbar = document.querySelector(".dropdown");
  const hamburgIcon = document.querySelector(".hamburg");
  navbar.style.transform = "translateY(0)";
  hamburgIcon.style.display = "none";
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  const hamburgIcon = document.querySelector(".hamburg");
  navbar.style.transform = "translateY(-100%)";
  // Restore hamburger icon after the animation
  setTimeout(() => {
    hamburgIcon.style.display = "block";
  }, 350);
}

// Close dropdown when clicking a link inside it
document.addEventListener("DOMContentLoaded", function () {
  const dropdownLinks = document.querySelectorAll(".dropdown .links a");
  dropdownLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      cancel();
    });
  });
});

// Animasi Menulis

const texts = [
    "DEVELOPER"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;

// Subscrbe YouTube Tamzidan Mahdiyin