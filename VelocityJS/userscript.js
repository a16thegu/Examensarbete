$(document).ready(function(){
    var runScript_VelocityJS;
    var count_VelocityJS;
    var loops = 600;
    var d1_150_VelocityJS = [];
    var d2_150_VelocityJS = [];
    var d1_400_VelocityJS = [];
    var d2_400_VelocityJS = [];
    var d1_1000_VelocityJS = [];
    var d2_1000_VelocityJS = [];
    var str = "";
    var event;
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    /* LocalStorage is used to save and fetch information to/from 
     * that the script needs when the window reloads and are othewise 
     * lost or overwritten by a declaration of variable.*/
     if (localStorage.getItem("runScript_VelocityJS") == null){
        runScript_VelocityJS = "true";
    }
    else {
        runScript_VelocityJS = localStorage.getItem("runScript_VelocityJS");
    }

    if (localStorage.getItem("count_VelocityJS") == null){
        count_VelocityJS = 0;
    }
    else {
        count_VelocityJS = parseInt(localStorage.getItem("count_VelocityJS"));
    }

    if (localStorage.getItem("d1_150_VelocityJS") === null){
        localStorage.setItem("d1_150_VelocityJS", JSON.stringify(d1_150_VelocityJS));
    } 
    else {
        d1_150_VelocityJS = localStorage.getItem("d1_150_VelocityJS");
        d1_150_VelocityJS = (d1_150_VelocityJS) ? JSON.parse(d1_150_VelocityJS) : [];
    }

    if (localStorage.getItem("d2_150_VelocityJS") === null){
        localStorage.setItem("d2_150_VelocityJS", JSON.stringify(d2_150_VelocityJS));
    } 
    else {
        d2_150_VelocityJS = localStorage.getItem("d2_150_VelocityJS");
        d2_150_VelocityJS = (d2_150_VelocityJS) ? JSON.parse(d2_150_VelocityJS) : [];
    }

    if (localStorage.getItem("d1_400_VelocityJS") === null){
        localStorage.setItem("d1_400_VelocityJS", JSON.stringify(d1_400_VelocityJS));
    } 
    else {
        d1_400_VelocityJS = localStorage.getItem("d1_400_VelocityJS");
        d1_400_VelocityJS = (d1_400_VelocityJS) ? JSON.parse(d1_400_VelocityJS) : [];
    }

    if (localStorage.getItem("d2_400_VelocityJS") === null){
        localStorage.setItem("d2_400_VelocityJS", JSON.stringify(d2_400_VelocityJS));
    } 
    else {
        d2_400_VelocityJS = localStorage.getItem("d2_400_VelocityJS");
        d2_400_VelocityJS = (d2_400_VelocityJS) ? JSON.parse(d2_400_VelocityJS) : [];
    }

    if (localStorage.getItem("d1_1000_VelocityJS") === null){
        localStorage.setItem("d1_1000_VelocityJS", JSON.stringify(d1_1000_VelocityJS));
    } 
    else {
        d1_1000_VelocityJS = localStorage.getItem("d1_1000_VelocityJS");
        d1_1000_VelocityJS = (d1_1000_VelocityJS) ? JSON.parse(d1_1000_VelocityJS) : [];
    }

    if (localStorage.getItem("d2_1000_VelocityJS") === null){
        localStorage.setItem("d2_1000_VelocityJS", JSON.stringify(d2_1000_VelocityJS));
    } 
    else {
        d2_1000_VelocityJS = localStorage.getItem("d2_1000_VelocityJS");
        d2_1000_VelocityJS = (d2_1000_VelocityJS) ? JSON.parse(d2_1000_VelocityJS) : [];
    }


    console.log("Run: " + runScript_VelocityJS);
    
    // The if-statment checks if the script should run and what it should do.
    if (runScript_VelocityJS == "true"){
        console.log("Loop: " + count_VelocityJS);

        // Sends out a click-event to a static SVG-objekt on the map.
        event = document.createEvent("SVGEvents");
        event.initEvent("click", true, true);
        document.getElementById("SE-U").dispatchEvent(event);
        
        /* A sleep-then-function is necessary to let the animation take it's 
        * time to complete, otherwise the script will continue to run 
        * regardless of the sleep-function.
        * */
        sleep(6000).then(() => {

            /* The script only need to run X number of loops.
            * Number of loops is visable in the variable decalration. */
            if (count_VelocityJS < loops){

                /* Start and stop values are fetched from the application (see script.js) 
                * and are calculated to a elapsed time. Then saved to a d1_150_VelocityJS array for
                * each measurement needed.
                */

                elapsedTime = parseInt(localStorage.getItem("e1_150")) - parseInt(localStorage.getItem("s_150"));
                d1_150_VelocityJS.push(Math.round(elapsedTime));
                elapsedTime = parseInt(localStorage.getItem("e2_150")) - parseInt(localStorage.getItem("s_150"));
                d2_150_VelocityJS.push(Math.round(elapsedTime));

                elapsedTime = parseInt(localStorage.getItem("e1_400")) - parseInt(localStorage.getItem("s_400"));
                d1_400_VelocityJS.push(Math.round(elapsedTime));
                elapsedTime = parseInt(localStorage.getItem("e2_400")) - parseInt(localStorage.getItem("s_400"));
                d2_400_VelocityJS.push(Math.round(elapsedTime));

                elapsedTime = parseInt(localStorage.getItem("e1_1000")) - parseInt(localStorage.getItem("s_1000"));
                d1_1000_VelocityJS.push(Math.round(elapsedTime));
                elapsedTime = parseInt(localStorage.getItem("e2_1000")) - parseInt(localStorage.getItem("s_1000"));
                d2_1000_VelocityJS.push(Math.round(elapsedTime));


                localStorage.setItem("d1_150_VelocityJS", JSON.stringify(d1_150_VelocityJS));
                localStorage.setItem("d2_150_VelocityJS", JSON.stringify(d2_150_VelocityJS));

                localStorage.setItem("d1_400_VelocityJS", JSON.stringify(d1_400_VelocityJS));
                localStorage.setItem("d2_400_VelocityJS", JSON.stringify(d2_400_VelocityJS));

                localStorage.setItem("d1_1000_VelocityJS", JSON.stringify(d1_1000_VelocityJS));
                localStorage.setItem("d2_1000_VelocityJS", JSON.stringify(d2_1000_VelocityJS));

                // Increse to the next click and reloads the site.
                localStorage.setItem("count_VelocityJS", count_VelocityJS + 1);
                window.location.reload();
            }
            else {
                // Makes the script stop at the next reload of the page.
                localStorage.setItem("runScript_VelocityJS", "false");
                window.location.reload();
            }
        });
    }
    else if (runScript_VelocityJS == "false"){
        console.log("D1 150: " + JSON.stringify(d1_150_VelocityJS));
        console.log("D2 150: " + JSON.stringify(d2_150_VelocityJS));

        console.log("D1 400: " + JSON.stringify(d1_400_VelocityJS));
        console.log("D2 400: " + JSON.stringify(d2_400_VelocityJS));

        console.log("D1 1000: " + JSON.stringify(d1_1000_VelocityJS));
        console.log("D2 1000: " + JSON.stringify(d2_1000_VelocityJS));

        // Adds the data to a sting and download it as a file.      
        str += "<h1>Exekverings tid (D1)</h1>";
        str += "<table><tr>";
        str += "<th>150</th>";
        str += "<th>400</th>";
        str += "<th>1000</th>";
        str += "</tr>";

        for(var i = 0; i < d1_150_VelocityJS.length; i += 1){
            str += "<tr>";
            str += "<td>" + d1_150_VelocityJS[i] + "</td>";
            str += "<td>" + d1_400_VelocityJS[i] + "</td>";
            str += "<td>" + d1_1000_VelocityJS[i] + "</td>";
            str += "</tr>";
        }
        str += "</table>";

        str += "<h1>Animation Duration (D2)</h1>";
        str += "<table><tr>";
        str += "<th>150</th>";
        str += "<th>400</th>";
        str += "<th>1000</th>";
        str += "</tr>";

        for(var i = 0; i < d2_150_VelocityJS.length; i += 1){
            str += "<tr>";
            str += "<td>" + d2_150_VelocityJS[i] + "</td>";
            str += "<td>" + d2_400_VelocityJS[i] + "</td>";
            str += "<td>" + d2_1000_VelocityJS[i] + "</td>";
            str += "</tr>";
        }
        str += "</table>";


        // Check which browser has been used.
        var ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),
            browser;

        if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
            browser = "msie";
        }
        else {
            browser = ua[1].toLowerCase();
        }    

        // Names the data file to the browser that has been used.
        if (browser == "firefox"){
            download("VelocityJS_Firefox.html", str);
        }
        else if (browser == "chrome"){
            download("VelocityJS_Chrome.html", str);
        }
        else if (browser == "safari"){
            download("VelocityJS_Safari.html", str);
        }

    }
});
  

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }