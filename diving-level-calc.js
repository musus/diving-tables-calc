function diveLevelCalc() {
    const metre = document.getElementById('metre').value;
    const time = document.getElementById('time').value;
    // const divingArr = [metre, time];
    let level;

    if (metre <= 12) {
        
        if (time <= 5) {
            level = "A";
        }
        if (time > 5 && time <= 15) {
            level = "B";
        }
        if (time > 16 && time <= 25) {
            level = "C";
        }
        if (time > 26 && time <= 30) {
            level = "D";
        }
        if (time > 31 && time <= 40) {
            level = "E";
        }
        if (time > 41 && time <= 50) {
            level = "F";
        }
        if (time > 51 && time <= 70) {
            level = "G";
        }
        if (time > 71 && time <= 80) {
            level = "H";
        }
        if (time > 81 && time <= 100) {
            level = "I";
        }
        if (time > 101 && time <= 110) {
            level = "J";
        }
        if (time > 111 && time <= 130) {
            level = "K";
        }
        if (time > 131 && time <= 150) {
            level = "L";
        }
    }

    if (metre <= 15 && metre >= 13) {
        if (time <= 10) {
            level = "B";
        }
        if (time > 11 && time <= 15) {
            level = "C";
        }
        if (time > 16 && time <= 25) {
            level = "D";
        }
        if (time > 26 && time <= 30) {
            level = "E";
        }
        if (time > 31 && time <= 40) {
            level = "F";
        }
        if (time > 41 && time <= 50) {
            level = "G";
        }
        if (time > 51 && time <= 60) {
            level = "H";
        }
        if (time > 61 && time <= 70) {
            level = "I";
        }
        if (time > 71 && time <= 80) {
            level = "J";
        }
    }

    if (metre <= 18 && metre >= 16) {
        if (time <= 10) {
            level = "B";
        }
        if (time > 11 && time <= 15) {
            level = "C";
        }
        if (time > 16 && time <= 20) {
            level = "D";
        }
        if (time > 21 && time <= 25) {
            level = "E";
        }
        if (time > 26 && time <= 30) {
            level = "F";
        }
        if (time > 31 && time <= 40) {
            level = "G";
        }
        if (time > 41 && time <= 50) {
            level = "H";
        }
        if (time > 51 && time <= 55) {
            level = "I";
        }
        if (time > 56 && time <= 60) {
            level = "J";
        }
        if (time > 61 && time <= 80) {
            level = "L";
        }
    }

    if (metre <= 21 && metre >= 19) {
        if (time <= 5) {
            level = "B";
        }
        if (time > 6 && time <= 10) {
            level = "C";
        }
        if (time > 11 && time <= 15) {
            level = "D";
        }
        if (time > 16 && time <= 20) {
            level = "E";
        }
        if (time > 21 && time <= 30) {
            level = "F";
        }
        if (time > 31 && time <= 35) {
            level = "G";
        }
        if (time > 36 && time <= 40) {
            level = "H";
        }
        if (time > 41 && time <= 45) {
            level = "I";
        }
        if (time > 46 && time <= 50) {
            level = "J";
        }
        if (time > 51 && time <= 70) {
            level = "L";
        }
    }

    if (metre <= 21 && metre >= 19) {
        if (time <= 5) {
            level = "B";
        }
        if (time > 6 && time <= 10) {
            level = "C";
        }
        if (time > 11 && time <= 15) {
            level = "D";
        }
        if (time > 16 && time <= 20) {
            level = "E";
        }
        if (time > 21 && time <= 30) {
            level = "F";
        }
        if (time > 31 && time <= 35) {
            level = "G";
        }
        if (time > 36 && time <= 40) {
            level = "H";
        }
        if (time > 41 && time <= 45) {
            level = "I";
        }
        if (time > 46 && time <= 50) {
            level = "J";
        }
        if (time > 51 && time <= 60) {
            level = "K";
        }
        if (time > 61 && time <= 70) {
            level = "L";
        }
    }

    if (metre <= 24 && metre >= 22) {
        if (time <= 5) {
            level = "B";
        }
        if (time > 6 && time <= 10) {
            level = "C";
        }
        if (time > 11 && time <= 15) {
            level = "D";
        }
        if (time > 16 && time <= 20) {
            level = "E";
        }
        if (time > 21 && time <= 25) {
            level = "F";
        }
        if (time > 26 && time <= 30) {
            level = "G";
        }
        if (time > 31 && time <= 35) {
            level = "H";
        }
        if (time > 36 && time <= 40) {
            level = "I";
        }
        if (time > 41 && time <= 50) {
            level = "K";
        }
        if (time > 51 && time <= 60) {
            level = "L";
        }
    }

    if (metre <= 27 && metre >= 25) {
        if (time <= 5) {
            level = "B";
        }
        if (time > 6 && time <= 10) {
            level = "C";
        }
        if (time > 11 && time <= 12) {
            level = "D";
        }
        if (time > 13 && time <= 15) {
            level = "E";
        }
        if (time > 16 && time <= 20) {
            level = "F";
        }
        if (time > 21 && time <= 25) {
            level = "G";
        }
        if (time > 26 && time <= 30) {
            level = "H";
        }
        if (time > 31 && time <= 40) {
            level = "J";
        }
        if (time > 41 && time <= 50) {
            level = "L";
        }
    }

    if (metre <= 30 && metre >= 28) {
        if (time <= 5) {
            level = "B";
        }
        if (time > 6 && time <= 7) {
            level = "C";
        }
        if (time > 8 && time <= 10) {
            level = "D";
        }
        if (time > 11 && time <= 15) {
            level = "E";
        }
        if (time > 16 && time <= 20) {
            level = "F";
        }
        if (time > 21 && time <= 22) {
            level = "G";
        }
        if (time > 23 && time <= 25) {
            level = "H";
        }
        if (time > 31 && time <= 40) {
            level = "K";
        }
    }

    if (metre <= 33 && metre >= 31) {
        if (time <= 5) {
            level = "C";
        }
        if (time > 6 && time <= 10) {
            level = "D";
        }
        if (time > 11 && time <= 13) {
            level = "E";
        }
        if (time > 14 && time <= 15) {
            level = "F";
        }
        if (time > 16 && time <= 20) {
            level = "G";
        }
        if (time > 21 && time <= 22) {
            level = "H";
        }
        if (time > 23 && time <= 30) {
            level = "K";
        }
    }

    if (metre <= 36 && metre >= 34) {
        if (time <= 5) {
            level = "C";
        }
        if (time > 6 && time <= 10) {
            level = "D";
        }
        if (time > 11 && time <= 12) {
            level = "E";
        }
        if (time > 13 && time <= 25) {
            level = "I";
        }
        if (time > 26 && time <= 30) {
            level = "J";
        }
    }

    if (metre <= 36 && metre >= 34) {
        if (time <= 5) {
            level = "C";
        }
        if (time > 6 && time <= 8) {
            level = "D";
        }
        if (time > 9 && time <= 10) {
            level = "E";
        }
        if (time > 11 && time <= 25) {
            level = "J";
        }
    }

    document.getElementById('level').value = level;

}

function diveLevelNew() {
    const level = document.getElementById('level').value;
    const restTime = document.getElementById('rest').value;

    if (level === "A") {
        newLevel = "A";
    }

    if (level === "B") {
        if (restTime >= 201) {
            newLevel = "A";
        } else {
            newLevel = "B";
        }
    }

    if (level === "C") {
        if (restTime >= 290) {
            newLevel = "A";
        }
        if (restTime <= 289 && restTime >= 100) {
            newLevel = "B";
        }
        if (restTime <= 100) {
            newLevel = "C";
        }
    }

    if (level === "D") {
        if (restTime >= 349) {
            newLevel = "A";
        }
        if (restTime <= 348 && restTime >= 159) {
            newLevel = "B";
        }
        if (restTime <= 158 && restTime >= 70) {
            newLevel = "C";
        }
        if (restTime <= 69) {
            newLevel = "D";
        }
    }

    if (level === "E") {
        if (restTime >= 395) {
            newLevel = "A";
        }
        if (restTime <= 394 && restTime >= 215) {
            newLevel = "B";
        }
        if (restTime <= 214 && restTime >= 108) {
            newLevel = "C";
        }
        if (restTime <= 107 && restTime >= 55) {
            newLevel = "D";
        }
        if (restTime <= 54) {
            newLevel = "E";
        }
    }

    if (level === "F") {
        if (restTime >= 426) {
            newLevel = "A";
        }
        if (restTime <= 425 && restTime >= 238) {
            newLevel = "B";
        }
        if (restTime <= 237 && restTime >= 149) {
            newLevel = "C";
        }
        if (restTime <= 148 && restTime >= 90) {
            newLevel = "D";
        }
        if (restTime <= 89 && restTime >= 46) {
            newLevel = "E";
        }
        if (restTime <= 45) {
            newLevel = "F";
        }
    }

    if (level === "G") {
        if (restTime >= 456) {
            newLevel = "A";
        }
        if (restTime <= 455 && restTime >= 266) {
            newLevel = "B";
        }
        if (restTime <= 265 && restTime >= 179) {
            newLevel = "C";
        }
        if (restTime <= 178 && restTime >= 120) {
            newLevel = "D";
        }
        if (restTime <= 119 && restTime >= 76) {
            newLevel = "E";
        }
        if (restTime <= 75 && restTime >= 41) {
            newLevel = "F";
        }
        if (restTime <= 40) {
            newLevel = "G";
        }
    }

    if (level === "H") {
        if (restTime >= 480) {
            newLevel = "A";
        }
        if (restTime <= 479 && restTime >= 266) {
            newLevel = "B";
        }
        if (restTime <= 265 && restTime >= 201) {
            newLevel = "C";
        }
        if (restTime <= 200 && restTime >= 144) {
            newLevel = "D";
        }
        if (restTime <= 143 && restTime >= 102) {
            newLevel = "E";
        }
        if (restTime <= 101 && restTime >= 67) {
            newLevel = "F";
        }
        if (restTime <= 66 && restTime >= 37) {
            newLevel = "G";
        }
        if (restTime <= 36) {
            newLevel = "H";
        }
    }


    document.getElementById('newLevel').value = newLevel;

}

function calcRNT() {
    const metre = document.getElementById('newMetre').value;
    const newLevel = document.getElementById('newLevel').value;

    if (newLevel === "A") {

        if (metre <= 12) {
            rnt = 7;
        }
        if (metre <= 15 && metre >= 13) {
            rnt = 6;
        }
        if (metre <= 18 && metre >= 16) {
            rnt = 5;
        }
        if (metre <= 24 && metre >= 19) {
            rnt = 4;
        }
        if (metre <= 40 && metre >= 25) {
            rnt = 3;
        }
    }

    if (newLevel === "B") {

        if (metre <= 12) {
            rnt = 17;
        }
        if (metre <= 15 && metre >= 13) {
            rnt = 13;
        }
        if (metre <= 18 && metre >= 16) {
            rnt = 11;
        }
        if (metre <= 21 && metre >= 19) {
            rnt = 9;
        }
        if (metre <= 24 && metre >= 22) {
            rnt = 8;
        }
        if (metre <= 30 && metre >= 25) {
            rnt = 7;
        }
        if (metre <= 40 && metre >= 31) {
            rnt = 6;
        }
    }

    if (newLevel === "C") {

        if (metre <= 12) {
            rnt = 25;
        }
        if (metre <= 15 && metre >= 13) {
            rnt = 21;
        }
        if (metre <= 18 && metre >= 16) {
            rnt = 17;
        }
        if (metre <= 21 && metre >= 19) {
            rnt = 15;
        }
        if (metre <= 24 && metre >= 22) {
            rnt = 13;
        }
        if (metre <= 27 && metre >= 25) {
            rnt = 11;
        }
        if (metre <= 33 && metre >= 28) {
            rnt = 10;
        }
        if (metre <= 36 && metre >= 34) {
            rnt = 9;
        }
        if (metre <= 40 && metre >= 37) {
            rnt = 8;
        }
    }

    if (newLevel === "D") {

        if (metre <= 12) {
            rnt = 37;
        }
        if (metre <= 15 && metre >= 13) {
            rnt = 29;
        }
        if (metre <= 18 && metre >= 16) {
            rnt = 24;
        }
        if (metre <= 21 && metre >= 19) {
            rnt = 20;
        }
        if (metre <= 24 && metre >= 22) {
            rnt = 18;
        }
        if (metre <= 27 && metre >= 25) {
            rnt = 16;
        }
        if (metre <= 30 && metre >= 28) {
            rnt = 14;
        }
        if (metre <= 33 && metre >= 31) {
            rnt = 13;
        }
        if (metre <= 36 && metre >= 34) {
            rnt =12;
        }
        if (metre <= 40 && metre >= 37) {
            rnt = 11;
        }
    }

    if (newLevel === "E") {

        if (metre <= 12) {
            rnt = 49;
        }
        if (metre <= 15 && metre >= 13) {
            rnt = 38;
        }
        if (metre <= 18 && metre >= 16) {
            rnt = 30;
        }
        if (metre <= 21 && metre >= 19) {
            rnt = 26;
        }
        if (metre <= 24 && metre >= 22) {
            rnt = 23;
        }
        if (metre <= 27 && metre >= 25) {
            rnt = 20;
        }
        if (metre <= 30 && metre >= 28) {
            rnt = 18;
        }
        if (metre <= 33 && metre >= 31) {
            rnt = 16;
        }
        if (metre <= 36 && metre >= 34) {
            rnt = 15;
        }
        if (metre <= 40 && metre >= 37) {
            rnt = 13;
        }
    }

    if (newLevel === "F") {

        if (metre <= 12) {
            rnt = 61;
        }
        if (metre <= 15 && metre >= 13) {
            rnt = 47;
        }
        if (metre <= 18 && metre >= 16) {
            rnt = 36;
        }
        if (metre <= 21 && metre >= 19) {
            rnt = 31;
        }
        if (metre <= 24 && metre >= 22) {
            rnt = 28;
        }
        if (metre <= 27 && metre >= 25) {
            rnt = 24;
        }
        if (metre <= 30 && metre >= 28) {
            rnt = 22;
        }
        if (metre <= 33 && metre >= 31) {
            rnt = 20;
        }
        if (metre <= 36 && metre >= 34) {
            rnt = 18;
        }
        if (metre <= 40 && metre >= 37) {
            rnt = 16;
        }
    }

    if (newLevel === "G") {

        if (metre <= 12) {
            rnt = 73;
        }
        if (metre <= 15 && metre >= 13) {
            rnt = 56;
        }
        if (metre <= 18 && metre >= 16) {
            rnt = 44;
        }
        if (metre <= 21 && metre >= 19) {
            rnt = 37;
        }
        if (metre <= 24 && metre >= 22) {
            rnt = 32;
        }
        if (metre <= 27 && metre >= 25) {
            rnt = 29;
        }
        if (metre <= 30 && metre >= 28) {
            rnt = 26;
        }
        if (metre <= 33 && metre >= 31) {
            rnt = 24;
        }
        if (metre <= 36 && metre >= 34) {
            rnt = 21;
        }
        if (metre <= 40 && metre >= 37) {
            rnt = 19;
        }
    }

    if (newLevel === "H") {

        if (metre <= 12) {
            rnt = 87;
        }
        if (metre <= 15 && metre >= 13) {
            rnt = 66;
        }
        if (metre <= 18 && metre >= 16) {
            rnt = 52;
        }
        if (metre <= 21 && metre >= 19) {
            rnt = 43;
        }
        if (metre <= 24 && metre >= 22) {
            rnt = 38;
        }
        if (metre <= 27 && metre >= 25) {
            rnt = 33;
        }
        if (metre <= 30 && metre >= 28) {
            rnt = 30;
        }
        if (metre <= 33 && metre >= 31) {
            rnt = 27;
        }
        if (metre <= 36 && metre >= 34) {
            rnt = 25;
        }
        if (metre <= 40 && metre >= 37) {
            rnt = 22;
        }
    }


    document.getElementById('rnt').value = rnt;

}
