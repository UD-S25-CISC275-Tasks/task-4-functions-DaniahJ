import React from "react";
import "./App.css";
import {
    fahrenheitToCelsius,
    add3,
    shout,
    isQuestion,
    convertYesNo,
} from "./functions";

function App() {
    console.log("Convert Fahrenheit to Celsius:", fahrenheitToCelsius(100));
    console.log("Sum of positive numbers:", add3(3, -1, 5));
    console.log("Shouting:", shout("hello"));
    console.log("Is it a question?", isQuestion("Is this working?"));
    console.log("Convert Yes/No:", convertYesNo("yes"));
    console.log("Convert Yes/No:", convertYesNo("no"));
    console.log("Convert Yes/No:", convertYesNo("maybe"));

    return (
        <div className="App">
            <header className="App-header">
                CISC275 - Task 4 - Functions in TypeScript
            </header>
            <p>Check the console for function outputs.</p>
        </div>
    );
}

export default App;
