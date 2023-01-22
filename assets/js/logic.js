import { get_questions } from "../js/questions.js";


const start_screen = function(){
    // "start Quiz" button - bind to click event

    let status = false;

    const start_btn = document.querySelector('#start')
    // call hide class to hide the start screen
    const start = document.querySelector("#start-screen")

    console.log(start)
    start_btn.addEventListener('click',function(){
        start.setAttribute('class', 'hide');
        start_quiz();
    }, true)   
}


start_screen()

