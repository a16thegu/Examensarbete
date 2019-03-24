document.addEventListener("DOMContentLoaded", function(){
    var svg = Array.from(document.querySelectorAll('svg path'));

    svg.forEach(function(path) {
        path.addEventListener("click", start);
     })

},false);

function start(e){
    var county = e.target.id;
    var headline = document.getElementById("headline");
    var text = document.getElementById("text");
    var image = document.getElementById("image");

    if(localStorage.getItem("County") === null){
        localStorage.setItem("County", "Home")
    };

    var previous = localStorage.getItem("County");

    if (county == "Home"){
        document.getElementById(county).style.fill = "black";
        document.getElementById(previous).style.fill = "black";
    } 
    else {
        document.getElementById(county).style.fill = "#c50101";
        document.getElementById(previous).style.fill = "black";
    };

    localStorage.setItem("Start", Date.now());

    $("#content").animate({
        top: "-900px"
    }, "slow", function(){
        for(var i = 0; i < countys.length; i++){
            if (countys[i][0] == county){
                headline.innerHTML = countys[i][1];
                text.innerHTML = countys[i][2];
                image.innerHTML = countys[i][3];
            }
        };

        $("#content").animate({
            top: "0px"
        }, "slow", function(){
            localStorage.setItem("End", Date.now());
        });
    });

    localStorage.setItem("County", county);
}


var countys = [
    ["Home", "Welcome to the interactive Sweden map!", "This is a graduation projekt at University of Skövde.<br>The map is available <a href='https://mapsvg.com/maps/sweden/' target='_blank'>here</a> and home-button <a href='https://commons.wikimedia.org/wiki/File:Ic_home_48px.svg' target='_blank'>here</a>.", ""],
    ["SE-K", "Blekinge", "", ""],
    ["SE-I", "Gotland", "", ""],
    ["SE-X", "Gävleborg", "", ""],
    ["SE-N", "Halland", "", ""],
    ["SE-Z", "Jämtland", "", ""],
    ["SE-F", "Jönköping", "", ""],
    ["SE-H", "Kalmar", "", ""],
    ["SE-W", "Dalarna", "", ""],
    ["SE-G", "Kronoberg", "", ""],
    ["SE-BD", "Norrbotten", "", ""],
    ["SE-E", "Östergötland", "", ""],
    ["SE-T", "Örebro", "", ""],
    ["SE-D", "Södermanland", "", ""],
    ["SE-M", "Skåne", "", ""],
    ["SE-AB", "Stockholm", "", ""],
    ["SE-C", "Uppsala", "", ""],
    ["SE-AC", "Västerbotten", "", ""],
    ["SE-O", "Västra Götaland", "", ""],
    ["SE-S", "Värmland", "", ""],
    ["SE-U", "Västmanland", "", ""],
    ["SE-Y", "Västernorrland", "", ""]
];