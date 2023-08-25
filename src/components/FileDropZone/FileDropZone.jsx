import React from "react";
import "./FileDropZone.css"

export default function FileDropZone() {

    return (
        <>
            <form action="">
                <div>

                </div>
                <label for="input-files" class="drop-container" id="dropcontainer">
                    <span class="drop-title">Drop files here</span>
                    or
                    <input type="file" id="input-files" accept=".csv" required />
                </label>
            </form></>
    );
};

