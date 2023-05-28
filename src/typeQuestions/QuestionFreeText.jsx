
import { useState } from 'react';
import "./styles/QuestionStyles.css"

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
        <div className='card-container'>

            <div className='question-title'>
                <h3 >Texto Libre</h3>
                <p className='question-annotation'><b>¡IMPORTANTE!</b></p>
                <p >Este tipo de preguntas requieren de una calificación manual</p>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='question-text--container'>
                    <p>Pregunta:</p>
                    <textarea placeholder="Ejemplo: Explica el proceso de lavado de manos" onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <div className='question-button'>
                    <button className='question-button--addQuestion'>añadir pregunta</button>
                </div>
            </form>
        </div>
    </>)
}
