let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const message = document.getElementById('message');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

function checkWin() {
    for (let combination of winningCombination) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            message.innerText = `Jogador ${board[a]} venceu!`;
            gameActive = false;
            return;
        }
    }

    if (!board.includes('')) {
        message.innerText = 'Empate!';
        gameActive = false;
    }
}

function makeMove(cellIndex) {
    if (gameActive && board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        cells[cellIndex].innerText = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.innerText = `Vez do Jogador ${currentPlayer}`;
        checkWin();
    }
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    message.innerText = 'Vez do Jogador X';
    cells.forEach(cell => cell.innerText = '');
}

resetButton.addEventListener('click', resetBoard);
