import React from 'react';

function Board() {
    return (
        <div data-testid="board" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{ display: "inline-grid", gridGap: "2px", gridTemplateColumns: "repeat(3, 1fr)", border: "solid 1px #000" }}>
                {Array(9).fill(null).map((tile) => (
                    <div style={{border: "solid 2px #000", height: "100px", width: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "3rem"}} data-testid={'tile'}>x</div>
                ))}
            </div>
        </div>
    );
}

export default Board;
