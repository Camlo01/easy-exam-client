import './CardStyle.css'

export default function MatchCard({ question, deleteQuestion, i }) {

    return (
        <div className="question-card blue-card">
            <h2>#{i} Pregunta Emparejar</h2>
            <p>{question.questionText}</p>
            <p>{question.optionText1} - {question.answerOption1}</p>
            <p>{question.optionText2} - {question.answerOption2}</p>
            <p>{question.optionText3} - {question.answerOption3}</p>
            <div className="card-button--container">
                <button onClick={() => deleteQuestion(question.id ?? 99)}>Eliminar</button>
            </div>
        </div>
    )
}