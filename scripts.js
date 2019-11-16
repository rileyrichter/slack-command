// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://webflow-node-api.herokuapp.com/status', true)

request.onload = function() {
  // Begin accessing JSON data here
}

// Send request
request.send()

// Begin accessing JSON data here
var data = JSON.parse(this.response)

data.forEach(obj => {
  // Log each movie's title
  console.log(obj.name)
})
