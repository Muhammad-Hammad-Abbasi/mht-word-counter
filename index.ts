#!/usr/bin/env node

// import the `inquirer` module,
import inquirer from "inquirer"


const answers : {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
])

const words = answers.sentence.trim().split(" ")

// print the arrey of words to the console
console.log(words)

console.log(`your sentence word count is ${words.length}`);













