document.addEventListener("DOMContentLoaded", function(){
	var svg = document.querySelector("svg");
	svg.addEventListener("click", start);
},false);


function start(e){
    console.log(e.explicitOriginalTarget.attributes[2].nodeValue);
}


var county = {
    id: "SE-K",
    context: {
        name: "Blekinge",
        image: "",
        text: ""
    },
    id: "SE-I",
    context: {
        name: "Gotland",
        image: "",
        text: ""
    },
    id: "SE-X",
    context: {
        name: "Gävleborg",
        image: "",
        text: ""
    },
    id: "SE-N",
    context: {
        name: "Halland",
        image: "",
        text: ""
    },
    id: "SE-Z",
    context: {
        name: "Jämtland",
        image: "",
        text: ""
    },
    id: "SE-F",
    context: {
        name: "Jönköping",
        image: "",
        text: ""
    },
    id: "SE-H",
    context: {
        name: "Kalmar",
        image: "",
        text: ""
    },
    id: "SE-W",
    context: {
        name: "Dalarna",
        image: "",
        text: ""
    },
    id: "SE-G",
    context: {
        name: "Kronoberg",
        image: "",
        text: ""
    },
    id: "SE-BD",
    context: {
        name: "Norrbotten",
        image: "",
        text: ""
    },
    id: "SE-E",
    context: {
        name: "Östergötland",
        image: "",
        text: ""
    },
    id: "SE-T",
    context: {
        name: "Örebro",
        image: "",
        text: ""
    },
    id: "SE-D",
    context: {
        name: "Södermanland",
        image: "",
        text: ""
    },
    id: "SE-M",
    context: {
        name: "Skåne",
        image: "",
        text: ""
    },
    id: "SE-AB",
    context: {
        name: "Stockholm",
        image: "",
        text: ""
    },
    id: "SE-C",
    context: {
        name: "Uppsala",
        image: "",
        text: ""
    },
    id: "SE-AC",
    context: {
        name: "Västerbotten",
        image: "",
        text: ""
    },
    id: "SE-O",
    context: {
        name: "Västra Götaland",
        image: "",
        text: ""
    },
    id: "SE-S",
    context: {
        name: "Värmland",
        image: "",
        text: ""
    },
    id: "SE-U",
    context: {
        name: "Västmanland",
        image: "",
        text: ""
    },
    id: "SE-Y",
    context: {
        name: "Västernorrland",
        image: "",
        text: ""
    },
    
    
};