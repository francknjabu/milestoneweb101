/*** You will not need this file until Unit 5 ***/
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
themeButton.addEventListener("click", toggleDarkMode);
//             and tell it to use toggleDarkMode as its callback function


/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here

const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here
const rsvpList = document.getElementById("rsvp-participants");
  const nameInput = document.getElementById("Name").value;
  const emailInput = document.getElementById("Email").value;
  const stateInput = document.getElementById("State").value;
  const listItem = document.createElement("p");
  listItem.textContent = `${nameInput} from ${stateInput}has RSVP'd.`;
  rsvpList.appendChild(listItem);
    
}
const rsvpButton = document.getElementById("rsvp-button");



// Step 3: Add a click event listener to the submit RSVP button here
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;

  // TODO: Loop through all inputs
  for (let i = 0; i < rsvpInputs.length; i++) {
    let input = rsvpInputs[i];

    // Skip the submit button
    if (input.type === "submit") continue;

    // TODO: Inside loop, validate the value of each input
    if (input.value.trim().length < 2) {
      containsErrors = true;
      input.classList.add("error");  // highlight invalid field
    } else {
      input.classList.remove("error"); // remove error if valid
    }
  }

  // TODO: If no errors, call addParticipant() and clear fields
  if (containsErrors === false) {
    addParticipant();

    // Clear all input fields
    for (let i = 0; i < rsvpInputs.length; i++) {
      let input = rsvpInputs[i];
      if (input.type !== "submit") {
        input.value = "";
      }
    }
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", function(event) {
  event.preventDefault(); // prevents the page from refreshing
  validateForm();         // call your validation function
});



/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/