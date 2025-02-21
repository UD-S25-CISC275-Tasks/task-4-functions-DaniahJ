import "./App.css";
import React, { useEffect, useState, useRef } from "react";

// Import functions from your modules
import { add, subtract, multiply } from "./functions";
import { sumArrays, removeLowNumbers } from "./arrays";
import { makeQuiz, addQuestion, getPublishedQuestions, Quiz } from "./nested";
import { createStudent, addScore, Student } from "./objects";

const App: React.FC = () => {
    const [quiz, setQuiz] = useState<Quiz>(
        makeQuiz("Math Quiz", [
            { id: 1, text: "What is 2+2?", published: true },
            { id: 2, text: "What is 10/2?", published: false },
        ]),
    );

    const [student, setStudent] = useState<Student>(
        createStudent("1", "Alice", [80, 90]),
    );

    // ✅ Prevent useEffect from running twice
    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current) return;
        effectRan.current = true;

        console.log("🔹 Function Tests 🔹");

        // 📌 Basic Math Operations (from functions.ts)
        console.log("Addition (3 + 5):", add(3, 5));
        console.log("Subtraction (10 - 4):", subtract(10, 4));
        console.log("Multiplication (6 * 7):", multiply(6, 7));

        // 📌 Array Operations (from arrays.ts)
        console.log("Sum Arrays:", sumArrays([1, 2, 3], [4, 5, 6]));
        console.log(
            "Filter Numbers >= 10:",
            removeLowNumbers([5, 10, 15, 2], 10),
        );

        // student Tests (from objects.ts)
        console.log("Initial Student:", student);
        setStudent((prevStudent) => addScore(prevStudent, 95));

        //Quiz Operations (from nested.ts)
        console.log("Initial Quiz:", quiz);
        setQuiz((prevQuiz) =>
            addQuestion(prevQuiz, {
                id: 3,
                text: "What is 5*5?",
                published: true,
            }),
        );
        console.log("Published Questions:", getPublishedQuestions(quiz));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Check the console for function outputs.</p>

            <h2>Quiz Questions</h2>
            <ul>
                {quiz.questions.map((q) => (
                    <li key={q.id}>
                        {q.text} - {q.published ? "✅" : "❌"}
                    </li>
                ))}
            </ul>

            <h2>Student Info</h2>
            <p>Name: {student.name}</p>
            <p>Scores: {student.scores.join(", ")}</p>
        </div>
    );
};

export default App;
