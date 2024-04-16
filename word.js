#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let content = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: chalk.magenta("Write a sentence you want to count their words: "),
    }]);
let words = content.Sentence.trim().split(" ");
console.log(words);
console.log(chalk.bgWhite(`Your sentence have ${words.length} words `));
