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

function runQuery(query) {
    return new Promise((resolve, reject) => {
        db.all(query, (error, rows) => {
            if (error === null) {
                resolve(rows);
            } else {
                console.error(error);
                reject(new Error("Error while executing SQL query: " + query));
            }
        });
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
