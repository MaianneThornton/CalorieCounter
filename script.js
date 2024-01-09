const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isError = false;

//Even though I set an input element to be a number, JavaScript receives a string value. Function to cleans the string value and ensure I have a number.
function cleanInputString(str) {
    const strArray = str.split('');
    const cleanStrArray = [];
    // for (let i = 0; i < strArray.length; i++) {
    //     // if strArray does not include the symbols push strArray to cleanStrArray
    //     if (!["+", "-", " "].includes(strArray[i])) {
    //         cleanStrArray.push(strArray[i]);
    //     }
    // }

    //Completes the above in much simpler code
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
};