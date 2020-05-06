var keys = ["Better late than never",
"Hit two birds with one stone",
"All that glitters is not gold",
"Never look a gift horse in the mouth",
"Easy come easy go", 
"Necessity is the mother of invention", 
"Two heads are better than one", 
"Better safe than sorry", 
"Measure twice cut one", 
"Money is the root of all evil", 
"The early bird catches the worm", 
"No man is an island", 
"Two wrongs dont make a right", 
"A cat has nine lives"];

var randomKey = Math.floor(Math.random()*keys.length);

if(randomKey > keys.length-1) haslo_losowe = 1;

var key = keys[randomKey];
key = key.toUpperCase();

var repeat = 0;

var encryptedKey = "";
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



for (i = 0; i < key.length; i++) {

    if (key.charAt(i) == " ") encryptedKey = encryptedKey + " ";
    else encryptedKey = encryptedKey + "-";
}

function printKey() {

    document.getElementById("gameBoard").innerHTML = encryptedKey;
}

window.onload = alphabetSet;

function alphabetSet() {

    var divContent = "";

    for (i = 0; i <= 25; i++) {
        var element = "let" + i;
        divContent = divContent + '<div class="letter" onclick=check("' + i + '") id="' + element + '">' + letters.charAt(i) + '</div>';
        if ((i + 1) % 7 == 0) divContent = divContent + '<div style="clear:both;"></div>';
    }

    document.getElementById("alphabet").innerHTML = divContent;

    printKey();
}

String.prototype.setChar = function (position, char) {

    if (position > this.length - 1) return this.toString();
    else return this.substr(0, position) + char + this.substr(position + 1);
}

function check(num) {

    var hit = false;

    for (i = 0; i < key.length; i++) {
        if (key.charAt(i) == letters.charAt(num)) {
            encryptedKey = encryptedKey.setChar(i, letters.charAt(num));
            hit = true;
        }
    }

    if (hit == true) {
        var element = "let" + num;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";

        printKey();
    }
    else {
        var element = "let" + num;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";")

        repeat++;
        var hangmanArt = "img/h" + repeat + ".jpg";
        document.getElementById("hangman").innerHTML = '<img src="' + hangmanArt + '" alt="" />';
    }

    if(key == encryptedKey)
    document.getElementById("alphabet").innerHTML = "Great job! You complete a task        " + key +
    '<br /><br /><span class = "reset" onclick="location.reload()"> PLAY AGAIN?</span>';

    if(repeat >= 8)
    document.getElementById("alphabet").innerHTML = "Defeat! The correct password is        " + key +
    '<br /><br /><span class = "reset" onclick="location.reload()"> PLAY AGAIN?</span>';
}