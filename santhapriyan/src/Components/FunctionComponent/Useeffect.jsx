import { useState, useEffect } from "react";
import axios from "axios";
var Useeffect = () => {
    /*var [txt, settxt] = useState("kongu");
    useEffect(()=>{
       
        console.log(txt);
    },[txt])
    
        <section>
            <h1>
                Use Effect example
            </h1>
            <input type="text" placeholder="Enter your text" value={txt} onChange={(e) => { settxt(e.target.value) }} />
            <h2>text type is {txt}</h2>
        </section>
    )
        */

    var [post, setpost] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) =>{console.log(res)
            setpost(res.data)
        }).catch((err) => console.log(err))
    },[])
    return (
        <div>
            <h1>fetching data from json placeholdr api</h1>
            <h2>post are </h2>
            <ol>
               {post.map((data)=>(<li key={data.id}>{data.title}</li>))}
            </ol>
        </div>
    )

}
export default Useeffect;