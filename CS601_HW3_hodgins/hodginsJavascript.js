// Notes: will not allow user to quit the program by clicking Cancel.
// Will also not allow user to enter blank responses. They must
// walk through the program at least one time.
// This program will only run on the home.html page.

alert("Welcome to my website!");
var user_name;
// prompt the user for their name and store in user_name variable
do {
    user_name = prompt("Please enter your first name: ");
    // Checking for null value first, as checking the length of null returns an error
    if (user_name == null || !(user_name.length > 0)) {
        alert("You must enter at least one character for your name.");
    }
}
while (user_name == null || !(user_name.length > 0));
alert("Welcome " + user_name + "!");
// Ask user to enter two numbers. If they enter something other than a number, keep reprompting them
// Initialize variables we will use below.
var number_one;
var number_two;
var sum_numbers;

// Define a function that adds the two numbers the user's entered
function addUserNumbers(num1, num2) {
    // Add the two numbers and return the result
    return (num1 + num2);
}

// Define a function that will ask user to enter two numbers, add them, and return various alerts
// depending upon the results
function userInputAndResults() {
    // prompt user for first number until they enter a valid number
    do {
        // prompt() by default returns a string value
        number_one = prompt("Please enter a number of your choice: ");
        // If user did not enter a number, isNaN() is true and notify user
        if (isNaN(number_one) || number_one == null || number_one.length < 1) {
            alert("Your entry '" + number_one + "' is not a number.");
        }
    }
    while (isNaN(number_one) || number_one == null || number_one.length < 1);
    
    // prompt user for second number until they enter a valid number
    do {
        number_two = prompt("Please enter another number of your choice: ");
        // If user did not enter a number, isNaN() is true and notify user
        if (isNaN(number_two) || number_two == null || number_two.length < 1) {
            alert("Your entry '" + number_two + "' is not a number.");
        }
    }
    while (isNaN(number_two) || number_two == null || number_two.length < 1);

    // Use ParseFloat() so we can convert input value to numeric and do proper addition
    number_one = parseFloat(number_one);
    number_two = parseFloat(number_two);

    // Call the function to add the two user entered numbers and return the results to the user via an alert
    // Rounding the sum to two decimal places using toFixed() to keep things clean
    sum_numbers = (addUserNumbers(number_one, number_two)).toFixed(2);
    alert("The sum of your two numbers is: " + sum_numbers);

    // If the sum is greater than 10, tell the user they entered a big number. Otherwise, tell them they 
    // entered a small number
    if (sum_numbers > 10) {
        alert("That is a big number.");
    } else {
        alert("That is a small number.");
    }
}
// Call userInputAndResults to begin the initial user prompts
userInputAndResults();

// Keep allowing the user to enter two new numbers until they decide to quit
// Initialize continue_prompts = "yes" so we prompt the user at least once
var continue_prompts = "yes";
do {
    continue_prompts = prompt("Do you want to add two numbers again? Enter 'yes' or 'no': ");
    // if the user did not enter exactly "yes" or "no", tell them and reprompt them
    if (!(continue_prompts == "yes" || continue_prompts == "no")) {
        alert("Your entry '" + continue_prompts + "' is invalid. Please only enter 'yes' or 'no'.");
    } else if (continue_prompts == "yes") {
        // If user entered "yes", then call userInputAndResults()
        userInputAndResults();
    }
    
}
while (!(continue_prompts == "no"));

// If user does not want to continue adding numbers, thank them for using the program
// We don't need to check if continue_prompts == "no" because making it past the do/while loop
// implies they entered "no".
alert("Thank you for using the program. Enjoy the website!");