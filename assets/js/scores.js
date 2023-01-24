
const clearScore = function () {


    let show_score = document.getElementById('highscores');

    // console.log(show_score)

    if (localStorage.hasOwnProperty('score')) {
        console.log('check')
        try {

            let {score_store, n} = localStorage.getItem('score');

            console.log(score_store,n)

            if (score_store !== null) {


                show_score.textContent = JSON.parse(score_store).timestamp + " " + JSON.parse(score_store).name + " " + JSON.parse(score_store).quiz_score;

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
