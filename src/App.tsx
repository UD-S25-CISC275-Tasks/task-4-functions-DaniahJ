import React from "react";
import "./App.css";

// Array operations
const numbers = [1, 2, 3, 4, 5, 6];
const doubledNumbers = numbers.map((num) => num * 2);
const filteredNumbers = numbers.filter((num) => num % 2 === 0);
const summedNumbers = numbers.reduce((sum, num) => sum + num, 0);

// Object operations
interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 31 },
];

const updatedPeople = people.map((person) =>
    person.name === "Alice" ? { ...person, age: 20 } : person,
);
const filteredPeople = people.filter((person) => person.age > 25);

// Nested data operations
interface Movie {
    title: string;
    year: number;
    genres: string[];
}

interface MovieCollection {
    name: string;
    movies: Movie[];
}

const movieCollection: MovieCollection = {
    name: "Favorite Movies",
    movies: [
        { title: "Inception", year: 2010, genres: ["Sci-Fi", "Thriller"] },
        { title: "The Matrix", year: 1999, genres: ["Sci-Fi", "Action"] },
    ],
};

const newMovie: Movie = {
    title: "Interstellar",
    year: 2014,
    genres: ["Sci-Fi", "Drama"],
};
const updatedMovieCollection = {
    ...movieCollection,
    movies: [...movieCollection.movies, newMovie],
};

function App(): React.JSX.Element {
    console.log("Doubled Numbers:", doubledNumbers);
    console.log("Filtered Even Numbers:", filteredNumbers);
    console.log("Summed Numbers:", summedNumbers);
    console.log("Updated People:", updatedPeople);
    console.log("Filtered People:", filteredPeople);
    console.log("Updated Movie Collection:", updatedMovieCollection);

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Check the console for function outputs.</p>
        </div>
    );
}

export default App;
