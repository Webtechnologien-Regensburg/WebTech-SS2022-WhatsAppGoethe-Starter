import RemoteSQLiteDatabase from './db/RemoteSQLiteDatabase.js';

function init() {
    console.log("Whats-App-Goethe Client started."); // eslint-disable-line no-console
    // Test-Aufruf für Server-Client-Verbindung, bitte vor Abgabe entfernen!
    testDatabaseConnection();
}

async function testDatabaseConnection() {
    let query, response, db;
    // Verbindung zur Datenbank aufbauen (Programm/Server muss vorher  "npm start" gestartet worden sein)
    db = new RemoteSQLiteDatabase();
    db.connect();

    // Gibt einen zufälligen Eintrag aus der Demo-Datenbank zurück
    query = "SELECT * from quote ORDER BY RANDOM() LIMIT 1";
    response = await db.runQuery(query);
    console.log(`Result for "${query}"`); // eslint-disable-line no-console
    console.log(response.resultSet); // eslint-disable-line no-console

}

init();
