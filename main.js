let playing = false;
let score;
let action;
let timeRemaning;
let numberOne;
let numberTwo;
let correctAnswer;

document.getElementById('startreset').onclick = function() {
    if (playing) {
        location.reload();
    } else {
        timeRemaning = 6;
        playing = true;
        // set score to 0
        score = 0;
        document.getElementById('scorevalue').innerHTML.valueAsNumber = score;
        //hide game over box
        hide('gameOver');
        // show countdown box
        show('time');
        // change button to reset
        changeText('startreset', 'Reset game');
        //start countdown
        startCountdown();
        // generate new q&a
        generateQA();

    }
};


//functions
function startCountdown() {
    action = setInterval(function() {
        timeRemaning--;
        document.getElementById('timevalue').innerHTML = timeRemaning;
        if (timeRemaning == 0) {
            stopCountdown();
            show('gameOver');
            changeText('gameOver', "<p>Game over!</p><p>Your score is " + score + '.</p>');
            hide('time');
            hide('correct');
            hide('wrong');
            playing = false;
            changeText('startreset', 'New Game');
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(action);
}

function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function show(id) {
    document.getElementById(id).style.display = 'block';
}

function changeText(id, text) {
    document.getElementById(id).innerHTML = text;
}

function generateQA() {
    numberOne = Math.floor(Math.random() * 10) + 1;
    numberTwo = Math.floor(Math.random() * 10) + 1;
    changeText('question', numberOne + 'x' + numberTwo);
    correctAnswer = numberOne * numberTwo;
    let correctPosition = Math.floor(Math.random() * 4) + 1;
    debugger;
    changeText('box' + correctPosition, correctAnswer);
    //fill other boxes with wrong anwsers
    for (let i = 1; i < 5; i++) {
        let wrongAnswer = Math.floor(Math.random() * 100) + 1;
        if (i !== correctPosition) {
            changeText('box' + i, wrongAnswer);
        }

    }
}
