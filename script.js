document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email").value;
    
    if (emailInput.trim() === "") {
        alert("Please enter a valid email.");
        return;
    }

    document.getElementById("confirmationMessage").innerText = "Thank you! We'll get back to you soon.";
    document.getElementById("email").value = "";
});
