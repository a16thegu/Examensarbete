$(document).ready(function(){
    var runScript;
    var count;
    var loops = 2;
    var data = [];
    var dataTwo = [];
    var dataThree = [];
    var dataFour = [];
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

    if (localStorage.getItem("DataTwo") === null){
        localStorage.setItem("DataTwo", JSON.stringify(dataTwo));
    } 
    else {
        dataTwo = localStorage.getItem("DataTwo");
        dataTwo = (dataTwo) ? JSON.parse(dataTwo) : [];
    }

    if (localStorage.getItem("DataThree") === null){
        localStorage.setItem("DataThree", JSON.stringify(dataThree));
    } 
    else {
        dataThree = localStorage.getItem("DataThree");
        dataThree = (dataThree) ? JSON.parse(dataThree) : [];
    }

    if (localStorage.getItem("DataFour") === null){
        localStorage.setItem("DataFour", JSON.stringify(dataFour));
    } 
    else {
        dataFour = localStorage.getItem("DataFour");
        dataFour = (dataFour) ? JSON.parse(dataFour) : [];
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

                /* Start and stop values are fetched from the application (see script.js) 
                 * and are calculated to a elapsed time. Then saved to a data array for
                 * each measurement needed.
                 */

                elapsedTime = parseInt(localStorage.getItem("oneE")) - parseInt(localStorage.getItem("oneS"));
                data.push(elapsedTime);

                elapsedTime = parseInt(localStorage.getItem("twoE")) - parseInt(localStorage.getItem("twoS"));
                dataTwo.push(elapsedTime);

                elapsedTime = parseInt(localStorage.getItem("threeE")) - parseInt(localStorage.getItem("oneS"));
                dataThree.push(elapsedTime);

                elapsedTime = parseInt(localStorage.getItem("fourE")) - parseInt(localStorage.getItem("twoS"));
                dataFour.push(elapsedTime);

                localStorage.setItem("Data", JSON.stringify(data));
                localStorage.setItem("DataTwo", JSON.stringify(dataTwo));
                localStorage.setItem("DataThree", JSON.stringify(dataThree));
                localStorage.setItem("DataFour", JSON.stringify(dataFour));

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
        console.log("Code 1: " + JSON.stringify(data));
        console.log("Code 2: " + JSON.stringify(dataTwo));
        console.log("Ani 1: " + JSON.stringify(dataThree));
        console.log("Ani 2: " + JSON.stringify(dataFour));

        /* Due to different issues in all browser there 
         * needs to be two ways to save the data from the 
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

            // Adds the data to a sting and downloads a file with the data.
            str += "Code 1";

            for(var i = 0; i < data.length; i += 1){
                str += "\n";
                str += data[i];
            }

            str += "\n";
            str += "Code 2";

            for(var i = 0; i < dataTwo.length; i += 1){
                str += "\n";
                str += dataTwo[i];
            }

            str += "\n";
            str += "Ani 1";

            for(var i = 0; i < dataThree.length; i += 1){
                str += "\n";
                str += dataThree[i];
            }

            str += "\n";
            str += "Ani 2";

            for(var i = 0; i < dataFour.length; i += 1){
                str += "\n";
                str += dataFour[i];
            }

            hiddenElement = document.createElement("a");
            hiddenElement.href = "data:attachment/text," + encodeURI(str);
            hiddenElement.target = "_blank";
            hiddenElement.download = "jQuery_Safari.txt";
            hiddenElement.click();
        }
        else {

            // Write out the data array on a blank window.
            str += "<table><tr><th>Code 1</th></tr>";
            for(var i = 0; i < data.length; i += 1){
                str += "<tr>";
                str += "<td>" + data[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);

            str = "";
            dataWindow = "";

            // Write out the data array on a blank window.
            str += "<table><tr><th>Code 2</th></tr>";
            for(var i = 0; i < dataTwo.length; i += 1){
                str += "<tr>";
                str += "<td>" + dataTwo[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);

            str = "";
            dataWindow = "";

            // Write out the data array on a blank window.
            str += "<table><tr><th>Ani 1</th></tr>";
            for(var i = 0; i < dataThree.length; i += 1){
                str += "<tr>";
                str += "<td>" + dataThree[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);

            str = "";
            dataWindow = "";


            // Write out the data array on a blank window.
            str += "<table><tr><th>Ani 2</th></tr>";
            for(var i = 0; i < dataFour.length; i += 1){
                str += "<tr>";
                str += "<td>" + dataFour[i] + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            dataWindow = window.open("about:blank", "", "_blank");
            dataWindow.document.write(str);
        } 
    }
});
  