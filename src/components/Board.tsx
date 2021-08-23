import React, {useState} from 'react';
import Square from "./Square";

function Board() {
    const [squares, setSquares] = useState(['','','','','','','','',''])


    const handleSquareValue = (index:number) => {
        let newStateOfSquares = [...squares];
        newStateOfSquares[0] = 'X';

        setSquares(newStateOfSquares);
    }

    return (
        <div data-testid="board" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{ display: "inline-grid", gridGap: "2px", gridTemplateColumns: "repeat(3, 1fr)", border: "solid 1px #000" }}>
                {squares.map((value, i) => {
                    return <Square key={i} value={value} onclick={() => handleSquareValue(i)}/>
                })}
            </div>
        </div>
    );
}

export default Board;
