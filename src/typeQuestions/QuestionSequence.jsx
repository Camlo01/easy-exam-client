import { useState } from "react"

export default function QuestionSequence({ addQuestion, showNextQuestion }) {

    const [text, setText] = useState("")
    const [sequenceText1, setSequenceText1] = useState("")
    const [sequenceText2, setSequenceText2] = useState("")
    const [sequenceText3, setSequenceText3] = useState("")
    const [sequenceText4, setSequenceText4] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const newQuestionSequence = {
            id: 99,
            type: "SEQUENCE",
            questionType: "SEQUENCE",
            questionText: text,
            sequenceText1: sequenceText1,
            sequenceText2: sequenceText2,
            sequenceText3: sequenceText3,
            sequenceText4: sequenceText4,
            setId: function (n) {
                this.id = n
            }
        }

        addQuestion(newQuestionSequence)
        showNextQuestion()

    }

    return (<>
        <div className='card-container'>
            <div className="question-title">
                <h3 className=''>Pregunta de secuencia</h3>
                <p className=''>Escriba las opciones en el orden correcto </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='question-text--container'>
                    <p>Pregunta: </p>
                    <textarea placeholder="Ejemplo: Ordena los planetas" cols="45" rows="2" onChange={(e) => setText(e.target.value)}></textarea>
                </div>

                <div className="question-answer--container">
                    <div className="answer-container--option">
                        <label htmlFor="">1.</label>
                        <textarea placeholder="Mercurio" onChange={(e) => setSequenceText1(e.target.value)} />
                    </div>

                    <div className="answer-container--option">
                        <label htmlFor="">2.</label>
                        <textarea placeholder="Venus" onChange={(e) => setSequenceText2(e.target.value)} />
                    </div>

                    <div className="answer-container--option">
                        <label htmlFor="">3.</label>
                        <textarea placeholder="Tierra" onChange={(e) => setSequenceText3(e.target.value)} />
                    </div>

                    <div className="answer-container--option">
                        <label htmlFor="">4.</label>
                        <textarea placeholder="Marte" onChange={(e) => setSequenceText4(e.target.value)} />
                    </div>
                </div>

                <div className="question-button">
                    <button className='question-button--addQuestion'>añadir pregunta</button>
                </div>
            </form>
        </div>
    </>)
}