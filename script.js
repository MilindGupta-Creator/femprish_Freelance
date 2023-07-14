document.getElementById("subscription-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the email input value
    var email = document.getElementById("email-input").value;
  
    // Perform validation or send the email to your server for processing
  
    // Clear the input field
    document.getElementById("email-input").value = "";
  
    // Display a success message or redirect to a thank you page
    alert("Thank you for subscribing!");
  });
  