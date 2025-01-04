import React, { useState, useMemo } from 'react'
var SlowFunction = (number) => {
    for (let i = 0; i < 1000000000; i++) {

    }
    return number * 2;
}
var UseMemo = () => {
    var [num, setnumber] = useState(0);
    var [theme, updatetheme] = useState(true);
    var Dtheme = {

        backgroundColor: (theme) ? "black" : "white",

        color: (theme) ? "white" : "black"
    }
    var  Doublingannumber = useMemo(() => {
        return SlowFunction(num)
    }, [num])
    return (
        <div>
            <h1>this is useMemo</h1>
            <input type="number"  value={num} onChange={(e) => setnumber(e.target.value)} />
            <button onClick={() => updatetheme(!theme)}>toggle theme</button>
            <h1 style={Dtheme}>  {Doublingannumber}</h1>
        </div>

    )
}
export default UseMemo;    