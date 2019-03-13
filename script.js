function startGame() {
    var cards = document.getElementById("cards");
    var category = document.getElementById("category");
    var library = document.getElementById("library");
    
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
}

function printCardsANIMEJS(cards, category) {
    alert("Values: " + cards + " " + category);
}

function printCardsANIJS(cards, category) {
    alert("Values: " + cards + " " + category);
}