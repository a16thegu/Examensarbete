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

    /* LocalStorage is used to save and fetch information to/from 
     * that the script needs when the window reloads and are othewise 
     * lost or overwritten by a declaration of variable.*/
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
    
    // The if-statment checks if the script should run and what it should do.
    if (runScript == "true"){
        console.log("Loop: " + count);

        // Sends out a click-event to a static SVG-objekt on the map.
        event = document.createEvent("SVGEvents");
        event.initEvent("click", true, true);
        document.getElementById("SE-U").dispatchEvent(event);
        
        /* A sleep-then-function is necessary to let the animation take it's 
         * time to complete, otherwise the script will continue to run 
         * regardless of the sleep-function.
         * */
        sleep(3000).then(() => {

            /* The script only need to run X number of loops.
             * Number of loops is visable in the variable decalration. */
            if (count < loops){

                /* The values from the animation execution is saved in 
                 * LocalStorgae from the applications script file (see script.js) 
                 * and are here added to the data array with all previous animation 
                 * execution times and is save to LocalStorage.*/
                data.push(localStorage.getItem("ElapsedTime"));
                localStorage.setItem("RunScript", "true");
                localStorage.setItem("Data", JSON.stringify(data));
                localStorage.setItem("Count", count + 1);
                window.location.reload();
            }
            else {

                // Makes the script stop at the next reload of the page.
                localStorage.setItem("RunScript", "false");
                window.location.reload();
            }
        });
    }
    else if (runScript == "false"){
        console.log("Data: " + JSON.stringify(data));

        // Write out the data array on a blank window.
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
  