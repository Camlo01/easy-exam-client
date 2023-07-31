import { useState } from "react";
import Header from "../components/Header";
import { getData } from "../GetData";
import "./VisualizeData.css"

export default function VisualizeData() {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        } else {
            alert("Hubo un problema!")
        }
    };

    const handleSubmitBehavior = (e) => {
        e.preventDefault();
        getData(selectedFile)
        
    }


    return (
        <>
            <Header />
            <br />
            <div className="visualize-title" >
                <h1>Ver datos</h1>
                <p>Selecciona el archivo del cual visualizar la información:</p>
            </div>

            <form onSubmit={handleSubmitBehavior} for="input-files">
                <label for="input-files" class="drop-container" id="dropcontainer">
                    <span class="drop-title">Drop files here</span>
                    or
                    <input type="file" id="input-files" accept=".csv" onChange={handleFileChange} required />
                </label>
                <button type="submit">ver datos</button>
            </form>

        </>
    )
}