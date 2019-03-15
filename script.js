function startGame() {
    var cards = document.getElementById("cards");
    var category = document.getElementById("category");
    var library = document.getElementById("library");
    
    removeCards();

    if (library.value == "jQuery"){
        printCardsJQUERY(cards.value, category.value);
    } 
    else if (library.value == "AnimeJS"){
        printCardsANIMEJS(cards.value, category.value);
    }
    else {
        printCardsANIJS(cards.value, category.value);
    }
}


function printCardsJQUERY(cards, category) {
    for (var i = 0; i < cards; i++){
        var div = document.createElement("div");
        div.id = i + 1;
        div.className = "card";
        document.getElementById("game").appendChild(div);
    }

    //Animate objekts with jQuery here
}

function printCardsANIMEJS(cards, category) {
    alert("Values: " + cards + " " + category);
}

function printCardsANIJS(cards, category) {
    alert("Values: " + cards + " " + category);
}


function removeCards(){
    var game = document.getElementById("game");
    while(game.firstChild){
        game.removeChild(game.firstChild);
    }
}