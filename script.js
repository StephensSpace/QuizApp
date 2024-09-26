let currentQuestion = 0;
let correctAnswerCount = 0;

function init() {
    currentQuestion = 0;
    correctAnswerCount = 0;
    document.getElementById('content').innerHTML = questionCardHTML()
    document.getElementById('maxNumberQuestions').innerHTML = `${questions.length}`
    showQuestion()
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('content').innerHTML = returnEndcardHTML();
    } else {
        let question = questions[currentQuestion];
        document.getElementById('currentQuestion').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question.question;
        showAnswers(question)
    }
}

function showAnswers(question) {
    document.getElementById('answer1').innerHTML = question.answer1;
    document.getElementById('answer2').innerHTML = question.answer2;
    document.getElementById('answer3').innerHTML = question.answer3;
    document.getElementById('answer4').innerHTML = question.answer4;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let pressedAnswer = selection.substring(selection.length - 1);
    if (pressedAnswer == question.rightAnswer) {
        correctAnswerCount++;
        document.getElementById(selection).parentNode.classList.add('bg-success');
        document.getElementById('nextBtn').disabled = false;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(`answer${question.rightAnswer}`).parentNode.classList.add('bg-success');
        document.getElementById('nextBtn').disabled = false;
    }
}

function nextQuestion() {
    currentQuestion++;
    resetAnswerBtns();
    showQuestion();
}

function resetAnswerBtns() {
    for (let index = 1; index < 5; index++) {
        const element = `answer${index}`;
        document.getElementById(element).parentNode.classList.remove('bg-danger');
        document.getElementById(element).parentNode.classList.remove('bg-success');
    }
}

function returnEndcardHTML() {
    return `<div class="card quizCard">
    <img src="./img/quiz.jpg" class="card-img-top" alt="multipleChoicePic">
    <div class="card-body">
        <h5 class="card-title" id="questionText">Das Quiz ist beendet!</h5>
        <span>Sie haben <b>${correctAnswerCount}</b> von <b>${questions.length}</b> Richtig beantwortet</span>
        <div class="endCardFooter">
            <button type="button" onclick="init()" class="btn btn-success mt-5">
                Wiederholen</button>
        </div>
    </div>
</div>`
}

function questionCardHTML() {
    return `<div class="card quizCard">
            <img src="./img/questionMark.jpg" class="card-img-top" alt="multipleChoicePic">
            <div class="card-body">
                <h5 class="card-title" id="questionText">Frage</h5>
                <div class="card mb-2 answerCard" onclick="answer('answer1')">
                    <div class="card-body" id="answer1">
                        Antwort
                    </div>
                </div>
                <div class="card mb-2 answerCard" onclick="answer('answer2')">
                    <div class="card-body" id="answer2">
                        Antwort
                    </div>
                </div>
                <div class="card mb-2 answerCard" onclick="answer('answer3')">
                    <div class="card-body" id="answer3">
                        Antwort
                    </div>
                </div>
                <div class="card mb-2 answerCard" onclick="answer('answer4')">
                    <div class="card-body" id="answer4">
                        Antwort
                    </div>
                </div>
                <div class="questionFooter">
                    <span class="questionCount">
                        <b id="currentQuestion">1</b> von <b id="maxNumberQuestions">5</b> Fragen
                    </span>
                    <button type="button" onclick="nextQuestion()" class="btn btn-outline-success" id="nextBtn" disabled>
                        Nächste Frage</button>
                </div>
            </div>
        </div>`
}