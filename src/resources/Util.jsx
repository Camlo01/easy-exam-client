
/**
 * Method for validate theres no value repeat in any field
 * @param {*} arr of text fields
 * @returns boolean value
 */
export default function validateNonRepeatFields(arr) {

    let isAnyValueRepeat = false;

    for (let i = 0; i < arr.length && !isAnyValueRepeat; i++) {

        let counterRepeatOption = 0;

        for (let j = 0; j < arr.length && isAnyValueRepeat != true; j++) {

            if (Object.is(arr[i], arr[j])) {
                counterRepeatOption++;
            }

            if (counterRepeatOption > 1) {
                isAnyValueRepeat = true;
            }
        }
    }

    // Show that exist repeat fields
    if (isAnyValueRepeat) {
        alert("No pueden haber opciones repetidas");
    }

    return !(isAnyValueRepeat);
}