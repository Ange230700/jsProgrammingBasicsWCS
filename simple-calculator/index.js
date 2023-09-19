let playerName = prompt(`What is your name, player?`);
const rightPrice = Math.ceil(Math.random() * 100);
let playerNumber = parseInt(prompt(`Guess a number between 1 and 100, ${playerName}: `));

while (playerNumber !== rightPrice) {
    if (playerNumber < rightPrice) {
        playerNumber = parseInt(prompt(`Too low, ${playerName}. It's more, try again: `));
    }
    else if (playerNumber > rightPrice) {
        playerNumber = parseInt(prompt(`Too high, ${playerName}. It's less, try again: `));
    }
}

console.log(`Well done ${playerName}, you won!`);