import { useState } from "react"
import './styles/QuestionStyles.css'

export default function QuestionMultichoice({ addQuestion, showNextQuestion }) {

    // state variables to be used in the question object
    const [questionText, setText] = useState("");
    const [answer1, setAnswer1] = useState("")
    const [isAnswer1, setIsAnswer1] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [isAnswer2, setIsAnswer2] = useState("")
    const [answer3, setAnswer3] = useState("")
    const [isAnswer3, setIsAnswer3] = useState("")
    const [answer4, setAnswer4] = useState("")
    const [isAnswer4, setIsAnswer4] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        const newQuestionMultichoice = {
            id: 99,
            type: "MULTICHOICE",
            questionType: "MULTICHOICE",
            questionText: questionText,
            answer1: answer1,
            isAnswer1: defineValue(isAnswer1),
            answer2: answer2,
            isAnswer2: defineValue(isAnswer2),
            answer3: answer3,
            isAnswer3: defineValue(isAnswer3),
            answer4: answer4,
            isAnswer4: defineValue(isAnswer4),
            setId: function (n) {
                this.id = n
            }
        }

        if (questionText.length == 0) {
            alert("Debes formular tu pregunta")
        } else {
            if (anyCorrectOption(newQuestionMultichoice)) {
                addQuestion(newQuestionMultichoice)
                showNextQuestion();
            } else {
                alert("Selecciona al menos una respuesta como correcta")
            }
        }
    }

    /**
     * Method in charge of validating the properties of the question object that configure the question options as correct
     * @param {object} question that will be created
     * @returns {boolean} - false if no option in the question has been marked as correct 
     */
    function anyCorrectOption(question) {
        if (question.isAnswer1 == "TRUE" ||
            question.isAnswer2 == "TRUE" ||
            question.isAnswer3 == "TRUE" ||
            question.isAnswer4 == "TRUE") {
            return true;
        }
        return false
    }

    /**
     * Method in charge of storing the correct value in the properties that validate if a question is correct or not in the question object
     * @param {String} captured value of the checkbox
     * @returns String of "TRUE" if the received value is 'on', otherwise it will default to "FALSE"
     */
    function defineValue(value) {
        return (value == "on") ? "TRUE" : "FALSE";
    }


    return (<>
        <div className='card-container'>
            <div className="question-title">
                <h3 className='question-title'>Pregunta de selcción múltiple</h3>
                <p className='question-body'>Marca las opciones correctas de tu pregunta</p>
            </div>
            <form onSubmit={handleSubmit}>

                <div className='question-text--container'>
                    <p>Pregunta:</p>
                    <textarea placeholder="Ejemplo: ¿Cuantos lados tiene un cuadrado?" onChange={(e) => setText(e.target.value)}></textarea>
                </div>

                <div className="question-answer--container">

                    {/* First Option */}
                    <div className="answer-container--option">
                        <label htmlFor="">Opción</label>
                        <textarea placeholder="Uno" onChange={(e) => setAnswer1(e.target.value)} />
                        <input type="checkbox" onChange={(e) => setIsAnswer1(e.target.value)} />
                    </div>
                    <hr />

                    {/* Second Option */}
                    <div className="answer-container--option">
                        <label htmlFor="">Opción</label>
                        <textarea placeholder="Tres" onChange={(e) => setAnswer2(e.target.value)} />
                        <input type="checkbox" onChange={(e) => setIsAnswer2(e.target.value)} />
                    </div>
                    <hr />

                    {/* Third Option */}
                    <div className="answer-container--option">
                        <label htmlFor="">Opción</label>
                        <textarea placeholder="Cuatro" onChange={(e) => setAnswer3(e.target.value)} />
                        <input type="checkbox" onChange={(e) => setIsAnswer3(e.target.value)} />
                    </div>
                    <hr />

                    {/* fourth option */}
                    <div className="answer-container--option">
                        <label htmlFor="">Opción</label>
                        <textarea placeholder="Cinco" onChange={(e) => setAnswer4(e.target.value)} />
                        <input type="checkbox" onChange={(e) => setIsAnswer4(e.target.value)} />
                    </div>
                </div>
                <div className="question-button">
                    <button className='question-button--addQuestion'>añadir pregunta</button>
                </div>
            </form >
        </div >
    </>
    )

}