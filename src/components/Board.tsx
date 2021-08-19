import React from 'react';
import Square from "./Square";

function Board() {
    return (
        <div data-testid="board" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{ display: "inline-grid", gridGap: "2px", gridTemplateColumns: "repeat(3, 1fr)", border: "solid 1px #000" }}>
                {Array(9).fill(null).map((tile, i:number) => (
                    <Square key={i}/>
                ))}
            </div>
        </div>
    );
}

export default Board;
