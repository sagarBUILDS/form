document.getElementById('complaintForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to test validation

    // Clear previous error message
    document.getElementById('error-message').textContent = '';

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const complaint = document.getElementById('complaint').value;

    // Validate the form data
    if (!name || !email || !subject || !complaint) {
        document.getElementById('error-message').textContent = 'All fields are required!';
        return; // Stop form submission if validation fails
    }

    // If validation is successful, display a success message (or handle further actions)
    alert('Complaint submitted successfully!');

    // Optionally, you can clear the form or redirect the user
    // document.getElementById('complaintForm').reset();
});
