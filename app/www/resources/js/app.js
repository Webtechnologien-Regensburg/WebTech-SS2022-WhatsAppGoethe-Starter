/* Hier ist der Client-seitige Einstiegspunkt Ihrer Anwendung*/

import FetchHelper from "./http/FetchHelper.js";

const API_URL = "http://localhost:8080/";

function init() {
    console.log("Whats-App-Goethe Client started.");

    // Test-Aufruf für Server-Client-Verbindung, bitte vor Abgabe entfernen!
    var data = {text:"Hello World"};
    FetchHelper.makePostRequest(API_URL + "test", data, function(result) {
        console.log(result);
    });
}

init();
