import './CardStyle.css'

export default function MatchCard({ question, deleteQuestion, i }) {

    return (
        <div className="question-card">
            <h2>#{i} Selección Múltiple</h2>
            <p>{question.questionText}</p>
            <p>{addAnswer(question.answer1, question.isAnswer1)}</p>
            <p>{addAnswer(question.answer2, question.isAnswer2)}</p>
            <p>{addAnswer(question.answer3, question.isAnswer3)}</p>
            <p>{addAnswer(question.answer4, question.isAnswer4)}</p>
            <div className="card-button--container">
                <button onClick={() => deleteQuestion(question.id ?? 99)}>Eliminar</button>
            </div>
        </div>
    )

    function addAnswer(answer, isCorrect) {
        return (isCorrect == "TRUE") ?
            <p className="answer-rigth multichoice-option"> {answer}</p>
            :
            <p className="answer-wrong multichoice-option">{answer}</p>
    }

}