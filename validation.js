function validateForm() {
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;

    // Check if any of the fields are empty
    if (username === "" || email === "" || password === "") {
        alert("All fields must be filled out.");
        return false; // Prevent form submission
    }

    // Basic validation for email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    // If validation passes, redirect to the success page
    window.location.href = "Registration Success.html";
    return false; // Prevent form from submitting in the traditional way
}

