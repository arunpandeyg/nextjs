function sendEmail() {
    Email.send({
        SecureToken:"put here your elestic email token",
    //   Host: "smtp.gmail.com",
    //   Username: "",
    //   Password: "",
      To: "",
      From: document.getElementById("email").value,
      Subject: "New contact form enquiry",
      Body:
        "Name: " +
        document.getElementById("name").value +
        "<br> Email: " +
        document.getElementById("email").value +
        "<br> Phone: " +
        document.getElementById("phone").value +
        "<br> Message: " +
        document.getElementById("message").value,
    }).then((message) => alert(message, "Message sent successfully"));
}
