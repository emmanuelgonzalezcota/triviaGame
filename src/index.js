import axios from 'axios'; 
import TriviaGame from './TriviaGame';
import './styles/main.scss';

function init(){

    let category = document.getElementById('categoryForm')
    let difficulty = document.getElementById('difficultyForm')
    let type = document.getElementById('typeForm')
    let submit = document.getElementById('submitButton')
    submit.addEventListener('click',function(){
        console.log('click on Submit');
        console.log('selections',category.value,difficulty.value,type.value);
        let q ='';
        if (category.value!="any"){q+='&'+category.value}
        if (difficulty.value!="any"){q+='&'+difficulty.value}
        if (type.value!="any"){q+='&'+type.value}
        console.log('q',q);
        //API Data get
        axios.get(`https://opentdb.com/api.php?amount=10${q}`)
        .then((response) => {
            // get json
            console.log(response.status);
            console.log(response.data);
            console.log('API response code:', response.data.response_code);
            // PENDIENTE:clasificar los erroRes de la documentacion 0-5
            const jsonResponse = response.data.results
            const triviaGame = new TriviaGame(jsonResponse)
            triviaGame.start()
        })
        .catch((error) => {
            // error while getting json
            if(error.response){
                console.log('Aca esta el error',error.response.data);
            } else {
                console.log(error);
            }
        })
    })
}

init();