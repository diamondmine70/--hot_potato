input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    for (let index = 0; index < randint(2, 6); index++) {
        music.playMelody("E D G F B A C5 B ", 120)
    }
    music.stopMelody(MelodyStopOptions.All)
    basic.showIcon(IconNames.Pitchfork)
})
basic.forever(function () {
	
})
