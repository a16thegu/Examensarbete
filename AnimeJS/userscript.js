$(document).ready(function(){
    var runScript_AnimeJS;
    var count_AnimeJS;
    var loops = 600;
    var d1_150_AnimeJS = [];
    var d2_150_AnimeJS = [];
    var d1_400_AnimeJS = [];
    var d2_400_AnimeJS = [];
    var d1_1000_AnimeJS = [];
    var d2_1000_AnimeJS = [];
    var str = "";
    var event;
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    /* LocalStorage is used to save and fetch information to/from 
     * that the script needs when the window reloads and are othewise 
     * lost or overwritten by a declaration of variable.*/
     if (localStorage.getItem("runScript_AnimeJS") == null){
        runScript_AnimeJS = "true";
    }
    else {
        runScript_AnimeJS = localStorage.getItem("runScript_AnimeJS");
    }

    if (localStorage.getItem("count_AnimeJS") == null){
        count_AnimeJS = 0;
    }
    else {
        count_AnimeJS = parseInt(localStorage.getItem("count_AnimeJS"));
    }

    if (localStorage.getItem("d1_150_AnimeJS") === null){
        localStorage.setItem("d1_150_AnimeJS", JSON.stringify(d1_150_AnimeJS));
    } 
    else {
        d1_150_AnimeJS = localStorage.getItem("d1_150_AnimeJS");
        d1_150_AnimeJS = (d1_150_AnimeJS) ? JSON.parse(d1_150_AnimeJS) : [];
    }

    if (localStorage.getItem("d2_150_AnimeJS") === null){
        localStorage.setItem("d2_150_AnimeJS", JSON.stringify(d2_150_AnimeJS));
    } 
    else {
        d2_150_AnimeJS = localStorage.getItem("d2_150_AnimeJS");
        d2_150_AnimeJS = (d2_150_AnimeJS) ? JSON.parse(d2_150_AnimeJS) : [];
    }

    if (localStorage.getItem("d1_400_AnimeJS") === null){
        localStorage.setItem("d1_400_AnimeJS", JSON.stringify(d1_400_AnimeJS));
    } 
    else {
        d1_400_AnimeJS = localStorage.getItem("d1_400_AnimeJS");
        d1_400_AnimeJS = (d1_400_AnimeJS) ? JSON.parse(d1_400_AnimeJS) : [];
    }

    if (localStorage.getItem("d2_400_AnimeJS") === null){
        localStorage.setItem("d2_400_AnimeJS", JSON.stringify(d2_400_AnimeJS));
    } 
    else {
        d2_400_AnimeJS = localStorage.getItem("d2_400_AnimeJS");
        d2_400_AnimeJS = (d2_400_AnimeJS) ? JSON.parse(d2_400_AnimeJS) : [];
    }

    if (localStorage.getItem("d1_1000_AnimeJS") === null){
        localStorage.setItem("d1_1000_AnimeJS", JSON.stringify(d1_1000_AnimeJS));
    } 
    else {
        d1_1000_AnimeJS = localStorage.getItem("d1_1000_AnimeJS");
        d1_1000_AnimeJS = (d1_1000_AnimeJS) ? JSON.parse(d1_1000_AnimeJS) : [];
    }

    if (localStorage.getItem("d2_1000_AnimeJS") === null){
        localStorage.setItem("d2_1000_AnimeJS", JSON.stringify(d2_1000_AnimeJS));
    } 
    else {
        d2_1000_AnimeJS = localStorage.getItem("d2_1000_AnimeJS");
        d2_1000_AnimeJS = (d2_1000_AnimeJS) ? JSON.parse(d2_1000_AnimeJS) : [];
    }


    console.log("Run: " + runScript_AnimeJS);
    
    // The if-statment checks if the script should run and what it should do.
    if (runScript_AnimeJS == "true"){
        console.log("Loop: " + count_AnimeJS);

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
            if (count_AnimeJS < loops){

                /* Start and stop values are fetched from the application (see script.js) 
                * and are calculated to a elapsed time. Then saved to a d1_150_AnimeJS array for
                * each measurement needed.
                */

                elapsedTime = parseInt(localStorage.getItem("e1_150")) - parseInt(localStorage.getItem("s_150"));
                d1_150_AnimeJS.push(Math.round(elapsedTime));
                elapsedTime = parseInt(localStorage.getItem("e2_150")) - parseInt(localStorage.getItem("s_150"));
                d2_150_AnimeJS.push(Math.round(elapsedTime));

                elapsedTime = parseInt(localStorage.getItem("e1_400")) - parseInt(localStorage.getItem("s_400"));
                d1_400_AnimeJS.push(Math.round(elapsedTime));
                elapsedTime = parseInt(localStorage.getItem("e2_400")) - parseInt(localStorage.getItem("s_400"));
                d2_400_AnimeJS.push(Math.round(elapsedTime));

                elapsedTime = parseInt(localStorage.getItem("e1_1000")) - parseInt(localStorage.getItem("s_1000"));
                d1_1000_AnimeJS.push(Math.round(elapsedTime));
                elapsedTime = parseInt(localStorage.getItem("e2_1000")) - parseInt(localStorage.getItem("s_1000"));
                d2_1000_AnimeJS.push(Math.round(elapsedTime));


                localStorage.setItem("d1_150_AnimeJS", JSON.stringify(d1_150_AnimeJS));
                localStorage.setItem("d2_150_AnimeJS", JSON.stringify(d2_150_AnimeJS));

                localStorage.setItem("d1_400_AnimeJS", JSON.stringify(d1_400_AnimeJS));
                localStorage.setItem("d2_400_AnimeJS", JSON.stringify(d2_400_AnimeJS));

                localStorage.setItem("d1_1000_AnimeJS", JSON.stringify(d1_1000_AnimeJS));
                localStorage.setItem("d2_1000_AnimeJS", JSON.stringify(d2_1000_AnimeJS));

                // Increse to the next click and reloads the site.
                localStorage.setItem("count_AnimeJS", count_AnimeJS + 1);
                window.location.reload();
            }
            else {
                // Makes the script stop at the next reload of the page.
                localStorage.setItem("runScript_AnimeJS", "false");
                window.location.reload();
            }
        });
    }
    else if (runScript_AnimeJS == "false"){
        console.log("D1 150: " + JSON.stringify(d1_150_AnimeJS));
        console.log("D2 150: " + JSON.stringify(d2_150_AnimeJS));

        console.log("D1 400: " + JSON.stringify(d1_400_AnimeJS));
        console.log("D2 400: " + JSON.stringify(d2_400_AnimeJS));

        console.log("D1 1000: " + JSON.stringify(d1_1000_AnimeJS));
        console.log("D2 1000: " + JSON.stringify(d2_1000_AnimeJS));

        // Adds the data to a sting and download it as a file.      
        str += "<h1>Exekverings tid (D1)</h1>";
        str += "<table><tr>";
        str += "<th>150</th>";
        str += "<th>400</th>";
        str += "<th>1000</th>";
        str += "</tr>";

        for(var i = 0; i < d1_150_AnimeJS.length; i += 1){
            str += "<tr>";
            str += "<td>" + d1_150_AnimeJS[i] + "</td>";
            str += "<td>" + d1_400_AnimeJS[i] + "</td>";
            str += "<td>" + d1_1000_AnimeJS[i] + "</td>";
            str += "</tr>";
        }
        str += "</table>";

        str += "<h1>Animation Duration (D2)</h1>";
        str += "<table><tr>";
        str += "<th>150</th>";
        str += "<th>400</th>";
        str += "<th>1000</th>";
        str += "</tr>";

        for(var i = 0; i < d2_150_AnimeJS.length; i += 1){
            str += "<tr>";
            str += "<td>" + d2_150_AnimeJS[i] + "</td>";
            str += "<td>" + d2_400_AnimeJS[i] + "</td>";
            str += "<td>" + d2_1000_AnimeJS[i] + "</td>";
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
            download("AnimeJS_Firefox.html", str);
        }
        else if (browser == "chrome"){
            download("AnimeJS_Chrome.html", str);
        }
        else if (browser == "safari"){
            download("AnimeJS_Safari.html", str);
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