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
    const forbiddenCharacters = ["/", "@", ",", ".", "?", "\"", "\'"]

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
     * method in charge to compare the fileName if there are any character invalid according to the array forbiddenCharacters
     * @param {string} fileName to verify
     * @returns boolean value
     */
    function isValidFileName(fileName) {

        let anyInvadidCharacter = false;
        const characters = fileName.split('')

        for (let i = 0; i < characters.length; i++) {

            for (let j = 0; j < forbiddenCharacters.length; j++) {
                if (characters[i] == forbiddenCharacters[j]) {
                    anyInvadidCharacter = true;
                }

            }
        }
        return !anyInvadidCharacter;
    }

    /**
     * method in charge of valide that the filename doesn´t invluce invalid characters
     * @param {string} fileName 
     */
    function configFileName(fileName) {
        if (isValidFileName(fileName)) {
            setFileName(fileName)
        } else {
            let characters = " ";

            forbiddenCharacters.forEach(char => {
                characters += "\"" + char + "\"  ";
            })

            alert("El nombre no puede contener:  " + characters.slice(0, characters.length - 2));
        }
    }
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
                        <p className="body-botton-plainText">(Si es un documento de <a href="http://isolucion/Isolucion/PaginaLogin.aspx" style={{ color: "orange" }}>Isolución</a> escribir el Código correspondiente)</p>
                        <br />
                        <p style={{ fontSize: "1.6rem" }}>Nombre archivo: </p>
                        <br />
                        <div className="body-botton-input">
                            <img src="../easy-exam/assets/icons/exam-icon.svg" alt="" />
                            <input
                                style={{ fontSize: '1.3rem' }}
                                value={fileName}
                                placeholder="Nombre del archivo"
                                type="text" onChange={(e) => { configFileName(e.target.value); }} />
                        </div>

                        <br />
                        <br />
                        <p className="body-botton-plainText">Da clic en "Generar Examen" y graba el documento en tu equipo. Recuerda que este archivo debes enviarlo al correo <u>aprendizajecolombia@gerdaudiaco.com</u></p>
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
