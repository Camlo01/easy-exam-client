import { generateFileAsCSV, generateFileAsExcel } from './GenerateFiles'

export default function behavior(fileFormat, questions, fileName) {
    switch (fileFormat) {
        case "XLS":
            generateFileAsExcel(questions, fileName)
            break;
        case "CSV":
            generateFileAsCSV(questions, fileName)
            break;
        default:
            console.log("something went wrong!")
    }
}

