input.onButtonPressed(Button.A, function () {
    music.startMelody(["G4:1", "F4#:1", "G4:2", "", "G4:1", "F4#:1", "G4:2", "", "G4:1", "F4#:1", "E4:2", "D4:1/4", "D4:2", "", "B3:1", "D4:1/2", "E4:2", "", "E4:1", "G4:1/2", "A4:2", "", "G4:1", "A4:1/2", "B4:4", ""], MelodyOptions.Forever)
})
input.onButtonPressed(Button.AB, function () {
    music.setTempo(40)
})
music.onEvent(MusicEvent.MelodyEnded, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    music.changeTempoBy(40)
})
music.onEvent(MusicEvent.MelodyStarted, function () {
    basic.showIcon(IconNames.Chessboard)
})
input.onGesture(Gesture.Shake, function () {
    music.stopMelody(MelodyStopOptions.All)
})
music.setTempo(40)
basic.showString("Demon Slayer")
