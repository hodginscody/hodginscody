// Create an array of active facilitators in this class that we 
// will validate input against
let validFacilitators = ["Josh", "Chris", "Fazil", "Christian"];

// Submit() is called upon a user submitting informationalForm
// If the function returns false, that means the user entered invalid data
// and they will not be redirected to the submission database.
// Otherwise, data will be submitted and user will be redirected to the 
// submission database.
function Submit() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let facilitator = document.getElementById("facilitator").value;
    // Create an array that contains firstName and lastName, so we don't
    // have extra code and can just loop through each validation
    let nameArray = [firstName, lastName];
    // Loop through nameArray to validate firstName and lastName
    for (var j = 0; j < nameArray.length; j++) {
        if (nameArray[j].length < 2) {
            // j = 0 -> First Name
            // j = 1 -> Last Name
            if (j == 0) {
                document.getElementById('errors').innerHTML = "**First Name must be at least two characters in the alphabet.**";
                document.getElementById("firstName").value = "";
            } else {
                document.getElementById('errors').innerHTML = "**Last Name must be at least two characters in the alphabet.**";
                document.getElementById("lastName").value = "";
            }
            return false;
        }
        // Loop through each character in firstName or lastName and verify it is
        // in the alphabet
        for (var i = 0; i < nameArray[j].length; i++) {
            // charAt() returns the character at position i
            // match() determines if the character is within A-Z
            // i makes the Regex case insensitive
            if (nameArray[j].charAt(i).match(/[A-Z]/i) == null) {
                if (j == 0) {
                    document.getElementById('errors').innerHTML = "**First Name can only contain characters in the alphabet.**";
                    // If user entry is invalid, set the field to blank
                    document.getElementById("firstName").value = "";
                } else {
                    document.getElementById('errors').innerHTML = "**Last Name can only contain characters in the alphabet.**";
                    document.getElementById("lastName").value = "";
                }
                // Return to the form. No need to check the rest of the characters
                return false;
            }
        }
    }
    // Next, validate that the facilitator the user entered is valid
    // Will allow user to enter upper or lower case as long as name matches one of the facilitators
    for (var k = 0; k < validFacilitators.length; k++) {
        // If we find a matching facilitator, then break from this loop
        if (facilitator.toLowerCase() == validFacilitators[k].toLowerCase()) {
            break;
        }
    }
    // If facilitator was not found in validFacilitators, then return an error
    // If k equals the length of validFacilitators, then we know the above for loop
    // did not find any match.
    if (k == validFacilitators.length) {
        // Show the user all possible facilitators they can enter.
        // Use join(", ") to separate array of facilitators by comma and space
        document.getElementById('errors').innerHTML = "You entered an invalid facilitator. Please enter one of the following: " + validFacilitators.join(", ");
        document.getElementById("facilitator").value = "";
        return false;
    }
    // If validation passes, then return true so we can be redirected to database web address 
    // if (passedValidation !== false) {
        passedValidation = true;
        // If we pass all validation, capitalize first letter in facilitator and keep the rest lowercase.
        // Will not do the same for firstName and lastName because user could intend to make letters other
        // than the first capital.
        // Capitalize the letter at position 0, slice at the first position and lowercase all letters beyond that, and
        // concatenate the two.
        document.getElementById("facilitator").value = facilitator.charAt(0).toUpperCase() + facilitator.slice(1,facilitator.length).toLowerCase();
    // }
    return true;
}
   