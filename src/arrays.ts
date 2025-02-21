// Function to add two arrays together element-wise
export const sumArrays = (arr1: number[], arr2: number[]): number[] => {
    return arr1.map((num, idx) => num + (arr2[idx] ?? 0));
};

// Function to remove elements less than a certain threshold
export const removeLowNumbers = (
    numbers: number[],
    threshold: number,
): number[] => {
    return numbers.filter((num) => num >= threshold);
};

// Function to find all words with a specific length
export const findWordsWithLength = (
    words: string[],
    length: number,
): string[] => {
    return words.filter((word) => word.length === length);
};

// Function to double all even numbers
export const doubleEvens = (numbers: number[]): number[] => {
    return numbers.map((num) => (num % 2 === 0 ? num * 2 : num));
};

export const bookEndList = <T>(arr: T[]): T[] => {
    return arr.length > 0 ? [arr[0], arr[arr.length - 1]] : [];
};

// Function to count occurrences of each word in an array
export const countWords = (words: string[]): Record<string, number> => {
    return words.reduce(
        (acc, word) => {
            acc[word] = (acc[word] || 0) + 1;
            return acc;
        },
        {} as Record<string, number>,
    );
};

// Function to sort an array in descending order
export const sortDescending = (numbers: number[]): number[] => {
    return [...numbers].sort((a, b) => b - a);
};

// Function to create a string of all elements joined with " and "
export const joinElements = (elements: string[]): string => {
    return elements.join(" and ");
};
