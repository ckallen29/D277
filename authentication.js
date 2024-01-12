const submitButton = document.getElementById("formsubmit");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const confirm = document.getElementById("confirm").value;
    const question = document.getElementById("question").value;

    if (firstName != "" && lastName != "" && email != "" && confirm != "" && email === confirm) {
        alert("Thank you for your message!");
        document.getElementById("contact-form").submit();
    } else {
        alert("Please try again");
        // Prevent form submission if authentication fails
    }
});