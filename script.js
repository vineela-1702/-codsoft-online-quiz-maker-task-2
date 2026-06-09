const quizData = [

{
question:"Java is a _____?",
options:[
"Programming Language",
"Database",
"Operating System",
"Web Browser"
],
answer:"Programming Language"
},

{
question:"Who developed Java?",
options:[
"Dennis Ritchie",
"James Gosling",
"Guido van Rossum",
"Bjarne Stroustrup"
],
answer:"James Gosling"
},

{
question:"Which company originally developed Java?",
options:[
"Microsoft",
"Google",
"Sun Microsystems",
"Apple"
],
answer:"Sun Microsystems"
},

{
question:"Which keyword is used to create an object in Java?",
options:[
"class",
"void",
"new",
"object"
],
answer:"new"
},

{
question:"Which method is the entry point of a Java program?",
options:[
"start()",
"run()",
"main()",
"execute()"
],
answer:"main()"
},

{
question:"Java is a _____ language.",
options:[
"Platform Dependent",
"Platform Independent",
"Machine Language",
"Assembly Language"
],
answer:"Platform Independent"
},

{
question:"Which symbol is used to end a statement in Java?",
options:[
":",
";",
".",
","
],
answer:";"
},

{
question:"Which of these is a Java data type?",
options:[
"int",
"number",
"value",
"digit"
],
answer:"int"
},

{
question:"Which keyword is used for inheritance in Java?",
options:[
"extends",
"inherits",
"implements",
"super"
],
answer:"extends"
},

{
question:"JVM stands for?",
options:[
"Java Variable Machine",
"Java Virtual Machine",
"Java Visual Machine",
"Java Vendor Machine"
],
answer:"Java Virtual Machine"
}

];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){

const q = quizData[currentQuestion];

document.getElementById("question").innerHTML =

`<div class="qcount">
Question ${currentQuestion + 1}/${quizData.length}
</div>

<div class="qtext">
Q${currentQuestion + 1}. ${q.question}
</div>`;

let letters = ["A","B","C","D"];

let html = "";

q.options.forEach((option,index)=>{

html += `
<div class="option"
onclick="selectAnswer(this,'${option}')">

<strong>${letters[index]}.</strong>
${option}

</div>
`;

});

document.getElementById("options").innerHTML = html;

document
.getElementById("nextBtn")
.classList.remove("next-active");
}

function selectAnswer(element,answer){

const options =
document.querySelectorAll(".option");

options.forEach(option=>{

option.style.pointerEvents="none";

if(
option.innerText.includes(
quizData[currentQuestion].answer
)
){
option.classList.add("correct");
option.innerHTML += " ✓";
}

});

if(answer === quizData[currentQuestion].answer){

score++;

}else{

element.classList.add("wrong");
element.innerHTML += " ✗";

}

document
.getElementById("nextBtn")
.classList.add("next-active");
}

function nextQuestion(){

currentQuestion++;

if(currentQuestion < quizData.length){

loadQuestion();

}
else{

let percentage =
Math.round(
(score/quizData.length)*100
);

document
.getElementById("quiz-box")
.style.display="none";

document
.getElementById("result")
.innerHTML=

`
<h2>🎉 Quiz Completed!</h2>

<br>

<h3>Score: ${score}/${quizData.length}</h3>

<br>

<h3>Percentage: ${percentage}%</h3>
`;

}

}

loadQuestion();