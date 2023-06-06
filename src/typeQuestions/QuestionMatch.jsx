import { useState } from "react";
import "./styles/QuestionStyles.css"

export default function QuestionMatch({ addQuestion, showNextQuestion }) {

    const [text, setText] = useState("");
    const [optionText1, setOptionText1] = useState("")
    const [answerOption1, setAnswerOption1] = useState("")
    const [optionText2, setOptionText2] = useState("")
    const [answerOption2, setAnswerOption2] = useState("")
    const [optionText3, setOptionText3] = useState("")
    const [answerOption3, setAnswerOption3] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const newQuestionMatch = {
            id: 99,
            type: "MATCH",
            questionType: "MATCH",
            questionText: text,
            optionText1: optionText1,
            answerOption1: answerOption1,
            optionText2: optionText2,
            answerOption2: answerOption2,
            optionText3: optionText3,
            answerOption3: answerOption3,
            setId: function (n) {
                this.id = n
            }
        }

        if (newQuestionMatch.questionText.length > 0) {
            if (fieldsAreValid([optionText1, answerOption1, optionText2, answerOption2, optionText3, answerOption3])) {
                addQuestion(newQuestionMatch)
                showNextQuestion()
            }
            else {
                alert("Debes escribir al menos dos campos")
            }
        } else {
            alert("Debes escribir tu texto")
        }
    }

    return (<>
        <div className='card-container'>
            <div className="question-title">
                <h3 className='question-title'>Pregunta de emparejar</h3>
                <p className='question-body'>Después de escribir tu pregunta, crea la opción con su pareja correcta</p>
            </div>
            <form className='form' onSubmit={handleSubmit}>

                <div className='question-text--container'>
                    <p>Tu mensaje:</p>
                    <textarea placeholder="Ejemplo: Selecciona las opciones que correspondan!" cols="45" rows="2" onChange={(e) => setText(e.target.value)}></textarea>
                </div>

                <div className="question-answer--container">

                    {/* First Item */}
                    <div className="answer-container--holder">

                        <div className="answer-container--option ">
                            <label htmlFor="optionText1">(Opción/Pregunta):</label>
                            <textarea id="optionText1" placeholder="Color del cielo" onChange={(e) => setOptionText1(e.target.value)} ></textarea>
                        </div>

                        <div className="answer-container--option">
                            <label htmlFor="rigthAnswer1">Respuesta:</label>
                            <textarea id="answerOption1" placeholder="Azul" onChange={(e) => setAnswerOption1(e.target.value)}></textarea>
                        </div>
                    </div>

                    <hr />



                    {/* Second Item */}
                    <div className="answer-container--holder">

                        <div className="answer-container--option">
                            <label htmlFor="optionText2">(Opción/Pregunta):</label>
                            <textarea id="optionText2" placeholder="Capital de Francia" onChange={(e) => setOptionText2(e.target.value)} ></textarea>
                        </div>

                        <div className="answer-container--option">
                            <label htmlFor="rigthAnswer2">Respuesta:</label>
                            <textarea id="answerOption2" placeholder="París" onChange={(e) => setAnswerOption2(e.target.value)} ></textarea>
                        </div>

                    </div>
                    <hr />

                    {/* Third Item */}
                    <div className="answer-container--holder">

                        <div className="answer-container--option">
                            <label htmlFor="optionText3">(Opción/Pregunta):</label>
                            <textarea id="optionText3" placeholder="Reconocído físico" onChange={(e) => setOptionText3(e.target.value)}></textarea>
                        </div>

                        <div className="answer-container--option">
                            <label htmlFor="rigthAnswer3">Respuesta:</label>
                            <textarea id="answerOption3" placeholder="Albert Einstein" onChange={(e) => setAnswerOption3(e.target.value)} ></textarea>
                        </div>

                    </div>

                </div>

                <div className="question-button">
                    <button className='question-button--addQuestion'>añadir pregunta</button>
                </div>
            </form>
        </div >


    </>)
}

function fieldsAreValid(options) {
    let answersNotEmptyCounter = 0;

    // Validar al menos dos respuestas
    for (let i = 0; i < options.length - 2; i += 2) {

        console.log(options[i].length > 1 && options[i + 1])
        if (options[i].length > 1 && options[i + 1]) {
            answersNotEmptyCounter++;
        }
    }

    if (answersNotEmptyCounter >= 2) {
        return true;
    }
    return false;

}