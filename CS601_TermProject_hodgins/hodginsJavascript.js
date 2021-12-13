// Notes: will not allow user to quit the program by clicking Cancel.
// Will also not allow user to enter blank responses. They must
// walk through the program at least one time.
// This program will only run on the home.html page.

alert("Welcome to my website!");
var user_name;
var keepLooping;
// prompt the user for their name and store in user_name variable
do {
    user_name = prompt("Please enter your first name: ");
    // Checking for null value first, as checking the length of null returns an error
    if (user_name == null || !(user_name.length > 0)) {
        alert("You must enter at least one character for your name.");
    }
    // User can only enter characters for first name
    keepLooping = false;
    for (var i = 0; i < user_name.length; i++) {
        // charAt() returns the character at position i
        // match() determines if the character is within A-Z
        if (user_name.charAt(i).match(/[A-Z]/i) == null) {
            alert("Your first name can only contain characters in the alphabet.");
            keepLooping = true;
            // Return to the form. No need to check the rest of the characters
            break;
        }
    }       
}
while (user_name == null || !(user_name.length > 0) || keepLooping == true);

alert("Welcome " + user_name + "! Enjoy my website!");