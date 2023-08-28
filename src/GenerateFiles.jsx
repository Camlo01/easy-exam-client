
const URLHost = "http://3.14.27.129:8080/easy-exam/questionnaire";
/**
 * Descarga un archivo de excel de extensión XSL
 * @param {Array} questions - Array de objetos de preguntas 
 * @param {String} fileName - Nombre del archivo a generar
 */
export function generateFileAsExcel(questions, fileName) {

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
            a.download = `${fileName}.xls`;
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
 * @param {String} fileName - Nombre del archivo a generar
 */
export function generateFileAsCSV(questions, fileName) {

    let statusCode;
    const URL = `${URLHost}/document-csv/${fileName}`

    fetch(URL, {
        method: "POST",
        body: JSON.stringify(questions),
        headers: { "Content-type": "application/json; charset=utf-8" },
    })
        .then(response => {
            statusCode = response.status;
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${fileName}.csv`;
            document.body.appendChild(a);
            a.click();``
            setTimeout(() => {
                showDownloadStatus(statusCode);
            }, 500);
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage("Hubo un problema! intenta nuevamente nuevamente y reporta al administrador")
        });
}

/**
 * Method in charge on show the status of the download
 * @param {int} statusCode 
 */
function showDownloadStatus(statusCode) {
    if (statusCode == 200) {
        showMessage('Se descargó el examen correctamente')
    } else {
        showMessage("Hubo un problema! intenta nuevamente nuevamente y reporta al administrador")
    }
}

/**
 * Fuction in charge to show a message in an alert
 * @param {String} message 
 */
function showMessage(message) {
    alert(message)
}
