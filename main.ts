input.onButtonPressed(Button.A, function () {
    led.unplot(light2 / 5, light2 % 5)
    light2 += 1
    light2 = light2 % 25
    led.plot(light2 / 5, light2 % 5)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("guess", light2)
    moves += 1
})
input.onButtonPressed(Button.B, function () {
    led.unplot(light2 / 5, light2 % 5)
    light2 += -1
    if (light2 < 0) {
        light2 = 24
    }
    led.plot(light2 / 5, light2 % 5)
})
radio.onReceivedValue(function (name, value) {
    if (name == "ready") {
        basic.clearScreen()
        ready = true
        moves = 0
        left = 5
        light2 = 0
        led.plot(light2 / 5, light2 % 5)
    }
    if (name == "result") {
        if (value == 0) {
            basic.clearScreen()
            basic.showIcon(IconNames.Sad)
            basic.pause(200)
            basic.clearScreen()
            led.plot(light2 / 5, light2 % 5)
        } else {
            basic.clearScreen()
            basic.showIcon(IconNames.Happy)
            basic.pause(200)
            basic.clearScreen()
            led.plot(light2 / 5, light2 % 5)
            left += -1
            if (left == 0) {
                radio.sendValue("results", moves)
                basic.clearScreen()
                basic.showString("WINNER!")
                basic.showNumber(moves)
            }
        }
    }
})
let left = 0
let moves = 0
let light2 = 0
let ready = false
ready = false
basic.showString("waiting")
