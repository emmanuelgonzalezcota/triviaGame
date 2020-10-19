import axios from 'axios'; 
import TriviaGame from './TriviaGame';
import './styles/main.scss';

function init(){

    let category = document.getElementById('categoryForm').value
    let difficulty = document.getElementById('difficultyForm').value
    let type = document.getElementById('typeForm').value
    let submit = document.getElementById('submitButton')
    submit.addEventListener('click',function(){
        console.log('click on Submit');
        console.log('selections',category,difficulty,type);
        let q ='';
        if (category!="any"){q+='&'+category}
        if (difficulty!="any"){q+='&'+difficulty}
        if (type!="any"){q+='&'+type}
        console.log('q',q);
        //API Data get
        //deberia de solicitar `https://opentdb.com/api.php?amount=10${q}` YA QUE FUNCIONE
        axios.get('https://opentdb.com/api.php?amount=10&category=24')
        .then((response) => {
            // get json
            console.log(response.status);
            console.log(response.data);
            console.log('API response code:', response.data.response_code);//clasificar los erroes de la documentacion 0-5
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