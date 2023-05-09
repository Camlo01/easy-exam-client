
export default function CreateQuestion(addQuestion) {

    return (
        <>
            <br />
            <p>Añade una pregunta de examen según su tipo</p>
            <br />
            <select id="question-select">
                <option value="">- Selecciona un valor</option>
                <option value="MULTICHOICE">Elección múltiple</option>
                <option value="MATCH">Emparejar</option>
                <option value="SEQUENCE">Secuencia</option>
                <option value="KEYWORD">Palabra clave</option>
                <option value="FREETEXT">Respuesta libre</option>
            </select>
        </>
    )
}