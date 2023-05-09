import { useState } from "react"

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
        addQuestion(newQuestionKeyWord)
        showNextQuestion()

    }

    return (
        <>
            <br /><br />
            <h3>Pregunta de palabra clave</h3>
            <br />
            <p>Escriba las palabras en el orden que desea que vayan</p>
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Pregunta: </label>
                <input type="text" onChange={(e) => setText(e.target.value)} />
                <br />
                <br />

                <label htmlFor="">palabra 1.</label>
                <input type="text" onChange={(e) => setAnswer1(e.target.value)} />
                <br />
                <br />

                <label htmlFor="">palabra 2.</label>
                <input type="text" onChange={(e) => setAnswer2(e.target.value)} />
                <br />
                <br />

                <label htmlFor="">palabra 3.</label>
                <input type="text" onChange={(e) => setAnswer3(e.target.value)} />
                <br />
                <br />

                <label htmlFor="">palabra 4.</label>
                <input type="text" onChange={(e) => setAnswer4(e.target.value)} />
                <br />
                <br />
                <button>añadir pregunta</button>

            </form>

        </>
    )

}