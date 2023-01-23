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

const end_quiz = function () {
    qn_show.setAttribute('class', 'hide')
    document.querySelector('#end-screen').removeAttribute('class', 'hide')
}

const get_quiz = function () {

    if (cnt < numOfQuiz) {

        console.log(get_questions().get(cnt))

        title.textContent = get_questions().get(cnt).qn

        let choices = get_questions().get(cnt).choices

        choices.forEach((k, v) => {
            btn_array[v].setAttribute('style', 'color:#f3edfc');
            btn_array[v].textContent = (k);
        })
    } else {
        end_quiz();
    }

}

const track_timer = function () {

    // update the current time
    timer.textContent = timeCnt;

    if (timeCnt % 15 === 0) {
        if (cnt < numOfQuiz && cnt > -1) {
            get_quiz();
        }
    }
    if (timeCnt <= 0) {
        end_quiz()
        clearInterval(set_time_id)
        timer.textContent = 0;
    }
    timeCnt--;
}

const start_quiz = function () {
    
    try {
        // remove css hide class from the #question id 
        qn_show.removeAttribute('class', 'hide')
        // create elements 
        choices.appendChild(olEl)

        for (let j = 0; j < 4; j++) {
            //  create list item 
            olEl.append(document.createElement('li'))
        }

        olEl.childNodes.forEach((liEl, v) => {
            // 
            liEl.appendChild(btn_array[v]);
        })
        set_time_id = setInterval(track_timer, 1000);

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

    e.stopPropagation();

    if (cnt < numOfQuiz) {
        if (e.target.textContent === get_questions().get(cnt).ans) {
            e.target.setAttribute('style', 'color:gold; font-size: 600;')
            e.target.textContent = "correct"
            score++;

        } else {
            e.target.textContent = 'X';
            e.target.setAttribute('style', 'color:red')

        }
        // wait until user see the answer 
        setTimeout(get_quiz, 500)
    }
    //  get next quiz
    cnt++;

}, true)

start_screen(start_quiz)
