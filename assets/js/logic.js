import { get_questions } from "../js/questions.js";

const start_quiz = function () {

    try {
        // remove css hide class from the #question id 
        const qn_show =document.querySelector("#questions")
        qn_show.removeAttribute('class', 'hide')

        // get the Map array size 
        let num_of_qns = get_questions().size;

        // console.log(get_questions())

        // Create element 

        let title = document.querySelector("#question-title")
        let choices = document.querySelector("#choices")

        let ulEl = document.createElement('ul')
        choices.append(ulEl)
        let olEl = document.createElement('ol')
        let btnEl = document.createElement('button')
        btnEl.className ='button'
        btnEl.textContent ="button 01"
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

