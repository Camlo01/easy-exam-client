import './CardStyle.css'

export default function KeywordCard({ question, deleteQuestion, i }) {

    return (
        <div className="question-card green-card">
            <h2>#{i} Pregunta de palabras claves</h2>
            <p>{question.questionText}</p>
            <p>{question.answer1}, {question.answer2}, {question.answer3}, {question.answer4} </p>
            <div className="card-button--container">
                <button onClick={() => deleteQuestion(question.id ?? 99)}>Eliminar</button>
            </div>
        </div>
    )
}