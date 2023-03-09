import React from "react";
import "./App.scss";
import ButtonSkew from "./Components/ButtonSkew/ButtonSkew";
import Header from "./Components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header className="divHeader" />
            <ButtonSkew className="positionButton">My Button</ButtonSkew>
        </div>
    );
}

export default App;
