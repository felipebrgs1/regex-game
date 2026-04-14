export interface Puzzle {
  id: number
  title: string
  hint: string
  shouldMatch: string[]
  shouldNotMatch: string[]
}

export const puzzles: Puzzle[] = [
  {
    id: 1,
    title: "Hello, letters!",
    hint: 'Match only lowercase letters from "a" to "z". No numbers allowed!',
    shouldMatch: ["abc", "hello", "regex"],
    shouldNotMatch: ["123", "abc123", "Hello", ""],
  },
  {
    id: 2,
    title: "Numbers only, please",
    hint: "Match sequences that contain only digits from 0 to 9.",
    shouldMatch: ["123", "0", "999"],
    shouldNotMatch: ["12a3", "abc", "3.14"],
  },
  {
    id: 3,
    title: 'It starts with "a"',
    hint: 'Match words that start with the letter "a" (lowercase).',
    shouldMatch: ["apple", "avocado", "art"],
    shouldNotMatch: ["Apple", "banana", "cherry", "1abc"],
  },
  {
    id: 4,
    title: "Ending matters",
    hint: 'Match words that end with "ing".',
    shouldMatch: ["running", "coding", "learning"],
    shouldNotMatch: ["runner", "ing", "codingz"],
  },
  {
    id: 5,
    title: "At least three",
    hint: "Match words with at least 3 lowercase letters in a row.",
    shouldMatch: ["abc", "test", "regex"],
    shouldNotMatch: ["ab", "a", "12"],
  },
  {
    id: 6,
    title: "This or that",
    hint: 'Match words that are exactly "cat" OR "dog".',
    shouldMatch: ["cat", "dog"],
    shouldNotMatch: ["cats", "doggy", "fish"],
  },
  {
    id: 7,
    title: "Captured group",
    hint: 'Match strings in the format "abc" followed by "123" — exactly 3 letters then 3 digits.',
    shouldMatch: ["abc123", "xyz999", "lol420"],
    shouldNotMatch: ["abc12", "ab1234", "123abc"],
  },
  {
    id: 8,
    title: "Space it out",
    hint: "Match strings that contain at least one space character.",
    shouldMatch: ["hello world", "good morning", "a b"],
    shouldNotMatch: ["helloworld", "goodmorning", "abc"],
  },
  {
    id: 9,
    title: "Simple email",
    hint: 'Match email addresses in the format text@text.com — letters, an "@", letters, ".com".',
    shouldMatch: ["user@example.com", "test@domain.com", "a@b.com"],
    shouldNotMatch: ["user@.com", "@domain.com", "user@domain", "user@domain.org"],
  },
  {
    id: 10,
    title: "Quantifier master",
    hint: "Match strings that have between 5 and 10 lowercase letters (letters only).",
    shouldMatch: ["abcde", "abcdefghij", "keyboard"],
    shouldNotMatch: ["abcd", "abcdefghijk", "abc1", ""],
  },
]

export function usePuzzles() {
  return { puzzles }
}
