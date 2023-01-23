import { get_questions } from "../js/questions.js";

// global variables 
let score = 0;

let timeCnt = 150
let cnt = 0;
let set_time_id = undefined
let numOfQuiz = get_questions().size;

const timer = document.querySelector("#time");
let title = document.querySelector("#question-title");
let choices = document.querySelector("#choices");

let olEl = document.createElement('ol');
// create a table for feedback 
let tableEl = document.createElement('table');

const qn_show = document.querySelector("#questions");

let btn_array = new Array(4)

let user_score = new Array(10);


// create 4 buttons 
for (let i = 0; i < 4; i++) {

    btn_array[i] = document.createElement('button');
}


export  function func_score(){

    return Object.create(score);
}


const create_feedback_table = function () {
    console.log("create table")
    document.querySelector('#end-screen').setAttribute('class', 'hide')

    let set_feedback = document.querySelector('#feedback');

    set_feedback.removeAttribute('class', 'hide')

    while (tableEl.hasChildNodes()) {

        tableEl.removeChild(tableEl.children[0]);
    }
    const tr = document.createElement('tr');

    let td_sr = document.createElement('td');
    td_sr.textContent = 'Sr.No';
    tr.appendChild(td_sr);
    let td_quiz = document.createElement('td');
    td_quiz.textContent ="Quiz";
    // td_quiz.setAttribute('style', 'width:auto; ')
    tr.appendChild(td_quiz);

    let td_ans = document.createElement('td');
    td_ans.textContent = "Answer"
    tr.appendChild(td_ans);

    let td_user = document.createElement('td');
    td_user.textContent = "User Response"
    tr.appendChild(td_user);

    // tr.setAttribute('style', 'width:100%;')
    tableEl.appendChild(tr);

    
    user_score.forEach((value, key) => {
        const tr = document.createElement('tr');
        let td = document.createElement('td');
        td.textContent = key+1;
        tr.appendChild(td)

        let td_col_1 = document.createElement('td');
        td_col_1.textContent = get_questions().get(key).qn;
        // td_col_1.setAttribute('style', 'width:auto; padding-top: 10px;')
        tr.appendChild(td_col_1)

        let td_col_2 = document.createElement('td');
        td_col_2.textContent = get_questions().get(key).ans;
        // td_col_2.setAttribute('style', 'width:auto;')
        tr.appendChild(td_col_2)

        let td_col_3 = document.createElement('td');
        td_col_3.textContent = value?"Correct":"Incorrect";
        tr.appendChild(td_col_3)
        // tr.setAttribute('style', 'width:100%;')
        tableEl.appendChild(tr);
    });
    
    set_feedback.appendChild(tableEl);

    setTimeout('window.location.href = "./highscores.html"', 2000);
}

const set_feedback = function (newScore, oldScore) {
    
    create_feedback_table();


}


const store_score = function () {

    let submit_btn = document.getElementById('submit');

    submit_btn.addEventListener('click', function (e) {
        e.stopPropagation();

        let new_score = '';

        let get_score = localStorage.getItem('score');
        let old_score = JSON.parse(get_score);

        let get_initials = document.getElementById('initials').value;
        console.log(score, get_initials)

        let timestamp = new Date().toJSON().split('T')

        

        if (get_score !== null) {
            
            new_score = JSON.stringify({ timestamp: `${timestamp[0]} ${timestamp[1].slice(0, 8)}`, name: get_initials, quiz_score: score });

            if (Number(old_score.quiz_score) < score && old_score.name === get_initials) {

                localStorage.setItem('score', new_score);

            }

        } else {
            localStorage.setItem('score', new_score);
        }

        set_feedback(new_score, old_score);

    }, true)


}

const end_quiz = function () {
    clearInterval(set_time_id)
    qn_show.setAttribute('class', 'hide')
    document.querySelector('#end-screen').removeAttribute('class', 'hide')
    let show_score = document.getElementById('final-score');
    show_score.textContent = score
    store_score()
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
    if (timeCnt == 150) {
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
            user_score[cnt] = 1;
            score++;

        } else {
            e.target.textContent = 'X';
            e.target.setAttribute('style', 'color:red');
            user_score[cnt] = 0;
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
