import React from "react";
import "./App.css";
import {
    add,
    subtract,
    multiply,
    divide,
    isEven,
    greet,
    countFangs,
} from "./functions";

function App(): React.JSX.Element {
    console.log("Addition (5 + 3):", add(5, 3));
    console.log("Subtraction (10 - 4):", subtract(10, 4));
    console.log("Multiplication (7 * 2):", multiply(7, 2));
    console.log("Division (8 / 2):", divide(8, 2));
    console.log("Division by Zero (10 / 0):", divide(10, 0));
    console.log("Is 6 even?:", isEven(6));
    console.log("Greeting:", greet("Daniah"));
    console.log("Count vampire fangs (3 vampires):", countFangs(3));

    return (
        <div className="App">
            <header className="App-header">
                CISC275 - Task 4: Functions in TypeScript
            </header>
            <p>Check the console for function outputs.</p>
        </div>
    );
}

export default App;
