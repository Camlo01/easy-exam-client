import { useState } from "react";

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
        addQuestion(newQuestionMatch)
        showNextQuestion()
    }

    return (<>
        <br />
        <br />
        <h3>Pregunta de emparejar</h3>
        <br />
        <p></p>
        <p>Después de escribir tu pregunta, crea la opción con su pareja correcta</p>
        <br />
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Pregunta:</label>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <br />
            <br />
            <label htmlFor="optionText1">(Opción/Pregunta):</label>
            <input type="text" id="optionText1"
                onChange={(e) => setOptionText1(e.target.value)} />
            <label htmlFor="rigthAnswer1">Respuesta:</label>
            <input type="text" id="answerOption1"
                onChange={(e) => setAnswerOption1(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="optionText2">(Opción/Pregunta):</label>
            <input type="text" id="optionText2"
                onChange={(e) => setOptionText2(e.target.value)}
            />
            <label htmlFor="rigthAnswer2">Respuesta:</label>
            <input type="text" id="answerOption2"
                onChange={(e) => setAnswerOption2(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="optionText3">(Opción/Pregunta):</label>
            <input type="text" id="optionText3"
                onChange={(e) => setOptionText3(e.target.value)}
            />
            <label htmlFor="rigthAnswer3">Respuesta:</label>
            <input type="text" id="answerOption3"
                onChange={(e) => setAnswerOption3(e.target.value)}
            />
            <br />
            <br />
            <button>añadir pregunta</button>
        </form>
        <br />


    </>)
}