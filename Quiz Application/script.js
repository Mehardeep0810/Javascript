const questions = [
  {
    question: "What type of missile is VSHORADS, developed by DRDO?",
    answers: [
      { Text:"Airborne Warning and Control System (AWACS)",correct:false},
      { Text:"Man-portable air-defence system (MANPADS)",correct:true},
      { Text:"Terminal high altitude area defence system (THAAD)",correct:false},
      { Text:"None of the Above",correct:false}
    ]
  },
{
  question: "Recently, DRDO and the Indian Army have successfully test fired indigenously built Man Portable Anti-Tank Guided Missile (MPATGM) at which region?",
    answers: [
      { Text:"Porbandar, Gujarat",correct:false},
      { Text:"Pokhran, Rajasthan",correct:true},
      { Text:"Visakhapatnam, Andhra Pradesh",correct:false},
      { Text:"Nagapattam, Tamil Nadu",correct:false}
    ]
},
{
  question: "Which institute recently established 'DRDO-Industry-Academia Centre of Excellence'?",
    answers: [
      { Text:"IIT Hyderabad",correct:false},
      { Text:"IIT Bombay",correct:false},
      { Text:"IIT Delhi",correct:false},
      { Text:"IIT Kanpur",correct:true}
    ]
},
{
  question: "DRDO has recently collaborated with which IIT for undertaking AI-driven surveillance and other projects?",
    answers: [
      { Text:"IIT Madras",correct:false},
      { Text:"IIT Kanpur",correct:false},
      { Text:"IIT Bhubaneswar",correct:true},
      { Text:"IIT Bombay",correct:false}
    ]
},
{
  question: "Recently, DRDO conducted a successful flight test of the Indigenous Technology Cruise Missile (ITCM) at which place?",
    answers: [
      { Text:"Chandipur, Odisha",correct:true},
      { Text:"Visakhapatnam, Andhra Pradesh",correct:false},
      { Text:"Pokhran, Rajasthan",correct:false},
      { Text:"Sriharikota, Andhra Pradesh",correct:false}
    ]
}
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score=0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + " " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.Text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct= answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display ="block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "inline";
}

function handleNextButton()
{
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }
});

startQuiz();