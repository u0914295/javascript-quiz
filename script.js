var timer = document.getElementById("timer")
var home = document.getElementById("home")
var startButton = document.getElementById("start-button")
var highscoreButton = document.getElementById("highscore-btn")
var questionDiv = document.getElementById("question-div")
var questionTitle = document.getElementById("question-title")
var choices = document.getElementById("choices")
var endScreen = document.getElementById("end-screen")
var submitButton = document.getElementById("submit-button")

var secondsLeft = 60
var questionIndex = 0
var intervalState

document.getElementById("question-title").style.color="white";
document.getElementById("choices").style.textAlign="center";
document.getElementById("choices").style.fontSize="xx-large";


var quizQuestions = [

  {

    title: "Commonly used data types DO NOT include:",

    choices: ["strings", "booleans", "alerts", "numbers"],

    answer: "alerts"

  },

  {

    title: "The condition in an if / else statement is enclosed within ____.",

    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],

    answer: "parentheses"

  },
    {

    title: "Inside which HTML element do we put the JavaScript?",

    choices: ["<javscript>", "<js>", "<script>", "<scripting>"],

    answer: "<script>"

  },

  {

    title: "Where is the correct place to insert a JavaScript?",

    choices: ["Both the <head> section and the <body> section are correct", "The <footer> section", "The <body> section", "The <head> section"],

    answer: "Both the <head> section and the <body> section are correct"

  },

  {

    title: "How do you create a function?",

    choices: ["function:myFunction()", "function=myFunction()", "function myFunction()", "myFunction():function"],

    answer: "function myFunction()"

  },

  {

    title: "In JavaScript, the following loop will execute ____ times for: (x=1;x<11;x++)",

    choices: ["9", "10", "11", "Cannot tell from this portion of the script"],

    answer: "10"

  },

  {

    title: "In JavaScript, the symbols +, -, *, and / are:",

    choices: ["Operators", "Expressions", "Comparison operators", "None of the above"],

    answer: "Operators"

  },

  {

    title: "In JavaScript, the expression x!=y returns false if:",

    choices: ["The variables are equal", "x is less than y", "The variables are not equal", "None of the above"],

    answer: "The variables are equal"

  },

  {

    title: "In JavaScript, which of the following is a logical operator?",

    choices: ["|", "&&", "%", "/"],

    answer: "&&"

  },

  {

    title: "When you want to use JavaScript to manipulate the browser window, the browser window's JavaScript object name is:",

    choices: ["Frame", "Document", "Window", "browser_window"],

    answer: "Window"

  },

]


startButton.addEventListener("click", function (){

  intervalState = setInterval(() => {
    secondsLeft = secondsLeft-1
    timer.textContent = secondsLeft
    if (secondsLeft <= 0){
      clearInterval(intervalState)
    }
  }, 1000);
  home.setAttribute("class", "hide")
  questionDiv.removeAttribute("class", "hide")
  //called display questions here
  runQuestions()
})

function runQuestions(){
  var currentQuestion = quizQuestions[questionIndex]
  questionTitle.textContent = currentQuestion.title

  currentQuestion.choices.forEach(function (choice){
    var choiceButton = document.createElement("button")
    choiceButton.textContent = choice
    choiceButton.setAttribute("value", choice)
    //evaluate right or wrong
    choiceButton.onclick = evaluate
    choices.append(choiceButton)
  })
}

function evaluate(){
  if (this.value === quizQuestions[questionIndex].answer){
    console.log ("Correct")
  } else {
    console.log ("Incorrect")
    secondsLeft = secondsLeft-10
    timer.textContent = secondsLeft
  }
  questionIndex ++
  choices.innerHTML = ""
  runQuestions()
}