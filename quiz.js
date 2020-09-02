const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question"); // questions in arrya will input into "question" (shown in top center), via a for loop function
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const currentScore = document.getElementById("currentScore");
const scoreContainer = document.getElementById("scoreContainer");

let questions = [
    {
        question : "What is Javascript?",
        choiceA : "A: A programming language that allows interactive webpages",
        choiceB : "B: A type of coffee ",
        choiceC : "C: The same as CSS",
        correct : "A"
    },{
        question : "Are Java and Javascript the same?",
        choiceA : "A: Yes",
        choiceB : "B: No",
        choiceC : "C: They are both coffee",
        correct : "B"
    },{
        question : "What is a for loop",
        choiceA : "A: A theme park ride",
        choiceB : "B: A laso",
        choiceC : "C: A function that automatically rotates through a list of items",
        correct : "C"
    }, {
        question : "What is an array",
        choiceA : "A: A type of fish",
        choiceB : "B: A dvd player",
        choiceC : "C: A list of items in the code",
        correct : "C" 
    }
];


const lastQuestion = questions.length - 1; // lastQuestion = questions array length (4 {}{}{}{} - 1{}) which is equal to the index
let questionIndexNumber = 0; // let so it can be updated
let count = 0;

const questionTime = 10; // total time per question
let timeClock;
let score = 0;

// variables above //

// functions below //

start.addEventListener("click",startTheQuiz); // "click", triggers startTheQuiz function below

function startTheQuiz(){
    start.style.display = "none"; // "none" = when startTheQuiz() is triggered above, style.display overrides css
    renderQuestion(); // this calls the renderQuestion defined above which inputs a question by index into the question div
    quiz.style.display = "block"; // index quiz display none changed to block to show quiz
    renderCounter(); // calls function below, not necessarily the counting mechanism
    timeClock = setInterval(renderCounter,1000); // sets renderCounter function interval to 1 second

}

function renderQuestion(){ //THIS IS THE FUNCTION THAT RENDERS THE QUESTION
    currentScore.innerHTML = score + "/ 4 correct";
    let q = questions[questionIndexNumber]; // q = index number of a question in the array / questions = array / questionIndexNumber = index
    
    question.innerHTML = "<p>"+ q.question +"</p>"; // question div in javascript = current indexed question in the array of question
    choiceA.innerHTML = q.choiceA; // index DIV choice A = q.choiceA
    choiceB.innerHTML = q.choiceB; // index DIV choice B = q.choiceB
    choiceC.innerHTML = q.choiceC;
    
}
    

function renderCounter(){
    if(count <= questionTime){ // if the count is less than 10
        counter.innerHTML = count; // places "count" in the html of counter in index
        count++ //increase count by 1
    }else{
        count = 0;
            questionIndexNumber++;
            renderQuestion();
    }
}


function checkAnswer(answer){ // ( (answer) = A B or C)  //SHOULD CHANGE BELOW TO AN IF RIGHT OR WRONG OR ELSE SHOW FINAL SCORE
    if( answer == questions[questionIndexNumber].correct){ // if selected answer in index.html == questions array index correct asnwer
        score++; // increase score
        questionIndexNumber++;
        renderQuestion()
    }else{
    questionIndexNumber++;
    renderQuestion()
    }
    count = 0; // if any button click happens and checkAnswer function is triggered, set count to 0
    
    // if 
    //(questionIndexNumber = lastQuestion) && renderQuestion() {
    //     scoreContainer.style.display = "block"; // block makes the scorecContainer displayed
    // choices.style.display = "none"; // none makes the choices container go away
    // clearInterval
    //  count = 0;

    
    // const finalScore = math.round(100 * score/questions.length);
    
    // scoreContainer.innerHTML = finalscore + "%";
    // }


}






