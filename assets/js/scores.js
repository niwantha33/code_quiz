
const clearScore = function () {


    let show_score = document.getElementById('highscores');
    let scoreLiEl = document.createElement('li');

    // console.log(show_score)

    if (localStorage.hasOwnProperty('score')) {
        console.log('check')
        try {

            let score_store = localStorage.getItem('score');

            // console.log(score_store,n)

            if (score_store !== null) {
                console.log(score_store)

                while (show_score.hasChildNodes()) {

                    show_score.removeChild(show_score.children[0]);
                }

                console.log(score_store)

                let score_json = JSON.parse(score_store);

                console.log(score_json)

                for (let i = 0; i < Object.keys(score_json).length; i++) {
                    i = document.createElement('li')

                    let txt = "Date :" + score_json.timestamp + "        ::" + " Name: " + score_json.name + "        :::" + " Score: " + score_json.quiz_score;

                    console.log(txt)

                    i.textContent = txt;

                    show_score.appendChild(i)


                }

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
            localStorage.clear('score_store')

        } else {
            show_score.textContent = "Not found any records!"

        }



    }, true
    );
}

clearScore()
