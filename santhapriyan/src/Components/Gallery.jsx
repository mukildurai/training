import { useState } from "react";


const Gallery = () => {
    var [count, setcount] = useState(0);

    function increment() {
        setcount(count + 1);
    }
    function decrement() {
        setcount(count - 1);
    }


    return (
        <section>
            <h1>this is my gallery  learning state concept </h1>
            <h1>this counter is {count}</h1>
            <button onMouseOver={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={() => setcount(0)}>reset</button>
        </section>



    )
}
export default Gallery;
