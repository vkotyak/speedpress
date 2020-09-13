let counter4 = 0
let fastPress4 = false
input.onButtonPressed(Button.A, function () {
    counter4 = counter4 + 1
    if (counter4 == 15 && input.runningTime() < 5000) {
        fastPress4 = true
    }
    if (counter4 == 15 && input.runningTime() > 4999) {
        fastPress4 = false
    }
    if (counter4 == 15 && fastPress4) {
        // ***
        basic.showString("YOU WIN!", 150)
    }
    if (counter4 == 15 && !(fastPress4)) {
        // ***
        basic.showString("TOO SLOW!", 150)
    }
})
