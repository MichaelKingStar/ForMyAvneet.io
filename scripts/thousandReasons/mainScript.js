
// NAV SCRIPT

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// / NAV SCRIPT

// BUTTON SCRIPT

// Set this number to the amount of things it can change to
var numberOfTexts = 7;

quoteButton.addEventListener("click", newButtonText);

function newButtonText() {
    var randomNumber2 = Math.floor(Math.random() * (numberOfTexts));

    if (randomNumber2 == 0) {
        document.getElementById('quoteButton').innerHTML = "Awwww, give me more!";
    }

    if (randomNumber2 == 1) {
        document.getElementById('quoteButton').innerHTML = "You're such a SIMP, give me more!";
    }

    if (randomNumber2 == 2) {
        document.getElementById('quoteButton').innerHTML = "You're so cute, I want more!";
    }

    if (randomNumber2 == 3) {
        document.getElementById('quoteButton').innerHTML = "GIVE ME MOREEE!!";
    }

    if (randomNumber2 == 4) {
        document.getElementById('quoteButton').innerHTML = "Oh Michael, I need more!";
    }

    if (randomNumber2 == 5) {
        document.getElementById('quoteButton').innerHTML = "Give me more my husband!";
    }

    if (randomNumber2 == 6) {
        document.getElementById('quoteButton').innerHTML = "I love you so much, give me more please!";
    }

    if (randomNumber2 == 7) {
        document.getElementById('quoteButton').innerHTML = "Soo adorable! Me wants more!";
    }
}

// / BUTTON SCRIPT