const question = document.getElementById("question") as HTMLHeadingElement;
const optionOne = document.getElementById("option-1") as HTMLButtonElement;
const optionTwo = document.getElementById("option-2") as HTMLButtonElement;
const optionThree = document.getElementById("option-3") as HTMLButtonElement;
const optionFour = document.getElementById("option-4") as HTMLButtonElement;

const questionOne: string = "Test question 1";
const questionTwo: string = "Test question 2";
const questionThree: string = "Test question 3";
const questionFour: string = "Test question 4";
const questionFive: string = "Test question 5";

optionOne.addEventListener("click", () => {});
optionTwo.addEventListener("click", () => {});
optionThree.addEventListener("click", () => {});
optionFour.addEventListener("click", () => {});

function displayQuestionOne() {
  let options: string[] = ["Test Option 1", "Test Option 2", "Test Option 3", "Test Option 4"];
  question.innerText = questionOne;
  optionOne.innerText = options[0];
  optionTwo.innerText = options[1];
  optionThree.innerText = options[2];
  optionFour.innerText = options[3];
}

function displayQuestionTwo() {
  let options: string[] = ["Test Option 1", "Test Option 2", "Test Option 3", "Test Option 4"];
  question.innerText = questionOne;
  optionOne.innerText = options[0];
  optionTwo.innerText = options[1];
  optionThree.innerText = options[2];
  optionFour.innerText = options[3];
}

function displayQuestionThree() {
  let options: string[] = ["Test Option 1", "Test Option 2", "Test Option 3", "Test Option 4"];
  question.innerText = questionOne;
  optionOne.innerText = options[0];
  optionTwo.innerText = options[1];
  optionThree.innerText = options[2];
  optionFour.innerText = options[3];
}

function displayQuestionFour() {
  let options: string[] = ["Test Option 1", "Test Option 2", "Test Option 3", "Test Option 4"];
  question.innerText = questionOne;
  optionOne.innerText = options[0];
  optionTwo.innerText = options[1];
  optionThree.innerText = options[2];
  optionFour.innerText = options[3];
}

function displayQuestionFive() {
  let options: string[] = ["Test Option 1", "Test Option 2", "Test Option 3", "Test Option 4"];
  question.innerText = questionOne;
  optionOne.innerText = options[0];
  optionTwo.innerText = options[1];
  optionThree.innerText = options[2];
  optionFour.innerText = options[3];
}
