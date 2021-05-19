input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("A: Hi! B: How are you? A+B: Good. Logo Pressed: Yes! Screen Down: No. Logo Touched: Repeat or Accept Last Message")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hi!")
    basic.showString("Hi!")
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("No.")
    basic.showString("No.")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Good.")
    basic.showString("Good.")
})
radio.onReceivedString(function (receivedString) {
    soundExpression.twinkle.play()
    Received_String = receivedString
    basic.pause(1000)
    if (receivedString == "PERSON IN ROOM!") {
        basic.showString("Comm received from your room. Accept?")
    } else {
        basic.showString("Comm received from unknown user. Accept?")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("How are you?")
    basic.showString("How are you?")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (Received_String == "PERSON IN ROOM!") {
        basic.showString("ALERT!")
    }
    basic.showString(Received_String)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("Yes!")
    basic.showString("Yes!")
})
let Received_String = ""
radio.setGroup(562)
let Steps = 0
basic.showString("Hi!")
basic.showString("Logo long press for reminder.")
