// Initialize current year. Will use this when writing JSON text
const currYear = new Date().getFullYear();

// Used Live Server http://127.0.0.1:5500/
// To see how 404 errors are handled, you can comment out line 7 and uncomment line 6
// async function getCollegeDegrees(url = '/CS601_HW5_hodgins/my_college_degrees.json/hey') {
async function getCollegeDegrees(url = '/CS601_HW5_hodgins/my_college_degrees.json') {
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
        document.getElementById('json').innerHTML = "";
        // Write results header first
        document.getElementById('jsonHeader').innerHTML = "<h2>Results</h2>";
        // looping through each my_college_degrees to avoid repeating code
        for (var i=0; i < data.my_college_degrees.length; i++) {
          let school = data.my_college_degrees[i].degree.school;
          let program = data.my_college_degrees[i].degree.program;
          let type = data.my_college_degrees[i].degree.type;
          let year = data.my_college_degrees[i].degree.yearConferred;
          // If year is greater than this year, change text to make sense
          let verb;
          if (year > currYear) {
            verb = "will receive"
          } else {
            verb = "received"
          }
          // Write data to our html tag with id = 'json'
          document.getElementById('json').innerHTML += `<p>In ${year}, I ${verb} a ${type} in ${program} from ${school}.</p>`;
        }
    })
    // Print the error if one was encountered
    .catch(function(error) {
      // print the error message we defined when we threw an error above
      document.getElementById('json').innerHTML = `<p>${error}</p>`;
    });
      
} 