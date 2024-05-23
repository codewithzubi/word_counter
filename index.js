#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\n \t\t ZUBAIR AHMED - WORD COUNTER"));
console.log("=".repeat(70));
let answers = await inquirer.prompt({
    type: "input",
    name: "sentence",
    message: "ENTER THE SENTENCE FOR COUNT THE WORD",
});
let words = answers.sentence.trim().split(" ");
console.log("=".repeat(70));
console.log(chalk.bold("Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(70));
