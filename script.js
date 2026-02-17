const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const passwordStrength = document.getElementById("passwordStrength");
const successMessage = document.getElementById("successMessage");

function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        return false;
    }
    nameError.textContent = "";
    return true;
}

function validateEmail() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!pattern.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email";
        return false;
    }
    emailError.textContent = "";
    return true;
}

function validatePhone() {
    const pattern = /^[0-9]{10}$/;
    if (!pattern.test(phoneInput.value)) {
        phoneError.textContent = "Phone must be 10 digits";
        return false;
    }
    phoneError.textContent = "";
    return true;
}

function validatePassword() {
    const value = passwordInput.value;

    if (value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        passwordStrength.textContent = "";
        return false;
    }

    passwordError.textContent = "";

    if (value.length < 8) {
        passwordStrength.textContent = "Strength: Weak";
        passwordStrength.style.color = "red";
    } else if (value.match(/[A-Z]/) && value.match(/[0-9]/)) {
        passwordStrength.textContent = "Strength: Strong";
        passwordStrength.style.color = "green";
    } else {
        passwordStrength.textContent = "Strength: Medium";
        passwordStrength.style.color = "orange";
    }

    return true;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
passwordInput.addEventListener("input", validatePassword);

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("focus", () => {
        input.style.backgroundColor = "#f0f4ff";
    });

    input.addEventListener("blur", () => {
        input.style.backgroundColor = "#fff";
    });
});

document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const isValid =
        validateName() &&
        validateEmail() &&
        validatePhone() &&
        validatePassword();

    if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
        this.reset();
        passwordStrength.textContent = "";
    } else {
        successMessage.textContent = "";
    }
});
