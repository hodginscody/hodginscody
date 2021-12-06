async function getCollegeDegrees(url = '') {
    await fetch(url).then((response) => response.json())
      .then((data) => {
          if (response.status !== "200") {
            alert("Error with request");
          } else {
          document.write("In ${data.data[0].bachelors.yearConferred}, I received a ${data.data[0].bachelors.type} \
            in ${data.data[0].bachelors.program} from ${data.data[0].bachelors.school}");
          }
      )
      
}
  