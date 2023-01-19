input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # # .
        . . # . .
        . . # . .
        `)
    for (let index = 0; index < 4; index++) {
        music.playMelody("B F B F B F B F ", 200)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    music.playMelody("C D E D C D E F ", 120)
    music.playMelody("D E F E D E F G ", 120)
    music.playMelody("E F G F E F G A ", 120)
    music.playMelody("F G A G F G A B ", 120)
    music.playMelody("G A B A G A B C5 ", 120)
})
basic.forever(function () {
	
})
