let currentQuestion = 0;

function init() { 
    document.getElementById('maxNumberQuestions').innerHTML = `${questions.length}`
    showQuestion() 
}

function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question.question;
    showAnswers(question)
}

function showAnswers(question) {
    document.getElementById('answer1').innerHTML = question.answer1;
    document.getElementById('answer2').innerHTML = question.answer2;
    document.getElementById('answer3').innerHTML = question.answer3;   
    document.getElementById('answer4').innerHTML = question.answer4;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let pressedAnswer = selection.substring(selection.length-1);
    if(pressedAnswer == question.rightAnswer) {
        console.log('Richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        document.getElementById('nextBtn').disabled = false;
    }   else {
        console.log('falsche Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(`answer${question.rightAnswer}`).classList.add('bg-success');
        document.getElementById('nextBtn').disabled = false;
    }
    
    
    
}