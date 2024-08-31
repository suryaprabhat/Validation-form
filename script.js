var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById("contact-phone").value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone number is Invalid';
        return false;
    }
    if (!phone.match(/^\d{10}$/)) {
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.innerHTML = 'Email is invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact-message").value;

    if (message.length == 0) {
        messageError.innerHTML = 'Message is required';
        return false;
    }
    if (message.length < 10) {
        messageError.innerHTML = 'Message should be at least 10 characters long';
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// Function to show the pop-up
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Update validateForm function to show the pop-up on successful submission
function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.innerHTML = 'Please fix errors to submit';
        return false;
    }
    submitError.innerHTML = '<i class="fas fa-check-circle"></i> Form Submitted Successfully';
    showPopup(); // Show the pop-up
    return false; // Prevent form submission to demonstrate the pop-up
}