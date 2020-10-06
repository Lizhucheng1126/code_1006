let AN = 0
let BN = 0
input.onButtonPressed(Button.A, function () {
    AN = randint(0, 999)
    BN = randint(0, 999)
    if (AN < BN) {
        basic.showIcon(IconNames.No)
    }
    if (AN > BN) {
        basic.showIcon(IconNames.Yes)
    }
    if (AN == BN) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    AN = randint(0, 999)
    BN = randint(0, 999)
    if (AN > BN) {
        basic.showIcon(IconNames.No)
    }
    if (AN < BN) {
        basic.showIcon(IconNames.Yes)
    }
    if (AN == BN) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    basic.pause(200)
    basic.clearScreen()
})
