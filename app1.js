document.addEventListener("DOMContentLoaded", () => {
    const signupContainer = document.getElementById("signup-container");
    const successContainer = document.getElementById("success-container");
    const newsletterForm = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const userEmail = document.getElementById("user-email");
    const dismissButton = document.getElementById("dismiss-button");

    // Handle form submission
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();

        if (!validateEmail(emailValue)) {
            emailInput.classList.add("error-border");
            // emailInput.style.backgroundColor = "hsl(4, 100%, 67%)";
            // emailInput.style.color = "hsl(4, 100%, 67%)";
            emailError.style.display = "block";
            return;
        }

        emailInput.classList.remove("error-border");
        emailError.style.display = "none";

        userEmail.textContent = emailValue;
        signupContainer.style.display = "none";
        successContainer.style.display = "flex";
    });

    dismissButton.addEventListener("click", () => {
        successContainer.style.display = "none";
        signupContainer.style.display = "flex";
        emailInput.value = "";
    });

    // Real-time validation
    emailInput.addEventListener("input", () => {
        if (validateEmail(emailInput.value.trim())) {
            emailInput.classList.remove("error-border");
            emailError.style.display = "none";
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
