import { useState, useEffect } from "react";
import "./Body.css"
import FormQuestion from "./Form";
import behavior from "./generateButtonsBehavior";
import ShowQuestions from './displayQuestions/ShowQuestions'

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

    /**
     * Method in charge of delete questions of the array
     * @param {int} id of question to delete 
     */
    function deleteQuestion(id) {
        setQuestions(questions.filter(q => q.id !== id))
    }

    /**
     * Method in charge of add questions to the array
     * @param {Object} question 
     */
    function addQuestion(question) {
        const newId = consecutive + 1;
        setConsecutive(newId)
        question.setId(newId)
        setQuestions([...questions, question])
    }

    /**
     * Clear the array of questions
     */
    function clearQuestions() {
        setQuestions([])
    }

    /**
     * Method in charge of exporting the question array to obtain the file in the desired format
     * @param {String} extension ( XLS or CSV)
     */
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

    return (
        <>
            <div>
                {/* Component with form for creating questions */}
                <FormQuestion addQuestion={addQuestion} />

                {/* Component that renders all questions */}
                <ShowQuestions questions={questions} deleteQuestion={deleteQuestion} />

                {/* AS */}
                <br />
                <div className="body-botton">
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <p style={{ fontSize: "1.6rem" }}>Nombra tu archivo: </p>
                        <br />
                        <input id="input-to-clear"
                            placeholder="Nombre del archivo"
                            type="text" onChange={(e) => { setFileName(e.target.value); }} />
                        <br />
                        <br />
                        <p style={{ fontSize: "1.5rem" }}><b>Formato</b> de descarga:</p>
                        <button style={{ backgroundColor: "rgb(255, 68, 68)", borderRadius: "12px", fontWeight: 800 }} type="submit" onClick={() => exportFile("XLS")}> Excel</button>
                        <button style={{ backgroundColor: "rgb(51, 119, 13)", borderRadius: "12px", color: "white", fontWeight: 800 }} type="submit" onClick={() => exportFile("CSV")}>CSV</button>
                        <br />
                        <br />
                        <br />
                        <button style={{ borderRadius: "12px" }} type="submit" onClick={() => clearQuestions()}>Limpiar preguntas</button>
                    </form>
                </div>
            </div >
        </>
    )

}
