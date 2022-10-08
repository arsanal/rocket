input.onButtonPressed(Button.A, function () {
    music.playMelody("E B C5 A B G A F ", 120)
    led.setBrightness(255)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("10")
    basic.pause(100)
    basic.showString("9")
    basic.pause(100)
    basic.showString("8")
    basic.pause(100)
    basic.showString("7")
    basic.pause(100)
    basic.showString("6")
    basic.pause(100)
    basic.showString("5")
    basic.pause(100)
    basic.showString("4")
    basic.pause(100)
    basic.showString("3")
    basic.pause(100)
    basic.showString("2")
    basic.pause(100)
    basic.showString("1")
    basic.pause(100)
    basic.showString("blast off")
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.showIcon(IconNames.Heart)
music.playMelody("C5 B A G F E D C ", 120)
basic.pause(100)
