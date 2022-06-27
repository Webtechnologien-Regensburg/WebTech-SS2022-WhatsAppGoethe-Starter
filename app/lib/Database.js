import sqlite3 from "sqlite3";

const DB_PATH = "";

var db;

function openDatabase(path, callback) {
    db = new sqlite3.Database(path, sqlite3.OPEN_READWRITE, function (error) {
        if (error === null) {
            console.log("Database connected successfully!");
            callback();
        } else {
            console.log("Error while opening SQL database from: " + path);
            console.log(error);
        }
    });
}

function runQuery(query, callback) {
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
    open(callback) {
        if(DB_PATH === "") {
            console.log("Error while opening SQL database. No database path set.");
            callback();
        } else {
            openDatabase(DB_PATH, callback);
        }
    }

    /* Hier Funktionalitäten der Datenbank einfügen */
}

export default new Database();
