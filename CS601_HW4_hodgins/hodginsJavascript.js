// window.onload = function() {
//     let clickedSubmit = document.getElementById('submit');
//     clickedSubmit.onclick = Submit;
//  }

// Create an array of active facilitators in this class that we 
// will validate input against
let validFacilitators = ["Josh", "Chris", "Fazil", "Christian"];
   
function Submit() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let facilitator = document.getElementById("facilitator").value;
    // Create an array that contains firstName and lastName, so we don't
    // have extra code and can just loop through each validation
    let nameArray = [firstName, lastName];
    // passedValidation either equals false (which means we don't complete 
    // submitting the form) or the web address we are submitting to
    let passedValidation;
    // Loop through nameArray to validate firstName and lastName
    for (var j = 0; j < nameArray.length; j++) {
        if (nameArray[j].length < 2) {
            // j = 0 -> First Name
            // j = 1 -> Last Name
            if (j == 0) {
                alert("First Name must be at least two characters in the alphabet.");
            } else {
                alert("Last Name must be at least two characters in the alphabet.");
            }
            // Will not return here because I want to let the user know if they've
            // entered invalid characters as well.
            passedValidation = false;
        }
        // Loop through each character in firstName or lastName and verify it is
        // in the alphabet
        for (var i = 0; i < nameArray[j].length; i++) {
            // charAt() returns the character at position i
            // match() determines if the character is within A-Z
            // i makes the Regex case insensitive
            if (nameArray[j].charAt(i).match(/[A-Z]/i) == null) {
                if (j == 0) {
                    alert("First Name can only contain characters in the alphabet.");
                } else {
                    alert("Last Name can only contain characters in the alphabet.");
                }
                passedValidation = false;
                // Return to the form. No need to check the rest of the characters
                return passedValidation;
            }
        }
    }
    // Next, validate that the facilitator the user entered is valid
    for (var k = 0; k < validFacilitators.length; k++) {
        // If we find a matching facilitator, then break from this loop
        if (facilitator == validFacilitators[k]) {
            break;
        }
    }
    // If facilitator was not found in validFacilitators, then return an error
    // If k equals the length of validFacilitators, then we know the above for loop
    // did not find any match.
    if (k == validFacilitators.length) {
        alert("You entered an invalid facilitator. Please enter one of the following: " + validFacilitators.join(","));
        passedValidation = false;
        return passedValidation;
    }
    // If validation passes, then return the web address of the database we are submitting to  
    if (passedValidation !== false) {
        passedValidation = "https://bucs601.com/submit.php";
    }
    return passedValidation;
}
   