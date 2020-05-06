var cards = ["aragorn.png", "frodo.png", "gandalf.png", "gandalf.png", "legolas.png",
    "gimli.png", "aragorn.png", "gimli.png", "sauron.png", "legolas.png", "frodo.png", "sauron.png"];

//  alert(cards[4]);
// console.log(cards);

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

c0.addEventListener("click", function () { revealCard(0) });
c1.addEventListener("click", function () { revealCard(1) });
c2.addEventListener("click", function () { revealCard(2) });
c3.addEventListener("click", function () { revealCard(3) });

c4.addEventListener("click", function () { revealCard(4) });
c5.addEventListener("click", function () { revealCard(5) });
c6.addEventListener("click", function () { revealCard(6) });
c7.addEventListener("click", function () { revealCard(7) });

c8.addEventListener("click", function () { revealCard(8) });
c9.addEventListener("click", function () { revealCard(9) });
c10.addEventListener("click", function () { revealCard(10) });
c11.addEventListener("click", function () { revealCard(11) });

var oneVisible = false;
var turnCounter = 0;
var visibleNumber;
var lock = false;
var pairsLeft = 6;

function revealCard(number) {
    // alert(number);

    var opacityValue = $('#c' + number).css('opacity');

    if (opacityValue != 0 && lock == false) {

        lock = true;
        var picture = "url(img/" + cards[number] + ")";

        $('#c' + number).css('background-image', picture);
        $('#c' + number).addClass('cardA');
        $('#c' + number).removeClass('card');

        if (oneVisible == false) {

            oneVisible = true;
            visibleNumber = number;
            lock = false;

        } else {

            if (cards[visibleNumber] == cards[number]) {

                setTimeout(function () { hide2Cards(visibleNumber, number) }, 750);

            } else {

                setTimeout(function () { restore2Cards(visibleNumber, number) }, 1000);

            }

            turnCounter++;
            $('.score').html('Turn counter: ' + turnCounter);
            oneVisible = false;
        }
    }
}

function hide2Cards(firstCard, secondCard) {
    $('#c' + firstCard).css('opacity', '0');
    $('#c' + secondCard).css('opacity', '0');

    pairsLeft --;

    if(pairsLeft == 0){
        $('.board').html('<h1>You Win!!! <br> Done in ' + turnCounter + ' turns <br><br> WELL DONE!</h1>');
    }

    lock = false;
}

function restore2Cards(firstCard, secondCard) {
    $('#c' + firstCard).css('background-image', 'url(img/ring.png)');
    $('#c' + firstCard).addClass('card');
    $('#c' + firstCard).removeClass('cardA');

    $('#c' + secondCard).css('background-image', 'url(img/ring.png)');
    $('#c' + secondCard).addClass('card');
    $('#c' + secondCard).removeClass('cardA');

    lock = false;
}

