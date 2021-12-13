const answerArea = document.getElementById('json');
let tempString;
// These two variables will show us if the answer was correct or not
const greenCheck = "&#9989";
const redCross = "&#10060;";

// Used Live Server http://127.0.0.1:5500/
async function getAnswers(url = '/CS601_TermProject_hodgins/answers.json') {
    await fetch(url, {
      method: "GET",
      // Specifying no-cors isn't necessary, but just a safety to make sure the fetch is not disabled by cors
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(response => { 
      // response.ok checks whether status code is within 200s, which is good
      // If it's not, we throw an error
      if (!response.ok) {
        // notify user of the response status code and text
        throw new Error(`Error Status Code ${response.status}: ${response.statusText}`);
      }
      return response.json(); })
    .then(data => {
        // Clear any existing data in the json div first, so it doesn't keep appending
        answerArea.innerHTML = "";
        // Write results header first
        document.getElementById('jsonHeader').innerHTML = "<h2>Results</h2>";
        // looping through each my_college_degrees to avoid repeating code
        for(let answer of data.answers){
          let answer1 = answer.answer1;
          let answer2 = answer.answer2;
          let answer3 = answer.answer3;
          // What are the user's answers? querySelector finds which button user selected
          let userAnswer1 = document.querySelector( 'input[name="questionOne"]:checked');
          // Check if user actually selected any of the choices
          if (userAnswer1 !== null) {
            userAnswer1 = userAnswer1.value;
          } else {
            userAnswer1 = "";
          }
          let userAnswer2 = document.querySelector( 'input[name="questionTwo"]:checked');
          if (userAnswer2 !== null) {
            userAnswer2 = userAnswer2.value;
          } else {
            userAnswer2 = "";
          }
          let userAnswer3 = document.querySelector( 'input[name="questionThree"]:checked');
          if (userAnswer3 !== null) {
            userAnswer3 = userAnswer3.value;
          } else {
            userAnswer3 = "";
          }
   
          // Write data to our html tag with id = 'json'
          answerArea.innerHTML += `<p><b>Question 1</b></p>`;
          // tempString is so we can easily append text, like checkmark or X, to same line of answerArea
          tempString = `<p>Your Choice: ${userAnswer1}`;
          // Compare user's answers to the correct ones
          if (userAnswer1 !== null && answer1 == userAnswer1) {
            tempString += `&nbsp;${greenCheck}</p>`;
          } else {
            tempString += `&nbsp;${redCross}</p>`
          }
          answerArea.innerHTML += tempString;
          answerArea.innerHTML += `<p>Correct Choice: <b>${answer1}</b></p>`;
          
          answerArea.innerHTML += `<p><b>Question 2</b></p>`;
          tempString = `<p>Your Choice: ${userAnswer2}`;
          if (userAnswer2 !== null && answer2 == userAnswer2) {
            tempString += `&nbsp;${greenCheck}</p>`;
          } else {
            tempString += `&nbsp;${redCross}</p>`
          }
          answerArea.innerHTML += tempString;
          answerArea.innerHTML += `<p>Correct Choice: <b>${answer2}</b></p>`;

          answerArea.innerHTML += `<p><b>Question 3</b></p>`;
          tempString = `<p>Your Choice: ${userAnswer3}`;
          if (userAnswer3 !== null && answer3 == userAnswer3) {
            tempString += `&nbsp;${greenCheck}</p>`;
          } else {
            tempString += `&nbsp;${redCross}</p>`
          }
          answerArea.innerHTML += tempString;
          answerArea.innerHTML += `<p>Correct Choice: <b>${answer3}</b></p>`;

        }
    })
    // Print the error if one was encountered
    .catch(function(error) {
      // print the error message we defined when we threw an error above
      answerArea.innerHTML = `<p>${error}</p>`;
    });
      
} 