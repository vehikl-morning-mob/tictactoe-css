import React from 'react';

// @ts-ignore
function Square({value, onclick}) {
    return (
        <button onClick={onclick} style={{border: "solid 2px #000", height: "100px", width: "100px", display: "flex", justifyContent: "center",
            alignItems: "center", fontSize: "3rem"}} data-testid={'tile'}>{value}</button>
    );
}

export default Square;
