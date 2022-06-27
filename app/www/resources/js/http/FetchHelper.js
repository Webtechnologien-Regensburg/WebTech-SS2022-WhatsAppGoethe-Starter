// Hilfsklasse zum Durchführen von HTTP-Anfragen über die Fetch-API
class FetchHelper {
    /**
     * Führt eine POST-HTTP-Anfrage aus und übergibt die Serverantwort als Parameter an die übergebene Callback-Methode.
     *
     * Parameter:
     *   url: Ziel der Anfrage
     *   data: JSON-/Javascript-Objekt, welches an den Server übermittelt werden soll
     *   callback: Methode, der nach erfolgreicher Anfrage die Antwort des Servers übergeben werden soll
     *
     * Beispiel:
     *   data = {'text': "Hello World"};
     *
     *   FetchHelper.makeRequest(API_URL, data, function(result) {
     *      console.log(result); // Ausgabe der vom Server erhaltenen Antwort
     *   });
     */
    static async makePostRequest(url, data, callback) {
        let response,
            result,
            options = {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            };

        response = await fetch(url, options);
        result = await response.json();
        callback(result);
    }

    /**
     * Führt eine GET-HTTP-Anfrage aus und übergibt die Serverantwort als Parameter an die übergebene Callback-Methode.
     *
     * Parameter:
     *   url: Ziel der Anfrage
     *   callback: Methode, der nach erfolgreicher Anfrage die Antwort des Servers übergeben werden soll
     *
     * Beispiel:
     *   FetchHelper.makeRequest(API_URL, function(result) {
     *      console.log(result); // Ausgabe der vom Server erhaltenen Antwort
     *   });
     */
    static async makeGetRequest(url, callback) {
        let response,
            result,
            options = {
                method: "GET"
            };

        response = await fetch(url, options);
        result = await response.json();
        callback(result);
    }
}

export default FetchHelper;
