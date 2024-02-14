'use strict'
var ballSize = 100
function onBallClick(){
    ballSize = ballSize + 50
    var elBall = document.querySelector('.ball')
    elBall.style.width = ballSize +'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
}