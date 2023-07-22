
import { useState } from "react";
import "./Form.css";
import QuestionFreeText from "../resources/typeQuestions/QuestionFreeText"
import QuestionMatch from "../resources/typeQuestions/QuestionMatch"
import QuestionMultichoice from "../resources/typeQuestions/QuestionMultichoice"
import QuestionSequence from "../resources/typeQuestions/QuestionSequence"
import QuestionKeyWord from "../resources/typeQuestions/QuestionKeyWord"

export default function FormQuestion({ addQuestion, counter }) {

    const [selectedOption, setSelectedOption] = useState("");

    function handleSelectChange(event) {
        setSelectedOption(event.target.value);
    }

    function showNextQuestion() {
        setSelectedOption("NEXT_QUESTION")
    }

    function ConfigQuestion() {

        return (
            <>
                <select name="type-question" onChange={handleSelectChange}>
                    <option value="NULL">-- Tipo de pregunta --</option>
                    <option value="FREETEXT">Texto libre</option>
                    <option value="MATCH">Emparejar</option>
                    <option value="MULTICHOICE">Selección múltiple</option>
                    <option value="SEQUENCE">Secuencia</option>
                    <option value="KEYWORD">palabras claves</option>
                </select >
                <br />
                <br />
                <p>Total de preguntas: {counter} </p>
            </>
        )
    }


    function QuestionByType() {

        switch (selectedOption) {
            case "FREETEXT":
                return <QuestionFreeText addQuestion={addQuestion} showNextQuestion={showNextQuestion} />
            case "MATCH":
                return <QuestionMatch addQuestion={addQuestion} showNextQuestion={showNextQuestion} />;
            case "MULTICHOICE":
                return <QuestionMultichoice addQuestion={addQuestion} showNextQuestion={showNextQuestion} />;
            case "SEQUENCE":
                return <QuestionSequence addQuestion={addQuestion} showNextQuestion={showNextQuestion} />;
            case "KEYWORD":
                return <QuestionKeyWord addQuestion={addQuestion} showNextQuestion={showNextQuestion} />
            case "NEXT_QUESTION":
                return (<>
                    <br />
                    <br />
                    <h2 style={{ color: "green" }}>Agregado exitosamente!</h2>
                    <br />
                    <h3>Siguiente pregunta:</h3>
                    <br />
                    <p>Para agregar otra pregunta al examen selecciona el tipo de la pregunta</p>
                    <br />
                    <br />
                </>)
            default:
                return (
                    <>
                        <br />
                        <br />
                        <p>Acá encontrarás el campo según corresponda al tipo de pregunta</p>
                        <br />
                        <h3>¡Agrega una pregunta!</h3>
                        <br />
                    </>
                )
        }
    }

    return (
        <>
            <div className="cardNewQuestion">
                <ConfigQuestion />
                {QuestionByType()}
            </div>
        </>
    )


}
