var myAssignment = document.getElementById('myAssignment');
var myAnswer = document.getElementById('myAnswer');
var feedback = document.getElementById('feedback');

var mySum;
var sound = new Audio();
var bsound = new Audio();

function makeSum() {
    var a = Math.floor(Math.random() * 9 + 1);
    var b = Math.floor(Math.random() * 9 + 1);
    mySum = a + "*" + b;

    myAssignment.innerHTML = mySum;
    myAnswer.focus();
}

function keyPressed(evt) {
    if (evt.keyCode === 13) {
        if (eval(mySum) == myAnswer.value) {
            feedback.src = "img/goed.png";
            sound.src = "sef/correct.wav";
            sound.play();
        } else {
            feedback.src = "img/fout.png";
            sound.src = "sef/false.wav";
            sound.play();
            window.setTimeout(wrong, 1250)
        }
        window.setTimeout(waiting, 2000);
    }
}

function waiting() {
    feedback.src = "img/feedback.png";
    myAnswer.value = "";
    makeSum();
}


makeSum();
myAnswer.addEventListener('keypress', keyPressed, false);
