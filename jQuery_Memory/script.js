var animals = ["bat.svg", "bear.svg", "bee.svg", "bird.svg", "bug.svg", "butterfly.svg", "camel.svg", "cat.svg", "cheetah.svg", "chicken.svg", "coala.svg", "cow.svg", "crocodile.svg", "dinosaur.svg", "dog.svg", "dolphin.svg", "dove.svg", "duck.svg", "eagle.svg", "elephant.svg", "fish.svg", "flamingo.svg", "fox.svg", "frog.svg", "giraffe.svg", "gorilla.svg", "horse.svg", "kangoroo.svg", "leopard.svg", "lion.svg", "monkey.svg", "mouse.svg", "panda.svg", "parrot.svg", "penguin.svg", "shark.svg", "sheep.svg", "snake.svg", "spider.svg", "squirrle.svg", "star-fish.svg", "tiger.svg", "turtle.svg", "wolf.svg", "zebra.svg"];
var halloween = ["bat.svg", "black-cat.svg", "blood.svg", "bone.svg", "brain.svg", "broom.svg", "candle.svg", "candy.svg", "castle.svg", "cauldrom.svg", "coffin.svg", "costume.svg", "death.svg", "devil.svg", "fish-bone.svg", "full-moon.svg", "ghost.svg", "grave-yard.svg", "grave.svg", "half-moon.svg", "horror.svg", "lantern.svg", "magic.svg", "monster.svg", "owl.svg", "pumpkin.svg", "skull.svg", "spider-web.svg", "spider.svg", "tree-2.svg", "tree.svg", "witch-hat.svg", "witch.svg", "zombie-1.svg", "zombie-2.svg"];


function startGame() {
    var cards = document.getElementById("cards");
    var category = document.getElementById("category");
    
    removeCards();
    printDeck(cards.value, category.value);
    
}




function printDeck(cards, category) {
    var cardIndex = [];
    
    if (category = "Animals"){
        for (var i = 0; i < cards; i++){
            var index = Math.floor(Math.random() * animals.length);
            cardIndex[i] = index;
        }
    }
    else {
        for (var i = 1; i < cards/2; i++){
            var index = Math.floor(Math.random() * halloween.length);
            cardIndex[i] = index;
        }
    }
    
    for (var i = 0; i < cards/2; i++){
        for (var i = 0; i < cardIndex.length; i++){
            var obj = document.createElement("object");
            obj.name = i + 1;
            obj.className = "card";
            obj.data = "Images/" + category + "/" + animals[cardIndex[i]];
            obj.type = "image/svg+xml";
            document.getElementById("board").appendChild(obj);
        }
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