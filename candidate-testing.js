const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";





//TODO: Variables for Part 2
let questions = [ 
"Who was the first American woman in space? ",
"True or false: 5 kilometer == 5000 meters? ",
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? "
]

let correctAnswers = [
"Sally Ride",
"true",
"40",
"Trajectory",
"3"
]


let candidateAnswers = [];


function askForName() {
// TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name: "); 
}

function askQuestion() { 
  // ask the candidate questions 1.2b //
for (let i = 0; i < questions.length; i++) {
candidateAnswer = input.question(questions[i]);
candidateAnswers.push(candidateAnswer);
 }
}

function gradeQuiz(candidateAnswers, correctAnswers) {
// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //  
 
for (let i = 0; i < questions.length; i++) {
  console.log(`Question: ${questions[i]}`);
  console.log(`Your Answer: ${candidateAnswers[i]}`);
  console.log(`Correct Answer: ${correctAnswers[i]}\n`);
 
}
 let numOfQuizQuestions = questions.length;
 let correctCount = 0;
  let grade =  correctCount / numOfQuizQuestions * 100;
  console.log(`Your Grade is: ${grade}`);
  // need a statement for toLowerCase and for correct count++//
   //TODO 3.2 use this variable to calculate the candidates score.   
   if (grade === 0) {
    return("Failed: 0%"); 
  } else if (grade === 100) {
    return("Passed: 100%") 
  } else if (grade === 20) {
    return("Failed: 20%")
  } else if (grade === 40) {
    return("Failed: 40%");
  } else if (grade === 60) {
    return("Failed: 60%");
  } else if (grade === 80) {
    return("Passed: 80%");
  } else {
    return "please try again";
  }
  
}

  
 




function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello,", candidateName);
  askQuestion();
  gradeQuiz(candidateAnswers, correctAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
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