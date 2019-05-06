$(document).ready(function(){
    var runScript;
    var count;
    var loops = 600;
    var d1_150 = [];
    var d2_150 = [];
    var d3_150 = [];
    var d4_150 = [];
    var d1_400 = [];
    var d2_400 = [];
    var d3_400 = [];
    var d4_400 = [];
    var d1_1000 = [];
    var d2_1000 = [];
    var d3_1000 = [];
    var d4_1000 = [];
    var str = "";
    var dataWindow;
    var hiddenElement;
    var event;
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    /* LocalStorage is used to save and fetch information to/from 
     * that the script needs when the window reloads and are othewise 
     * lost or overwritten by a declaration of variable.*/
    if (localStorage.getItem("Start") == null){
        localStorage.setItem("Start", Date.now());
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

    if (localStorage.getItem("d1_150") === null){
        localStorage.setItem("d1_150", JSON.stringify(d1_150));
    } 
    else {
        d1_150 = localStorage.getItem("d1_150");
        d1_150 = (d1_150) ? JSON.parse(d1_150) : [];
    }

    if (localStorage.getItem("d2_150") === null){
        localStorage.setItem("d2_150", JSON.stringify(d2_150));
    } 
    else {
        d2_150 = localStorage.getItem("d2_150");
        d2_150 = (d2_150) ? JSON.parse(d2_150) : [];
    }

    if (localStorage.getItem("d3_150") === null){
        localStorage.setItem("d3_150", JSON.stringify(d3_150));
    } 
    else {
        d3_150 = localStorage.getItem("d3_150");
        d3_150 = (d3_150) ? JSON.parse(d3_150) : [];
    }

    if (localStorage.getItem("d4_150") === null){
        localStorage.setItem("d4_150", JSON.stringify(d4_150));
    } 
    else {
        d4_150 = localStorage.getItem("d4_150");
        d4_150 = (d4_150) ? JSON.parse(d4_150) : [];
    }

    if (localStorage.getItem("d1_400") === null){
        localStorage.setItem("d1_400", JSON.stringify(d1_400));
    } 
    else {
        d1_400 = localStorage.getItem("d1_400");
        d1_400 = (d1_400) ? JSON.parse(d1_400) : [];
    }

    if (localStorage.getItem("d2_400") === null){
        localStorage.setItem("d2_400", JSON.stringify(d2_400));
    } 
    else {
        d2_400 = localStorage.getItem("d2_400");
        d2_400 = (d2_400) ? JSON.parse(d2_400) : [];
    }

    if (localStorage.getItem("d3_400") === null){
        localStorage.setItem("d3_400", JSON.stringify(d3_400));
    } 
    else {
        d3_400 = localStorage.getItem("d3_400");
        d3_400 = (d3_400) ? JSON.parse(d3_400) : [];
    }

    if (localStorage.getItem("d4_400") === null){
        localStorage.setItem("d4_400", JSON.stringify(d4_400));
    } 
    else {
        d4_400 = localStorage.getItem("d4_400");
        d4_400 = (d4_400) ? JSON.parse(d4_400) : [];
    }

    if (localStorage.getItem("d1_1000") === null){
        localStorage.setItem("d1_1000", JSON.stringify(d1_1000));
    } 
    else {
        d1_1000 = localStorage.getItem("d1_1000");
        d1_1000 = (d1_1000) ? JSON.parse(d1_1000) : [];
    }

    if (localStorage.getItem("d2_1000") === null){
        localStorage.setItem("d2_1000", JSON.stringify(d2_1000));
    } 
    else {
        d2_1000 = localStorage.getItem("d2_1000");
        d2_1000 = (d2_1000) ? JSON.parse(d2_1000) : [];
    }

    if (localStorage.getItem("d3_1000") === null){
        localStorage.setItem("d3_1000", JSON.stringify(d3_1000));
    } 
    else {
        d3_1000 = localStorage.getItem("d3_1000");
        d3_1000 = (d3_1000) ? JSON.parse(d3_1000) : [];
    }

    if (localStorage.getItem("d4_1000") === null){
        localStorage.setItem("d4_1000", JSON.stringify(d4_1000));
    } 
    else {
        d4_1000 = localStorage.getItem("d4_1000");
        d4_1000 = (d4_1000) ? JSON.parse(d4_1000) : [];
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
        sleep(6000).then(() => {

            /* The script only need to run X number of loops.
             * Number of loops is visable in the variable decalration. */
            if (count < loops){

                /* Start and stop values are fetched from the application (see script.js) 
                 * and are calculated to a elapsed time. Then saved to a d1_150 array for
                 * each measurement needed.
                 */

                elapsedTime = parseInt(localStorage.getItem("e1_150")) - parseInt(localStorage.getItem("s1_150"));
                d1_150.push(Math.round(elapsedTime));

                elapsedTime = parseInt(localStorage.getItem("e2_150")) - parseInt(localStorage.getItem("s2_150"));
                d2_150.push(Math.round(elapsedTime));

                elapsedTime = parseInt(localStorage.getItem("e3_150")) - parseInt(localStorage.getItem("s1_150"));
                d3_150.push(Math.round(elapsedTime));

                elapsedTime = parseInt(localStorage.getItem("e4_150")) - parseInt(localStorage.getItem("s2_150"));
                d4_150.push(Math.round(elapsedTime));

                localStorage.setItem("d1_150", JSON.stringify(d1_150));
                localStorage.setItem("d2_150", JSON.stringify(d2_150));
                localStorage.setItem("d3_150", JSON.stringify(d3_150));
                localStorage.setItem("d4_150", JSON.stringify(d4_150));


                elapsedTime = parseInt(localStorage.getItem("e1_400")) - parseInt(localStorage.getItem("s1_400"));
                d1_400.push(Math.round(elapsedTime));

                elapsedTime = parseInt(localStorage.getItem("e2_400")) - parseInt(localStorage.getItem("s2_400"));
                d2_400.push(Math.round(elapsedTime));

                elapsedTime = parseInt(localStorage.getItem("e3_400")) - parseInt(localStorage.getItem("s1_400"));
                d3_400.push(Math.round(elapsedTime));

                elapsedTime = parseInt(localStorage.getItem("e4_400")) - parseInt(localStorage.getItem("s2_400"));
                d4_400.push(Math.round(elapsedTime));

                localStorage.setItem("d1_400", JSON.stringify(d1_400));
                localStorage.setItem("d2_400", JSON.stringify(d2_400));
                localStorage.setItem("d3_400", JSON.stringify(d3_400));
                localStorage.setItem("d4_400", JSON.stringify(d4_400));


                elapsedTime = parseInt(localStorage.getItem("e1_1000")) - parseInt(localStorage.getItem("s1_1000"));
                d1_1000.push(Math.round(elapsedTime));

                elapsedTime = parseInt(localStorage.getItem("e2_1000")) - parseInt(localStorage.getItem("s2_1000"));
                d2_1000.push(Math.round(elapsedTime));

                elapsedTime = parseInt(localStorage.getItem("e3_1000")) - parseInt(localStorage.getItem("s1_1000"));
                d3_1000.push(Math.round(elapsedTime));

                elapsedTime = parseInt(localStorage.getItem("e4_1000")) - parseInt(localStorage.getItem("s2_1000"));
                d4_1000.push(Math.round(elapsedTime));

                localStorage.setItem("d1_1000", JSON.stringify(d1_1000));
                localStorage.setItem("d2_1000", JSON.stringify(d2_1000));
                localStorage.setItem("d3_1000", JSON.stringify(d3_1000));
                localStorage.setItem("d4_1000", JSON.stringify(d4_1000));


                // Increse to the next click and reloads the site.
                localStorage.setItem("Count", count + 1);
                window.location.reload();
            }
            else {
                localStorage.setItem("End", Date.now());

                // Makes the script stop at the next reload of the page.
                localStorage.setItem("RunScript", "false");
                window.location.reload();
            }
        });
    }
    else if (runScript == "false"){
        console.log(parseInt(localStorage.getItem("End")) - parseInt(localStorage.getItem("Start")));

        console.log("D1 150: " + JSON.stringify(d1_150));
        console.log("D2 150: " + JSON.stringify(d2_150));
        console.log("D3 150: " + JSON.stringify(d3_150));
        console.log("D4 150: " + JSON.stringify(d4_150));

        console.log("D1 400: " + JSON.stringify(d1_400));
        console.log("D2 400: " + JSON.stringify(d2_400));
        console.log("D3 400: " + JSON.stringify(d3_400));
        console.log("D4 400: " + JSON.stringify(d4_400));

        console.log("D1 1000: " + JSON.stringify(d1_1000));
        console.log("D2 1000: " + JSON.stringify(d2_1000));
        console.log("D3 1000: " + JSON.stringify(d3_1000));
        console.log("D4 1000: " + JSON.stringify(d4_1000));

        

        /* Due to different issues in all browser there 
         * needs to be two ways to save the d1_150 from the 
         * measuremnts. This is a check point to determend 
         * which browser that is used. */
        var ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),
            browser;

        if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
            browser = "msie";
        }
        else {
            browser = ua[1].toLowerCase();
        }

        // Saves the data according to the browser that is used. 
        if (browser == "safari"){

            // Adds the data to a sting and download it as a file.
            str += "D1 150";

            for(var i = 0; i < d1_150.length; i += 1){
                str += "\n";
                str += d1_150[i];
            }

            str += "\n\n\n";
            str += "D2 150";

            for(var i = 0; i < d2_150.length; i += 1){
                str += "\n";
                str += d2_150[i];
            }

            str += "\n\n\n";
            str += "D3 150";

            for(var i = 0; i < d3_150.length; i += 1){
                str += "\n";
                str += d3_150[i];
            }

            str += "\n\n\n";
            str += "D4 150";

            for(var i = 0; i < d4_150.length; i += 1){
                str += "\n";
                str += d4_150[i];
            }

            str += "\n\n\n";
            str += "D1 400";

            for(var i = 0; i < d1_400.length; i += 1){
                str += "\n";
                str += d1_400[i];
            }

            str += "\n\n\n";
            str += "D2 400";

            for(var i = 0; i < d2_400.length; i += 1){
                str += "\n";
                str += d2_400[i];
            }

            str += "\n\n\n";
            str += "D3 400";

            for(var i = 0; i < d3_400.length; i += 1){
                str += "\n";
                str += d3_400[i];
            }

            str += "\n\n\n";
            str += "D4 400";

            for(var i = 0; i < d4_400.length; i += 1){
                str += "\n";
                str += d4_400[i];
            }

            str += "\n\n\n";
            str += "D1 1000";

            for(var i = 0; i < d1_1000.length; i += 1){
                str += "\n";
                str += d1_1000[i];
            }

            str += "\n\n\n";
            str += "D2 1000";

            for(var i = 0; i < d2_1000.length; i += 1){
                str += "\n";
                str += d2_1000[i];
            }

            str += "\n\n\n";
            str += "D3 1000";

            for(var i = 0; i < d3_1000.length; i += 1){
                str += "\n";
                str += d3_1000[i];
            }

            str += "\n\n\n";
            str += "D4 1000";

            for(var i = 0; i < d4_1000.length; i += 1){
                str += "\n";
                str += d4_1000[i];
            }

            hiddenElement = document.createElement("a");
            hiddenElement.href = "data:attachment/text," + encodeURI(str);
            hiddenElement.target = "_blank";
            hiddenElement.download = "VelocityJS_Safari.txt";
            hiddenElement.click();
        }
        else {

            // Write out all data array on a blank seperat windows.
            str += "<table><tr><th>D1 150</th></tr>";
            for(var i = 0; i < d1_150.length; i += 1){
                str += "<tr>";
                str += "<td>" + d1_150[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);

            str = "";
            dataWindow = "";

            str += "<table><tr><th>D2 150</th></tr>";
            for(var i = 0; i < d2_150.length; i += 1){
                str += "<tr>";
                str += "<td>" + d2_150[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);

            str = "";
            dataWindow = "";

            str += "<table><tr><th>D3 150</th></tr>";
            for(var i = 0; i < d3_150.length; i += 1){
                str += "<tr>";
                str += "<td>" + d3_150[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);

            str = "";
            dataWindow = "";

            str += "<table><tr><th>D4 150</th></tr>";
            for(var i = 0; i < d4_150.length; i += 1){
                str += "<tr>";
                str += "<td>" + d4_150[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);

            str = "";
            dataWindow = "";

            str += "<table><tr><th>D1 400</th></tr>";
            for(var i = 0; i < d1_400.length; i += 1){
                str += "<tr>";
                str += "<td>" + d1_400[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);

            str = "";
            dataWindow = "";

            str += "<table><tr><th>D2 400</th></tr>";
            for(var i = 0; i < d2_400.length; i += 1){
                str += "<tr>";
                str += "<td>" + d2_400[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);

            str = "";
            dataWindow = "";

            str += "<table><tr><th>D3 400</th></tr>";
            for(var i = 0; i < d3_400.length; i += 1){
                str += "<tr>";
                str += "<td>" + d3_400[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);

            str = "";
            dataWindow = "";

            str += "<table><tr><th>D4 400</th></tr>";
            for(var i = 0; i < d4_400.length; i += 1){
                str += "<tr>";
                str += "<td>" + d4_400[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);

            str = "";
            dataWindow = "";
           
            str += "<table><tr><th>D1 1000</th></tr>";
            for(var i = 0; i < d1_1000.length; i += 1){
                str += "<tr>";
                str += "<td>" + d1_1000[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);

            str = "";
            dataWindow = "";

            str += "<table><tr><th>D2 1000</th></tr>";
            for(var i = 0; i < d2_1000.length; i += 1){
                str += "<tr>";
                str += "<td>" + d2_1000[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);

            str = "";
            dataWindow = "";

            str += "<table><tr><th>D3 1000</th></tr>";
            for(var i = 0; i < d3_1000.length; i += 1){
                str += "<tr>";
                str += "<td>" + d3_1000[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);

            str = "";
            dataWindow = "";

            str += "<table><tr><th>D4 1000</th></tr>";
            for(var i = 0; i < d4_1000.length; i += 1){
                str += "<tr>";
                str += "<td>" + d4_1000[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);
        } 
    }
});
  