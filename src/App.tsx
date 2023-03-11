import React from "react";
import "./App.scss";
import ButtonSkew from "./Components/ButtonSkew/ButtonSkew";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";

function App() {
    return (
        <div className="App">
            <Header className="divHeader" />
            <ButtonSkew className="positionButton">My Button</ButtonSkew>
            <Input className="divInputInApp" placeholder="ggg" />
        </div>
    );
}

export default App;
