
const URLHost = "http://localhost:8080/easy-exam/data"

export function getData(fileToSend) {

    const formData = new FormData();
    formData.append('file', fileToSend)

    fetch(URLHost + "/people",{
        method: "POST",
        body: formData
    })
        .then(response => console.log(response))

}