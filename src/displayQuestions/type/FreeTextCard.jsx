import './CardStyle.css'

export default function FreeTextCard({ question, deleteQuestion, i }) {


    return (
        <div className="question-card">
            <div className='question-card--body'>
                <h2>#{i} Pregunta Libre</h2>
                <p>{question.questionText}</p>
            </div>
            <div className="card-button--container">
                <button onClick={() => deleteQuestion(question.id ?? 99)}>Eliminar</button>
            </div>
        </div>
    )

}