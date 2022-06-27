/* eslint-env node */

import fs from "fs";
import path from "path";

let skippedFiles;

function createLetterFromFile(filePath, callback) {
    let fileContent = fs.readFileSync(filePath, { encoding: "utf8" }),
        letter = Letter.fromJSON(fileContent);
    callback(letter);
}

class Letter {

    constructor(from, to, date, place, text) {
        this.from = from;
        this.to = to;
        this.date = date;
        this.place = place;
        this.text = text;
        Object.freeze(this);
    }

    static fromJSON(json) {
        let jsonObject = JSON.parse(json),
            from = jsonObject.from,
            to = jsonObject.to,
            date = jsonObject.date,
            place = jsonObject.place,
            text = jsonObject.text;
        return new Letter(from, to, date, place, text);
    }

}

class LetterParser {

    constructor() {
        this.filters = [];
    }

    setLetterParserListener(callback) {
        this.letterParserListener = callback;
    }

    parseLettersFrom(dataPath) {
        let files = fs.readdirSync(dataPath);
        skippedFiles = 0;
        for (let i = 0; i < files.length; i++) {
            let filePath = path.join(dataPath, files[i]);
            console.log(`Parsing letter ... ${Math.floor((i/files.length) * 100)}% (Skipped ${skippedFiles}/${i+1} files)`);
            try {
                createLetterFromFile(filePath, this.letterParserListener);
            } catch (error) {
                console.log(`Error while importing letter from  ${filePath}`);
                skippedFiles++;
            }
        }
    }

}

export default new LetterParser();