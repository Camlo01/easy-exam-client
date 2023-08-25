import { useState } from "react"
import './styles/QuestionStyles.css'
import validateNonRepeatFields from "../Util"

export default function QuestionKeyWord({ addQuestion, showNextQuestion }) {


    const [text, setText] = useState("")
    const [answer1, setAnswer1] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [answer3, setAnswer3] = useState("")
    const [answer4, setAnswer4] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        const newQuestionKeyWord = {
            id: 99,
            type: "KEYWORD",
            questionType: "KEYWORD",
            questionText: text,
            answer1: answer1,
            answer2: answer2,
            answer3: answer3,
            answer4: answer4,
            setId: function (n) {
                this.id = n
            }
        }

        const options = [answer1, answer2, answer3, answer4];

        if (newQuestionKeyWord.questionText.length > 0) {

            if (atLeast2Words(options)) {

                if (validateNonRepeatFields(options)) {

                    addQuestion(newQuestionKeyWord)
                    showNextQuestion()
                }
            } else {
                alert("Debe haber al menos una respuesta")
            }

        } else {
            alert("Debes escribir tu pregunta")
        }

    }

    return (
        <>
            <div className="card-container">
                <div className="question-title">
                    <h3 className="question-title">Palabra Clave</h3>
                    <p className="question-body">Escriba palabras que deban ir en la respuesta</p>
                </div>
                <form onSubmit={handleSubmit}>

                    <div className="question-text--container">
                        <p>Pregunta: </p>
                        <textarea placeholder="Ejemplo: Escribe la receta para hacer un pastel" cols="45" rows="2" onChange={(e) => setText(e.target.value)}></textarea>
                    </div>

                    <div className="question-answer--container">
                        <div className="answer-container--option">
                            <label htmlFor="">PALABRA</label>
                            <textarea type="text" placeholder="huevos" onChange={(e) => setAnswer1(e.target.value)} />
                        </div>
                        <div className="answer-container--option">
                            <label htmlFor="">PALABRA</label>
                            <textarea type="text" placeholder="leche" onChange={(e) => setAnswer2(e.target.value)} />
                        </div>
                        <div className="answer-container--option">
                            <label htmlFor="">PALABRA</label>
                            <textarea type="text" placeholder="Harina" onChange={(e) => setAnswer3(e.target.value)} />
                        </div>
                        <div className="answer-container--option">
                            <label htmlFor="">PALABRA</label>
                            <textarea type="text" placeholder="horno" onChange={(e) => setAnswer4(e.target.value)} />
                        </div>
                    </div>
                    <div className="question-button">
                        <button className="question-button--addQuestion">Añadir</button>
                    </div>
                </form >
            </div >
        </>
    )

}
function atLeast2Words(words) {
    let countWords = 0;

    for (let i = 0; i < words.length; i++) {

        if (words[i].length > 0) {
            countWords++
        }

    }
    return (countWords >= 1)
}