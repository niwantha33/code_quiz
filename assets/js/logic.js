import { get_questions } from "../js/questions.js";
const start_quiz = function () {

}


const start_screen = function (callback) {
    // "start Quiz" button - bind to click event
    const start_btn = document.querySelector('#start')
    // call hide class to hide the start screen
    const start = document.querySelector("#start-screen")  
    start_btn.addEventListener('click', function () {
        
        if (start.isConnected) {
            start.setAttribute('class', 'hide');
            callback();

        }else{
            throw{
                name:"start binding Error!",
                message:start.isConnected()
            }
        }

    }, true)
}


start_screen(start_quiz)

