
const URLHost = "http://3.14.27.129:8080/questionnaire";
/**
 * Descarga un archivo de excel de extensión XSL
 * @param {Array} questions - Array de objetos de preguntas 
 * @param {String} nameFile - Nombre del archivo a generar
 */
export function generateFileAsExcel(questions, nameFile) {

    const URL = `${URLHost}/document-xls`

    fetch(URL, {
        method: "POST",
        body: JSON.stringify(questions),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${nameFile}.xls`;
            document.body.appendChild(a);
            a.click();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

/**
 * Descarga un archivo de excel de extensión CSV
 * @param {Array} questions - Array de objetos de preguntas 
 * @param {String} nameFile - Nombre del archivo a generar
 */
export function generateFileAsCSV(questions, nameFile) {

    const URL = `${URLHost}/document-csv`

    fetch(URL, {
        method: "POST",
        body: JSON.stringify(questions),
        headers: { "Content-type": "application/json; charset=utf-8" },
    })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${nameFile}.csv`;
            document.body.appendChild(a);
            a.click();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}