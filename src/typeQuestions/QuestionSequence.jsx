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

    return (
        <>
            <br /><br />
            <h3>Pregunta de secuencia</h3>
            <p>Escriba las palabras en el orden que desea que vayan</p>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="" >Pregunta: </label>
                <input
                    type="text"
                    placeholder="Escribe tu pregunta"
                    onChange={(e) => setText(e.target.value)} />
                <br />
                <br />

                <label htmlFor="">1.</label>
                <input type="text" onChange={(e) => setSequenceText1(e.target.value)} />
                <br />


                <br />
                <label htmlFor="">2.</label>
                <input type="text" onChange={(e) => setSequenceText2(e.target.value)} />
                <br />


                <br />
                <label htmlFor="">3.</label>
                <input type="text" onChange={(e) => setSequenceText3(e.target.value)} />
                <br />


                <br />
                <label htmlFor="">4.</label>
                <input type="text" onChange={(e) => setSequenceText4(e.target.value)} />
                <br />

                <br />
                <br />
                <button>añadir pregunta</button>
            </form>
        </>)
}