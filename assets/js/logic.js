import { get_questions } from "../js/questions.js";

// global variables 

let timeCnt = 150
let cnt = 0;
let set_time_id = undefined
const timer = document.querySelector("#time")

const get_quiz = function () {



    // Create element 

    // let title = document.querySelector("#question-title")

    // let choices = document.querySelector("#choices")
    // //  


    // li_array = Array.from(get_questions())
    // console.log(li_array)
    // num_of_qns.forEach(function(i){
    //     li_array[i] =   get_questions().get(1) 

    // })

    // print(li_array)
    // Object.entries(get_questions().get(0)).forEach(([key,values])=>{

    //     console.log(key,values)

    // })


    let ulEl = document.createElement('ul')

    choices.append(ulEl)
    let olEl = document.createElement('ol')
    let btnEl = document.createElement('button')
    btnEl.className = 'button'
    btnEl.textContent = "button 01"
    olEl.append(btnEl)
    ulEl.append(olEl)




    // for(let i = 0; i <num_of_qns; i++){
    //     // get the objects 
    //     let qn_details = get_questions().get(i)    

    //     Object.entries(qn_details).forEach(([key,values])=>{
    //         console.log()
    //     })



    // console.log(Object.entries(qn_details))
    // console.log(qn_details[1])


    // }

}
const end_quiz = function () {

}

const track_timer = function () {

    // update the current time
    timer.textContent = timeCnt;

    if (timeCnt % 15 === 0) {
        get_quiz();
        console.log(timeCnt, cnt++)
    }

    if (timeCnt === 0) {

        end_quiz()
        clearInterval(set_time_id)

    }

    timeCnt--;

}

const start_quiz = function () {

    try {
        // remove css hide class from the #question id 
        const qn_show = document.querySelector("#questions")
        qn_show.removeAttribute('class', 'hide')

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
                message: "querySelector id Error: =>" + e
            };
        }

    }, true)
}


start_screen(start_quiz)

