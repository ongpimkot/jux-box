def on_button_pressed_a():
    basic.show_string("HCB")
    music.play_melody("A G F - A G F - ", 70)
    music.play_melody("F - F - F - F - ", 320)
    music.play_melody("G - G - G - G - ", 320)
    music.play_melody("A - G - F - - - ", 140)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global X
    X = X + 20
    music.set_volume(X)
    basic.show_string("" + str((X)))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global X
    X = X - 20
    basic.show_string("" + str((X)))
    music.set_volume(X)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

X = 0
X = 130
music.set_volume(X)
basic.show_string("" + str((X)))