export interface Quiz {
    title: string;
    questions: string[];
    difficulty: "easy" | "medium" | "hard";
}

// Function to create a new quiz
export const makeQuiz = (
    title: string,
    questions: string[],
    difficulty: "easy" | "medium" | "hard",
): Quiz => {
    return { title, questions, difficulty };
};
// Function to change the difficulty of a quiz
export const changeDifficulty = (
    quiz: Quiz,
    newDifficulty: "easy" | "medium" | "hard",
): Quiz => {
    return { ...quiz, difficulty: newDifficulty };
};
// Function to add a new question to the quiz (immutably)
export const addQuestion = (quiz: Quiz, newQuestion: string): Quiz => {
    return { ...quiz, questions: [...quiz.questions, newQuestion] };
};
export interface Student {
    id: string;
    name: string;
    scores: number[];
}

// Function to create a new student
export const createStudent = (
    id: string,
    name: string,
    scores: number[],
): Student => {
    return { id, name, scores };
};
// Function to add a new score (immutably)
export const addScore = (student: Student, newScore: number): Student => {
    return { ...student, scores: [...student.scores, newScore] };
};
// Function to calculate the average score
export const calculateAverage = (student: Student): number => {
    return student.scores.length === 0 ?
            0
        :   student.scores.reduce((sum, score) => sum + score, 0) /
                student.scores.length;
};

export const createStudentRecord = (
    students: Student[],
): Record<string, Student> => {
    return Object.fromEntries(students.map((student) => [student.id, student]));
};
