async function postCollegeDegrees(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors',     
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    return response.json(); 
  }
  
  postCollegeDegrees('https://github.com/hodginscody/hodginscody', "my_college_degrees.json")
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
  });
  