$(document).ready(function(){
    for(var i = 0; i < 1; i++){
          var event = document.createEvent("SVGEvents");
            event.initEvent("click",true,true);
            document.getElementById("SE-U").dispatchEvent(event);
  
        console.log("Test");
    }
  });