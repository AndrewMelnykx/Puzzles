const text = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Extract Gmail Addresses</title>
</head>
<body>
    <h2>Extract Gmail Addresses from Below:</h2>
    
    <p>john.doe@gmail.com</p>
    <p>jane.smith@gmail.com</p>
    <p>user123@gmail.com</p>
    <p>example.mail@gmail.com</p>
    
    <p>wrong.email@yahoo.com</p>
    <p>another.wrong@outlook.com</p>
    <p>notgmail@company.org</p>
    <p>test@domain.net</p>

    <!-- Invalid Emails with Wrong Content -->
    <p>wrong-email!@gmail.com</p> <!-- Contains '!' which is banned -->
    <p>john..doe@gmail.com</p> <!-- Contains consecutive dots -->
    <p>user#123@gmail.com.uk</p> <!-- Contains '#' which is not allowed -->
    <p>johndoe@gnail.com</p> <!-- Misspelled domain -->
    <p>jane.smith@.com</p> <!-- Ends with a dot before the domain -->
    <p>alice@exam!ple.com</p> <!-- Contains '!' which is banned -->
    <p>bob@com_?example.com</p> <!-- Contains '_' and '?' which are invalid -->
</body>
</html>`;

// const emailPart = `([A-Za-z0-9.]+@[a-z]{2,6}\\.[a-z]{2,6})`;

const emailPart = `([A-Za-z0-9]+@[a-z]{2,6}(?:\\.[a-z]{2,6})+)`;
const wholeGroup = `${emailPart}`;
const regex = new RegExp(wholeGroup, "gi");

console.log(text.match(regex));
