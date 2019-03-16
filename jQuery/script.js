


function startGame() {
    var cards = document.getElementById("cards");
    var category = document.getElementById("category");
    
    removeCards();
    printCardsJQUERY(cards.value, category.value);
    
}


function printCardsJQUERY(cards, category) {
    for (var i = 0; i < cards; i++){
        var div = document.createElement("object");
        div.id = i + 1;
        div.className = "card";
        div.data = "Images/Animals/bat.svg";
        div.type = "image/svg+xml";
        document.getElementById("board").appendChild(div);
    }

    animateCards();
}

//Animate the cards from one place to there respective location on the board.
function animateCards(){
    $(".card").css('position', 'relative').animate({ 
        left: '100px',
    }, 1500);
}


function removeCards(){
    var game = document.getElementById("board");
    while(game.firstChild){
        game.removeChild(game.firstChild);
    }
}