import React, {useState} from 'react';
import Square from "./Square";
import checkWinner from "../CheckWinner";

function Board() {
    const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', ''])
    const [nextLetter, setNextLetter] = useState('X');
    const [winnerAnnouncement, setWinnerAnnouncement] = useState('Game in Progress!');

    const handleSquareValue = (index: number) => {
        let newStateOfSquares = squares;
        newStateOfSquares[index] = nextLetter;

        setNextLetter(nextLetter === 'X' ? 'O' : 'X');
        setSquares(newStateOfSquares);

        const winner = checkWinner(newStateOfSquares)

        if (winner != null) {
            setWinnerAnnouncement(`${winner} has won!`)
        }
    }

    return (
        <div data-testid="board"
             style={{height: "100vh", display: "flex", flexDirection:'column', justifyContent: "center", alignItems: "center"}}>
            <h1 data-testid="winner-announcement">{winnerAnnouncement}</h1>

            <div style={{
                display: "inline-grid",
                gridGap: "2px",
                gridTemplateColumns: "repeat(3, 1fr)",
            }}>
                {squares.map((value, i) => {
                    return <Square key={i} value={value} position={i} onclick={() => handleSquareValue(i)}/>
                })}
            </div>
        </div>
    );
}

export default Board;
