input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    while (B버튼_누름 == false) {
        basic.showIcon(IconNames.Diamond)
        if (Environment.ReadNoise(AnalogPin.P1) > 90) {
            리스트[음계저장번호] = 523
            music.playTone(523, music.beat(BeatFraction.Half))
            음계저장번호 += 1
        } else if (Environment.ReadNoise(AnalogPin.P1) > 85) {
            리스트[음계저장번호] = 494
            music.playTone(494, music.beat(BeatFraction.Half))
            음계저장번호 += 1
        } else if (Environment.ReadNoise(AnalogPin.P1) > 80) {
            리스트[음계저장번호] = 440
            music.playTone(440, music.beat(BeatFraction.Half))
            음계저장번호 += 1
        } else if (Environment.ReadNoise(AnalogPin.P1) > 75) {
            리스트[음계저장번호] = 392
            music.playTone(392, music.beat(BeatFraction.Half))
            음계저장번호 += 1
        } else if (Environment.ReadNoise(AnalogPin.P1) > 70) {
            리스트[음계저장번호] = 349
            music.playTone(349, music.beat(BeatFraction.Half))
            음계저장번호 += 1
        } else if (Environment.ReadNoise(AnalogPin.P1) > 65) {
            리스트[음계저장번호] = 330
            music.playTone(330, music.beat(BeatFraction.Half))
            음계저장번호 += 1
        } else if (Environment.ReadNoise(AnalogPin.P1) > 60) {
            리스트[음계저장번호] = 294
            music.playTone(294, music.beat(BeatFraction.Half))
            음계저장번호 += 1
        } else if (Environment.ReadNoise(AnalogPin.P1) > 55) {
            리스트[음계저장번호] = 262
            music.playTone(262, music.beat(BeatFraction.Half))
            음계저장번호 += 1
        } else {
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.SmallHeart)
    음계저장번호 = 0
    리스트 = []
    basic.showIcon(IconNames.Duck)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.EigthNote)
    B버튼_누름 = true
    출력번호 = 0
    for (let index = 0; index < 리스트.length; index++) {
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    basic.showIcon(IconNames.Yes)
    B버튼_누름 = false
})
let 출력번호 = 0
let B버튼_누름 = false
let 리스트: number[] = []
let 음계저장번호 = 0
basic.showIcon(IconNames.Happy)
음계저장번호 = 0
리스트 = []
basic.forever(function () {
	
})
