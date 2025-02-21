export interface Question {
    id: number;
    text: string;
    published: boolean;
}

export interface Quiz {
    title: string;
    questions: Question[];
}
export const makeQuiz = (title: string, questions: Question[]): Quiz => {
    return { title, questions };
};

export const getPublishedQuestions = (quiz: Quiz): Question[] => {
    return quiz.questions.filter((q) => q.published);
};
export const addQuestion = (quiz: Quiz, newQuestion: Question): Quiz => {
    return { ...quiz, questions: [...quiz.questions, newQuestion] };
};
export const toggleQuestionPublished = (
    quiz: Quiz,
    questionId: number,
): Quiz => {
    return {
        ...quiz,
        questions: quiz.questions.map((q) =>
            q.id === questionId ? { ...q, published: !q.published } : q,
        ),
    };
};
export const removeQuestion = (quiz: Quiz, questionId: number): Quiz => {
    return {
        ...quiz,
        questions: quiz.questions.filter((q) => q.id !== questionId),
    };
};
export const findQuestionById = (
    quiz: Quiz,
    questionId: number,
): Question | undefined => {
    return quiz.questions.find((q) => q.id === questionId);
};
export const countPublishedQuestions = (quiz: Quiz): number => {
    return quiz.questions.filter((q) => q.published).length;
};
export const quizToCSV = (quiz: Quiz): string => {
    return quiz.questions
        .map((q) => `${q.id},${q.text},${q.published}`)
        .join("\n");
};
