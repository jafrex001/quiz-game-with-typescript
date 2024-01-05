const question = document.getElementById("question") as HTMLHeadingElement;
const optionOne = document.getElementById("option-1") as HTMLButtonElement;
const optionTwo = document.getElementById("option-2") as HTMLButtonElement;
const optionThree = document.getElementById("option-3") as HTMLButtonElement;
const optionFour = document.getElementById("option-4") as HTMLButtonElement;
const nextQuestionButton = document.getElementById("next-button") as HTMLButtonElement;

const questions: string[] = ["Test question 1", "Test question 2", "Test question 3", "Test question 4", "Test question 5"];

const options: string[][] = [
  ["Test Option 1-1", "Test Option 1-2", "Test Option 1-3", "Test Option 1-4"],
  ["Test Option 2-1", "Test Option 2-2", "Test Option 2-3", "Test Option 2-4"],
  ["Test Option 3-1", "Test Option 3-2", "Test Option 3-3", "Test Option 3-4"],
  ["Test Option 4-1", "Test Option 4-2", "Test Option 4-3", "Test Option 4-4"],
  ["Test Option 5-1", "Test Option 5-2", "Test Option 5-3", "Test Option 5-4"],
];

let questionIndex: number = 0;

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
}

function disableOptions() {
  optionOne.disabled = true;
  optionTwo.disabled = true;
  optionThree.disabled = true;
  optionFour.disabled = true;

  nextQuestionButton.style.display = "block";

  optionThree.style.backgroundColor = "green";
  optionOne.style.backgroundColor = "red";
  optionTwo.style.backgroundColor = "red";
  optionFour.style.backgroundColor = "red";
}

nextQuestionButton.addEventListener("click", () => {
  if (questionIndex < questions.length - 1) {
    questionIndex += 1;
    nextQuestionButton.style.display = "none";
    displayQuestion();
  }
});

displayQuestion();
