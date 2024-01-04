"use strict";
const question = document.getElementById("question");
const optionOne = document.getElementById("option-1");
const optionTwo = document.getElementById("option-2");
const optionThree = document.getElementById("option-3");
const optionFour = document.getElementById("option-4");
const nextQuestionButton = document.getElementById("next-button");
const questions = ["Test question 1", "Test question 2", "Test question 3", "Test question 4", "Test question 5"];
const options = [
    ["Test Option 1-1", "Test Option 1-2", "Test Option 1-3", "Test Option 1-4"],
    ["Test Option 2-1", "Test Option 2-2", "Test Option 2-3", "Test Option 2-4"],
    ["Test Option 3-1", "Test Option 3-2", "Test Option 3-3", "Test Option 3-4"],
    ["Test Option 4-1", "Test Option 4-2", "Test Option 4-3", "Test Option 4-4"],
    ["Test Option 5-1", "Test Option 5-2", "Test Option 5-3", "Test Option 5-4"],
];
const answers = [2, 3, 0, 1, 2];
let questionIndex = 0;
function displayQuestion() {
    question.innerText = questions[questionIndex];
    optionOne.innerText = options[questionIndex][0];
    optionTwo.innerText = options[questionIndex][1];
    optionThree.innerText = options[questionIndex][2];
    optionFour.innerText = options[questionIndex][3];
}
