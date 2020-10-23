class TriviaGame {

    constructor(jsonResponse) {
        this.score = 0;
        this.data = jsonResponse;
        this.category = [];
        this.difficulty = [];
        this.type = [];
        this.allAnswers = [];
        this.correctAnswers = [];
        this.selectedAnswers = [];
        this.questionIndex = 0;
    }

    // Setters and Getters
    setCategory() {
        this.category.push(this.data[this.questionIndex].category);
        return (this.category[this.questionIndex]);
    }
    setDifficulty() {
        this.difficulty.push(this.data[this.questionIndex].difficulty);
        return (this.difficulty[this.questionIndex]);
    }
    setType() {
        this.type.push(this.data[this.questionIndex].type);
        return (this.type[this.questionIndex]);
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    setAnswers() {
        const tempAnswers = this.data[this.questionIndex].incorrect_answers;
        tempAnswers.push(this.data[this.questionIndex].correct_answer);
        const shuffledTempAnswers = this.shuffle(tempAnswers);
        this.allAnswers.push(shuffledTempAnswers);
        return (shuffledTempAnswers);
    }

    setCorrectAnswers() {
        this.correctAnswers.push(this.data[this.questionIndex].correct_answer);
        return (this.correctAnswers[this.questionIndex]);
    }

    setSelectedAnswers(answer) {
        this.selectedAnswers.push(answer)
        //return (answer)
    }

    updateAttributes(category, difficulty, type, questionNumber) {
        const triviaAttributes = document.querySelector('.trivia-attributes');
        triviaAttributes.innerHTML = ' '
        var attributes = document.createElement('div')
        attributes.setAttribute('class', 'trivia-attributes');
        attributes.innerHTML = `<div class="trivia-attributes__header">Let's Play</div>`
            + `<span class="trivia-attributes__category-label" id="category-label">Category:</span>`
            + `<span class="trivia-attributes__category-response" id="category-response">${category}</span>`
            + `<span class="trivia-attributes__difficulty-label" id="difficulty-label">Difficulty:</span>`
            + `<span class="trivia-attributes__difficulty-response" id="difficulty-response">${difficulty}</span>`
            + `<span class="trivia-attributes__type-label" id="type-label">Type of answer:</span>`
            + `<span class="trivia-attributes__type-response" id="type-response">${type}</span>`
            + `<span class="trivia-attributes__question-number-label" id="question-number-label">Question number:</span>`
            + `<span class="trivia-attributes__question-number-response" id="question-number-response">${questionNumber}</span>`
            + `<span class="trivia-attributes__score" id="score">Score: ${this.score} points</span>`;
        triviaAttributes.appendChild(attributes)
    }

    updateQandA(question, answers) {
        const triviaQuestionDisplay = document.querySelector('.trivia-question-display');
        triviaQuestionDisplay.innerHTML = ' '
        var display = document.createElement('div')
        display.setAttribute('class', 'trivia-question-display');
        if (answers.length === 4) {
            display.innerHTML = `<div class="trivia-question-display__question" id="question">${question}</div>`
                + `<section class="trivia-answer-block-A">`
                + `    <div class="trivia-answer-block-A__answer-a" id="answer-a" value="${answers[0]}">${answers[0]}</div>`
                + `    <div class="trivia-answer-block-A__answer-b" id="answer-b" value="${answers[1]}">${answers[1]}</div>`
                + `</section>`
                + `<section class="trivia-answer-block-B">`
                + `    <div class="trivia-answer-block-B__answer-c" id="answer-c" value="${answers[2]}">${answers[2]}</div>`
                + `    <div class="trivia-answer-block-B__answer-d" id="answer-d" value="${answers[3]}">${answers[3]}</div>`
                + `</section>`;
        } else {
            display.innerHTML = `<div class="trivia-question-display__question" id="question">${question}</div>`
                + `<section class="trivia-answer-block-A">`
                + `    <div class="trivia-answer-block-A__answer-a" id="answer-a" value="${answers[0]}">${answers[0]}</div>`
                + `</section>`
                + `<section class="trivia-answer-block-B">`
                + `    <div class="trivia-answer-block-B__answer-c" id="answer-c" value="${answers[1]}">${answers[1]}</div>`
                + `</section>`;
        }
        triviaQuestionDisplay.appendChild(display);
    }

    gameOver(){
        const endgame = document.querySelector('.trivia-answer-endgame');
        endgame.innerHTML = ' '
        var gameOverSequence = document.createElement('div')
        gameOverSequence.setAttribute('class', 'trivia-answer-endgame');
        gameOverSequence.innerHTML = `<img src="./images/game-over.svg" class="trivia-answer-endgame__game-over-img"></img>`
                                    +`<div class="trivia-answer-endgame__header">Get PRO version to check out the Q&A and graphics detail!</div>`
        console.log(gameOverSequence)
        endgame.appendChild(gameOverSequence)
    }


    validateAnswer(answer, isCorrect) {
        console.log("validateAnswer__answer:", answer);
        console.log("validateAnswer__isCorrect:", isCorrect);
        const triviaAnswerConfirm = document.querySelector('.trivia-answer-confirm');
        console.log(triviaAnswerConfirm);
        triviaAnswerConfirm.innerHTML = '';
        var answerConfirm = document.createElement('div')
        answerConfirm.setAttribute('class', 'trivia-answer-confirm');
        answerConfirm.innerHTML = `<div class="trivia-answer-confirm__header">Answer Selected</div>`
            + `<div class="trivia-answer-confirm__answer-component">`
            + `<div class="trivia-answer-confirm__answer" id="answerSelected">${answer}</div>`
            + `<input type="submit" value="√" class="trivia-answer-confirm__button" id="confirmButton">`
            + `</div>`
        triviaAnswerConfirm.appendChild(answerConfirm);
        const clickValidateAnswer = (event) => {
            console.log("validateAnswer__eventTargetID", event.target.id)
            if (isCorrect) { this.score += 100; }
            this.setSelectedAnswers(answer);
            this.questionIndex++;
            if (this.questionIndex===10){
                this.gameOver();
            } else {
                this.start();
            }
        }
        document.getElementById("confirmButton").onclick = clickValidateAnswer
    }

    scoreAnswer(answers, correctAnswer, answerId) {
        let isCorrect = false;
        let answerIdIndex = null;
        if (answerId === "answer-a") { answerIdIndex = 0 }
        if (answerId === "answer-b") { answerIdIndex = 1 }
        if (answerId === "answer-c") { answerIdIndex = 2 }
        if (answerId === "answer-d") { answerIdIndex = 3 }
        for (let i = 0; i < answers.length; i++) {
            if (correctAnswer === answers[i]) {
                if (answerId === "answer-a" && i === 0) {
                    console.log("Correct Answer A");
                    isCorrect = true;
                }
                if (answerId === "answer-b" && i === 1) {
                    console.log("Correct Answer B");
                    isCorrect = true;
                }
                if (answerId === "answer-c" && i === 2) {
                    console.log("Correct Answer C");
                    isCorrect = true;
                }
                if (answerId === "answer-d" && i === 3) {
                    console.log("Correct Answer D");
                    isCorrect = true;
                }
            }
        }
        this.validateAnswer(answers[answerIdIndex], isCorrect);
    }

    start() { //Aqui vamos a empezar a llamar el json por pregunta
        if (this.questionIndex === 0) {console.log("Arrancamos con la Trivia");} 
            else {console.log("Siguiente pregunta");}
        const question = this.data[this.questionIndex].question;
        //Set Question Attributes
        const category = this.setCategory();
        const difficulty = this.setDifficulty();
        const type = this.setType();
        const questionNumber = this.questionIndex + 1;
        this.updateAttributes(category, difficulty, type, questionNumber)
        //Set answers(shuffle correct and incorrect)
        const answers = this.setAnswers();
        //Show Q and As
        this.updateQandA(question, answers);
        //Event listeners
        const correctAnswer = this.setCorrectAnswers();
        const clickAnswer = (event) => {
            console.log("start__eventTargetID", event.target.id)
            this.scoreAnswer(answers, correctAnswer, event.target.id)
        }
        document.getElementById("answer-a").onclick = clickAnswer
        document.getElementById("answer-b").onclick = clickAnswer
        document.getElementById("answer-c").onclick = clickAnswer
        document.getElementById("answer-d").onclick = clickAnswer

        //show Score Summary with correct answers
        //Aqui armamos graficas con las respuestas y lo guardado en la clase
        //option to restart
    }
}

export default TriviaGame;