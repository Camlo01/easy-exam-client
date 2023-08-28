import { useState } from "react"


export default function QuestionTrueFalse({ addQuestion, showNextQuestion }) {

    const [questionText, setText] = useState("")
    const [isAnswer1, setIsAnswer1] = useState("")
    const [isAnswer2, setIsAnswer2] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault();

        const newQuestionTrueFalse = {
            id: 99,
            type: "MULTICHOICE",
            questionType: "MULTICHOICE",
            questionText: questionText,
            answer1: "Verdadero",
            isAnswer1: defineValue(isAnswer1),
            answer2: "Falso",
            isAnswer2: defineValue(isAnswer2),
            setId: function (n) {
                this.id = n
            }
        }

        if (newQuestionTrueFalse.questionText.length > 0) {

            if (isAnswer1 != isAnswer2) {
                addQuestion(newQuestionTrueFalse)
                showNextQuestion();
            } else {
                alert("Debes selccionar si la respuesta es verdadera o falsa")
            }
        } else {
            alert("Debes formular tu pregunta")

        }

    }

    function defineValue(value) {
        return (value == true) ? "TRUE" : "FALSE";
    }

    const handleTrueCheckBox = (e) => {

        const booleanValueCaptured = (e.target.checked);

        setIsAnswer1(booleanValueCaptured);
        setIsAnswer2((booleanValueCaptured) ? false : true);
        document.getElementById("FalseCheckBox").checked = false;

        if (!booleanValueCaptured) {
            document.getElementById("FalseCheckBox").checked = true;
        }

    }

    const handleFalseCheckBox = (e) => {

        const booleanValueCaptured = (e.target.checked);

        setIsAnswer2(booleanValueCaptured);
        setIsAnswer1((booleanValueCaptured) ? false : true);
        document.getElementById("TrueCheckBox").checked = false;

        if (!booleanValueCaptured) {
            document.getElementById("TrueCheckBox").checked = true;
        }
    }

    return (<>
        <div className='card-container'>
            <div className="question-title">
                <h3 className='question-title'><b style={{ color: "green" }}>Verdadero</b> / <b style={{ color: "red" }}>Falso</b></h3>
                <p className='question-body'>Crea la pregunta e indica si es verdadero o falso la respuesta</p>
            </div>
            <form onSubmit={handleSubmit}>

                <div className='question-text--container'>
                    <p>Pregunta:</p>
                    <textarea placeholder="" onChange={(e) => setText(e.target.value)}></textarea>
                </div>

                <div className="question-answer--container">

                    <div>
                        <label htmlFor="TrueCheckBox">Verdadero</label>
                        <input type="checkbox" id="TrueCheckBox" onChange={handleTrueCheckBox} />

                        <label htmlFor="FalseCheckBox">Falso</label>
                        <input type="checkbox" id="FalseCheckBox" onChange={handleFalseCheckBox} />
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