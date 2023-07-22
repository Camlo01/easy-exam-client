import { useState, useEffect } from "react";
import "./Body.css"
import FormQuestion from "./Form";
import behavior from "../generateButtonsBehavior";
import ShowQuestions from '../displayQuestions/ShowQuestions'

export default function Body() {

    const [consecutive, setConsecutive] = useState(1)
    const [questions, setQuestions] = useState([])
    const [fileName, setFileName] = useState("")
    const [questionCounter, setCounter] = useState(0);

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
        setCounter(questionCounter - 1);
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
        setCounter(questionCounter + 1);
    }

    /**
     * Clear the array of questions
     */
    function clearQuestions() {
        setQuestions([])
        setFileName("")
        setCounter(0)
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
            // alert("Correcto")
        }
    }

    return (
        <>
            <div>
                {/* Component with form for creating questions */}
                <FormQuestion addQuestion={addQuestion} counter={questionCounter} />

                {/* Component that renders all questions */}
                <ShowQuestions questions={questions} deleteQuestion={deleteQuestion} />

                {/* AS */}
                <br />
                <div className="body-botton">
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <p style={{ fontSize: "1.6rem" }}>Nombre examen: </p>
                        <br />
                        <input
                            style={{ fontSize: '1.3rem' }}
                            value={fileName}
                            placeholder="Nombre del archivo"
                            type="text" onChange={(e) => { setFileName(e.target.value); }} />
                        <br />
                        <br />
                        <p style={{ fontSize: "1.6rem", alignSelf: 'center' }}>¿Qué deseas hacer?</p>
                        <br />
                        <button className="button-export" type="submit" onClick={() => exportFile("CSV")}>Generar Examen</button>
                        <br />
                        <br />
                        <button className="button-clear" type="submit" onClick={() => clearQuestions()}>Borrar preguntas</button>
                    </form>
                </div>
            </div >
        </>
    )

}
