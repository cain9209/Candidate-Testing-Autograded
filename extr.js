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


    // TODO 1.1b: Ask for candidate's name //
    function askForName() {
      candidateName = input.question("Please enter your name: "); 
      }

     // ask the candidate questions 1.2b //
      function askQuestion() { 
      for (let i = 0; i < questions.length; i++) {
      candidateAnswer = input.question(questions[i]);
      candidateAnswers.push(candidateAnswer);
       }
      }

      //function gradeQuiz();





      let grade; 




      function runProgram() {
        askForName();
        // TODO 1.1c: Greet candidate using their name //
         console.log("Hello,", candidateName);
        askQuestion();
        gradeQuiz(candidateAnswers, correctAnswers);
      }