$(document).ready(function(){
    var runScript;
    var count;
    var loops = 5;
    var data = [];
    var str = "";
    var dataWindow;
    var event;
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    if (localStorage.getItem("RunScript") == null){
        runScript = "true";
    }
    else {
        runScript = localStorage.getItem("RunScript");
    }

    if (localStorage.getItem("Count") == null){
        count = 0;
    }
    else {
        count = parseInt(localStorage.getItem("Count"));
    }

    if (localStorage.getItem("Data") === null){
        localStorage.setItem("Data", JSON.stringify(data));
    } 
    else {
        data = localStorage.getItem("Data");
        data = (data) ? JSON.parse(data) : [];
    }

    console.log("Run: " + runScript);
    
    if (runScript == "true"){
        console.log("Loop: " + count);

        event = document.createEvent("SVGEvents");
        event.initEvent("click", true, true);
        document.getElementById("SE-U").dispatchEvent(event);
        
        sleep(5000).then(() => {
            if (count < loops){
                data.push(localStorage.getItem("ElapsedTime"));
                localStorage.setItem("RunScript", "true");
                localStorage.setItem("Data", JSON.stringify(data));
                localStorage.setItem("Count", count + 1);
                window.location.reload();
            }
            else {
                localStorage.setItem("RunScript", "false");
                window.location.reload();
            }
        });
    }
    else if (runScript == "false"){
        console.log("Data: " + JSON.stringify(data));

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
  