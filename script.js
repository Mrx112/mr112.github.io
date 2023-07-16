// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create an object with the form data
  const data = {
    name: name,
    email: email,
    message: message
  };

  // Send a POST request to the server with the form data
  fetch('/api/portfolio', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
    // Perform any desired actions after successful submission
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle error case
  });
}

// Add event listener to the form submit button
document.getElementById('portfolioForm').addEventListener('submit', handleSubmit);

