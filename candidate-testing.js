const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? "
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  "Who was the first American woman in space?",
  "True or false: 5 kilometer == 5000 meters?",
  "(5 + 3)/2 * 10 = ?",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",	
  "What is the minimum crew size for the ISS?"
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers  = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name:");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (let i = 0; i < questions.length; i++) {
  console.log(candidateAnswers = input.question(questions[i]));
}

}

function gradeQuiz(candidateAnswers) {

console.log(`Your answers:${candidateAnswers}\nCorrect anwers: ${correctAnswers}`)
  /* I'M TRYING TO COMPARE CANDIDATE ANSWERS....
  let total = 0
 if (correctAnswers[0] === candidateAnswers[0]) {
   total += 1
 }
*/
  let grade = total / 5 * 100;

  return grade;
 
 if (grade >= 80) {
   console.log (`Congratulations you passed: ${grade}`)
 } else if (grade < 80) {
   console.log (`Failed: ${grade}`)
 }

}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
 console.log(`Hello, ${candidateName}`) 
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};