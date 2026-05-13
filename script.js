

//your JS code here.
const questionsElement = document.getElementById("questions");
const btn= document.getElementById("submit");
const scoreElement = document.getElementById("score");
const userAnswers = JSON.parse(sessionStorage.getItem("progress")) || new Array(5).fill(null);


questionsElement.addEventListener("change" ,(e) =>{
  //which question was answered
  const questionIndex= parseInt(e.target.name.split("-")[1]);
   //write answer in correct slot of notebook(example) and store to the session storage
   userAnswers[questionIndex]=e.target.value;
   //saves the answer in the correct slot of sessionstorage such as 0 1 2 ...
   sessionStorage.setItem("progress", JSON.stringify(userAnswers));

});

//add event listner for the button once it is clicked 
btn.addEventListener("click" , ()=> {
  //calculating the score 
  let score =0;

  for(let i = 0;i<questions.length; i++) {
    if(userAnswers[i]===questions[i].answer){
      score++;
    }
  }
  //displaying of score 
  scoreElement.innerHTML= `Your score is ${score} out of 5`;

  //save to local storage
  localStorage.setItem('score', score);
})
// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}
renderQuestions();
