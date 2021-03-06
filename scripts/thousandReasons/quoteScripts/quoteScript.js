
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
    
    else if (randomNumber == 1) {
        document.getElementById('quoteDisplay').innerHTML = quote0002;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote2.mp3');
    }
    
    else if (randomNumber == 2) {
        document.getElementById('quoteDisplay').innerHTML = quote0003;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote3.mp3');
    }
    
    else if (randomNumber == 3) {
        document.getElementById('quoteDisplay').innerHTML = quote0004;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote4.mp3');
    }

    else if (randomNumber == 4) {
        document.getElementById('quoteDisplay').innerHTML = quote0005;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote5.mp3');
    }

    else if (randomNumber == 5) {
        document.getElementById('quoteDisplay').innerHTML = quote0006;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote6.mp3');
    }

    else if (randomNumber == 6) {
        document.getElementById('quoteDisplay').innerHTML = quote0007;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote7.mp3');
    }

    else if (randomNumber == 7) {
        document.getElementById('quoteDisplay').innerHTML = quote0008;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote8.mp3');
    }

    else if (randomNumber == 8) {
        document.getElementById('quoteDisplay').innerHTML = quote0009;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote9.mp3');
    }

    else if (randomNumber == 9) {
        document.getElementById('quoteDisplay').innerHTML = quote0010;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote10.mp3');
    }

    else if (randomNumber == 10) {
        document.getElementById('quoteDisplay').innerHTML = quote0011;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote11.mp3');
    }

    else if (randomNumber == 11) {
        document.getElementById('quoteDisplay').innerHTML = quote0012;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote12.mp3');
    }

    else if (randomNumber == 12) {
        document.getElementById('quoteDisplay').innerHTML = quote0013;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote13.mp3');
    }

    else if (randomNumber == 13) {
        document.getElementById('quoteDisplay').innerHTML = quote0014;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote14.mp3');
    }

    else if (randomNumber == 14) {
        document.getElementById('quoteDisplay').innerHTML = quote0015;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote15.mp3');
    }

    else if (randomNumber == 15) {
        document.getElementById('quoteDisplay').innerHTML = quote0016;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote16.mp3');
    }

    else if (randomNumber == 16) {
        document.getElementById('quoteDisplay').innerHTML = quote0017;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote17.mp3');
    }

    else if (randomNumber == 17) {
        document.getElementById('quoteDisplay').innerHTML = quote0018;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote18.mp3');
    }

    else if (randomNumber == 18) {
        document.getElementById('quoteDisplay').innerHTML = quote0019;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote19.mp3');
    }

    else if (randomNumber == 19) {
        document.getElementById('quoteDisplay').innerHTML = quote0020;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote20.mp3');
    }

    else if (randomNumber == 20) {
        document.getElementById('quoteDisplay').innerHTML = quote0021;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote21.mp3');
    }

    else if (randomNumber == 21) {
        document.getElementById('quoteDisplay').innerHTML = quote0022;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote22.mp3');
    }

    else if (randomNumber == 22) {
        document.getElementById('quoteDisplay').innerHTML = quote0023;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote23.mp3');
    }

    else if (randomNumber == 23) {
        document.getElementById('quoteDisplay').innerHTML = quote0024;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote24.mp3');
    }

    else if (randomNumber == 24) {
        document.getElementById('quoteDisplay').innerHTML = quote0025;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote25.mp3');
    }

    else if (randomNumber == 25) {
        document.getElementById('quoteDisplay').innerHTML = quote0026;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote26.mp3');
    }

    else if (randomNumber == 26) {
        document.getElementById('quoteDisplay').innerHTML = quote0027;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote28.mp3');
    }

    else if (randomNumber == 27) {
        document.getElementById('quoteDisplay').innerHTML = quote0028;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote28.mp3');
    }

    else if (randomNumber == 28) {
        document.getElementById('quoteDisplay').innerHTML = quote0029;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote29.mp3');
    }

    else if (randomNumber == 29) {
        document.getElementById('quoteDisplay').innerHTML = quote0030;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote30.mp3');
    }
    
    else if (randomNumber == 30) {
        document.getElementById('quoteDisplay').innerHTML = quote0031;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote31.mp3');
    }

    else if (randomNumber == 31) {
        document.getElementById('quoteDisplay').innerHTML = quote0032;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote32.mp3');
    }

    else if (randomNumber == 32) {
        document.getElementById('quoteDisplay').innerHTML = quote0033;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote33.mp3');
    }

    else if (randomNumber == 33) {
        document.getElementById('quoteDisplay').innerHTML = quote0034;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote34.mp3');
    }

    else if (randomNumber == 34) {
        document.getElementById('quoteDisplay').innerHTML = quote0035;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote35.mp3');
    }

    else if (randomNumber == 35) {
        document.getElementById('quoteDisplay').innerHTML = quote0036;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote36.mp3');
    }

    else if (randomNumber == 36) {
        document.getElementById('quoteDisplay').innerHTML = quote0037;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote37.mp3');
    }

    else if (randomNumber == 37) {
        document.getElementById('quoteDisplay').innerHTML = quote0038;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote38.mp3');
    }

    else if (randomNumber == 38) {
        document.getElementById('quoteDisplay').innerHTML = quote0039;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote39.mp3');
    }

    else if (randomNumber == 39) {
        document.getElementById('quoteDisplay').innerHTML = quote0040;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote40.mp3');
    }

    else if (randomNumber == 40) {
        document.getElementById('quoteDisplay').innerHTML = quote0041;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote41.mp3');
    }

    else if (randomNumber == 41) {
        document.getElementById('quoteDisplay').innerHTML = quote0042;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote42.mp3');
    }

    else if (randomNumber == 42) {
        document.getElementById('quoteDisplay').innerHTML = quote0043;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote43.mp3');
    }

    else if (randomNumber == 43) {
        document.getElementById('quoteDisplay').innerHTML = quote0044;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote44.mp3');
    }

    else if (randomNumber == 44) {
        document.getElementById('quoteDisplay').innerHTML = quote0045;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote45.mp3');
    }

    else if (randomNumber == 45) {
        document.getElementById('quoteDisplay').innerHTML = quote0046;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote46.mp3');
    }

    else if (randomNumber == 46) {
        document.getElementById('quoteDisplay').innerHTML = quote0047;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote47.mp3');
    }

    else if (randomNumber == 47) {
        document.getElementById('quoteDisplay').innerHTML = quote0048;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote48.mp3');
    }

    else if (randomNumber == 48) {
        document.getElementById('quoteDisplay').innerHTML = quote0049;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote49.mp3');
    }

    else if (randomNumber == 49) {
        document.getElementById('quoteDisplay').innerHTML = quote0050;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote50.mp3');
    }

    else if (randomNumber == 50) {
        document.getElementById('quoteDisplay').innerHTML = quote0051;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote51.mp3');
    }

    else if (randomNumber == 51) {
        document.getElementById('quoteDisplay').innerHTML = quote0052;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote52.mp3');
    }

    else if (randomNumber == 52) {
        document.getElementById('quoteDisplay').innerHTML = quote0053;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote53.mp3');
    }

    else if (randomNumber == 53) {
        document.getElementById('quoteDisplay').innerHTML = quote0054;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote54.mp3');
    }

    else if (randomNumber == 54) {
        document.getElementById('quoteDisplay').innerHTML = quote0055;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote55.mp3');
    }

    else if (randomNumber == 55) {
        document.getElementById('quoteDisplay').innerHTML = quote0056;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote56.mp3');
    }

    else if (randomNumber == 56) {
        document.getElementById('quoteDisplay').innerHTML = quote0057;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote57.mp3');
    }

    else if (randomNumber == 57) {
        document.getElementById('quoteDisplay').innerHTML = quote0058;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote58.mp3');
    }

    else if (randomNumber == 58) {
        document.getElementById('quoteDisplay').innerHTML = quote0059;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote59.mp3');
    }

    else if (randomNumber == 59) {
        document.getElementById('quoteDisplay').innerHTML = quote0060;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote60.mp3');
    }

    else if (randomNumber == 60) {
        document.getElementById('quoteDisplay').innerHTML = quote0061;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote61.mp3');
    }

    else if (randomNumber == 61) {
        document.getElementById('quoteDisplay').innerHTML = quote0062;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote62.mp3');
    }

    else if (randomNumber == 62) {
        document.getElementById('quoteDisplay').innerHTML = quote0063;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote63.mp3');
    }

    else if (randomNumber == 63) {
        document.getElementById('quoteDisplay').innerHTML = quote0064;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote64.mp3');
    }

    else if (randomNumber == 64) {
        document.getElementById('quoteDisplay').innerHTML = quote0065;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote65.mp3');
    }

    else if (randomNumber == 65) {
        document.getElementById('quoteDisplay').innerHTML = quote0066;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote66.mp3');
    }

    else if (randomNumber == 66) {
        document.getElementById('quoteDisplay').innerHTML = quote0067;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote67.mp3');
    }

    else if (randomNumber == 67) {
        document.getElementById('quoteDisplay').innerHTML = quote0068;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote68.mp3');
    }

    else if (randomNumber == 68) {
        document.getElementById('quoteDisplay').innerHTML = quote0069;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote69.mp3');
    }

    else if (randomNumber == 69) {
        document.getElementById('quoteDisplay').innerHTML = quote0070;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote70.mp3');
    }

    else if (randomNumber == 70) {
        document.getElementById('quoteDisplay').innerHTML = quote0071;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote71.mp3');
    }

    else if (randomNumber == 71) {
        document.getElementById('quoteDisplay').innerHTML = quote0072;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote72.mp3');
    }

    else if (randomNumber == 72) {
        document.getElementById('quoteDisplay').innerHTML = quote0073;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote73.mp3');
    }

    else if (randomNumber == 73) {
        document.getElementById('quoteDisplay').innerHTML = quote0074;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote74.mp3');
    }

    else if (randomNumber == 74) {
        document.getElementById('quoteDisplay').innerHTML = quote0075;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote75.mp3');
    }

    else if (randomNumber == 75) {
        document.getElementById('quoteDisplay').innerHTML = quote0076;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote76.mp3');
    }

    else if (randomNumber == 76) {
        document.getElementById('quoteDisplay').innerHTML = quote0077;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote77.mp3');
    }

    else if (randomNumber == 77) {
        document.getElementById('quoteDisplay').innerHTML = quote0078;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote78.mp3');
    }

    else if (randomNumber == 78) {
        document.getElementById('quoteDisplay').innerHTML = quote0079;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote79.mp3');
    }

    else if (randomNumber == 79) {
        document.getElementById('quoteDisplay').innerHTML = quote0080;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote80.mp3');
    }

    else if (randomNumber == 80) {
        document.getElementById('quoteDisplay').innerHTML = quote0081;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote81.mp3');
    }

    else if (randomNumber == 81) {
        document.getElementById('quoteDisplay').innerHTML = quote0082;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote82.mp3');
    }

    else if (randomNumber == 82) {
        document.getElementById('quoteDisplay').innerHTML = quote0083;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote83.mp3');
    }

    else if (randomNumber == 83) {
        document.getElementById('quoteDisplay').innerHTML = quote0084;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote84.mp3');
    }

    else if (randomNumber == 84) {
        document.getElementById('quoteDisplay').innerHTML = quote0085;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote85.mp3');
    }

    else if (randomNumber == 85) {
        document.getElementById('quoteDisplay').innerHTML = quote0086;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote86.mp3');
    }

    else if (randomNumber == 86) {
        document.getElementById('quoteDisplay').innerHTML = quote0087;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote87.mp3');
    }

    else if (randomNumber == 87) {
        document.getElementById('quoteDisplay').innerHTML = quote0088;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote88.mp3');
    }

    else if (randomNumber == 88) {
        document.getElementById('quoteDisplay').innerHTML = quote0089;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote89.mp3');
    }

    else if (randomNumber == 89) {
        document.getElementById('quoteDisplay').innerHTML = quote0090;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote90.mp3');
    }

    else if (randomNumber == 90) {
        document.getElementById('quoteDisplay').innerHTML = quote0091;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote91.mp3');
    }

    else if (randomNumber == 91) {
        document.getElementById('quoteDisplay').innerHTML = quote0092;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote92.mp3');
    }

    else if (randomNumber == 92) {
        document.getElementById('quoteDisplay').innerHTML = quote0093;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote93.mp3');
    }

    else if (randomNumber == 93) {
        document.getElementById('quoteDisplay').innerHTML = quote0094;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote94.mp3');
    }

    else if (randomNumber == 94) {
        document.getElementById('quoteDisplay').innerHTML = quote0095;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote95.mp3');
    }

    else if (randomNumber == 95) {
        document.getElementById('quoteDisplay').innerHTML = quote0096;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote96.mp3');
    }

    else if (randomNumber == 96) {
        document.getElementById('quoteDisplay').innerHTML = quote0097;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote97.mp3');
    }

    else if (randomNumber == 97) {
        document.getElementById('quoteDisplay').innerHTML = quote0098;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote98.mp3');
    }

    else if (randomNumber == 98) {
        document.getElementById('quoteDisplay').innerHTML = quote0099;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote99.mp3');
    }

    else if (randomNumber == 99) {
        document.getElementById('quoteDisplay').innerHTML = quote0100;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote100.mp3');
    }

    else if (randomNumber == 100) {
        document.getElementById('quoteDisplay').innerHTML = quote0101;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote101.mp3');
    }

    else if (randomNumber == 101) {
        document.getElementById('quoteDisplay').innerHTML = quote0102;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote102.mp3');
    }

    else if (randomNumber == 102) {
        document.getElementById('quoteDisplay').innerHTML = quote0103;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote103.mp3');
    }

    else if (randomNumber == 103) {
        document.getElementById('quoteDisplay').innerHTML = quote0104;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote104.mp3');
    }

    else if (randomNumber == 104) {
        document.getElementById('quoteDisplay').innerHTML = quote0105;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote105.mp3');
    }

    else if (randomNumber == 105) {
        document.getElementById('quoteDisplay').innerHTML = quote0106;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote106.mp3');
    }

    else if (randomNumber == 106) {
        document.getElementById('quoteDisplay').innerHTML = quote0107;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote107.mp3');
    }

    else if (randomNumber == 107) {
        document.getElementById('quoteDisplay').innerHTML = quote0108;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote108.mp3');
    }

    else if (randomNumber == 108) {
        document.getElementById('quoteDisplay').innerHTML = quote0109;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote109.mp3');
    }

    else if (randomNumber == 109) {
        document.getElementById('quoteDisplay').innerHTML = quote0110;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote110.mp3');
    }

    else if (randomNumber == 110) {
        document.getElementById('quoteDisplay').innerHTML = quote0111;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote111.mp3');
    }

    else if (randomNumber == 111) {
        document.getElementById('quoteDisplay').innerHTML = quote0112;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote112.mp3');
    }

    else if (randomNumber == 112) {
        document.getElementById('quoteDisplay').innerHTML = quote0113;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote113.mp3');
    }

    else if (randomNumber == 113) {
        document.getElementById('quoteDisplay').innerHTML = quote0114;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote114.mp3');
    }

    else if (randomNumber == 114) {
        document.getElementById('quoteDisplay').innerHTML = quote0115;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote115.mp3');
    }

    else if (randomNumber == 115) {
        document.getElementById('quoteDisplay').innerHTML = quote0116;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote116.mp3');
    }

    else if (randomNumber == 116) {
        document.getElementById('quoteDisplay').innerHTML = quote0117;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote117.mp3');
    }

    else if (randomNumber == 117) {
        document.getElementById('quoteDisplay').innerHTML = quote0118;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote118.mp3');
    }

    else if (randomNumber == 118) {
        document.getElementById('quoteDisplay').innerHTML = quote0119;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote119.mp3');
    }

    else if (randomNumber == 119) {
        document.getElementById('quoteDisplay').innerHTML = quote0120;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote120.mp3');
    }

    else if (randomNumber == 120) {
        document.getElementById('quoteDisplay').innerHTML = quote0121;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote121.mp3');
    }

    else if (randomNumber == 121) {
        document.getElementById('quoteDisplay').innerHTML = quote0122;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote122.mp3');
    }

    else if (randomNumber == 122) {
        document.getElementById('quoteDisplay').innerHTML = quote0123;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote123.mp3');
    }

    else if (randomNumber == 123) {
        document.getElementById('quoteDisplay').innerHTML = quote0124;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote124.mp3');
    }

    else if (randomNumber == 124) {
        document.getElementById('quoteDisplay').innerHTML = quote0125;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote125.mp3');
    }

    else if (randomNumber == 125) {
        document.getElementById('quoteDisplay').innerHTML = quote0126;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote126.mp3');
    }

    else if (randomNumber == 126) {
        document.getElementById('quoteDisplay').innerHTML = quote0127;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote127.mp3');
    }

    else if (randomNumber == 127) {
        document.getElementById('quoteDisplay').innerHTML = quote0128;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote128.mp3');
    }

    else if (randomNumber == 128) {
        document.getElementById('quoteDisplay').innerHTML = quote0129;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote129.mp3');
    }

    else if (randomNumber == 129) {
        document.getElementById('quoteDisplay').innerHTML = quote0130;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote130.mp3');
    }

    else if (randomNumber == 130) {
        document.getElementById('quoteDisplay').innerHTML = quote0131;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote131.mp3');
    }

    else if (randomNumber == 131) {
        document.getElementById('quoteDisplay').innerHTML = quote0132;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote132.mp3');
    }

    else if (randomNumber == 132) {
        document.getElementById('quoteDisplay').innerHTML = quote0133;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote133.mp3');
    }

    else if (randomNumber == 133) {
        document.getElementById('quoteDisplay').innerHTML = quote0134;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote134.mp3');
    }

    else if (randomNumber == 134) {
        document.getElementById('quoteDisplay').innerHTML = quote0135;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote135.mp3');
    }

    else if (randomNumber == 135) {
        document.getElementById('quoteDisplay').innerHTML = quote0136;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote136.mp3');
    }

    else if (randomNumber == 136) {
        document.getElementById('quoteDisplay').innerHTML = quote0137;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote137.mp3');
    }

    else if (randomNumber == 137) {
        document.getElementById('quoteDisplay').innerHTML = quote0138;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote138.mp3');
    }

    else if (randomNumber == 138) {
        document.getElementById('quoteDisplay').innerHTML = quote0139;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote139.mp3');
    }

    else if (randomNumber == 139) {
        document.getElementById('quoteDisplay').innerHTML = quote0140;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote140.mp3');
    }

    else if (randomNumber == 140) {
        document.getElementById('quoteDisplay').innerHTML = quote0141;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote141.mp3');
    }

    else if (randomNumber == 141) {
        document.getElementById('quoteDisplay').innerHTML = quote0142;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote142.mp3');
    }

    else if (randomNumber == 142) {
        document.getElementById('quoteDisplay').innerHTML = quote0143;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote143.mp3');
    }

    else if (randomNumber == 143) {
        document.getElementById('quoteDisplay').innerHTML = quote0144;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote144.mp3');
    }

    else if (randomNumber == 144) {
        document.getElementById('quoteDisplay').innerHTML = quote0145;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote145.mp3');
    }

    else if (randomNumber == 145) {
        document.getElementById('quoteDisplay').innerHTML = quote0146;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote146.mp3');
    }

    else if (randomNumber == 146) {
        document.getElementById('quoteDisplay').innerHTML = quote0147;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote147.mp3');
    }

    else if (randomNumber == 147) {
        document.getElementById('quoteDisplay').innerHTML = quote0148;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote148.mp3');
    }

    else if (randomNumber == 148) {
        document.getElementById('quoteDisplay').innerHTML = quote0149;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote149.mp3');
    }

    else if (randomNumber == 149) {
        document.getElementById('quoteDisplay').innerHTML = quote0150;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote150.mp3');
    }

    else if (randomNumber == 150) {
        document.getElementById('quoteDisplay').innerHTML = quote0151;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote151.mp3');
    }

    else if (randomNumber == 151) {
        document.getElementById('quoteDisplay').innerHTML = quote0152;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote152.mp3');
    }

    else if (randomNumber == 152) {
        document.getElementById('quoteDisplay').innerHTML = quote0153;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote153.mp3');
    }

    else if (randomNumber == 153) {
        document.getElementById('quoteDisplay').innerHTML = quote0154;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote154.mp3');
    }

    else if (randomNumber == 154) {
        document.getElementById('quoteDisplay').innerHTML = quote0155;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote155.mp3');
    }

    else if (randomNumber == 155) {
        document.getElementById('quoteDisplay').innerHTML = quote0156;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote156.mp3');
    }

    else if (randomNumber == 156) {
        document.getElementById('quoteDisplay').innerHTML = quote0157;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote157.mp3');
    }

    else if (randomNumber == 157) {
        document.getElementById('quoteDisplay').innerHTML = quote0158;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote158.mp3');
    }

    else if (randomNumber == 158) {
        document.getElementById('quoteDisplay').innerHTML = quote0159;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote159.mp3');
    }

    else if (randomNumber == 159) {
        document.getElementById('quoteDisplay').innerHTML = quote0160;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote160.mp3');
    }

    else if (randomNumber == 160) {
        document.getElementById('quoteDisplay').innerHTML = quote0161;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote161.mp3');
    }

    else if (randomNumber == 161) {
        document.getElementById('quoteDisplay').innerHTML = quote0162;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote162.mp3');
    }

    else if (randomNumber == 162) {
        document.getElementById('quoteDisplay').innerHTML = quote0163;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote163.mp3');
    }

    else if (randomNumber == 163) {
        document.getElementById('quoteDisplay').innerHTML = quote0164;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote164.mp3');
    }

    else if (randomNumber == 164) {
        document.getElementById('quoteDisplay').innerHTML = quote0165;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote165.mp3');
    }

    else if (randomNumber == 165) {
        document.getElementById('quoteDisplay').innerHTML = quote0166;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote166.mp3');
    }

    else if (randomNumber == 166) {
        document.getElementById('quoteDisplay').innerHTML = quote0167;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote167.mp3');
    }

    else if (randomNumber == 167) {
        document.getElementById('quoteDisplay').innerHTML = quote0168;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote168.mp3');
    }

    else if (randomNumber == 168) {
        document.getElementById('quoteDisplay').innerHTML = quote0169;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote169.mp3');
    }

    else if (randomNumber == 169) {
        document.getElementById('quoteDisplay').innerHTML = quote0170;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote170.mp3');
    }

    else if (randomNumber == 170) {
        document.getElementById('quoteDisplay').innerHTML = quote0171;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote1.mp3');
    }

    else if (randomNumber == 171) {
        document.getElementById('quoteDisplay').innerHTML = quote0172;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote172.mp3');
    }

    else if (randomNumber == 172) {
        document.getElementById('quoteDisplay').innerHTML = quote0173;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote173.mp3');
    }

    else if (randomNumber == 173) {
        document.getElementById('quoteDisplay').innerHTML = quote0174;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote174.mp3');
    }

    else if (randomNumber == 174) {
        document.getElementById('quoteDisplay').innerHTML = quote0175;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote175.mp3');
    }

    else if (randomNumber == 175) {
        document.getElementById('quoteDisplay').innerHTML = quote0176;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote176.mp3');
    }

    else if (randomNumber == 176) {
        document.getElementById('quoteDisplay').innerHTML = quote0177;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote177.mp3');
    }

    else if (randomNumber == 177) {
        document.getElementById('quoteDisplay').innerHTML = quote0178;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote178.mp3');
    }

    else if (randomNumber == 178) {
        document.getElementById('quoteDisplay').innerHTML = quote0179;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote179.mp3');
    }

    else if (randomNumber == 179) {
        document.getElementById('quoteDisplay').innerHTML = quote0180;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote180.mp3');
    }

    else if (randomNumber == 180) {
        document.getElementById('quoteDisplay').innerHTML = quote0181;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote181.mp3');
    }

    else if (randomNumber == 181) {
        document.getElementById('quoteDisplay').innerHTML = quote0182;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote182.mp3');
    }

    else if (randomNumber == 182) {
        document.getElementById('quoteDisplay').innerHTML = quote0183;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote183.mp3');
    }

    else if (randomNumber == 183) {
        document.getElementById('quoteDisplay').innerHTML = quote0184;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote184.mp3');
    }

    else if (randomNumber == 184) {
        document.getElementById('quoteDisplay').innerHTML = quote0185;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote185.mp3');
    }

    else if (randomNumber == 185) {
        document.getElementById('quoteDisplay').innerHTML = quote0186;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote186.mp3');
    }

    else if (randomNumber == 186) {
        document.getElementById('quoteDisplay').innerHTML = quote0187;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote187.mp3');
    }

    else if (randomNumber == 187) {
        document.getElementById('quoteDisplay').innerHTML = quote0188;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote188.mp3');
    }

    else if (randomNumber == 188) {
        document.getElementById('quoteDisplay').innerHTML = quote0189;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote189.mp3');
    }

    else if (randomNumber == 189) {
        document.getElementById('quoteDisplay').innerHTML = quote0190;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote190.mp3');
    }

    else if (randomNumber == 190) {
        document.getElementById('quoteDisplay').innerHTML = quote0191;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote191.mp3');
    }

    else if (randomNumber == 191) {
        document.getElementById('quoteDisplay').innerHTML = quote0192;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote192.mp3');
    }

    else if (randomNumber == 192) {
        document.getElementById('quoteDisplay').innerHTML = quote0193;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote193.mp3');
    }

    else if (randomNumber == 193) {
        document.getElementById('quoteDisplay').innerHTML = quote0194;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote194.mp3');
    }

    else if (randomNumber == 194) {
        document.getElementById('quoteDisplay').innerHTML = quote0195;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote195.mp3');
    }

    else if (randomNumber == 195) {
        document.getElementById('quoteDisplay').innerHTML = quote0196;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote196.mp3');
    }

    else if (randomNumber == 196) {
        document.getElementById('quoteDisplay').innerHTML = quote0197;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote197.mp3');
    }

    else if (randomNumber == 197) {
        document.getElementById('quoteDisplay').innerHTML = quote0198;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote198.mp3');
    }

    else if (randomNumber == 198) {
        document.getElementById('quoteDisplay').innerHTML = quote0199;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote199.mp3');
    }

    else if (randomNumber == 199) {
        document.getElementById('quoteDisplay').innerHTML = quote0200;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote200.mp3');
    }

    else if (randomNumber == 200) {
        document.getElementById('quoteDisplay').innerHTML = quote0201;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote201.mp3');
    }

    else if (randomNumber == 201) {
        document.getElementById('quoteDisplay').innerHTML = quote0202;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote202.mp3');
    }

    else if (randomNumber == 202) {
        document.getElementById('quoteDisplay').innerHTML = quote0203;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote203.mp3');
    }

    else if (randomNumber == 203) {
        document.getElementById('quoteDisplay').innerHTML = quote0204;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote204.mp3');
    }

    else if (randomNumber == 204) {
        document.getElementById('quoteDisplay').innerHTML = quote0205;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote205.mp3');
    }

    else if (randomNumber == 205) {
        document.getElementById('quoteDisplay').innerHTML = quote0206;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote206.mp3');
    }

    else if (randomNumber == 206) {
        document.getElementById('quoteDisplay').innerHTML = quote0207;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote207.mp3');
    }

    else if (randomNumber == 207) {
        document.getElementById('quoteDisplay').innerHTML = quote0208;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote208.mp3');
    }

    else if (randomNumber == 208) {
        document.getElementById('quoteDisplay').innerHTML = quote0209;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote209.mp3');
    }

    else if (randomNumber == 209) {
        document.getElementById('quoteDisplay').innerHTML = quote0210;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote210.mp3');
    }

    else if (randomNumber == 210) {
        document.getElementById('quoteDisplay').innerHTML = quote0211;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote211.mp3');
    }

    else if (randomNumber == 211) {
        document.getElementById('quoteDisplay').innerHTML = quote0212;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote212.mp3');
    }

    else if (randomNumber == 212) {
        document.getElementById('quoteDisplay').innerHTML = quote0213;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote213.mp3');
    }

    else if (randomNumber == 213) {
        document.getElementById('quoteDisplay').innerHTML = quote0214;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote214.mp3');
    }

    else if (randomNumber == 214) {
        document.getElementById('quoteDisplay').innerHTML = quote0215;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote215.mp3');
    }

    else if (randomNumber == 215) {
        document.getElementById('quoteDisplay').innerHTML = quote0216;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote216.mp3');
    }

    else if (randomNumber == 216) {
        document.getElementById('quoteDisplay').innerHTML = quote0217;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote217.mp3');
    }

    else if (randomNumber == 217) {
        document.getElementById('quoteDisplay').innerHTML = quote0218;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote218.mp3');
    }

    else if (randomNumber == 218) {
        document.getElementById('quoteDisplay').innerHTML = quote0219;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote219.mp3');
    }

    else if (randomNumber == 219) {
        document.getElementById('quoteDisplay').innerHTML = quote0220;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote220.mp3');
    }

    else if (randomNumber == 220) {
        document.getElementById('quoteDisplay').innerHTML = quote0221;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote221.mp3');
    }

    else if (randomNumber == 221) {
        document.getElementById('quoteDisplay').innerHTML = quote0222;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote222.mp3');
    }

    else if (randomNumber == 222) {
        document.getElementById('quoteDisplay').innerHTML = quote0223;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote223.mp3');
    }

    else if (randomNumber == 223) {
        document.getElementById('quoteDisplay').innerHTML = quote0224;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote224.mp3');
    }

    else if (randomNumber == 224) {
        document.getElementById('quoteDisplay').innerHTML = quote0225;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote225.mp3');
    }

    else if (randomNumber == 225) {
        document.getElementById('quoteDisplay').innerHTML = quote0226;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote226.mp3');
    }

    else if (randomNumber == 226) {
        document.getElementById('quoteDisplay').innerHTML = quote0227;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote227.mp3');
    }

    else if (randomNumber == 227) {
        document.getElementById('quoteDisplay').innerHTML = quote0228;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote228.mp3');
    }

    else if (randomNumber == 228) {
        document.getElementById('quoteDisplay').innerHTML = quote0229;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote229.mp3');
    }

    else if (randomNumber == 229) {
        document.getElementById('quoteDisplay').innerHTML = quote0230;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote230.mp3');
    }

    else if (randomNumber == 230) {
        document.getElementById('quoteDisplay').innerHTML = quote0231;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote231.mp3');
    }

    else if (randomNumber == 231) {
        document.getElementById('quoteDisplay').innerHTML = quote0232;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote232.mp3');
    }

    else if (randomNumber == 232) {
        document.getElementById('quoteDisplay').innerHTML = quote0233;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote233.mp3');
    }

    else if (randomNumber == 233) {
        document.getElementById('quoteDisplay').innerHTML = quote0234;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote234.mp3');
    }

    else if (randomNumber == 234) {
        document.getElementById('quoteDisplay').innerHTML = quote0235;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote235.mp3');
    }

    else if (randomNumber == 235) {
        document.getElementById('quoteDisplay').innerHTML = quote0236;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote236.mp3');
    }

    else if (randomNumber == 236) {
        document.getElementById('quoteDisplay').innerHTML = quote0237;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote237.mp3');
    }

    else if (randomNumber == 237) {
        document.getElementById('quoteDisplay').innerHTML = quote0238;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote238.mp3');
    }

    else if (randomNumber == 238) {
        document.getElementById('quoteDisplay').innerHTML = quote0239;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote239.mp3');
    }

    else if (randomNumber == 239) {
        document.getElementById('quoteDisplay').innerHTML = quote0240;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote240.mp3');
    }

    else if (randomNumber == 240) {
        document.getElementById('quoteDisplay').innerHTML = quote0241;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote241.mp3');
    }

    else if (randomNumber == 241) {
        document.getElementById('quoteDisplay').innerHTML = quote0242;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote242.mp3');
    }

    else if (randomNumber == 242) {
        document.getElementById('quoteDisplay').innerHTML = quote0243;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote243.mp3');
    }

    else if (randomNumber == 243) {
        document.getElementById('quoteDisplay').innerHTML = quote0244;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote244.mp3');
    }

    else if (randomNumber == 244) {
        document.getElementById('quoteDisplay').innerHTML = quote0245;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote245.mp3');
    }

    else if (randomNumber == 245) {
        document.getElementById('quoteDisplay').innerHTML = quote0246;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote246.mp3');
    }

    else if (randomNumber == 246) {
        document.getElementById('quoteDisplay').innerHTML = quote0247;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote247.mp3');
    }

    else if (randomNumber == 247) {
        document.getElementById('quoteDisplay').innerHTML = quote0248;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote248.mp3');
    }

    else if (randomNumber == 248) {
        document.getElementById('quoteDisplay').innerHTML = quote0249;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote249.mp3');
    }

    else if (randomNumber == 249) {
        document.getElementById('quoteDisplay').innerHTML = quote0250;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote250.mp3');
    }

    else if (randomNumber == 250) {
        document.getElementById('quoteDisplay').innerHTML = quote0251;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote251.mp3');
    }

    else if (randomNumber == 251) {
        document.getElementById('quoteDisplay').innerHTML = quote0252;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote252.mp3');
    }

    else if (randomNumber == 252) {
        document.getElementById('quoteDisplay').innerHTML = quote0253;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote253.mp3');
    }

    else if (randomNumber == 253) {
        document.getElementById('quoteDisplay').innerHTML = quote0254;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote254.mp3');
    }

    else if (randomNumber == 254) {
        document.getElementById('quoteDisplay').innerHTML = quote0255;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote255.mp3');
    }

    else if (randomNumber == 255) {
        document.getElementById('quoteDisplay').innerHTML = quote0256;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote256.mp3');
    }

    else if (randomNumber == 256) {
        document.getElementById('quoteDisplay').innerHTML = quote0257;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote257.mp3');
    }

    else if (randomNumber == 257) {
        document.getElementById('quoteDisplay').innerHTML = quote0258;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote258.mp3');
    }

    else if (randomNumber == 258) {
        document.getElementById('quoteDisplay').innerHTML = quote0259;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote259.mp3');
    }

    else if (randomNumber == 259) {
        document.getElementById('quoteDisplay').innerHTML = quote0260;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote260.mp3');
    }

    else if (randomNumber == 260) {
        document.getElementById('quoteDisplay').innerHTML = quote0261;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote261.mp3');
    }

    else if (randomNumber == 261) {
        document.getElementById('quoteDisplay').innerHTML = quote0262;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote262.mp3');
    }

    else if (randomNumber == 262) {
        document.getElementById('quoteDisplay').innerHTML = quote0263;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote263.mp3');
    }

    else if (randomNumber == 263) {
        document.getElementById('quoteDisplay').innerHTML = quote0264;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote264.mp3');
    }

    else if (randomNumber == 264) {
        document.getElementById('quoteDisplay').innerHTML = quote0265;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote265.mp3');
    }

    else if (randomNumber == 265) {
        document.getElementById('quoteDisplay').innerHTML = quote0266;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote266.mp3');
    }

    else if (randomNumber == 266) {
        document.getElementById('quoteDisplay').innerHTML = quote0267;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote267.mp3');
    }

    else if (randomNumber == 267) {
        document.getElementById('quoteDisplay').innerHTML = quote0268;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote268.mp3');
    }

    else if (randomNumber == 268) {
        document.getElementById('quoteDisplay').innerHTML = quote0269;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote269.mp3');
    }

    else if (randomNumber == 269) {
        document.getElementById('quoteDisplay').innerHTML = quote0270;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote270.mp3');
    }

    else if (randomNumber == 270) {
        document.getElementById('quoteDisplay').innerHTML = quote0271;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote271.mp3');
    }

    else if (randomNumber == 271) {
        document.getElementById('quoteDisplay').innerHTML = quote0272;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote272.mp3');
    }

    else if (randomNumber == 272) {
        document.getElementById('quoteDisplay').innerHTML = quote0273;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote273.mp3');
    }

    else if (randomNumber == 273) {
        document.getElementById('quoteDisplay').innerHTML = quote0274;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote274.mp3');
    }

    else if (randomNumber == 274) {
        document.getElementById('quoteDisplay').innerHTML = quote0275;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote275.mp3');
    }

    else if (randomNumber == 275) {
        document.getElementById('quoteDisplay').innerHTML = quote0276;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote276.mp3');
    }

    else if (randomNumber == 276) {
        document.getElementById('quoteDisplay').innerHTML = quote0277;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote277.mp3');
    }

    else if (randomNumber == 277) {
        document.getElementById('quoteDisplay').innerHTML = quote0278;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote278.mp3');
    }

    else if (randomNumber == 278) {
        document.getElementById('quoteDisplay').innerHTML = quote0279;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote279.mp3');
    }

    else if (randomNumber == 279) {
        document.getElementById('quoteDisplay').innerHTML = quote0280;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote280.mp3');
    }

    else if (randomNumber == 280) {
        document.getElementById('quoteDisplay').innerHTML = quote0281;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote281.mp3');
    }

    else if (randomNumber == 281) {
        document.getElementById('quoteDisplay').innerHTML = quote0282;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote282.mp3');
    }

    else if (randomNumber == 282) {
        document.getElementById('quoteDisplay').innerHTML = quote0283;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote283.mp3');
    }

    else if (randomNumber == 283) {
        document.getElementById('quoteDisplay').innerHTML = quote0284;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote284.mp3');
    }

    else if (randomNumber == 284) {
        document.getElementById('quoteDisplay').innerHTML = quote0285;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote285.mp3');
    }

    else if (randomNumber == 285) {
        document.getElementById('quoteDisplay').innerHTML = quote0286;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote286.mp3');
    }

    else if (randomNumber == 286) {
        document.getElementById('quoteDisplay').innerHTML = quote0287;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote287.mp3');
    }

    else if (randomNumber == 287) {
        document.getElementById('quoteDisplay').innerHTML = quote0288;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote288.mp3');
    }

    else if (randomNumber == 288) {
        document.getElementById('quoteDisplay').innerHTML = quote0289;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote289.mp3');
    }

    else if (randomNumber == 289) {
        document.getElementById('quoteDisplay').innerHTML = quote0290;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote290.mp3');
    }

    else if (randomNumber == 290) {
        document.getElementById('quoteDisplay').innerHTML = quote0291;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote291.mp3');
    }

    else if (randomNumber == 291) {
        document.getElementById('quoteDisplay').innerHTML = quote0292;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote292.mp3');
    }

    else if (randomNumber == 292) {
        document.getElementById('quoteDisplay').innerHTML = quote0293;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote293.mp3');
    }

    else if (randomNumber == 293) {
        document.getElementById('quoteDisplay').innerHTML = quote0294;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote294.mp3');
    }

    else if (randomNumber == 294) {
        document.getElementById('quoteDisplay').innerHTML = quote0295;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote295.mp3');
    }

    else if (randomNumber == 295) {
        document.getElementById('quoteDisplay').innerHTML = quote0296;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote296.mp3');
    }

    else if (randomNumber == 296) {
        document.getElementById('quoteDisplay').innerHTML = quote0297;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote297.mp3');
    }

    else if (randomNumber == 297) {
        document.getElementById('quoteDisplay').innerHTML = quote0298;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote298.mp3');
    }

    else if (randomNumber == 298) {
        document.getElementById('quoteDisplay').innerHTML = quote0299;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote299.mp3');
    }

    else if (randomNumber == 299) {
        document.getElementById('quoteDisplay').innerHTML = quote0300;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote300.mp3');
    }

    else if (randomNumber == 300) {
        document.getElementById('quoteDisplay').innerHTML = quote0301;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote301.mp3');
    }

    else if (randomNumber == 301) {
        document.getElementById('quoteDisplay').innerHTML = quote0302;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote302.mp3');
    }

    else if (randomNumber == 302) {
        document.getElementById('quoteDisplay').innerHTML = quote0303;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote303.mp3');
    }

    else if (randomNumber == 303) {
        document.getElementById('quoteDisplay').innerHTML = quote0304;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote304.mp3');
    }

    else if (randomNumber == 304) {
        document.getElementById('quoteDisplay').innerHTML = quote0305;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote305.mp3');
    }

    else if (randomNumber == 305) {
        document.getElementById('quoteDisplay').innerHTML = quote0306;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote306.mp3');
    }

    else if (randomNumber == 306) {
        document.getElementById('quoteDisplay').innerHTML = quote0307;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote307.mp3');
    }

    else if (randomNumber == 307) {
        document.getElementById('quoteDisplay').innerHTML = quote0308;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote308.mp3');
    }

    else if (randomNumber == 308) {
        document.getElementById('quoteDisplay').innerHTML = quote0309;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote309.mp3');
    }

    else if (randomNumber == 309) {
        document.getElementById('quoteDisplay').innerHTML = quote0310;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote310.mp3');
    }

    else if (randomNumber == 310) {
        document.getElementById('quoteDisplay').innerHTML = quote0311;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote311.mp3');
    }

    else if (randomNumber == 311) {
        document.getElementById('quoteDisplay').innerHTML = quote0312;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote312.mp3');
    }

    else if (randomNumber == 312) {
        document.getElementById('quoteDisplay').innerHTML = quote0313;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote313.mp3');
    }

    else if (randomNumber == 313) {
        document.getElementById('quoteDisplay').innerHTML = quote0314;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote314.mp3');
    }

    else if (randomNumber == 314) {
        document.getElementById('quoteDisplay').innerHTML = quote0315;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote315.mp3');
    }

    else if (randomNumber == 315) {
        document.getElementById('quoteDisplay').innerHTML = quote0316;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote316.mp3');
    }

    else if (randomNumber == 316) {
        document.getElementById('quoteDisplay').innerHTML = quote0317;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote317.mp3');
    }

    else if (randomNumber == 317) {
        document.getElementById('quoteDisplay').innerHTML = quote0318;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote318.mp3');
    }

    else if (randomNumber == 318) {
        document.getElementById('quoteDisplay').innerHTML = quote0319;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote319.mp3');
    }

    else if (randomNumber == 319) {
        document.getElementById('quoteDisplay').innerHTML = quote0320;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote320.mp3');
    }

    else if (randomNumber == 320) {
        document.getElementById('quoteDisplay').innerHTML = quote0321;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote321.mp3');
    }

    else if (randomNumber == 321) {
        document.getElementById('quoteDisplay').innerHTML = quote0322;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote322.mp3');
    }

    else if (randomNumber == 322) {
        document.getElementById('quoteDisplay').innerHTML = quote0323;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote323.mp3');
    }

    else if (randomNumber == 323) {
        document.getElementById('quoteDisplay').innerHTML = quote0324;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote324.mp3');
    }

    else if (randomNumber == 324) {
        document.getElementById('quoteDisplay').innerHTML = quote0325;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote325.mp3');
    }
    else if (randomNumber == 325) {
        document.getElementById('quoteDisplay').innerHTML = quote0;
        document.getElementById("audioPlayer").setAttribute('src', 'audio/voiceQuote/quote.mp3');
    }

    else if (quoteFinished[randomNumber] = true){
        console.log("Random number is either too high or something went wrong");
        document.getElementById('quoteButton').innerHTML = "Please try again :)";
    }
}




