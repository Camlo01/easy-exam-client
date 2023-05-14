import { useState, useEffect } from "react";
import "./Body.css"
import FormQuestion from "./Form";
import behavior from "./generateButtonsBehavior";

export default function Body() {

    const [consecutive, setConsecutive] = useState(1)
    const [questions, setQuestions] = useState([])
    const [fileName, setFileName] = useState("")

    useEffect(() => {
    }, [])

    window.onbeforeunload = function () {
        if (questions.length >= 1) {
            return ("Si recargas la página se perderán las preguntas que has creado")
        }
    }
    window.addEventListener("unload", function () {
        if (questions.length >= 1) {
            return ("Si recargas la página se perderán las preguntas que has creado")
        }
    });

    function deleteQuestion(id) {
        setQuestions(questions.filter(q => q.id !== id))
    }

    function addQuestion(newQuestion) {
        const newId = consecutive + 1;
        setConsecutive(newId)
        newQuestion.setId(newId)
        setQuestions([...questions, newQuestion])
    }


    function clearQuestions() {
        setQuestions([])
    }

    function exportFile(extension) {
        if (questions.length < 1) {
            alert("Crea al menos una pregunta")
        } else if (fileName.length < 1) {
            alert("Nombra el archivo")
        } else {
            behavior(extension, questions, fileName)
            // clearQuestions()
            // document.getElementById("input-to-clear").value = "";
            // alert("Correcto")
        }

    }

    function displayQuestions() {
        if (questions.length === 0) {
            return (
                <>
                    <h2> <b> Encuentra tus preguntas </b></h2>
                    <p>En este apartado encontrarás las preguntas del examen que vas a Generar</p>
                </>
            )
        }

        return questions.map((question, i) => (
            <div key={i}>
                <hr />
                <br />
                <p>Pregunta #{i + 1}</p>
                <br />
                <p>Tipo: {question.questionType ?? "UNDEFINED"}</p>
                <p>Pregunta: {question.questionText ?? "UNDEFINED"}</p>
                <button onClick={() => deleteQuestion(question.id ?? 99)}>Eliminar</button>
                <br />
                <br />
            </div>
        ))
    }
    return (
        <>
            <div>
                <FormQuestion addQuestion={addQuestion} />

                {displayQuestions()}
                <br />
                <div className="body-botton">
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <p>Escribe el nombre de como deseas llamar tu archivo: </p>
                        <br />
                        <input id="input-to-clear"
                            placeholder="Nombre del archivo"
                            type="text" onChange={(e) => { setFileName(e.target.value); }} />
                        <br />
                        <br />
                        <p><b>Descarga tu examente</b> en el formato deseado</p>
                        <button type="submit" onClick={() => exportFile("XLS")}> Generar Excel</button>
                        <button type="submit" onClick={() => exportFile("CSV")}>Generar CSV</button>
                        <br />
                        <br />
                        <button type="submit" onClick={() => clearQuestions()}>Limpiar preguntas</button>
                    </form>
                </div>
            </div >
        </>
    )

}
