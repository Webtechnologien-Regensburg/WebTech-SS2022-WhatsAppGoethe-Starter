import 'dotenv/config';
import express from 'express';
import Logger from './lib/Logger.js';
import Database from './lib/Database.js';

let app;

async function initDatabase() {
    await Database.open(process.env.DB_FILE);
    return;
}

function startExpress() {
    app = express();
    app.use(express.static(process.env.APP_DIR));
    app.use(express.json());
    app.post("/database", async (request, response) => {
        try {
            let result = await Database.runQuery(request.body);
            response.send(result);
        } catch (error) {
            response.send(error);
        }
    });
    app.listen(process.env.PORT);
}

// Startup
(async function () {
    // TODO Erstellte und befüllte Datenbank-Datei als database.sqlite im Projektordner ablegen
    Logger.enable();
    await initDatabase();
    startExpress();
}());