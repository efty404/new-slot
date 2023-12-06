basic.showLeds(`
    # . # . #
    . . . . .
    # . # . #
    . . . . .
    # . # . #
    `)
while (0 == 0) {
    led.toggle(0, 0)
    led.toggle(0, 1)
    led.toggle(0, 2)
    led.toggle(0, 3)
    led.toggle(0, 4)
    led.toggle(2, 0)
    led.toggle(2, 1)
    led.toggle(2, 2)
    led.toggle(2, 3)
    led.toggle(2, 4)
    led.toggle(4, 0)
    led.toggle(4, 1)
    led.toggle(4, 2)
    led.toggle(4, 3)
    led.toggle(4, 4)
    if (input.buttonIsPressed(Button.A)) {
        break;
    }
}
let luck = randint(0, 3000)
if (luck == 0) {
    basic.showLeds(`
        . . . . #
        . . # . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . #
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.showString("!JACKPOT!")
} else if (luck < 10) {
    basic.showLeds(`
        . . . . #
        . . # . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . #
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showString("!SILVER PRIZE!")
} else {
    basic.showLeds(`
        . . . . .
        . . # . .
        # . . . .
        . . . . .
        . . . . #
        `)
    basic.pause(500)
    basic.showString("Try Again?")
    basic.pause(500)
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . . .
        . # . . .
        . # . . .
        `)
}
