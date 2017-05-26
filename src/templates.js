function greet(name) {
    console.log(`Hello  ${name}`.toUpperCase());
}

greet("Bill");

function createEmail(to, from, subject, message) {
    console.log(`
      To: ${to}
      From: ${from}
      Subject: ${subject}
      Message: ${message}
`);
}

createEmail('john@mail.com', 'Jane@mail.com', 'Hello', 'How are you doing?');

function add(x,y) {
    console.log(`${x} + ${y} = ${parseInt(x)+parseInt(y)}`);
}

let name2 = ['bill', 'alex','richmond'];
let name = "Stiv";
console.log(upperName`Hello Maks Barskih ${name}`);
function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}