let winner = document.querySelector('h1');
let rollOne;
let rollTwo;

function SetDice() {
    return Math.ceil(Math.random() * 6);
}

function rollDiceForPlayer1() {
    return rollOne = SetDice();
}

function rollDiceForPlayer2() {
    return rollTwo = SetDice();
}

function SetDiceRolls() {
    document.querySelector('.img1').setAttribute('src', `images/dice${rollDiceForPlayer1()}.png`);
    document.querySelector('.img2').setAttribute('src', `images/dice${rollDiceForPlayer2()}.png`);
}

function SetWinnerOfDiceRollHeader() {
    if (rollOne > rollTwo)
        winner.innerHTML = '🚩 Player 1 Wins!';
    else if (rollOne < rollTwo)
        winner.innerHTML = 'Player 2 Wins! 🚩';
    else
        winner.innerHTML = 'It is a Tie!';
}

function DeclareWinnerOfDiceRoll() {
    SetDiceRolls();
    SetWinnerOfDiceRollHeader();
}