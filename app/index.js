import express from "express";
import Database from "./lib/Database.js";

const HTTP_PORT = 8080;

var app;

function initExpress() {
    app = express();
    app.use(express.static("www"));
    app.use(express.json());

    // Test-Route für Server-Client-Verbindung (siehe oben), bitte vor Abgabe entfernen!
    app.post("/test", onTestRequest);

    app.listen(HTTP_PORT, function () {
        console.log("Whats-App-Goethe Server listening on Port " + HTTP_PORT);
    });
}

function onTestRequest(request, response) {
    console.log(request.body);

    let msg = {
        text: "It Works",
    };

    response.status(200).send(JSON.stringify(msg));
}

async function initApplication() {
    try {
        await Database.open();
        initExpress();
    } catch (error) {
        console.error(error);
    }
}

initApplication();