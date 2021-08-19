import React from 'react';

function Board() {
    return (
        <div data-testid="board">
            <div style={{ display: "grid", gridGap: "2px", gridTemplateColumns: "repeat(3, 1fr)" }}>
                {Array(9).fill(null).map((tile) => (
                    <div data-testid={'tile'}>x</div>
                ))}
            </div>
        </div>
    );
}

export default Board;
