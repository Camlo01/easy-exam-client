import { useState } from "react"
import './styles/QuestionStyles.css'
import validateNonRepeatFields from "../Util";

export default function QuestionMultichoice({ addQuestion, showNextQuestion }) {

    // state variables to be used in the question object
    const [questionText, setText] = useState("");
    const [answer1, setAnswer1] = useState("")
    const [isAnswer1, setIsAnswer1] = useState(false)
    const [answer2, setAnswer2] = useState("")
    const [isAnswer2, setIsAnswer2] = useState(false)
    const [answer3, setAnswer3] = useState("")
    const [isAnswer3, setIsAnswer3] = useState(false)
    const [answer4, setAnswer4] = useState("")
    const [isAnswer4, setIsAnswer4] = useState(false)

    const handleCheckboxChange1 = (event) => {
        setIsAnswer1(event.target.checked);
    };
    const handleCheckboxChange2 = (event) => {
        setIsAnswer2(event.target.checked);
    };

    const handleCheckboxChange3 = (event) => {
        setIsAnswer3(event.target.checked);
    };

    const handleCheckboxChange4 = (event) => {
        setIsAnswer4(event.target.checked);
    };


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

        const options = [answer1, answer2, answer3, answer4]

        if (newQuestionMultichoice.questionText.length > 0) {

            if (anyCorrectOption(newQuestionMultichoice)) {

                if (atLeast2Answers(options)) {

                    if (validateNonRepeatFields(options)) {

                        addQuestion(newQuestionMultichoice)
                        showNextQuestion();
                    }

                } else {
                    alert("Debes escribir al menos dos opciones")
                }
            } else {
                alert("Selecciona al menos una respuesta como correcta")
            }
        } else {
            alert("Debes formular tu pregunta")
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
        return (value == true) ? "TRUE" : "FALSE";
    }


    return (<>
        <div className='card-container'>
            <div className="question-title">
                <h3 className='question-title'>Selección Múltiple</h3>
                <p className='question-body'>(Permite seleccionar una o más respuestas predeterminadas)</p>
                <p className='question-body'>Marca las opciones correctas de tu pregunta en las casillas del lado derecho</p>
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
                        <input type="checkbox" onChange={handleCheckboxChange1} />
                    </div>
                    <hr />

                    {/* Second Option */}
                    <div className="answer-container--option">
                        <label htmlFor="">Opción</label>
                        <textarea placeholder="Dos" onChange={(e) => setAnswer2(e.target.value)} />
                        <input type="checkbox" onChange={handleCheckboxChange2} />
                    </div>
                    <hr />

                    {/* Third Option */}
                    <div className="answer-container--option">
                        <label htmlFor="">Opción</label>
                        <textarea placeholder="Tres" onChange={(e) => setAnswer3(e.target.value)} />
                        <input type="checkbox" onChange={handleCheckboxChange3} />
                    </div>
                    <hr />

                    {/* fourth option */}
                    <div className="answer-container--option">
                        <label htmlFor="">Opción</label>
                        <textarea placeholder="Cuatro" onChange={(e) => setAnswer4(e.target.value)} />
                        <input type="checkbox" onChange={handleCheckboxChange4} />
                    </div>
                </div>
                <div className="question-button">
                    <button className='question-button--addQuestion'>Añadir</button>
                </div>
            </form >
        </div >
    </>
    )

}

function atLeast2Answers(options) {
    let countOptionsNotEmpty = 0;
    for (let i = 0; i < options.length; i++) {

        if (options[i].length) {
            countOptionsNotEmpty++;
        }
    }

    return (countOptionsNotEmpty >= 2)
}