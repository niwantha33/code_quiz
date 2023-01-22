import { get_questions } from "../js/questions.js";

const start_quiz = function () {
    // start showing quiz by removing hide class (display:none)
    const qn = document.querySelector("#questions")
    qn.removeAttribute('class', 'hide')
    let number_of_qns =  get_questions(). size
    console.log("ln:", number_of_qns)
    console.log(get_questions())
    
    for(let i= 0; i <number_of_qns ; i++)
    {
        // set quiz title    
    // qn.childNodes[1].textContent = get_questions().get(i)
       
  
    console.log(qn.childNodes)
    }
}

const start_screen = function (callback) {
    // "start Quiz" button - bind to click event    
    const start_btn = document.querySelector('#start')

    // bind #start-screen id to hide the start screen
    const start = document.querySelector("#start-screen")
    
    start_btn.addEventListener('click', function () {
        // check node is connected ot not 
        Object.keys(get_questions()).reduce(function(key, value)
        {
            console.log(key,value)
        })
        console.log(get_questions() )
        }
                start.setAttribute('class', 'hide');
            // start quiz - callback function 
            callback();
        }
        else {
            throw {
                name: "node not connected to document",
                message: start.isConnected
            }
        }


    }, true)
}


start_screen(start_quiz);

