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
    }

    // Setters
    setCategory(i) {
        this.category.push(this.data[i].category);
        return (this.category[i]);
    }
    setDifficulty(i) {
        this.difficulty.push(this.data[i].difficulty);
        return (this.difficulty[i]);
    }
    setType(i) {
        this.type.push(this.data[i].type);
        return (this.type[i]);
    }

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    setAnswers(i) {
        const tempAnswers = this.data[i].incorrect_answers;
        tempAnswers.push(this.data[i].correct_answer);
        //console.log('TempAnswers:',tempAnswers);
        const shuffledTempAnswers = this.shuffle(tempAnswers);
        //console.log('TempAnswers Shuffled:',shuffledTempAnswers);
        this.allAnswers.push(shuffledTempAnswers);
        return (shuffledTempAnswers);
    }

    setCorrectAnswers(i){
        this.correctAnswers.push(this.data[i].correct_answer);
        return (this.correctAnswers[i]);
    }

    setSelectedAnswers(XXX){

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
                + `    <div class="trivia-answer-block-A__answer-a" id="answer-a">${answers[0]}</div>`
                + `    <div class="trivia-answer-block-A__answer-b" id="answer-b">${answers[1]}</div>`
                + `</section>`
                + `<section class="trivia-answer-block-B">`
                + `    <div class="trivia-answer-block-B__answer-c" id="answer-c">${answers[2]}</div>`
                + `    <div class="trivia-answer-block-B__answer-d" id="answer-d">${answers[3]}</div>`
                + `</section>`;
        } else {
            display.innerHTML = `<div class="trivia-question-display__question" id="question">${question}</div>`
                + `<section class="trivia-answer-block-A">`
                + `    <div class="trivia-answer-block-A__answer-a" id="answer-a">${answers[0]}</div>`
                + `</section>`
                + `<section class="trivia-answer-block-B">`
                + `    <div class="trivia-answer-block-B__answer-c" id="answer-c">${answers[1]}</div>`
                + `</section>`;
        }
        triviaQuestionDisplay.appendChild(display);
    }

    // Getters
    // buildFlag(cb,info){
    //     // Info es la informacion del pais
    //     // cb es un callback el cual me va a yudar a ejecutar el listener de las imagenes
    //     const img = document.createElement('img');
    //     img.setAttribute('src',info.flag)
    //     img.setAttribute('id',info.name)
    //     img.addEventListener('click',cb)
    //     return img;
    // }

    start() { //Aqui vamos a empezar a llamar el json por pregunta
        console.log("Arrancamos con la Trivia");
        let i = 0;
        while (i < 1) {
            const question = this.data[i].question;
            //Set Question Attributes
            const category = this.setCategory(i);
            const difficulty = this.setDifficulty(i);
            const type = this.setType(i);
            const questionNumber = i + 1;
            this.updateAttributes(category, difficulty, type, questionNumber)
            //Set answers(shuffle correct and incorrect)
            const answers = this.setAnswers(i);
            //Show Q and As
            this.updateQandA(question, answers);
            //Event listener
            const correctAnswer = this.setCorrectAnswers(i);
            // const clickAnswer = (event) => {
            //     if (correctAnswer === event.target.XXX){

            //     } else {

            //     }
            // }

            // buildFlag(cb,info){
            //     // Info es la informacion del pais
            //     // cb es un callback el cual me va a yudar a ejecutar el listener de las imagenes
            //     const img = document.createElement('img');
            //     img.setAttribute('src',info.flag)
            //     img.setAttribute('id',info.name)
            //     img.addEventListener('click',cb)
            //     return img;
            // }

            // const clickFlag = (event) => {
            //     // El scope es diferente entre un function normal y un arrow function
            //     if (this.winner.name === event.target.id) {
            //         // Aqui el usuario dio click a la bandera ganadora
            //         respuesta.innerHTML = "¡Correcto!"
            //         poblacion.innerHTML = "Poblacion: " + this.winner.population
            //         capital.innerHTML = "Capital: " + this.winner.capital
            //     } else {
            //         respuesta.innerHTML = "¡Incorrecto!"
            //     }
            // }

            // this.selectedCountries.forEach(country => {
            //     const flag = this.buildFlag(clickFlag, country)
            //     banderas.appendChild(flag)
            // })
            // buildFlag

            //Validate Answer and set score
            //Next question
            i++;
        }

        //show Score Summary with correct answers
        //option to restart

        //     this.choiceCountries();
        //     this.winner = this.choiceWinner;
        //     const banderas = document.querySelector('.flags');
        //     const respuesta = document.getElementById('answer');
        //     const poblacion = document.getElementById('population');
        //     const capital = document.getElementById('capital');
        //     const textoPais = document.getElementById('country-name');
        //     banderas.innerHTML = '';
        //     respuesta.innerHTML = '';
        //     poblacion.innerHTML = '';
        //     capital.innerHTML = '';
        //     textoPais.innerHTML = this.winner.translations.es;

    }

}

export default TriviaGame;
