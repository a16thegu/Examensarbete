$(document).ready(function(){
    var loopCount;
    var loops;
    var data = [];
    var startTime;
    var endTime;
    var str = "";
    var dataWindow;
    var event;

    if (localStorage.getItem("RunScript") == null){
        localStorage.setItem("RunScript", "true");
    }

    if (localStorage.getItem("LoopCount") == null){
        localStorage.setItem("LoopCount", 0);
    }

    if (localStorage.getItem("Data") === null){
        localStorage.setItem("Data", JSON.stringify(data));
    } 
    else {
        data = localStorage.getItem("Data");
        data = (data) ? JSON.parse(data) : [];
    }

    if (localStorage.getItem("StartTime") === null){
        localStorage.setItem("StartTime", Date.now());
    }

    if (localStorage.getItem("EndTime") === null){
        localStorage.setItem("EndTime", Date.now());
    }

    loopCount = parseInt(localStorage.LoopCount);
    loops = 5;

    if (localStorage.getItem("RunScript") == "true"){
        event = document.createEvent("SVGEvents");
        event.initEvent("click",true,true);
        document.getElementById("SE-U").dispatchEvent(event);
        
        $(document).ready(function(){
            console.log("RunScript: true Loop: " + parseInt(localStorage.LoopCount));    
        });

        if (parseInt(localStorage.LoopCount) < loops){
            localStorage.setItem("LoopCount", parseInt(localStorage.LoopCount) + 1);
            window.location.reload();
        }
        else {
            localStorage.setItem("RunScript", "false");
            window.location.reload();
        }
    }
    else if (localStorage.getItem("RunScript") == "false"){
        console.log("RunScript: false");
    }
});