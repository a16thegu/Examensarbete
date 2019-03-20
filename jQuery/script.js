document.addEventListener("DOMContentLoaded", function(){
	var svg = document.querySelector("svg");
	svg.addEventListener("click", start);
},false);


function start(e){
    var county = e.explicitOriginalTarget.attributes[2].nodeValue;
    var headline = document.getElementById("headline");
    var text = document.getElementById("text");
    var image = document.getElementById("image");
    

    /*$("#content").slideUp(function(){
        for(var i = 0; i < countys.length; i++){
            if (countys[i][0] == county){
                headline.innerHTML = countys[i][1];
                text.innerHTML = "";
                image.innerHTML = "";
            }
        }
    });
    $("#content").slideDown(1500);*/

    $("#content").animate({
        height : "0px"
    }, "slow", function(){
        for(var i = 0; i < countys.length; i++){
            if (countys[i][0] == county){
                headline.innerHTML = countys[i][1];
                text.innerHTML = "";
                image.innerHTML = "";
            }
        }
    });
    $("#content").animate({
        height : "800px"
    }, "slow");

    
}

var countys = [
    ["SE", "Welcome to the interactive Sweden map!"]
    ["SE-K","Blekinge","",""],
    ["SE-I","Gotland","",""],
    ["SE-X","Gävleborg","",""],
    ["SE-N","Halland","",""],
    ["SE-Z","Jämtland","", ""],
    ["SE-F","Jönköping","",""],
    ["SE-H","Kalmar","",""],
    ["SE-W","Dalarna","",""],
    ["SE-G","Kronoberg","",""],
    ["SE-BD","Norrbotten","",""],
    ["SE-E","Östergötland","",""],
    ["SE-T","Örebro","",""],
    ["SE-D","Södermanland","",""],
    ["SE-M","Skåne","",""],
    ["SE-AB","Stockholm","",""],
    ["SE-C","Uppsala","",""],
    ["SE-AC","Västerbotten","",""],
    ["SE-O","Västra Götaland","",""],
    ["SE-S","Värmland","",""],
    ["SE-U","Västmanland","",""],
    ["SE-Y","Västernorrland","",""]
];