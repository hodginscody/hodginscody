// window.onload = function() {
//     let clickedSubmit = document.getElementById('submit');
//     clickedSubmit.onclick = Submit;
//  }
   
function Submit() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let facilitator = document.getElementById("facilitator").value;
    let passedValidation;
    if (firstName.length < 2) {
        alert("First Name must be at least two characters in the alphabet.");
        passedValidation = false;
    }
    for (i in firstName) {
        if (!(firstName[i] in [A-Z] || firstName[i] in [a-z])) {
            alert("First Name can only contain characters in the alphabet.");
            passedValidation = false;
        }
    }
    if (!(passedValidation == false)) {
        passedValidation = "https://bucs601.com/submit.php";
    }
    return passedValidation;
}
   