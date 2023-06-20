radio.setGroup(3)
radio.setFrequencyBand(7)

let lastBtnA = false
let lastBtnB = false
let lastLOGO = false

basic.forever(function() {
    let btnA = input.buttonIsPressed(Button.A)
    let btnB = input.buttonIsPressed(Button.B)
    let btnLOGO = input.logoIsPressed()

    if (btnA != lastBtnA) {
        radio.sendValue("btnA", +btnA)
    }

    if (btnB != lastBtnB) {
        radio.sendValue("btnB", +btnB)
    }

    if (btnLOGO != lastLOGO) {
        radio.sendValue("btnLOGO", +btnLOGO)
    }

    lastBtnA = btnA
    lastBtnB = btnB
    lastLOGO = btnLOGO
})