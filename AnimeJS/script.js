/* Declared vaiables used in the script and the information variabel 
 * 'county' containing all the information of the Sweden countys and home page;
 * order: ID, Headline, Text, Image src, Image alt, Credits
 */
var svg;
var county;
var headline;
var text;
var img;
var imgText;
var previous;
var animation;
var tStart;
var tEnd;
var elapsedTime;
var countys = [
    [
        "Home", 
        "Sveriges 21 län", 
        "Sveriges 21 län ska inte blandas ihop med Sveriges 25 landskap. Länen har en politisk och administrativ ställning, vilket landskapen inte har. De flesta län har andra gränser än landskapen - länen innefattar ofta delar av flera landskap, vars vapen brukar ingå i länens vapen.<br><br>Varje län har en länsstyrelse - en statlig myndighet som ser till att regeringens och riksdagens beslut blir verklighet i länet. Länsstyrelsen ser till att kommunerna, företagen och människorna i länet följer vissa lagar och regler inom bland annat miljö, djur, jordbruk, jakt, fiske, byggnader, bostäder, säkerhet och jämnställdhet. Chef för länsstyrelsen är den regeringsutsedda landshövdingen. Staden som landshövdingen bor i kallas residensstad - namnet kommer från landshövdingens flådiga tjänstebostad länsresidenset. Länsstyrelsen har vanligtvis sitt huvudkontor i residensstaden.<br><br>Varje län har också en region - en enhet som styrs av folkvalda politiker. Dessa regioner kallades tidigare för landsting. Landstingen ansvarade, precis som regionerna gör idag, för samhällsfunktionerna på regional nivå. De skötte uppgifter som var dyra och gemensamma för länet och därför inte borde skötas av enskilda kommuner, vilket främst var hälso- och sjukvård, tandvård samt kollektivtrafik (i samarbete med kommunerna). Från och med slutet av 90-talet började Sveriges landsting få större regionalt självstyre. De tog över ansvaret för den regionala tillväxten och utvecklingen från främst länsstyrelserna, det vill säga fick mer makt över statens pengar, större självstyre över sina tidigare ansvarsområden men också över områden som tillväxt, infrastruktur, bostadsbyggen, miljö, kultur och näringsliv. Dessa landsting fick kalla sig regioner, och sedan den 1 januari 2019 har alla landsting i Sverige ombildats till regioner. Regionerna har vanligtvis sina huvudkontor i länens residensstäder.<br><br>Kommunerna inom länen styrs också av folkvalda poliker och ansvarar för samhällsfunktionerna på lokal nivå. Dessa är bland annat skolor, socialtjänst, äldreomsorg, renhållning, räddningstjänst, vatten, avlopp och bostäder. Ibland används dock begreppet 'kommunal verksamhet' om sådant som både kommuner och regioner utför.", 
        "", 
        "", 
        "Länk: https://www.varldenshaftigaste.se/topplistor/sveriges-21-lan/"
    ],[
        "SE-K", 
        "Blekinge", 
        "Blekinge län är Sveriges minsta län och innehåller minst antal kommuner (fem stycken) efter Gotland. Länet har samma gränser och samma vapen som landskapet Blekinge. År 2019 ombildades landstinget till Region Blekinge.",
        "images/Blekinge.svg",
        "Blekinges vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=29999025"
    ],[
        "SE-I", 
        "Gotland", 
        "Gotlands län består av hela Gotland och har också samma gränser som Gotlands enda kommun - Region Gotland. Kommunen kallades före 2011 för Gotlands kommun, och eftersom det var den enda kommunen i Gotlands län så behövdes inget landsting, utan kommunen beslutade i de frågor som i övriga län låg under landstinget. År 2011 fick kommunen utökat regionalt ansvar och döptes om till Region Gotland. Länsvapnet är samma som landskapsvapnet.", 
        "images/Dalarna.svg", 
        "Dalarnas vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=29999335"
    ],[
        "SE-X", 
        "Gävleborg", 
        "Gävleborgs län innefattar nästan hela Gästrikland och Hälsingland samt en liten del av Dalarna. Länsvapnet utgörs av de två förstnämndas vapen. År 2015 blev Gävleborgs läns landsting Region Gävleborg. ", 
        "images/Gävleborg.svg", 
        "Gävleborgs vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=29789461"
    ],[
        "SE-N", 
        "Halland", 
        "Hallands län omfattar nästan hela Halland samt mindre delar av Västra Götaland och Småland. Länsvapnet är samma som Hallands landskapsvapen. År 2011 bildades Region Halland.", 
        "images/Halland.svg", 
        "Hallands vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=30085972"
    ],[
        "SE-Z", 
        "Jämtland", 
        "Jämtlands län är det tredje största och näst mest glesbefolkade länet i Sverige. Det omfattar större delen av landskapen Jämtland och Härjedalen, delar av Ångermanland och Hälsingland, samt små bitar av Dalarna och Lappland. Länets vapen består av Jämtlands och Härjedalens landskapsvapen. År 2015 fick Jämtlands läns landsting (förutom ansvaret för bland annat länets enda sjukhus i Östersund) också ansvar för den regionala utvecklingen och ombildades till Region Jämtland Härjedalen.", 
        "images/Jämtland.svg", 
        "Jämtlands vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=30039242"
    ],[
        "SE-F", 
        "Jönköping", 
        "Jönköpings län utgörs av nordvästra Småland och sydöstra Västergötland. Istället för landskapens vapen utgörs länsvapnet av Jönköpings kommunvapen prydd av tre kronor. År 2015 bildades Region Jönköpings län.", 
        "images/Jönköping.svg", 
        "Jönköpings vapen", 
        "Av Lokal_Profil, CC BY-SA 2.5, https://commons.wikimedia.org/w/index.php?curid=2917546"
    ],[
        "SE-H", 
        "Kalmar", 
        "Kalmar län omfattar östra Småland och hela Öland. Som för de flesta av Sveriges län består länsvapnet av de ingående landskapens vapen. År 2019 bildades Region Kalmar län.", 
        "images/Kalmar.svg", 
        "Kalmars vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=30146303"
    ],[
        "SE-W", 
        "Dalarna", 
        "Dalarnas län, som fram till 1997 hette Kopparbergs län, sammanfaller nästan helt med Dalarna och har därför samma vapen som landskapet. År 2019 bildades Region Dalarna.", 
        "images/Dalarna.svg", 
        "Dalarnas vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=30084986"
    ],[
        "SE-G", 
        "Kronoberg", 
        "Kronobergs län utgörs av den sydvästra delen av Småland och har samma vapen som landskapet förutom att lejonet står på ett grönt så kallat treberg. Namnet Kronobergs län kommer från slottet Kronoberg som byggdes på 1400-talet utanför Vaxjö. År 2015 bildades Region Kronoberg.", 
        "images/Kronoberg.svg", 
        "Kronobergs vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=30146475"
    ],[
        "SE-BD", 
        "Norrbotten", 
        "Norrbottens län är Sveriges nordligaste, största och mest glesbefolkade län. Länet innefattar landskapet Norrbotten samt norra delen av landskapet Lappland. Länsvapnet innehåller dock Lapplands och Västerbottens landskapsvapen - efter att dåvarande Västerbotten år 1810 delats till Västerbottens och Norrbottens län och senare även landskap, dröjde det ända till 1995 innan Norrbotten fick ett eget landskapsvapen. Dock har Norrbottens länsvapen inte anpassats efter detta, utan innehåller alltså fortfarande Västerbottens landskapsvapen. Från och med 2017 tog Norrbottens läns landsting över ansvaret för den regionala tillväxten och utvecklingen från länsstyrelsen och blev Region Norrbotten. ", 
        "images/Norrbotten.svg", 
        "Norrbottens vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=30088047"
    ],[
        "SE-E", 
        "Östergötland", 
        "Östergötlands län består av nästan hela Östergötland (och har samma vapen) plus den nordöstra delen av Småland samt en liten bit av Närke. År 2015 ombildades Östergötlands läns landsting till Region Östergötland.", 
        "images/Östergötland.svg", 
        "Östergötlands vapen", 
        "Av Leonid 2 - This vector image includes elements that have been taken or adapted from this:  Coat of Arms of Krasnasielski, Belarus.svg (av Leonid 2)., CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=29448463"
    ],[
        "SE-T", 
        "Örebro", 
        "Örebro län omfattar nästan hela Närke, västra delen av Västmanland, delar av Värmland och Västergötland samt små bitar av Dalarna och Östergötland. Länsvapnet består av Närkes, Västmanlands och Värmlands landskapsvapen. År 2015 blev Örebro läns landsting Region Örebro.", 
        "images/Örebro.svg", 
        "Örebros vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=30086365"
    ],[
        "SE-D", 
        "Södermanland", 
        "Södermanlands län innefattar resten av Södermanland samt en liten bit av Uppland respektive Närke. Både Södermanlands län och Uppsala län använder sina respektive landskaps vapen, trots att Stockholms län täcker stora delar av landskapen. År 2019 ombildades landstinget till Region Sörmland. Landshövdingen, länsstyrelsen och regionens huvudkontor residerar i Nyköping, trots att Eskilstuna är mer än dubbelt så stort.", 
        "images/Södermanland.svg", 
        "Södermanlands vapen", 
        "Av Leonid 2 - This vector image includes elements that have been taken or adapted from this:  Coat of Arms of Krasnasielski, Belarus.svg (av Leonid 2)., CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=29770863"
    ],[
        "SE-M", 
        "Skåne", 
        "Skåne är Sveriges näst folktätaste län och består av hela Skåne och en liten bit av Halland. Länet, som är det sydligaste i landet, bildades 1997 genom en sammanslagning av Kristianstads och Malmöhus län. Länsstyrelsen har kontor i båda de tidigare residensstäderna Kristianstad och Malmö. Länsvapnet är likadant som Skånes landskapsvapen, förutom att färgerna är tvärtom. År 1999 bildades Region Skåne.", 
        "images/Skåne.svg", 
        "Skånes vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=30199482"
    ],[
        "SE-AB", 
        "Stockholm", 
        "Stockholms län är föga förvånande Sveriges folkrikaste och folktätaste län. Här bor en fjärdedel av alla svenskar! Länet består av sydöstra Uppland och östra Södermanland. Länsvapnet utgörs av Upplands och Södermanlands landskapsvapen, samt Stockholms kommun(stads)vapen. Stockholms läns landsting blev 2019 Region Stockholm. Regionen har samma logotyp som landstinget hade - en logotyp som torde vara välbekant för många.", 
        "images/Stockholm.svg", 
        "Stockholms vapen", 
        "Av Leonid 2 - This vector image includes elements that have been taken or adapted from this:  Stockholm vapen bra.svg (av Koyos).Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=30199587"
    ],[
        "SE-C", 
        "Uppsala", 
        "Uppsala län innefattar nordvästra Uppland och en pytteliten bit av Gästrikland. Vapnet är samma som Upplands landskapsvapen. Vid årsskiftet till 2017 fick även Uppsala läns landsting ett utökat regionalt ansvar och ombildades till Region Uppsala.", 
        "images/Uppland.svg", 
        "Upplands vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=30085251"
    ],[
        "SE-AC", 
        "Västerbotten", 
        "Västerbottens län är Sveriges näst nordligaste och näst största län. Det består av Västerbotten, södra Lappland, en bit av Ångermanland samt en liten bit av Jämtland. Jämtlands landskapsvapen ingår dock inte i länsvapnet. År 2019 bildades Region Västerbotten.", 
        "images/Västerbotten.svg", 
        "Västerbottens vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=29970101"
    ],[
        "SE-O", 
        "Västra Götaland", 
        "Västra Götalands län är Sveriges nyaste län. Det bildades 1998 genom att man slog ihop Göteborgs och Bohus län, Älvsborgs län och nästan hela Skaraborgs län. Västra Götalands län är också Sveriges näst folkrikaste län, samt det län med flest kommuner (49 stycken). Det innefattar hela landskapet Bohuslän, större delarna av Dalsland och Västergötland samt små delar av Värmland och Halland. Länsvapnet består av Bohusläns, Dalslands och Västergötlands landskapsvapen, samt Göteborgs kommun(stads)vapen. Sedan sammanslagningen har länsstyrelsen kontor i flera städer. Landstinget har uttökade uppgifter och heter sedan 2011 Västra Götalandsregionen.", 
        "images/Västra_Götaland.svg", 
        "Västra Götalands vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=30146385"
    ],[
        "SE-S", 
        "Värmland", 
        "Värmlands län består av nästan hela Värmland och har samma vapen som landskapet. Även två mindre områden i Dalarna och Dalsland tillhör länet. År 2019 bildades Region Värmland.", 
        "images/Värmland.svg", 
        "Värmlands vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=29897546"
    ],[
        "SE-U", 
        "Västmanland", 
        "Västmanlands län omfattar östra halvan av Västmanland, delar av Södermanland och Närke samt små bitar av Dalarna och Gästrikland. Länsvapnet är detsamma som Västmanlands landskapsvapen, trots att gränserna är så olika. År 2017 tog landstinget över ansvaret för den regionala utvecklingen och bytte namn till Region Västmanland. ", 
        "images/Västmanland.svg", 
        "Västmanlands vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=29999697"
    ],[
        "SE-Y", 
        "Västernorrland", 
        "Västernorrlands län ligger namnet till trots i östra Sverige. Namnet kommer från att området kring nuvarande landskapet Österbotten i Finland kallades Östernorrland när Finland var svenskt (precis som Västerbotten låg väster om det historiska landskapet Österbotten, som var mycket större än det nuvarande). Västernorrlands län består av hela Medelpad, större delen av Ångermanland samt bitar av Jämtland och Hälsingland. Länsvapnet består av Jämtlands och Medelpads landskapsvapen. År 2017 tog landstinget över det regionala utvecklingsansvaret från länsstyrelsen, och året därpå bytte de namn till Region Västernorrland. ", 
        "images/Västernorrland.svg", 
        "Västernorrlands vapen", 
        "Av Leonid 2 - Eget arbete, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=29969980"
    ]
];

// LocalStorage is used to keep track on which county the user have been on.
if(localStorage.getItem("County") === null){
    localStorage.setItem("County", "Home")
};

// Writes out the homepage information at start up of the application.
function homePage(){
    headline = document.getElementById("headline");
    text = document.getElementById("text");
    img = document.getElementById("img");
    imgText = document.getElementById("imgText");

    headline.innerHTML = countys[0][1];
    text.innerHTML = countys[0][2];
    img.src = countys[0][3];
    img.alt = countys[0][4];
    imgText.innerHTML = countys[0][5];
}

/* When all HTML-elements is loaded to the DOM, the script saves all 
 * the path-elements form the SVG map to an array and gets a event listner 
 * added, which is connected to the function runAnimation() if one path-element 
 * is clicked on. */
document.addEventListener("DOMContentLoaded", function(){
    svg = Array.from(document.querySelectorAll('svg path'));

    svg.forEach(function(path) {
        path.addEventListener("click", runAnimation);
     });

},false);

/* Activates when a click-event is triggerd, which takes in the object 
 * the user has clicked on and uses it to know which information
 * the information windows should show.
 */
function runAnimation(click){
    county = click.target.id;
    content = document.getElementById("content");
    headline = document.getElementById("headline");
    text = document.getElementById("text");
    img = document.getElementById("img");
    imgText = document.getElementById("imgText");
    previous = localStorage.getItem("County");

    /* Colors the chosen county to red and 
     * color county back to black if home-button is chosen.*/
    if (county == "Home"){
        document.getElementById(previous).style.fill = "black";
        document.getElementById(county).style.fill = "black";
    } 
    else {
        document.getElementById(previous).style.fill = "black";
        document.getElementById(county).style.fill = "#c50101";
    };

    // Start clock for the measurement script.
    tStart = performance.now();

    /**/
    animation = anime.timeline({
        targets: content,
        duration: 600,
        easing: 'linear'
    }).add({
        translateY: -900,
    }).add({
        update: function(anim) {

            // Adds the chosen countys information to the information window.
            for(var i = 0; i < countys.length; i++){
                if (countys[i][0] == county){
                    headline.innerHTML = countys[i][1];
                    text.innerHTML = countys[i][2];
                    img.src = countys[i][3];
                    img.alt = countys[i][4];
                    imgText.innerHTML = countys[i][5];
                }
            };
        }
    }).add({
        translateY: 0,
    });

    animation.finished.then(function() {
        // End clock for the measurement script and calculation of the elapsed time.
        tEnd = performance.now();
        elapsedTime = tEnd - tStart;

        // Measurement value is saved to LocalStorage.
        localStorage.setItem("ElapsedTime", elapsedTime);
        console.log("Time: " + elapsedTime + " ms");
    });

    // The users current location county is saved to LocalStorage.
    localStorage.setItem("County", county);
};