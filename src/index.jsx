import React from "react";
import ReactDOM from "react-dom/client";
import Functia from "./Functia";
class App extends React.Component{
    render() {
        return(
       <Functia />
        )
    }
}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);