import { useContext } from "react";

import {ThemeProvider} from "../FunctionComponent/UseContext";



var StudentResults =()=>{
    var result=useContext(ThemeProvider);
    return(
        <>
        <h1>this is student results is {result.cgpa}and gpa is {result.gpa}</h1>
        </>
    )
}
export default StudentResults;