
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
        document.getElementById('quoteDisplay').innerHTML = quote0001;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote1.ogg');
    }
    
    if (randomNumber == 1) {
        document.getElementById('quoteDisplay').innerHTML = quote0002;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote2.mp3');
    }
    
    if (randomNumber == 2) {
        document.getElementById('quoteDisplay').innerHTML = quote0003;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote3.mp3');
    }
    
    if (randomNumber == 3) {
        document.getElementById('quoteDisplay').innerHTML = quote0004;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote4.mp3');
    }

    if (randomNumber == 4) {
        document.getElementById('quoteDisplay').innerHTML = quote0005;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote5.mp3');
    }

    if (randomNumber == 5) {
        document.getElementById('quoteDisplay').innerHTML = quote0006;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote6.mp3');
    }

    if (randomNumber == 6) {
        document.getElementById('quoteDisplay').innerHTML = quote0007;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote7.mp3');
    }

    if (randomNumber == 7) {
        document.getElementById('quoteDisplay').innerHTML = quote0008;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote8.mp3');
    }

    if (randomNumber == 8) {
        document.getElementById('quoteDisplay').innerHTML = quote0009;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote9.mp3');
    }

    if (randomNumber == 9) {
        document.getElementById('quoteDisplay').innerHTML = quote0010;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote10.mp3');
    }

    if (randomNumber == 10) {
        document.getElementById('quoteDisplay').innerHTML = quote0011;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote11.mp3');
    }

    if (randomNumber == 11) {
        document.getElementById('quoteDisplay').innerHTML = quote0012;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote12.mp3');
    }

    if (randomNumber == 12) {
        document.getElementById('quoteDisplay').innerHTML = quote0013;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote13.mp3');
    }

    if (randomNumber == 13) {
        document.getElementById('quoteDisplay').innerHTML = quote0014;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote14.mp3');
    }

    if (randomNumber == 14) {
        document.getElementById('quoteDisplay').innerHTML = quote0015;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote15.mp3');
    }

    if (randomNumber == 15) {
        document.getElementById('quoteDisplay').innerHTML = quote0016;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote16.mp3');
    }

    if (randomNumber == 16) {
        document.getElementById('quoteDisplay').innerHTML = quote0017;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote17.mp3');
    }

    if (randomNumber == 17) {
        document.getElementById('quoteDisplay').innerHTML = quote0018;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote18.mp3');
    }

    if (randomNumber == 18) {
        document.getElementById('quoteDisplay').innerHTML = quote0019;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote19.mp3');
    }

    if (randomNumber == 19) {
        document.getElementById('quoteDisplay').innerHTML = quote0020;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote20.mp3');
    }

    if (randomNumber == 20) {
        document.getElementById('quoteDisplay').innerHTML = quote0021;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote21.mp3');
    }

    if (randomNumber == 21) {
        document.getElementById('quoteDisplay').innerHTML = quote0022;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote22.mp3');
    }

    if (randomNumber == 22) {
        document.getElementById('quoteDisplay').innerHTML = quote0023;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote23.mp3');
    }

    if (randomNumber == 23) {
        document.getElementById('quoteDisplay').innerHTML = quote0024;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote24.mp3');
    }

    if (randomNumber == 24) {
        document.getElementById('quoteDisplay').innerHTML = quote0025;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote25.mp3');
    }

    if (randomNumber == 25) {
        document.getElementById('quoteDisplay').innerHTML = quote0026;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote26.mp3');
    }

    if (randomNumber == 26) {
        document.getElementById('quoteDisplay').innerHTML = quote0027;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote28.mp3');
    }

    if (randomNumber == 27) {
        document.getElementById('quoteDisplay').innerHTML = quote0028;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote28.mp3');
    }

    if (randomNumber == 28) {
        document.getElementById('quoteDisplay').innerHTML = quote0029;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote29.mp3');
    }

    if (randomNumber == 29) {
        document.getElementById('quoteDisplay').innerHTML = quote0030;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote30.mp3');
    }
    
    if (randomNumber == 30) {
        document.getElementById('quoteDisplay').innerHTML = quote0031;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote31.mp3');
    }

    if (randomNumber == 31) {
        document.getElementById('quoteDisplay').innerHTML = quote0032;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote32.mp3');
    }

    if (randomNumber == 32) {
        document.getElementById('quoteDisplay').innerHTML = quote0033;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote33.mp3');
    }

    if (randomNumber == 33) {
        document.getElementById('quoteDisplay').innerHTML = quote0034;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote34.mp3');
    }

    if (randomNumber == 34) {
        document.getElementById('quoteDisplay').innerHTML = quote0035;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote35.mp3');
    }

    if (randomNumber == 35) {
        document.getElementById('quoteDisplay').innerHTML = quote0036;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote36.mp3');
    }

    if (randomNumber == 36) {
        document.getElementById('quoteDisplay').innerHTML = quote0037;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote37.mp3');
    }

    if (randomNumber == 37) {
        document.getElementById('quoteDisplay').innerHTML = quote0038;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote38.mp3');
    }

    if (randomNumber == 38) {
        document.getElementById('quoteDisplay').innerHTML = quote0039;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote39.mp3');
    }

    if (randomNumber == 39) {
        document.getElementById('quoteDisplay').innerHTML = quote0040;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote40.mp3');
    }

    if (randomNumber == 40) {
        document.getElementById('quoteDisplay').innerHTML = quote0041;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote41.mp3');
    }

    if (randomNumber == 41) {
        document.getElementById('quoteDisplay').innerHTML = quote0042;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote42.mp3');
    }

    if (randomNumber == 42) {
        document.getElementById('quoteDisplay').innerHTML = quote0043;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote43.mp3');
    }

    if (randomNumber == 43) {
        document.getElementById('quoteDisplay').innerHTML = quote0044;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote44.mp3');
    }

    if (randomNumber == 44) {
        document.getElementById('quoteDisplay').innerHTML = quote0045;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote45.mp3');
    }

    if (randomNumber == 45) {
        document.getElementById('quoteDisplay').innerHTML = quote0046;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote46.mp3');
    }

    if (randomNumber == 46) {
        document.getElementById('quoteDisplay').innerHTML = quote0047;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote47.mp3');
    }

    if (randomNumber == 47) {
        document.getElementById('quoteDisplay').innerHTML = quote0048;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote48.mp3');
    }

    if (randomNumber == 48) {
        document.getElementById('quoteDisplay').innerHTML = quote0049;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote49.mp3');
    }

    if (randomNumber == 49) {
        document.getElementById('quoteDisplay').innerHTML = quote0050;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote50.mp3');
    }

    if (randomNumber == 50) {
        document.getElementById('quoteDisplay').innerHTML = quote0051;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote51.mp3');
    }

    if (randomNumber == 51) {
        document.getElementById('quoteDisplay').innerHTML = quote0052;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote52.mp3');
    }

    if (randomNumber == 52) {
        document.getElementById('quoteDisplay').innerHTML = quote0053;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote53.mp3');
    }

    if (randomNumber == 53) {
        document.getElementById('quoteDisplay').innerHTML = quote0054;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote54.mp3');
    }

    if (randomNumber == 54) {
        document.getElementById('quoteDisplay').innerHTML = quote0055;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote55.mp3');
    }

    if (randomNumber == 55) {
        document.getElementById('quoteDisplay').innerHTML = quote0056;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote56.mp3');
    }

    if (randomNumber == 56) {
        document.getElementById('quoteDisplay').innerHTML = quote0057;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote57.mp3');
    }

    if (randomNumber == 57) {
        document.getElementById('quoteDisplay').innerHTML = quote0058;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote58.mp3');
    }

    if (randomNumber == 58) {
        document.getElementById('quoteDisplay').innerHTML = quote0059;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote59.mp3');
    }

    if (randomNumber == 59) {
        document.getElementById('quoteDisplay').innerHTML = quote0060;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote60.mp3');
    }

    if (randomNumber == 60) {
        document.getElementById('quoteDisplay').innerHTML = quote0061;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote61.mp3');
    }

    if (randomNumber == 61) {
        document.getElementById('quoteDisplay').innerHTML = quote0062;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote62.mp3');
    }

    if (randomNumber == 62) {
        document.getElementById('quoteDisplay').innerHTML = quote0063;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote63.mp3');
    }

    if (randomNumber == 63) {
        document.getElementById('quoteDisplay').innerHTML = quote0064;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote64.mp3');
    }

    if (randomNumber == 64) {
        document.getElementById('quoteDisplay').innerHTML = quote0065;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote65.mp3');
    }

    if (randomNumber == 65) {
        document.getElementById('quoteDisplay').innerHTML = quote0066;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote66.mp3');
    }

    if (randomNumber == 66) {
        document.getElementById('quoteDisplay').innerHTML = quote0067;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote67.mp3');
    }

    if (randomNumber == 67) {
        document.getElementById('quoteDisplay').innerHTML = quote0068;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote68.mp3');
    }

    if (randomNumber == 68) {
        document.getElementById('quoteDisplay').innerHTML = quote0069;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote69.mp3');
    }

    if (randomNumber == 69) {
        document.getElementById('quoteDisplay').innerHTML = quote0070;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote70.mp3');
    }

    if (randomNumber == 70) {
        document.getElementById('quoteDisplay').innerHTML = quote0071;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote71.mp3');
    }

    if (randomNumber == 71) {
        document.getElementById('quoteDisplay').innerHTML = quote0072;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote72.mp3');
    }

    if (randomNumber == 72) {
        document.getElementById('quoteDisplay').innerHTML = quote0073;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote73.mp3');
    }

    if (randomNumber == 73) {
        document.getElementById('quoteDisplay').innerHTML = quote0074;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote74.mp3');
    }

    if (randomNumber == 74) {
        document.getElementById('quoteDisplay').innerHTML = quote0075;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote75.mp3');
    }

    if (randomNumber == 75) {
        document.getElementById('quoteDisplay').innerHTML = quote0076;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote76.mp3');
    }

    if (randomNumber == 76) {
        document.getElementById('quoteDisplay').innerHTML = quote0077;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote77.mp3');
    }

    if (randomNumber == 77) {
        document.getElementById('quoteDisplay').innerHTML = quote0078;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote78.mp3');
    }

    if (randomNumber == 78) {
        document.getElementById('quoteDisplay').innerHTML = quote0079;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote79.mp3');
    }

    if (randomNumber == 79) {
        document.getElementById('quoteDisplay').innerHTML = quote0080;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote80.mp3');
    }

    if (randomNumber == 80) {
        document.getElementById('quoteDisplay').innerHTML = quote0081;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote81.mp3');
    }

    if (randomNumber == 81) {
        document.getElementById('quoteDisplay').innerHTML = quote0082;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote82.mp3');
    }

    if (randomNumber == 82) {
        document.getElementById('quoteDisplay').innerHTML = quote0083;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote83.mp3');
    }

    if (randomNumber == 83) {
        document.getElementById('quoteDisplay').innerHTML = quote0084;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote84.mp3');
    }

    if (randomNumber == 84) {
        document.getElementById('quoteDisplay').innerHTML = quote0085;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote85.mp3');
    }

    if (randomNumber == 85) {
        document.getElementById('quoteDisplay').innerHTML = quote0086;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote86.mp3');
    }

    if (randomNumber == 86) {
        document.getElementById('quoteDisplay').innerHTML = quote0087;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote87.mp3');
    }

    if (randomNumber == 87) {
        document.getElementById('quoteDisplay').innerHTML = quote0088;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote88.mp3');
    }

    if (randomNumber == 88) {
        document.getElementById('quoteDisplay').innerHTML = quote0089;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote89.mp3');
    }

    if (randomNumber == 89) {
        document.getElementById('quoteDisplay').innerHTML = quote0090;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote90.mp3');
    }

    if (randomNumber == 90) {
        document.getElementById('quoteDisplay').innerHTML = quote0091;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote91.mp3');
    }

    if (randomNumber == 91) {
        document.getElementById('quoteDisplay').innerHTML = quote0092;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote92.mp3');
    }

    if (randomNumber == 92) {
        document.getElementById('quoteDisplay').innerHTML = quote0093;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote93.mp3');
    }

    if (randomNumber == 93) {
        document.getElementById('quoteDisplay').innerHTML = quote0094;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote94.mp3');
    }

    if (randomNumber == 94) {
        document.getElementById('quoteDisplay').innerHTML = quote0095;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote95.mp3');
    }

    if (randomNumber == 95) {
        document.getElementById('quoteDisplay').innerHTML = quote0096;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote96.mp3');
    }

    if (randomNumber == 96) {
        document.getElementById('quoteDisplay').innerHTML = quote0097;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote97.mp3');
    }

    if (randomNumber == 97) {
        document.getElementById('quoteDisplay').innerHTML = quote0098;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote98.mp3');
    }

    if (randomNumber == 98) {
        document.getElementById('quoteDisplay').innerHTML = quote0099;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote99.mp3');
    }

    if (randomNumber == 99) {
        document.getElementById('quoteDisplay').innerHTML = quote0100;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote100.mp3');
    }

    if (randomNumber == 100) {
        document.getElementById('quoteDisplay').innerHTML = quote0101;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote101.mp3');
    }

    if (randomNumber == 101) {
        document.getElementById('quoteDisplay').innerHTML = quote0102;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote102.mp3');
    }

    if (randomNumber == 102) {
        document.getElementById('quoteDisplay').innerHTML = quote0103;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote103.mp3');
    }

    if (randomNumber == 103) {
        document.getElementById('quoteDisplay').innerHTML = quote0104;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote104.mp3');
    }

    if (randomNumber == 104) {
        document.getElementById('quoteDisplay').innerHTML = quote0105;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote105.mp3');
    }

    if (randomNumber == 105) {
        document.getElementById('quoteDisplay').innerHTML = quote0106;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote106.mp3');
    }

    if (randomNumber == 106) {
        document.getElementById('quoteDisplay').innerHTML = quote0107;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote107.mp3');
    }

    if (randomNumber == 107) {
        document.getElementById('quoteDisplay').innerHTML = quote0108;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote108.mp3');
    }

    if (randomNumber == 108) {
        document.getElementById('quoteDisplay').innerHTML = quote0109;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote109.mp3');
    }

    if (randomNumber == 109) {
        document.getElementById('quoteDisplay').innerHTML = quote0110;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote110.mp3');
    }

    if (randomNumber == 110) {
        document.getElementById('quoteDisplay').innerHTML = quote0111;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote111.mp3');
    }

    if (randomNumber == 111) {
        document.getElementById('quoteDisplay').innerHTML = quote0112;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote112.mp3');
    }

    if (randomNumber == 112) {
        document.getElementById('quoteDisplay').innerHTML = quote0113;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote113.mp3');
    }

    if (randomNumber == 113) {
        document.getElementById('quoteDisplay').innerHTML = quote0114;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote114.mp3');
    }

    if (randomNumber == 114) {
        document.getElementById('quoteDisplay').innerHTML = quote0115;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote115.mp3');
    }

    if (randomNumber == 115) {
        document.getElementById('quoteDisplay').innerHTML = quote0116;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote116.mp3');
    }

    if (randomNumber == 116) {
        document.getElementById('quoteDisplay').innerHTML = quote0117;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote117.mp3');
    }

    if (randomNumber == 117) {
        document.getElementById('quoteDisplay').innerHTML = quote0118;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote118.mp3');
    }

    if (randomNumber == 118) {
        document.getElementById('quoteDisplay').innerHTML = quote0119;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote119.mp3');
    }

    if (randomNumber == 119) {
        document.getElementById('quoteDisplay').innerHTML = quote0120;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote120.mp3');
    }

    if (randomNumber == 120) {
        document.getElementById('quoteDisplay').innerHTML = quote0121;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote121.mp3');
    }

    if (randomNumber == 121) {
        document.getElementById('quoteDisplay').innerHTML = quote0122;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote122.mp3');
    }

    if (randomNumber == 122) {
        document.getElementById('quoteDisplay').innerHTML = quote0123;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote123.mp3');
    }

    if (randomNumber == 123) {
        document.getElementById('quoteDisplay').innerHTML = quote0124;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote124.mp3');
    }

    if (randomNumber == 124) {
        document.getElementById('quoteDisplay').innerHTML = quote0125;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote125.mp3');
    }

    if (randomNumber == 125) {
        document.getElementById('quoteDisplay').innerHTML = quote0126;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote126.mp3');
    }

    if (randomNumber == 126) {
        document.getElementById('quoteDisplay').innerHTML = quote0127;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote127.mp3');
    }

    if (randomNumber == 127) {
        document.getElementById('quoteDisplay').innerHTML = quote0128;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote128.mp3');
    }

    if (randomNumber == 128) {
        document.getElementById('quoteDisplay').innerHTML = quote0129;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote129.mp3');
    }

    if (randomNumber == 129) {
        document.getElementById('quoteDisplay').innerHTML = quote0130;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote130.mp3');
    }

    if (randomNumber == 130) {
        document.getElementById('quoteDisplay').innerHTML = quote0131;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote131.mp3');
    }

    if (randomNumber == 131) {
        document.getElementById('quoteDisplay').innerHTML = quote0132;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote132.mp3');
    }

    if (randomNumber == 132) {
        document.getElementById('quoteDisplay').innerHTML = quote0133;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote133.mp3');
    }

    if (randomNumber == 133) {
        document.getElementById('quoteDisplay').innerHTML = quote0134;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote134.mp3');
    }

    if (randomNumber == 134) {
        document.getElementById('quoteDisplay').innerHTML = quote0135;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote135.mp3');
    }

    if (randomNumber == 135) {
        document.getElementById('quoteDisplay').innerHTML = quote0136;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote136.mp3');
    }

    if (randomNumber == 136) {
        document.getElementById('quoteDisplay').innerHTML = quote0137;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote137.mp3');
    }

    if (randomNumber == 137) {
        document.getElementById('quoteDisplay').innerHTML = quote0138;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote138.mp3');
    }

    if (randomNumber == 138) {
        document.getElementById('quoteDisplay').innerHTML = quote0139;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote139.mp3');
    }

    if (randomNumber == 139) {
        document.getElementById('quoteDisplay').innerHTML = quote0140;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote140.mp3');
    }

    if (randomNumber == 140) {
        document.getElementById('quoteDisplay').innerHTML = quote0141;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote141.mp3');
    }

    if (randomNumber == 141) {
        document.getElementById('quoteDisplay').innerHTML = quote0142;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote142.mp3');
    }

    if (randomNumber == 142) {
        document.getElementById('quoteDisplay').innerHTML = quote0143;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote143.mp3');
    }

    if (randomNumber == 143) {
        document.getElementById('quoteDisplay').innerHTML = quote0144;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote144.mp3');
    }

    if (randomNumber == 144) {
        document.getElementById('quoteDisplay').innerHTML = quote0145;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote145.mp3');
    }

    if (randomNumber == 145) {
        document.getElementById('quoteDisplay').innerHTML = quote0146;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote146.mp3');
    }

    if (randomNumber == 146) {
        document.getElementById('quoteDisplay').innerHTML = quote0147;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote147.mp3');
    }

    if (randomNumber == 147) {
        document.getElementById('quoteDisplay').innerHTML = quote0148;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote148.mp3');
    }

    if (randomNumber == 148) {
        document.getElementById('quoteDisplay').innerHTML = quote0149;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote149.mp3');
    }

    if (randomNumber == 149) {
        document.getElementById('quoteDisplay').innerHTML = quote0150;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote150.mp3');
    }

    if (randomNumber == 150) {
        document.getElementById('quoteDisplay').innerHTML = quote0151;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote151.mp3');
    }

    if (randomNumber == 151) {
        document.getElementById('quoteDisplay').innerHTML = quote0152;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote152.mp3');
    }

    if (randomNumber == 152) {
        document.getElementById('quoteDisplay').innerHTML = quote0153;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote153.mp3');
    }

    if (randomNumber == 153) {
        document.getElementById('quoteDisplay').innerHTML = quote0154;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote154.mp3');
    }

    if (randomNumber == 154) {
        document.getElementById('quoteDisplay').innerHTML = quote0155;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote155.mp3');
    }

    if (randomNumber == 155) {
        document.getElementById('quoteDisplay').innerHTML = quote0156;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote156.mp3');
    }

    if (randomNumber == 156) {
        document.getElementById('quoteDisplay').innerHTML = quote0157;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote157.mp3');
    }

    if (randomNumber == 157) {
        document.getElementById('quoteDisplay').innerHTML = quote0158;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote158.mp3');
    }

    if (randomNumber == 158) {
        document.getElementById('quoteDisplay').innerHTML = quote0159;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote159.mp3');
    }

    if (randomNumber == 159) {
        document.getElementById('quoteDisplay').innerHTML = quote0160;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote160.mp3');
    }

    if (randomNumber == 160) {
        document.getElementById('quoteDisplay').innerHTML = quote0161;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote161.mp3');
    }

    if (randomNumber == 161) {
        document.getElementById('quoteDisplay').innerHTML = quote0162;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote162.mp3');
    }

    if (randomNumber == 162) {
        document.getElementById('quoteDisplay').innerHTML = quote0163;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote163.mp3');
    }

    if (randomNumber == 163) {
        document.getElementById('quoteDisplay').innerHTML = quote0164;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote164.mp3');
    }

    if (randomNumber == 164) {
        document.getElementById('quoteDisplay').innerHTML = quote0165;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote165.mp3');
    }

    if (randomNumber == 165) {
        document.getElementById('quoteDisplay').innerHTML = quote0166;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote166.mp3');
    }

    if (randomNumber == 166) {
        document.getElementById('quoteDisplay').innerHTML = quote0167;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote167.mp3');
    }

    if (randomNumber == 167) {
        document.getElementById('quoteDisplay').innerHTML = quote0168;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote168.mp3');
    }

    if (randomNumber == 168) {
        document.getElementById('quoteDisplay').innerHTML = quote0169;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote169.mp3');
    }

    if (randomNumber == 169) {
        document.getElementById('quoteDisplay').innerHTML = quote0170;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote170.mp3');
    }

    if (randomNumber == 170) {
        document.getElementById('quoteDisplay').innerHTML = quote0171;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote1.mp3');
    }

    if (randomNumber == 171) {
        document.getElementById('quoteDisplay').innerHTML = quote0172;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote172.mp3');
    }

    if (randomNumber == 172) {
        document.getElementById('quoteDisplay').innerHTML = quote0173;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote173.mp3');
    }

    if (randomNumber == 173) {
        document.getElementById('quoteDisplay').innerHTML = quote0174;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote174.mp3');
    }

    if (randomNumber == 174) {
        document.getElementById('quoteDisplay').innerHTML = quote0175;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote175.mp3');
    }

    if (randomNumber == 175) {
        document.getElementById('quoteDisplay').innerHTML = quote0176;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote176.mp3');
    }

    if (randomNumber == 176) {
        document.getElementById('quoteDisplay').innerHTML = quote0177;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote177.mp3');
    }

    if (randomNumber == 177) {
        document.getElementById('quoteDisplay').innerHTML = quote0178;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote178.mp3');
    }

    if (randomNumber == 178) {
        document.getElementById('quoteDisplay').innerHTML = quote0179;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote179.mp3');
    }

    if (randomNumber == 179) {
        document.getElementById('quoteDisplay').innerHTML = quote0180;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote180.mp3');
    }

    if (randomNumber == 180) {
        document.getElementById('quoteDisplay').innerHTML = quote0181;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote181.mp3');
    }

    if (randomNumber == 181) {
        document.getElementById('quoteDisplay').innerHTML = quote0182;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote182.mp3');
    }

    if (randomNumber == 182) {
        document.getElementById('quoteDisplay').innerHTML = quote0183;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote183.mp3');
    }

    if (randomNumber == 183) {
        document.getElementById('quoteDisplay').innerHTML = quote0184;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote184.mp3');
    }

    if (randomNumber == 184) {
        document.getElementById('quoteDisplay').innerHTML = quote0185;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote185.mp3');
    }

    if (randomNumber == 185) {
        document.getElementById('quoteDisplay').innerHTML = quote0186;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote186.mp3');
    }

    if (randomNumber == 186) {
        document.getElementById('quoteDisplay').innerHTML = quote0187;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote187.mp3');
    }

    if (randomNumber == 187) {
        document.getElementById('quoteDisplay').innerHTML = quote0188;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote188.mp3');
    }

    if (randomNumber == 188) {
        document.getElementById('quoteDisplay').innerHTML = quote0189;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote189.mp3');
    }

    if (randomNumber == 189) {
        document.getElementById('quoteDisplay').innerHTML = quote0190;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote190.mp3');
    }

    if (randomNumber == 190) {
        document.getElementById('quoteDisplay').innerHTML = quote0191;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote191.mp3');
    }

    if (randomNumber == 191) {
        document.getElementById('quoteDisplay').innerHTML = quote0192;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote192.mp3');
    }

    if (randomNumber == 192) {
        document.getElementById('quoteDisplay').innerHTML = quote0193;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote193.mp3');
    }

    if (randomNumber == 193) {
        document.getElementById('quoteDisplay').innerHTML = quote0194;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote194.mp3');
    }

    if (randomNumber == 194) {
        document.getElementById('quoteDisplay').innerHTML = quote0195;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote195.mp3');
    }

    if (randomNumber == 195) {
        document.getElementById('quoteDisplay').innerHTML = quote0196;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote196.mp3');
    }

    if (randomNumber == 196) {
        document.getElementById('quoteDisplay').innerHTML = quote0197;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote197.mp3');
    }

    if (randomNumber == 197) {
        document.getElementById('quoteDisplay').innerHTML = quote0198;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote198.mp3');
    }

    if (randomNumber == 198) {
        document.getElementById('quoteDisplay').innerHTML = quote0199;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote199.mp3');
    }

    if (randomNumber == 199) {
        document.getElementById('quoteDisplay').innerHTML = quote0200;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote200.mp3');
    }

    if (randomNumber == 200) {
        document.getElementById('quoteDisplay').innerHTML = quote0201;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote201.mp3');
    }

    if (randomNumber == 201) {
        document.getElementById('quoteDisplay').innerHTML = quote0202;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote202.mp3');
    }

    if (randomNumber == 202) {
        document.getElementById('quoteDisplay').innerHTML = quote0203;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote203.mp3');
    }

    if (randomNumber == 203) {
        document.getElementById('quoteDisplay').innerHTML = quote0204;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote204.mp3');
    }

    if (randomNumber == 204) {
        document.getElementById('quoteDisplay').innerHTML = quote0205;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote205.mp3');
    }

    if (randomNumber == 205) {
        document.getElementById('quoteDisplay').innerHTML = quote0206;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote206.mp3');
    }

    if (randomNumber == 206) {
        document.getElementById('quoteDisplay').innerHTML = quote0207;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote207.mp3');
    }

    if (randomNumber == 207) {
        document.getElementById('quoteDisplay').innerHTML = quote0208;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote208.mp3');
    }

    if (randomNumber == 208) {
        document.getElementById('quoteDisplay').innerHTML = quote0209;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote209.mp3');
    }

    if (randomNumber == 209) {
        document.getElementById('quoteDisplay').innerHTML = quote0210;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote210.mp3');
    }

    if (randomNumber == 210) {
        document.getElementById('quoteDisplay').innerHTML = quote0211;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote211.mp3');
    }

    if (randomNumber == 211) {
        document.getElementById('quoteDisplay').innerHTML = quote0212;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote212.mp3');
    }

    if (randomNumber == 212) {
        document.getElementById('quoteDisplay').innerHTML = quote0213;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote213.mp3');
    }

    if (randomNumber == 213) {
        document.getElementById('quoteDisplay').innerHTML = quote0214;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote214.mp3');
    }

    if (randomNumber == 214) {
        document.getElementById('quoteDisplay').innerHTML = quote0215;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote215.mp3');
    }

    if (randomNumber == 215) {
        document.getElementById('quoteDisplay').innerHTML = quote0216;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote216.mp3');
    }

    if (randomNumber == 216) {
        document.getElementById('quoteDisplay').innerHTML = quote0217;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote217.mp3');
    }

    if (randomNumber == 217) {
        document.getElementById('quoteDisplay').innerHTML = quote0218;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote218.mp3');
    }

    if (randomNumber == 218) {
        document.getElementById('quoteDisplay').innerHTML = quote0219;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote219.mp3');
    }

    if (randomNumber == 219) {
        document.getElementById('quoteDisplay').innerHTML = quote0220;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote220.mp3');
    }

    if (randomNumber == 220) {
        document.getElementById('quoteDisplay').innerHTML = quote0221;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote221.mp3');
    }

    if (randomNumber == 221) {
        document.getElementById('quoteDisplay').innerHTML = quote0222;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote222.mp3');
    }

    if (randomNumber == 222) {
        document.getElementById('quoteDisplay').innerHTML = quote0223;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote223.mp3');
    }

    if (randomNumber == 223) {
        document.getElementById('quoteDisplay').innerHTML = quote0224;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote224.mp3');
    }

    if (randomNumber == 224) {
        document.getElementById('quoteDisplay').innerHTML = quote0225;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote225.mp3');
    }

    if (randomNumber == 225) {
        document.getElementById('quoteDisplay').innerHTML = quote0226;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote226.mp3');
    }

    if (randomNumber == 226) {
        document.getElementById('quoteDisplay').innerHTML = quote0227;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote227.mp3');
    }

    if (randomNumber == 227) {
        document.getElementById('quoteDisplay').innerHTML = quote0228;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote228.mp3');
    }

    if (randomNumber == 228) {
        document.getElementById('quoteDisplay').innerHTML = quote0229;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote229.mp3');
    }

    if (randomNumber == 229) {
        document.getElementById('quoteDisplay').innerHTML = quote0230;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote230.mp3');
    }

    if (randomNumber == 230) {
        document.getElementById('quoteDisplay').innerHTML = quote0231;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote231.mp3');
    }

    if (randomNumber == 231) {
        document.getElementById('quoteDisplay').innerHTML = quote0232;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote232.mp3');
    }

    if (randomNumber == 232) {
        document.getElementById('quoteDisplay').innerHTML = quote0233;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote233.mp3');
    }

    if (randomNumber == 233) {
        document.getElementById('quoteDisplay').innerHTML = quote0234;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote234.mp3');
    }

    if (randomNumber == 234) {
        document.getElementById('quoteDisplay').innerHTML = quote0235;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote235.mp3');
    }

    if (randomNumber == 235) {
        document.getElementById('quoteDisplay').innerHTML = quote0236;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote236.mp3');
    }

    if (randomNumber == 236) {
        document.getElementById('quoteDisplay').innerHTML = quote0237;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote237.mp3');
    }

    if (randomNumber == 237) {
        document.getElementById('quoteDisplay').innerHTML = quote0238;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote238.mp3');
    }

    if (randomNumber == 238) {
        document.getElementById('quoteDisplay').innerHTML = quote0239;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote239.mp3');
    }

    if (randomNumber == 239) {
        document.getElementById('quoteDisplay').innerHTML = quote0240;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote240.mp3');
    }

    if (randomNumber == 240) {
        document.getElementById('quoteDisplay').innerHTML = quote0241;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote241.mp3');
    }

    if (randomNumber == 241) {
        document.getElementById('quoteDisplay').innerHTML = quote0242;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote242.mp3');
    }

    if (randomNumber == 242) {
        document.getElementById('quoteDisplay').innerHTML = quote0243;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote243.mp3');
    }

    if (randomNumber == 243) {
        document.getElementById('quoteDisplay').innerHTML = quote0244;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote244.mp3');
    }

    if (randomNumber == 244) {
        document.getElementById('quoteDisplay').innerHTML = quote0245;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote245.mp3');
    }

    if (randomNumber == 245) {
        document.getElementById('quoteDisplay').innerHTML = quote0246;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote246.mp3');
    }

    if (randomNumber == 246) {
        document.getElementById('quoteDisplay').innerHTML = quote0247;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote247.mp3');
    }

    if (randomNumber == 247) {
        document.getElementById('quoteDisplay').innerHTML = quote0248;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote248.mp3');
    }

    if (randomNumber == 248) {
        document.getElementById('quoteDisplay').innerHTML = quote0249;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote249.mp3');
    }

    if (randomNumber == 249) {
        document.getElementById('quoteDisplay').innerHTML = quote0250;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote250.mp3');
    }
    if (randomNumber == ) {
        document.getElementById('quoteDisplay').innerHTML = quote0;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote.mp3');
    }
    else {
        console.log("Random number is either too high or something went wrong");
        document.getElementById('quoteButton').innerHTML = "Please try again :)";
    }
}




