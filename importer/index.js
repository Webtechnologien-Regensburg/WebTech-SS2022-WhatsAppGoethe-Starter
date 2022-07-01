import 'dotenv/config';
import DatabaseImporter from "./lib/DatabaseImporter.js";
import LetterParser from "./lib/LetterParser.js";

function onLetterParsed(letter) {
    DatabaseImporter.importLetter(letter);
}

function onDatabaseReady() {
    LetterParser.setLetterParserListener(onLetterParsed);
    LetterParser.parseLettersFrom(process.env.DATA_PATH);
}

DatabaseImporter.prepare(process.env.DB_FILE, onDatabaseReady);