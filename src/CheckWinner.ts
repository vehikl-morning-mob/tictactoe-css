const checkWinner = (gameState: string[]) => {
    const allWinners = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < allWinners.length; i++) {
        const [a, b, c] = allWinners[i];
        if (gameState[a] && gameState[a]=== gameState[b] && gameState[a]===gameState[c]) {
            return `${gameState[a]}`;
        }
    }

    return null;
}

export default checkWinner