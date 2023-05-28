import './ShowQuestions.css'

export default function ShowQuestions({ questions, deleteQuestion }) {

    if (questions.length === 0) {
        return WhenThereIsNoQuestion()
    }

    return questions.map((question, i) => (
        <div key={i}>
            <hr />
            <br />
            <p>Pregunta #{i + 1}</p>
            <br />
            <p>Tipo: {question.questionType ?? "UNDEFINED"}</p>
            <p>Pregunta: {question.questionText ?? "UNDEFINED"}</p>
            <button onClick={() => deleteQuestion(question.id ?? 99)}>Eliminar</button>
            <br />
            <br />
        </div>
    ))

}

/**
 *  Function that show when there is no one question
 * @returns 
 */
function WhenThereIsNoQuestion() {
    return (
        <>
            <div className='questions-display--message'>
                <h2>Preguntas generadas</h2>
                <p>Aqui podrás ver tus preguntas</p>
            </div>
        </>
    )
}