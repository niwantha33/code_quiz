import { get_questions } from "../js/questions.js";
const start_quiz = function () {

}


const start_screen = function (callback) {
    // "start Quiz" button - bind to click event
    const start_btn = document.querySelector('#start')
    // call hide class to hide the start screen
    const start = document.querySelector("#start-screen")

    start_btn.addEventListener('click', function () {
        //  check start id  is inside the document, if error throw error!
        try {
            start.setAttribute('class', 'hide');
            //  callback function for start_quiz
            callback();

        } catch (e) {
            throw {
                Error: e,
                message: "querySelector id Error: " + start
            };
        }

    }, true)
}


start_screen(start_quiz)

