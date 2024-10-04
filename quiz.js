function checkAnswer(correctAnswer) {
//function body
const correctAnswer ='4'

const selectedAnswer=document.querySelector('input[name="quiz"]:checked');
const userAnswer=selectedAnswer.value;

console.log(userAnswer);
return userAnswer;
}

//Get the feedback element
const feedbackElement=document.getElementById('feedback');

//Compare users answer if correct or wrong
if(selectedAnswer===correctAnswer){
    feedbackElement.textContent ="Correct! Well done.";
    feedbackElement.style.color = "green";
}else{
    feedbackElement.textContent="That's incorrect. Try again!";
    feedbackElement.style.color="red";
}
document.getElementById('submit-answer').addEventListener('click',function(){
    checkAnswer()
});
