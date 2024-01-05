"use strict";
const question = document.getElementById("question");
const optionOne = document.getElementById("option-1");
const optionTwo = document.getElementById("option-2");
const optionThree = document.getElementById("option-3");
const optionFour = document.getElementById("option-4");
const nextQuestionButton = document.getElementById("next-button");
const questions = ["Who is the largest mammal in the world?", "What ocean is the largest in the world?", "Who is considered the King of Gods in Greek Mythology?", "Which planet is the farthest away from the Sun?", "Which geometric shape has five equal sides?"];
const options = [
    ["Brown Bear", "Humpback Whale", "Blue Whale", "African Elephant"],
    ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Artic Ocean"],
    ["Hades", "Zeus", "Prometheus", "Ares"],
    ["Uranus", "Pluto", "Saturn", "Neptune"],
    ["Square", "Hexagon", "Pentagon", "Septagon"],
];
let questionIndex = 0;
let score = 0;
function displayQuestion() {
    question.innerText = questions[questionIndex];
    optionOne.innerText = options[questionIndex][0];
    optionTwo.innerText = options[questionIndex][1];
    optionThree.innerText = options[questionIndex][2];
    optionFour.innerText = options[questionIndex][3];
    optionOne.addEventListener("click", disableOptions);
    optionTwo.addEventListener("click", disableOptions);
    optionThree.addEventListener("click", disableOptions);
    optionFour.addEventListener("click", disableOptions);
    optionThree.style.backgroundColor = "";
    optionOne.style.backgroundColor = "";
    optionTwo.style.backgroundColor = "";
    optionFour.style.backgroundColor = "";
    optionOne.disabled = false;
    optionTwo.disabled = false;
    optionThree.disabled = false;
    optionFour.disabled = false;
    if (questionIndex === questions.length - 1) {
        nextQuestionButton.innerText = "Play Again";
        nextQuestionButton.addEventListener("click", restartGame);
    }
}
function colorAnswers() {
    const answers = [2, 0, 1, 3, 2];
    const correctAnswerIndex = answers[questionIndex];
    if (correctAnswerIndex === 0) {
        optionOne.style.backgroundColor = "green";
        optionTwo.style.backgroundColor = "red";
        optionThree.style.backgroundColor = "red";
        optionFour.style.backgroundColor = "red";
    }
    else if (correctAnswerIndex === 1) {
        optionOne.style.backgroundColor = "red";
        optionTwo.style.backgroundColor = "green";
        optionThree.style.backgroundColor = "red";
        optionFour.style.backgroundColor = "red";
    }
    else if (correctAnswerIndex === 2) {
        optionOne.style.backgroundColor = "red";
        optionTwo.style.backgroundColor = "red";
        optionThree.style.backgroundColor = "green";
        optionFour.style.backgroundColor = "red";
    }
    else if (correctAnswerIndex === 3) {
        optionOne.style.backgroundColor = "red";
        optionTwo.style.backgroundColor = "red";
        optionThree.style.backgroundColor = "red";
        optionFour.style.backgroundColor = "green";
    }
}
function disableOptions() {
    optionOne.disabled = true;
    optionTwo.disabled = true;
    optionThree.disabled = true;
    optionFour.disabled = true;
    nextQuestionButton.style.display = "block";
    colorAnswers();
}
nextQuestionButton.addEventListener("click", () => {
    if (questionIndex < questions.length - 1) {
        questionIndex += 1;
        nextQuestionButton.style.display = "none";
        displayQuestion();
    }
});
function restartGame() {
    location.reload();
}
displayQuestion();
