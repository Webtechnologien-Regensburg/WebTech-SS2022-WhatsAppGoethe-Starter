/* eslint-env node */

import DatabaseImporter from "./lib/DatabaseImporter.js";
import LetterParser from "./lib/LetterParser.js";

let dbFile = process.argv[2],
    dataPath = process.argv[3];

function onLetterParsed(letter) {
    DatabaseImporter.importLetter(letter);
}

function onDatabaseReady() {
    LetterParser.setLetterParserListener(onLetterParsed);
    LetterParser.parseLettersFrom(dataPath);
}

DatabaseImporter.prepare(dbFile, onDatabaseReady);