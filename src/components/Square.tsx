import React from 'react';

function Square() {
    return (
        <button style={{border: "solid 2px #000", height: "100px", width: "100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "3rem"}} data-testid={'tile'}></button>
    );
}

export default Square;
