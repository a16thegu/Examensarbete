$(document).ready(function(){
    var runScript;
    var count;
    var loops = 10;
    var data = [];
    var str = "";
    var dataWindow;
    var event;
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    if (localStorage.getItem("RunScript") == null){
        localStorage.setItem("RunScript", "true");
    }
    else {
        runScript = localStorage.getItem("RunScript");
    }

    if (localStorage.getItem("Count") == null){
        localStorage.setItem("Count", 0);
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

    if (runScript == "true"){
        event = document.createEvent("SVGEvents");
        event.initEvent("click", true, true);
        document.getElementById("SE-U").dispatchEvent(event);

        sleep(10000).then(() => {
            data.push(localStorage.getItem("ElapsedTime"));

            if (count < loops){
                localStorage.setItem("Data", JSON.stringify(data));
                localStorage.setItem("Count", parseInt(localStorage.Count) + 1);
                window.location.reload();
            }
            else {
                localStorage.setItem("RunScript", "false");
                window.location.reload();
            }
        });
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
  