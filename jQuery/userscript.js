$(document).ready(function(){
    var loopCount;
    var loops;
    var data = [];
    var startTime;
    var endTime;
    var elapsedTime;
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
    loops = 10;

    if (localStorage.getItem("RunScript") == "true"){
        event = document.createEvent("SVGEvents");
        event.initEvent("click", true, true);
        document.getElementById("SE-U").dispatchEvent(event);

        console.log("RunScript: true Loop: " + parseInt(localStorage.LoopCount));

        elapsedTimeTo = parseInt(localStorage.EndTime) - parseInt(localStorage.StartTime);
        data.push(elapsedTime);
        
        if (parseInt(localStorage.LoopCount) < loops){
            localStorage.setItem("Data", JSON.stringify(data));
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

        str += "<table>";
        for(var i = 0; i < data.length; i += 1){
            str += "<tr>"
            str += "<td>" + data[i] + "</td>";
            str += "</tr>"
        }
        str += "</table>";

       dataWindow = window.open("about:blank", "", "_blank");
       dataWindow.document.write(str);
    }
});