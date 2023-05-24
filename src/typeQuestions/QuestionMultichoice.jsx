import { useState } from "react"

export default function QuestionMultichoice({ addQuestion, showNextQuestion }) {

    const [text, setText] = useState("");
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
            questionText: text,
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
        addQuestion(newQuestionMultichoice)
        showNextQuestion();
    }

    function defineValue(value) {
        return (value == "on") ? "TRUE" : "FALSE";
    }


    return (
        <>
            <br /><br />
            <h3>Pregunta de selcción múltiple</h3>
            <br />
            <p>Crea una pregunta, y marca las opciones correctas con el recuadro</p>
            {/* <p>Crea una pregunta y escribe diferentes respuestas y marca las correctas en la casilla</p> */}
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Pregunta:</label>
                <input type="text" onChange={(e) => setText(e.target.value)} />
                <br />
                <br />

                <label htmlFor="" id="">(Opción/Pregunta) </label>
                <input type="text" onChange={(e) => setAnswer1(e.target.value)} />
                <input type="checkbox" onChange={(e) => setIsAnswer1(e.target.value)} />
                <br />

                <br />
                <label htmlFor="">(Opción/Pregunta) </label>
                <input type="text" onChange={(e) => setAnswer2(e.target.value)} />
                <input type="checkbox" onChange={(e) => setIsAnswer2(e.target.value)} />
                <br />

                <br />
                <label htmlFor="">(Opción/Pregunta) </label>
                <input type="text" onChange={(e) => setAnswer3(e.target.value)} />
                <input type="checkbox" onChange={(e) => setIsAnswer3(e.target.value)} />
                <br />

                <br />
                <label htmlFor="">(Opción/Pregunta) </label>
                <input type="text" onChange={(e) => setAnswer4(e.target.value)} />
                <input type="checkbox" onChange={(e) => setIsAnswer4(e.target.value)} />
                <br />
                <br />
                <br />
                <br />
                <button>añadir pregunta</button>
            </form>
        </>
    )

}