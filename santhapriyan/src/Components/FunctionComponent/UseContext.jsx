
import React from "react";

import Component2 from "../Contextcomponents/Component2";
export var ThemeProvider = React.createContext();
var UseContext = () => {
    return (
        <div>
            <ThemeProvider.Provider value={{ cgpa: "10.00",gpa:"9.98" }}>
                <h1>this is example for use ref</h1>
                <Component2 />
            </ThemeProvider.Provider>
        </div>
    ) ;          

};
export default UseContext;
