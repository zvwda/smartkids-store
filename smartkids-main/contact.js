    function success() {
    alert('message sent successfully');
}

function sendEmail(){
    Email.send({
Host : "smtp@gmail.com",
Username : "ziad walid",
Password : "ziadwalid123",
To : 'zwalid327@gmail.com',
From : document.getElementById("email").value,
Subject : "new contact from enquiry",
Body : "And this is the body"
}).then(
message => alert(message)
);
}
