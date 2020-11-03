let Pitch = 0
radio.setGroup(1)
basic.showString("Wind!")
basic.forever(function () {
    Pitch = input.rotation(Rotation.Pitch)
    basic.showNumber(Pitch)
    radio.sendNumber(input.rotation(Rotation.Pitch))
    basic.pause(1000)
})
