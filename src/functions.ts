// Function to add two numbers
export const add = (a: number, b: number): number => {
    return a + b;
};

// Function to subtract two numbers
export const subtract = (a: number, b: number): number => {
    return a - b;
};

// Function to multiply two numbers
export const multiply = (a: number, b: number): number => {
    return a * b;
};

// Function to divide two numbers (handles division by zero)
export const divide = (a: number, b: number): number | string => {
    return b === 0 ? "Cannot divide by zero" : a / b;
};

// Function to check if a number is even
export const isEven = (num: number): boolean => {
    return num % 2 === 0;
};

// Function to greet a user
export const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

// Function to count vampire fangs (based on example)
export function countFangs(vampires: number): number {
    return vampires * 2;
}
