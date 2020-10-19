class TriviaGame{
    
    // constructor(countries){
    //     this.countries = countries;
    //     this.isOk = false; // Va a avalirdar si el resultado es correcto o no
    //     this.selectedCountries = [];
    //     this.winner = null;
    // }
    constructor(jsonResponse){
        this.score = 0;
        this.data = jsonResponse;
        this.category = [];
        this.difficulty = [];
        this.type = [];
        this.correctAnswers = [];
        this.otherAnswers = [];
    } 


    // Setters

    setCategory(i){
        this.category.push(this.data[i].category);
        return(this.category[i]);
    }
    setDifficulty(i){
        this.difficulty.push(this.data[i].difficulty);
        return(this.difficulty[i]);
    }
    setType(i){
        this.type.push(this.data[i].type);
        return(this.type[i]);
    }

    updateAttributes(category,difficulty,type,questionNumber){
                    //NO FUNCIONA
            const triviaAttributes = document.getElementById('trivia-attributes');
            //triviaAttributes.innerHTML=' '
            //var attributes = document.createElement('div')
            attributes.innerHTML = `<div class="trivia-attributes__header">Let's Play</div>`
                            +`<span class="trivia-attributes__category-label" id="category-label">Category:</span>`
                            +`<span class="trivia-attributes__category-response" id="category-response">${category}</span>`
                            +`<span class="trivia-attributes__difficulty-label" id="difficulty-label">Difficulty:</span>`
                            +`<span class="trivia-attributes__difficulty-response" id="difficulty-response">${difficulty}</span>`
                            +`<span class="trivia-attributes__type-label" id="type-label">Type of answer:</span>`
                            +`<span class="trivia-attributes__type-response" id="type-response">${type}</span>`
                            +`<span class="trivia-attributes__question-number-label" id="question-number-label">Question number:</span>`
                            +`<span class="trivia-attributes__question-number-response" id="question-number-response">${questionNumber}</span>`
                            +`<span class="trivia-attributes__score" id="score">Score: ${this.score} points</span>`
            triviaAttributes.appendChild(attributes)
    }
    

    // Getters
    // generateRandomNumber(length){
    //     //Va agenerar un numero random
    //     return Math.floor(Math.random()*length)
    // }

    // get oneCountry(){ 
    //     //Devuelve un pais
    //     const random = this.generateRandomNumber(this.countries.length);
    //     return this.countries[random];
    // }

    // choiceCountries(){
    //     // regresa los tres paises que vana  estar en el juego
    //     for(var i=0; i < 3; i++){ // va a generar mis tres paises aleatorios
    //         const pais = this.oneCountry //Aqui se manda a llamar mi getter
    //         this.selectedCountries.push(pais)
    //     }
    //     return this.selectedCountries;
    // }

    // get choiceWinner(){
    //     //este me va a devolver el pais correcto o ganador
    //     const random = this.generateRandomNumber(this.selectedCountries.length)
    //     return this.selectedCountries[random]
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

    start(){ //Aqui vamos a empezar a llamar el json por pregunta
        console.log("Arrancamos con la Trivia");
        //Se va a encargar de cargar todo el juego
        //console.log(this.data);
        
        //for (let i = 0; i < 1; i++) {
            const i=0;
            const question = this.data[i].question;
            //show category
            const category = this.setCategory(i);
            console.log(category);
            //show category difficulty
            const difficulty = this.setDifficulty(i);
            console.log(difficulty);
            //identify type
            const type = this.setType(i);
            console.log(type);
            //Number of question
            const questionNumber = i+1;
            //show question
            console.log(question);
            this.updateAttributes(category,difficulty,type,questionNumber)

            
            
            //show all answers(randomize showing of correct and incorrect)
            //event listener on answer
            //qualify answer and score
            //next question
        //}

        //show Score
        //show correct answers
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
        
    //     const clickFlag = (event) =>{
    //         // El scope es diferente entre un function normal y un arrow function
    //         if(this.winner.name === event.target.id){
    //             // Aqui el usuario dio click a la bandera ganadora
    //             respuesta.innerHTML = "¡Correcto!"
    //             poblacion.innerHTML = "Poblacion: "+this.winner.population
    //             capital.innerHTML = "Capital: "+this.winner.capital
    //         } else {
    //             respuesta.innerHTML = "¡Incorrecto!"
    //         }
    //     }

    //     this.selectedCountries.forEach(country => {
    //         const flag = this.buildFlag(clickFlag,country)
    //         banderas.appendChild(flag)
    //     })
    //     buildFlag
    }

}

export default TriviaGame;
