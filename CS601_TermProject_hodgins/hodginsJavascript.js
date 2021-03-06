// Notes: will not allow user to quit the program by clicking Cancel.
// Will also not allow user to enter blank responses. They must
// enter at least one character in the alphabet. This program will only run on the home.html page.

// First, delay our welcomeProgram() function so all of our DOM content is loaded (Thank you Christian!!)
onload = function() {
    // wait for 500 ms (.5 seconds) to give time for DOM to load
     setTimeout( function(){
         welcomeProgram();
     }, 100);
 }

function welcomeProgram() {
    alert("Welcome to my website!");
    var user_name;
    var keepLooping;
    // prompt the user for their name and store in user_name variable
    do {
        user_name = prompt("Please enter your first name in less than 15 characters: ");
        // Checking for null value first, as checking the length of null returns an error
        if (user_name == null || !(user_name.length > 0)) {
            alert("You must enter at least one character for your name.");
        } else if (user_name.length > 15) {
            // Will limit user's first name to 15 characters
            alert("Please enter a name less than 15 characters.")
        } else {
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
    }
    while (user_name == null || !(user_name.length > 0) || user_name.length > 15 || keepLooping == true);
    
    // Show user's name in header
    document.getElementById("header").innerHTML = `<h1>Welcome ${user_name}!</h1>`
    alert("Welcome " + user_name + "! Enjoy my website!");

}