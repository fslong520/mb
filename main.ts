IR_V15.onPressEvent(RemoteButton.NUM1, function () {
    basic.showNumber(1)
})
robotbit.MotorStopAll()
pins.servoWritePin(AnalogPin.P2, 90)
IR_V15.init(Pins.P3)
basic.forever(function () {
	
})
