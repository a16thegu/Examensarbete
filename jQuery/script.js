document.addEventListener("DOMContentLoaded", function(){
	var svg = document.querySelector("svg");
	svg.addEventListener("click", start);
},false);


function start(e){
    console.log(e.explicitOriginalTarget.attributes[2]);
}