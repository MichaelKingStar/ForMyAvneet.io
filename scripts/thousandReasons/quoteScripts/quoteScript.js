
// Set to the amount of reasons I got so far
var numberOfQuotes = 34;

// Determines the limits to the while loop that will try pick a different number. This is to stop it from crashing your entire device
var stopWhile = 0;
var stopWhileLimit = 20;

// Sad times :( I'm sorry Avi, but there's no more quotes :(
var outOfQuotes = "No more tests needed";

// This is used so that the button can be disabled once there is no more reasons left
const quoteButton = document.querySelector('#quoteButton');
quoteButton.addEventListener("click", newQuote);

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (numberOfQuotes + 1));
    console.log("quote " + randomNumber + " is " + quoteFinished[randomNumber]);

    // Get's into this while loop if it comes across a number that's already been used before, while loop is also stopped if it goes above a set max.
    while (quoteFinished[randomNumber] == true && stopWhile != stopWhileLimit) {
        var randomNumber = Math.floor(Math.random() * (numberOfQuotes + 1));
        
        console.log("It's inside of the while loop, number is: " + randomNumber);

        stopWhile = stopWhile + 1;
    }

    // This will reset the randomNumber variable to null, also displays a last message as well as disabling the button
    if (stopWhile == stopWhileLimit && quoteFinished[randomNumber] == true) {
        quoteButton.disabled = true;
        document.getElementById('quoteDisplay').innerHTML = outOfQuotes;
        document.getElementById("audioPlayer").setAttribute('src', '');
        randomNumber = null;
    }

    // If the code comes this long, this will reset stopWhile if the code has been through the while loop
    stopWhile = 0;

    // Registers that the number it's on to turn true so that later if code gets this same number, it will stop at the while loop and get a new number
    quoteFinished[randomNumber] = true;

    console.log("It's outside of the while loop, number is: " + randomNumber);

    if (randomNumber == 0) {
        document.getElementById('quoteDisplay').innerHTML = quote001;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote1.ogg');
    }
    
    if (randomNumber == 1) {
        document.getElementById('quoteDisplay').innerHTML = quote002;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote2.mp3');
    }
    
    if (randomNumber == 2) {
        document.getElementById('quoteDisplay').innerHTML = quote003;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote3.mp3');
    }
    
    if (randomNumber == 3) {
        document.getElementById('quoteDisplay').innerHTML = quote004;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote4.mp3');
    }

    if (randomNumber == 4) {
        document.getElementById('quoteDisplay').innerHTML = quote005;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote5.mp3');
    }

    if (randomNumber == 5) {
        document.getElementById('quoteDisplay').innerHTML = quote006;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote6.mp3');
    }

    if (randomNumber == 6) {
        document.getElementById('quoteDisplay').innerHTML = quote007;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote7.mp3');
    }

    if (randomNumber == 7) {
        document.getElementById('quoteDisplay').innerHTML = quote008;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote8.mp3');
    }

    if (randomNumber == 8) {
        document.getElementById('quoteDisplay').innerHTML = quote009;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote9.mp3');
    }

    if (randomNumber == 9) {
        document.getElementById('quoteDisplay').innerHTML = quote010;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote10.mp3');
    }

    if (randomNumber == 10) {
        document.getElementById('quoteDisplay').innerHTML = quote011;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote11.mp3');
    }

    if (randomNumber == 11) {
        document.getElementById('quoteDisplay').innerHTML = quote012;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote12.mp3');
    }

    if (randomNumber == 12) {
        document.getElementById('quoteDisplay').innerHTML = quote013;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote13.mp3');
    }

    if (randomNumber == 13) {
        document.getElementById('quoteDisplay').innerHTML = quote014;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote14.mp3');
    }

    if (randomNumber == 14) {
        document.getElementById('quoteDisplay').innerHTML = quote015;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote15.mp3');
    }

    if (randomNumber == 15) {
        document.getElementById('quoteDisplay').innerHTML = quote016;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote16.mp3');
    }

    if (randomNumber == 16) {
        document.getElementById('quoteDisplay').innerHTML = quote017;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote17.mp3');
    }

    if (randomNumber == 17) {
        document.getElementById('quoteDisplay').innerHTML = quote018;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote18.mp3');
    }

    if (randomNumber == 18) {
        document.getElementById('quoteDisplay').innerHTML = quote019;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote19.mp3');
    }

    if (randomNumber == 19) {
        document.getElementById('quoteDisplay').innerHTML = quote020;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote20.mp3');
    }

    if (randomNumber == 20) {
        document.getElementById('quoteDisplay').innerHTML = quote021;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote21.mp3');
    }

    if (randomNumber == 21) {
        document.getElementById('quoteDisplay').innerHTML = quote022;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote22.mp3');
    }

    if (randomNumber == 22) {
        document.getElementById('quoteDisplay').innerHTML = quote023;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote23.mp3');
    }

    if (randomNumber == 23) {
        document.getElementById('quoteDisplay').innerHTML = quote024;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote24.mp3');
    }

    if (randomNumber == 24) {
        document.getElementById('quoteDisplay').innerHTML = quote025;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote25.mp3');
    }

    if (randomNumber == 25) {
        document.getElementById('quoteDisplay').innerHTML = quote026;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote26.mp3');
    }

    if (randomNumber == 26) {
        document.getElementById('quoteDisplay').innerHTML = quote027;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote28.mp3');
    }

    if (randomNumber == 27) {
        document.getElementById('quoteDisplay').innerHTML = quote028;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote28.mp3');
    }

    if (randomNumber == 28) {
        document.getElementById('quoteDisplay').innerHTML = quote029;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote29.mp3');
    }

    if (randomNumber == 29) {
        document.getElementById('quoteDisplay').innerHTML = quote030;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote30.mp3');
    }
    
    if (randomNumber == 30) {
        document.getElementById('quoteDisplay').innerHTML = quote031;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote31.mp3');
    }

    if (randomNumber == 31) {
        document.getElementById('quoteDisplay').innerHTML = quote032;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote32.mp3');
    }

    if (randomNumber == 32) {
        document.getElementById('quoteDisplay').innerHTML = quote033;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote33.mp3');
    }

    if (randomNumber == 33) {
        document.getElementById('quoteDisplay').innerHTML = quote034;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote34.mp3');
    }

    if (randomNumber == 34) {
        document.getElementById('quoteDisplay').innerHTML = quote035;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote35.mp3');
    }

    if (randomNumber == 35) {
        document.getElementById('quoteDisplay').innerHTML = quote036;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote36.mp3');
    }

    if (randomNumber == 36) {
        document.getElementById('quoteDisplay').innerHTML = quote037;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote37.mp3');
    }

    if (randomNumber == 37) {
        document.getElementById('quoteDisplay').innerHTML = quote038;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote38.mp3');
    }

    if (randomNumber == 38) {
        document.getElementById('quoteDisplay').innerHTML = quote039;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote39.mp3');
    }

    if (randomNumber == 39) {
        document.getElementById('quoteDisplay').innerHTML = quote040;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote40.mp3');
    }

    if (randomNumber == 40) {
        document.getElementById('quoteDisplay').innerHTML = quote041;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote41.mp3');
    }

    if (randomNumber == 41) {
        document.getElementById('quoteDisplay').innerHTML = quote042;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote42.mp3');
    }

    if (randomNumber == 42) {
        document.getElementById('quoteDisplay').innerHTML = quote043;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote43.mp3');
    }

    if (randomNumber == 43) {
        document.getElementById('quoteDisplay').innerHTML = quote044;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote44.mp3');
    }

    if (randomNumber == 44) {
        document.getElementById('quoteDisplay').innerHTML = quote045;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote45.mp3');
    }

    if (randomNumber == 45) {
        document.getElementById('quoteDisplay').innerHTML = quote0;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote.mp3');
    }
}



