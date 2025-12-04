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

// STEP 1 — Original addParticipant function (now refactored)
const addParticipant = (event, person) => {
  const rsvpList = document.getElementById("rsvp-participants");

  const listItem = document.createElement("p");
  listItem.textContent = `${person.name} from ${person.hometown} has RSVP'd.`;

  rsvpList.appendChild(listItem);
};


// STEP 2 — RSVP button reference
const rsvpButton = document.getElementById("rsvp-button");


// STEP 3 — Form validation function
const validateForm = () => {

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;

  // Create the person object
  let person = {
    name: rsvpInputs["Name"].value.trim(),
    hometown: rsvpInputs["State"].value.trim(),
    email: rsvpInputs["Email"].value.trim()
  };

  // Validation loop
  for (let i = 0; i < rsvpInputs.length; i++) {
    let input = rsvpInputs[i];

    if (input.type === "submit") continue;

    if (input.value.trim().length < 2) {
      containsErrors = true;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  }

  // If valid → add participant
  if (!containsErrors) {

    // Pass the person object
    addParticipant(null, person);
    toggleModal(person);

    // Clear fields
    for (let i = 0; i < rsvpInputs.length; i++) {
      let input = rsvpInputs[i];
      if (input.type !== "submit") {
        input.value = "";
      }
    }
  }
};


// STEP 4 — Replace button listener to use validateForm
rsvpButton.addEventListener("click", function(event) {
  event.preventDefault(); 
  validateForm();
});







/*** Scroll Animations ***
  
  Purpose:
  - Use this starter code to add scroll animations to your website.

  When To Modify:
  - [ ] Project 8 (REQUIRED FEATURE)
  - [ ] Any time after
***/

// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = document.querySelectorAll('.revealable');

// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {current.classList.add('active');
        }
        // If the container is not within range, hide it by removing the 'active' class
        else { current.classList.remove('active');
        }
    }
}

// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener('scroll', reveal);
const reduceMotionButton = document.getElementById("reducedMotion");

const reduceMotionFunction = () => {
    document.body.classList.toggle("reduce-motion");
      if (document.body.classList.contains("reduce-motion")) {
        reduceMotionButton.textContent = "Reduced Motion: ON";
    } else {
        reduceMotionButton.textContent = "Reduced Motion: OFF";
    }
}

reduceMotionButton.addEventListener("click", reduceMotionFunction);



/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.getElementById("success-modal");

    let modalContent = document.getElementById("modal-text");

    // Show the modal
    modal.style.display = "flex";

    // Personalized text
    modalContent.textContent = `Thanks for RSVPing, ${person.name}! We can't wait to see you at the event!`;

    // ⭐ Step 5-B: Start animation
    let intervalId = setInterval(animateImage, 500);  
    // animateImage() runs every 500ms (0.5 seconds)

    // Hide modal after 5 seconds
    setTimeout(() => {
        modal.style.display = "none";

        // ⭐ Stop animation when modal closes
        clearInterval(intervalId);

        // Reset image rotation so it does NOT stay tilted
        modalImage.style.transform = "rotate(0deg)";
        rotateFactor = 0;

    }, 5000);
};

// TODO: animation variables and animateImage() function

// Step 5-A: Animation variables
let rotateFactor = 0;  
let modalImage = document.getElementById("modal-image");

// Step 5-A: Create the animateImage function
const animateImage = () => {

    // Toggle between 0° and -10° rotation
    if (rotateFactor === 0) {
        rotateFactor = -10;
    } else {
        rotateFactor = 0;
    }

    // Apply rotation to image
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};
