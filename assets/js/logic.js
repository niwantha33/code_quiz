import { get_questions } from "../js/questions.js";

// global variables 

let timeCnt = 150
let cnt = 0;
let set_time_id = undefined
let remain_qn = 10

const timer = document.querySelector("#time")
let title = document.querySelector("#question-title")
let choices = document.querySelector("#choices")
let ulEl = document.createElement('ul')
const qn_show = document.querySelector("#questions")

let btn_array = new Array(4)

for (let i = 0; i < btn_array.length; i++) {
    btn_array[i] = document.createElement('button')
    // btn_array[i].id =i
    // btn_array[i].cla = i
    console.log(btn_array[i])
}

console.log(btn_array)
// let btn = document.createElement('button') 

let quiz = Array.from(get_questions())

const end_quiz = function () {
    qn_show.setAttribute('class', 'hide')
    document.querySelector('#end-screen').removeAttribute('class', 'hide')
    console.log("end quiz")

}


const get_quiz = function () {

    if (cnt < 10) {
        console.log(get_questions().get(cnt))
        title.textContent = get_questions().get(cnt).qn
        let choices = get_questions().get(cnt).choices

        choices.forEach((k, v) => {
            console.log(v, k)
            btn_array[v].setAttribute('style', 'color:white')
            btn_array[v].textContent = k

            // btn_array[v].localName = v

        })
    }else{

        end_quiz();

    }
    console.log("cnt :", cnt)
    // cnt++;
    


}

const track_timer = function () {

    // update the current time
    timer.textContent = timeCnt;

    if (timeCnt % 15 === 0) {
        if (cnt < 10 && cnt > -1) {
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

        choices.appendChild(ulEl)
        ulEl.append(document.createElement('ol'))
        ulEl.append(document.createElement('ol'))
        ulEl.append(document.createElement('ol'))
        ulEl.append(document.createElement('ol'))

        ulEl.childNodes.forEach((liEl, v) => {

            liEl.appendChild(btn_array[v])
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
        e.stopPropagation()
        //  check start id  is inside the document, if error throw error!
        try {
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


start_screen(start_quiz)

ulEl.addEventListener('click', function (e) {
    console.log(e)
    if (cnt <10)
    {
        // e.target.removeAttribute('style', 'color:red')  

        console.log(get_questions().get(cnt).ans)
        console.log(e.target.textContent)
    if (e.target.textContent === get_questions().get(cnt).ans) {
        e.target.setAttribute('style', 'color:gold')
        e.target.textContent = "correct"

    } else {
        e.target.textContent = 'X' ;
        e.target.setAttribute('style', 'color:red')
        // timeCnt -= 15
    }
    setTimeout(get_quiz, 500)   

    }
    cnt++;
    
   
}, true)


