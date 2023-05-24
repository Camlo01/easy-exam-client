
import { useState } from 'react';

export default function QuestionFreeText({ addQuestion, showNextQuestion }) {

    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuestionFreeText = {
            id: 99,
            type: "FREETEXT",
            questionType: "FREETEXT",
            questionText: text,
            setId: function (n) {
                this.id = n
            }
        }
        addQuestion(newQuestionFreeText)
        showNextQuestion()
    }

    return (<>
        <br />
        <br />
        <h3>Pregunta de texto libre</h3>
        <br />
        <p><b>NO RECOMENDABLE:</b> no es recomendable debido a que requiere de calificación manual</p>
        <br />
        <form onSubmit={handleSubmit}>
            <label htmlFor="" >Pregunta: </label>
            <input
                type="text"
                placeholder="Escribe tu pregunta"
                onChange={(e) => setText(e.target.value)} />
            <br />
            <br />
            <button >añadir pregunta</button>
        </form>
    </>)
}
