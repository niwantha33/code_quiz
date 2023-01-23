import { get_questions } from "../js/questions.js";

// global variables 
var score = 0;
let timeCnt = 150
let cnt = 0;
let set_time_id = undefined
let numOfQuiz = get_questions().size;

const timer = document.querySelector("#time")
let title = document.querySelector("#question-title")
let choices = document.querySelector("#choices")
let olEl = document.createElement('ol')
const qn_show = document.querySelector("#questions")

let btn_array = new Array(4)

// create 4 buttons 
for (let i = 0; i < 4; i++) {

    btn_array[i] = document.createElement('button');
}

const store_score = function () {

}

const end_quiz = function () {
    clearInterval(set_time_id)
    qn_show.setAttribute('class', 'hide')
    document.querySelector('#end-screen').removeAttribute('class', 'hide')
    let show_score = document.getElementById('final-score');
    show_score.textContent = score   
}

const get_quiz = function () {
    // debugger;
    if (cnt < numOfQuiz) {

        while (olEl.hasChildNodes()) {

            olEl.removeChild(olEl.children[0]);
        }

        title.textContent = get_questions().get(cnt).qn

        let choices_ = get_questions().get(cnt).choices


        choices_.forEach((value, index) => {
            let liEl = document.createElement('li')
            btn_array[index].setAttribute('style', 'color:#f3edfc');
            btn_array[index].textContent = (value);
            liEl.appendChild(btn_array[index]);
            olEl.appendChild(liEl)

        })
        choices.appendChild(olEl)

    } else {
        end_quiz();
    }

}

const quiz_timer_update = function () {

    // update the current time
    timer.textContent = timeCnt;   
    if (timeCnt== 150) {
        if (cnt < numOfQuiz && cnt > -1) {
            // start the first quiz
            get_quiz();           
        }
    } else if (timeCnt <= 0) { // if time reaches to 0
            end_quiz()            
           
        }
    timeCnt--;
}

const start_quiz = function () {

    try {
        // remove css hide class from the #question id 
        qn_show.removeAttribute('class', 'hide')
        // run quiz_timer_update function every 1 sec , until timer === 0 
        set_time_id = setInterval(quiz_timer_update, 1000);

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

    if (start === null) {
        throw {
            Error: "query Error"
        }
    }
    start_btn.addEventListener('click', function (e) {
        e.preventDefault();

        //  check start id  is inside the document, if error throw error!
        try {
            // hide the start screen
            start.setAttribute('class', 'hide');

            //  callback function for start_quiz
            callback();

        } catch (e) {
            throw {
                error_location: "start_screen function",
                message: e
            };
        }


    }, true)
}

olEl.addEventListener('click', function (e) {
    // stop this event further. 
    e.stopPropagation();

    if (cnt < numOfQuiz) {
        // get the current target button and set attributes 
        if (e.target.textContent === get_questions().get(cnt).ans) {
            e.target.setAttribute('style', 'color:gold; font-size: 600;')
            e.target.textContent = "correct"
            score++;

        } else {
            e.target.textContent = 'X';
            e.target.setAttribute('style', 'color:red');

            // incorrect answers will penalize your score/time by ten seconds
            timeCnt -= 10;
        }

        //  get next quiz
        cnt++;
        // wait until user see the answer 
        setTimeout(get_quiz, 400)
    }



}, true)

start_screen(start_quiz)
