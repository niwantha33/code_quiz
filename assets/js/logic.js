import { get_questions } from "../js/questions.js";

const start_quiz = function () {

    try {
        // get the Map array 
        let num_of_qns = get_questions().size;
        console.log(num_of_qns)
        

    } catch (e) {

        throw {
            error_locations: "start_quiz function",
            message: e
        }
    }
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
                error_location: "start_screen function",
                message: "querySelector id Error: " + start + " " + e
            };
        }

    }, true)
}


start_screen(start_quiz)

