/*

@brief: 
        gets an HTML element with the ID "highscores" and creates a new "li" element. 
        if the local storage has the "score" object(JSON), then
        check any child elements for the 'ol'
        and parses the stored score data to li elements. 

        also includes an event listener that clears the "score" property from local storage 
        when the element with the ID "clear" is clicked

*/


const clearScore = function () {

    let show_score = document.getElementById('highscores');// ol element 

    let scoreLiEl = document.createElement('li');

    let tmp_buf = new Array(); 

    if (localStorage.hasOwnProperty('score')) {
       
        try {

            let score_store = localStorage.score;  

            if (score_store !== null) {              
                // delete all the elements under 'ol' element
                while (show_score.hasChildNodes()) {

                    show_score.removeChild(show_score.children[0]);
                }               

                tmp_buf.push(JSON.parse(score_store));

                // sorting highest to lowest 
                tmp_buf[0].sort(function(a,b){
                    return b.quiz_score - a.quiz_score
                });

                tmp_buf[0].forEach((element, id_) => {
                    id_ = document.createElement('li')
                    id_.textContent = element.name +' => '+element.quiz_score+ " =>>"+element.timestamp;
                    show_score.appendChild(id_)
                    
                });
            }

        } catch (e) {
            console.log(e)
        }

    } else {

    }

    const clear_score = document.getElementById('clear');
    clear_score.addEventListener('click', function (e) {
        // console.log('click')
        e.stopPropagation()
        if (localStorage.hasOwnProperty('score')) {
            show_score.textContent = "Deleting old records!"
            localStorage.clear('score')

        } else {
            show_score.textContent = "Not found any records!"

        }
    }, true
    );
}

clearScore()
