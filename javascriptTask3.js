let name = prompt("Please enter your name:");

while (!name || typeof name !== "string") {
  name = prompt("Please enter a valid name:");
}

let birthYear = parseInt(prompt("Please enter your birth year:"));

while (
  isNaN(birthYear) ||
  birthYear < 1900 ||
  birthYear >= 2010
) {
  birthYear = parseInt(prompt("Please enter a valid birth year:"));
}

let age = new Date().getFullYear() - birthYear;

let message = `<u><b>Name:</b></u> ${name}<br><u><b>Birth Year:</b></u> ${birthYear}<br><u><b>Age:</b></u> ${age}`;
document.write(message);