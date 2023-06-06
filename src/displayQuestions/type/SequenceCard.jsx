import './CardStyle.css'

export default function SequenceCard({ question, deleteQuestion, i }) {

    return (
        <div className="question-card yellow-card">
            <h2>#{i} Pregunta de ordenar</h2>
            <p>{question.questionText}</p>
            <p>1. {question.sequenceText1}</p>
            <p>2. {question.sequenceText2}</p>
            <p>3. {question.sequenceText3}</p>
            <p>4. {question.sequenceText4}</p>
            <div className="card-button--container">
                <button onClick={() => deleteQuestion(question.id ?? 99)}>Eliminar</button>
            </div>
        </div>
    )
}