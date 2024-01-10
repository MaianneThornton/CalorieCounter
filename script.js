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
//Filters out number inputs allowed for exponential notation (such as 1e10).
function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
};

//Gets the value of the selected option
function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    //numbers the entries a user adds, returns a NodeList
    // .length + 1 fixes the counting bug where the first entry had a value of 0.
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"></input>
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"></input>
    `;
    targetInputContainer.innerHTML += HTMLString;
};

addEntryButton.addEventListener('click', addEntry);
