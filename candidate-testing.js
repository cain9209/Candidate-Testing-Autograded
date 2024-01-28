const input = require('readline-sync')

// TODO 2: modify your quiz app to ask 5 questions //

// // TODO 1.1a: Define candidateName // 
let candidateName = "";
// // TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";



//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

// TODO 1.1b: Ask for candidate's name //
function askForName() {
  candidateName = input.question("Please enter your name: ");
}


// Ask the candidate questions 1.2b //
function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
  }
}

function gradeQuiz(candidateAnswers) {
  let correctCount = 0;
  console.log('answers', candidateAnswers)
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //  
//   console.log(`1.${questions[0]} ${candidateName} answered: ${candidateAnswers[0]}. Correct answer:${correctAnswers[0]}\n
// 2.${questions[1]} ${candidateName} answered: ${candidateAnswers[1]}. Correct answer:${correctAnswers[1]}\n
// 3.${questions[2]} ${candidateName} answered: ${candidateAnswers[2]}. Correct answer:${correctAnswers[2]}\n
// 4.${questions[3]} ${candidateName} answered: ${candidateAnswers[3]}. Correct answer:${correctAnswers[3]}\n
// 5.${questions[4]} ${candidateName} answered: ${candidateAnswers[4]}. Correct answer:${correctAnswers[4]}\n`)

  //TODO 3.2 use this variable to calculate the candidates score.   
  //let grade =  (correctCount / 5) * 100;
  for (i = 0; i < questions.length; i++) {
    const isCorrect = candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()
    console.log(`Question ${i + 1}: ${isCorrect ? 'Correct!' : 'Incorrect!'} `)
    if (isCorrect) {
      correctCount = correctCount + 1
    }
  }
  //return grade 
  console.log('pre grading', correctCount, questions.length)
  let grade = (correctCount / questions.length) * 100;
  console.log("function", grade)
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello,", candidateName);
  askQuestion();
  gradeQuiz(candidateAnswers);
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