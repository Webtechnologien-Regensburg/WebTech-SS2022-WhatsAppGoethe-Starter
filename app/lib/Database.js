import sqlite3 from "sqlite3";

const DB_PATH = "../importer/db.sqlite";

var db;

function openDatabase(path) {
    return new Promise((resolve, reject) => {
        db = new sqlite3.Database(path, sqlite3.OPEN_READWRITE, (error) => {
            if (error === null) {
                console.log("Database connected successfully!");
                resolve();
            } else {
                console.error(error);
                reject(new Error("Error while opening SQL database from: " + path));
            }
        });
    });
  
}

async function runQuery(query, callback) {
    db.all(query, function (error, rows) {
        if (error === null) {
            callback(rows);
        } else {
            console.log("Error while executing SQL query: " + query);
            console.log(error);
            callback(null);
        }
    });
}

class Database {

    open() {
        return new Promise((resolve, reject) => {
            if (DB_PATH === "") {
                reject(new Error("Empty database path: Could not open SQLite database"));
            } else {
                openDatabase(DB_PATH).then(() => {
                    resolve();
                });
            }
        });
    }

    /* Hier Funktionalitäten der Datenbank einfügen */
}

export default new Database();
