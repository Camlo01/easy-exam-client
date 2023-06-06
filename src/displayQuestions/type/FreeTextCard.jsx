import './CardStyle.css'

export default function FreeTextCard({ question, deleteQuestion, i }) {


    return (
        <div className="question-card  red-card">
            <h2>#{ i} Pregunta Libre</h2>
            <p>{question.questionText}</p>
            <div className="card-button--container">
                <button onClick={() => deleteQuestion(question.id ?? 99)}>Eliminar</button>
            </div>
        </div>
    )

}