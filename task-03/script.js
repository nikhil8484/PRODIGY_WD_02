let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(index) {
    if (gameActive && board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        if (checkWin()) {
            document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (checkDraw()) {
            document.getElementById('status').textContent = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    for (let condition of winConditions) {
        let [a, b, c] = condition;
        if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(cell => cell !== '');
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.textContent = '';
    }
}
