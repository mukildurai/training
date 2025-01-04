import { useRef, useState, useEffect } from "react";
var UseRef = () => {
    var [txt, settxt] = useState("");
    var prevtxt = useRef("");
    useEffect(() => {
        prevtxt.current = txt;
        console.log(prevtxt.current);
    }, [txt])
    return (
        <div>
            <h1>this is example for use ref</h1>
            <input type="text" value={txt} onChange={(e) => settxt(e.target.value)} />

            <h1>current text is {txt} and previous text is {prevtxt.current}</h1>

        </div>
    )
}
export default UseRef;
