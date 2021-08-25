import React, {useState} from 'react';
import Square from "./Square";

function Board() {
    const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', ''])
    const [nextLetter, setNextLetter] = useState('X');
    const [winnerAnnouncement, setWinnerAnnouncement] = useState('Game in Progress!');

    const handleSquareValue = (index: number) => {
        let newStateOfSquares = squares;
        newStateOfSquares[index] = nextLetter;

        setNextLetter(nextLetter === 'X' ? 'O' : 'X');
        setSquares(newStateOfSquares);

        if (newStateOfSquares[0] === 'X' && newStateOfSquares[1] === 'X' && newStateOfSquares[2] === 'X') {
            setWinnerAnnouncement('X has won!')
        }
    }

    return (
        <div data-testid="board"
             style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <h1 data-testid="winner-announcement">{winnerAnnouncement}</h1>

            <div style={{
                display: "inline-grid",
                gridGap: "2px",
                gridTemplateColumns: "repeat(3, 1fr)",
                border: "solid 1px #000"
            }}>
                {squares.map((value, i) => {
                    return <Square key={i} value={value} onclick={() => handleSquareValue(i)}/>
                })}
            </div>
        </div>
    );
}

export default Board;
