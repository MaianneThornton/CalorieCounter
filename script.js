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
    // inserts HTMLString as the last child of the targetInputContainer
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
};

// get the calorie counts from the user's entries.
function getCaloriesFromInputs(list) {
    let calories = 0;

    for (let i = 0; i < list.length; i++) {
        const currVal = cleanInputString(list[i].value);
        const invalidInputMatch = isInvalidInput(currVal);
        //checks to see if invalidInputMatch is truthy because it invalidInputMatch returns String.match (array of matches or null if no matches are found)
        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }
        calories += Number(currVal);
    }
    return calories;
};

//prevents submission of page to trigger reload
function calculateCalories(e) {
    e.preventDefault();
    isError = false;
    //return any number inputs that are in the meals elements
    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

    //extract the calorie totals from meals & budget
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    //checks the truthiness of the global error flag, and if it is truthy then use return to end the function execution.
    if (isError) {
        return null;
    }

    // Calculations
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;

    //ternary operator to set surplusOrDeficit to the string Surplus or Deficit depending on whether remainingCalories is greater than or equal to 0. If it is greater than or equal to 0, then surplusOrDeficit should be Surplus. Otherwise, it should be Deficit.
    const surplusOrDeficit = (remainingCalories >= 0) ? 'Surplus' : 'Deficit';

    //Math.abs() ensures that the value is positive.
    output.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
    `;
    //make the #output element visible so the user can see the text. 
    output.classList.remove("hide");
    
};

//button functionality
addEntryButton.addEventListener('click', addEntry);
calorieCounter.addEventListener('submit', calculateCalories);
