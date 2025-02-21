import "./App.css";
import React, { useEffect, useState } from "react";

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

    useEffect(() => {
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

        // 📌 Student Tests (from objects.ts)
        console.log("Initial Student:", student);
        setStudent((prevStudent) => {
            if (!prevStudent.scores.includes(95)) {
                return addScore(prevStudent, 95); // ✅ Prevents duplicate 95s
            }
            return prevStudent;
        });

        // 📌 Quiz Operations (from nested.ts)
        console.log("Initial Quiz:", quiz);
        setQuiz((prevQuiz) => {
            if (!prevQuiz.questions.some((q) => q.text === "What is 5*5?")) {
                return addQuestion(prevQuiz, {
                    id: 3,
                    text: "What is 5*5?",
                    published: true,
                }); // ✅ Prevents duplicate question
            }
            return prevQuiz;
        });
        console.log("Published Questions:", getPublishedQuestions(quiz));
    }, [quiz, student]); // ✅ Now includes dependencies, avoiding warning

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
