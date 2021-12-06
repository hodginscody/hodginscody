async function getCollegeDegrees(url = '/CS601_HW5_hodgins/my_college_degrees.json') {
    await fetch(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(response => { 
      // response.ok checks whether status is within 200s, which is good, or anything else, which is good
      if (!response.ok) {
        // notify user of the response status code
        throw new Error("HTTP error " + response.status);
      }
      return response.json(); })
    .then(data => {
        for (var i=0; i < data.my_college_degrees.length; i++) {
          let school = data.my_college_degrees[i].degree.school;
          let program = data.my_college_degrees[i].degree.program;
          let type = data.my_college_degrees[i].degree.type;
          let year = data.my_college_degrees[i].degree.yearConferred;
          // Write data to our html page
          document.write(`In ${year}, I received a ${type} in ${program} from ${school}`);
        }
    })
    .catch(function() {
      // element.parentElement.innerHTML = `Error: ${error}`;
      console.error('There was an error!');
    });
      
}
  