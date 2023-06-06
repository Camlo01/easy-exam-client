import './ShowQuestions.css'

import FreeTextCard from './type/FreeTextCard'
import MatchCard from './type/MatchCard'
import MultichoiceCard from './type/MultichoiceCard'
import SequenceCard from './type/SequenceCard'
import KeywordCard from './type/KeywordCard'

export default function ShowQuestions({ questions, deleteQuestion }) {

    if (questions.length === 0) {
        return WhenThereIsNoQuestion()
    }
    let cards = questions.map((question, i) => (
        <div key={i}>
            {DisplayQuestionInCard(question, deleteQuestion, i)}
        </div>
    ))
    return (
        <div className='questions-cards-container'>
            {cards}
        </div>)
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

function DisplayQuestionInCard(question, deleteQuestion, i) {

    let id = i + 1;

    switch (question.type) {
        case "FREETEXT":
            return <FreeTextCard question={question} deleteQuestion={deleteQuestion} i={id} />
        case "MATCH":
            return <MatchCard question={question} deleteQuestion={deleteQuestion} i={id} />
        case "MULTICHOICE":
            return <MultichoiceCard question={question} deleteQuestion={deleteQuestion} i={id}/>
        case "SEQUENCE":
            return <SequenceCard question={question} deleteQuestion={deleteQuestion} i={id} />
        case "KEYWORD":
            return <KeywordCard question={question} deleteQuestion={deleteQuestion} i={id} />
        default:
            alert("Comunicate con el administrador para reportar un fallo")
            break;
    }

}