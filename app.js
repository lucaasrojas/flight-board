const tableBody = document.getElementById("table-body");

let flights = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: "OX 203",
    gate: "A 01",
    remarks: "ON TIME",
  },
];

const destinations = [
  "TOKYO",
  "FRANKFURT",
  "DUBAI",
  "LONDON",
  "OMAN",
  "BEIRUT",
];
const remarks = ["ON TIME", "DELAYED", "CANCELLED"];
let hour = 15;

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");
    for (flightDetail in flight) {
      const tableCell = document.createElement("td");
      const word = Array.from(flight[flightDetail]);
      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div");
        setTimeout(() => {
          letterElement.classList.add("flip");
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 200 * index);
      }
      tableRow.append(tableCell);
    }
    tableBody.append(tableRow);
  }
}

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function generateRandomNumber(maxNumber) {
  const numbers = "0123456789";
  if(maxNumber){
    const newNumbers = numbers.slice(0,maxNumber)
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
  }
  return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

function generateTime () {

    return generateRandomNumber(2) + generateRandomNumber(3) + ":" + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
  flights.shift()
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight:
      generateRandomLetter() +
      generateRandomLetter() +
      " " +
      generateRandomNumber() +
      generateRandomNumber() +
      generateRandomNumber(),
    gate: generateRandomLetter() + " " + generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)],
  });
  tableBody.textContent = ""
  populateTable()
}

setInterval(shuffleUp, 2000)
populateTable();
