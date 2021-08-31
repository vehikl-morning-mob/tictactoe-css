import React from 'react';

// @ts-ignore
function Square({value, onclick, position}) {

    const boxStyles = [
        {
            borderRight: 'solid 2px black',
            borderBottom:  'solid 2px black',
        },
         {},
         {},
        {},
        {},
         {},
         {},
         {},
    ];

    const baseStyles = {margin:0, height: "100px", width: "100px", display: "flex", justifyContent: "center",
        alignItems: "center", fontSize: "3rem"};

    const styles = { ...baseStyles, ...boxStyles[position]}

    return (
        <button onClick={onclick} style={styles} data-testid={'tile'}>{value}</button>
    );
}

export default Square;
