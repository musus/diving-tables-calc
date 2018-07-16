const getLevel = (time, meter, start, end) => {
  let level
  const levels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

  if (meter <= 12) {
    times = [5, 15, 25, 30, 40, 50, 70, 80, 100, 110, 130, 150]
  } else if (meter <= 15) {
    times = [0, 10, 15, 25, 30, 40, 50, 60, 70, 80, 0,100]
  }

  levels.slice(start, end)
  if (levels.includes('a') && time <= times[0]) {
    level = 'A'
  }
  if (levels.includes('b') && time > 5 && time <= 15) {
    level = 'B'
  }
  if (levels.includes('c') && time > 16 && time <= 25) {
    level = 'C'
  }
  if (levels.includes('d') && time > 26 && time <= 30) {
    level = 'D'
  }
  if (levels.includes('e') && time > 31 && time <= 40) {
    level = 'E'
  }
  if (levels.includes('f') && time > 41 && time <= 50) {
    level = 'F'
  }
  if (levels.includes('g') && time > 51 && time <= 70) {
    level = 'G'
  }
  if (levels.includes('h') && time > 71 && time <= 80) {
    level = 'H'
  }
  if (levels.includes('i') && time > 81 && time <= 100) {
    level = 'I'
  }
  if (levels.includes('j') && time > 101 && time <= 110) {
    level = 'J'
  }
  if (levels.includes('k') && time > 111 && time <= 130) {
    level = 'K'
  }
  if (levels.includes('a') && time > 131 && time <= 150) {
    level = 'L'
  }
  return level
}

function diveLevelCalc() {
  const meter = document.getElementById('meter').value
  const time = document.getElementById('time').value
  let level

  if (meter <= 12) {
    level = getLevel(time, meter, 0, 13)
  }

  if (meter <= 15 && meter >= 13) {
    if (time <= 10) {
      level = 'B'
    }
    if (time > 11 && time <= 15) {
      level = 'C'
    }
    if (time > 16 && time <= 25) {
      level = 'D'
    }
    if (time > 26 && time <= 30) {
      level = 'E'
    }
    if (time > 31 && time <= 40) {
      level = 'F'
    }
    if (time > 41 && time <= 50) {
      level = 'G'
    }
    if (time > 51 && time <= 60) {
      level = 'H'
    }
    if (time > 61 && time <= 70) {
      level = 'I'
    }
    if (time > 71 && time <= 80) {
      level = 'J'
    }
  }

  if (meter <= 18 && meter >= 16) {
    if (time <= 10) {
      level = 'B'
    }
    if (time > 11 && time <= 15) {
      level = 'C'
    }
    if (time > 16 && time <= 20) {
      level = 'D'
    }
    if (time > 21 && time <= 25) {
      level = 'E'
    }
    if (time > 26 && time <= 30) {
      level = 'F'
    }
    if (time > 31 && time <= 40) {
      level = 'G'
    }
    if (time > 41 && time <= 50) {
      level = 'H'
    }
    if (time > 51 && time <= 55) {
      level = 'I'
    }
    if (time > 56 && time <= 60) {
      level = 'J'
    }
    if (time > 61 && time <= 80) {
      level = 'L'
    }
  }

  if (meter <= 21 && meter >= 19) {
    if (time <= 5) {
      level = 'B'
    }
    if (time > 6 && time <= 10) {
      level = 'C'
    }
    if (time > 11 && time <= 15) {
      level = 'D'
    }
    if (time > 16 && time <= 20) {
      level = 'E'
    }
    if (time > 21 && time <= 30) {
      level = 'F'
    }
    if (time > 31 && time <= 35) {
      level = 'G'
    }
    if (time > 36 && time <= 40) {
      level = 'H'
    }
    if (time > 41 && time <= 45) {
      level = 'I'
    }
    if (time > 46 && time <= 50) {
      level = 'J'
    }
    if (time > 51 && time <= 70) {
      level = 'L'
    }
  }

  if (meter <= 21 && meter >= 19) {
    if (time <= 5) {
      level = 'B'
    }
    if (time > 6 && time <= 10) {
      level = 'C'
    }
    if (time > 11 && time <= 15) {
      level = 'D'
    }
    if (time > 16 && time <= 20) {
      level = 'E'
    }
    if (time > 21 && time <= 30) {
      level = 'F'
    }
    if (time > 31 && time <= 35) {
      level = 'G'
    }
    if (time > 36 && time <= 40) {
      level = 'H'
    }
    if (time > 41 && time <= 45) {
      level = 'I'
    }
    if (time > 46 && time <= 50) {
      level = 'J'
    }
    if (time > 51 && time <= 60) {
      level = 'K'
    }
    if (time > 61 && time <= 70) {
      level = 'L'
    }
  }

  if (meter <= 24 && meter >= 22) {
    if (time <= 5) {
      level = 'B'
    }
    if (time > 6 && time <= 10) {
      level = 'C'
    }
    if (time > 11 && time <= 15) {
      level = 'D'
    }
    if (time > 16 && time <= 20) {
      level = 'E'
    }
    if (time > 21 && time <= 25) {
      level = 'F'
    }
    if (time > 26 && time <= 30) {
      level = 'G'
    }
    if (time > 31 && time <= 35) {
      level = 'H'
    }
    if (time > 36 && time <= 40) {
      level = 'I'
    }
    if (time > 41 && time <= 50) {
      level = 'K'
    }
    if (time > 51 && time <= 60) {
      level = 'L'
    }
  }

  if (meter <= 27 && meter >= 25) {
    if (time <= 5) {
      level = 'B'
    }
    if (time > 6 && time <= 10) {
      level = 'C'
    }
    if (time > 11 && time <= 12) {
      level = 'D'
    }
    if (time > 13 && time <= 15) {
      level = 'E'
    }
    if (time > 16 && time <= 20) {
      level = 'F'
    }
    if (time > 21 && time <= 25) {
      level = 'G'
    }
    if (time > 26 && time <= 30) {
      level = 'H'
    }
    if (time > 31 && time <= 40) {
      level = 'J'
    }
    if (time > 41 && time <= 50) {
      level = 'L'
    }
  }

  if (meter <= 30 && meter >= 28) {
    if (time <= 5) {
      level = 'B'
    }
    if (time > 6 && time <= 7) {
      level = 'C'
    }
    if (time > 8 && time <= 10) {
      level = 'D'
    }
    if (time > 11 && time <= 15) {
      level = 'E'
    }
    if (time > 16 && time <= 20) {
      level = 'F'
    }
    if (time > 21 && time <= 22) {
      level = 'G'
    }
    if (time > 23 && time <= 25) {
      level = 'H'
    }
    if (time > 31 && time <= 40) {
      level = 'K'
    }
  }

  if (meter <= 33 && meter >= 31) {
    if (time <= 5) {
      level = 'C'
    }
    if (time > 6 && time <= 10) {
      level = 'D'
    }
    if (time > 11 && time <= 13) {
      level = 'E'
    }
    if (time > 14 && time <= 15) {
      level = 'F'
    }
    if (time > 16 && time <= 20) {
      level = 'G'
    }
    if (time > 21 && time <= 22) {
      level = 'H'
    }
    if (time > 23 && time <= 30) {
      level = 'K'
    }
  }

  if (meter <= 36 && meter >= 34) {
    if (time <= 5) {
      level = 'C'
    }
    if (time > 6 && time <= 10) {
      level = 'D'
    }
    if (time > 11 && time <= 12) {
      level = 'E'
    }
    if (time > 13 && time <= 25) {
      level = 'I'
    }
    if (time > 26 && time <= 30) {
      level = 'J'
    }
  }

  if (meter <= 36 && meter >= 34) {
    if (time <= 5) {
      level = 'C'
    }
    if (time > 6 && time <= 8) {
      level = 'D'
    }
    if (time > 9 && time <= 10) {
      level = 'E'
    }
    if (time > 11 && time <= 25) {
      level = 'J'
    }
  }

  document.getElementById('level').value = level
}

function diveLevelNew() {
  const level = document.getElementById('level').value
  const restTime = document.getElementById('rest').value

  if (level === 'A') {
    newLevel = 'A'
  }

  if (level === 'B') {
    if (restTime >= 201) {
      newLevel = 'A'
    } else {
      newLevel = 'B'
    }
  }

  if (level === 'C') {
    if (restTime >= 290) {
      newLevel = 'A'
    }
    if (restTime <= 289 && restTime >= 100) {
      newLevel = 'B'
    }
    if (restTime <= 100) {
      newLevel = 'C'
    }
  }

  if (level === 'D') {
    if (restTime >= 349) {
      newLevel = 'A'
    }
    if (restTime <= 348 && restTime >= 159) {
      newLevel = 'B'
    }
    if (restTime <= 158 && restTime >= 70) {
      newLevel = 'C'
    }
    if (restTime <= 69) {
      newLevel = 'D'
    }
  }

  if (level === 'E') {
    if (restTime >= 395) {
      newLevel = 'A'
    }
    if (restTime <= 394 && restTime >= 215) {
      newLevel = 'B'
    }
    if (restTime <= 214 && restTime >= 108) {
      newLevel = 'C'
    }
    if (restTime <= 107 && restTime >= 55) {
      newLevel = 'D'
    }
    if (restTime <= 54) {
      newLevel = 'E'
    }
  }

  if (level === 'F') {
    if (restTime >= 426) {
      newLevel = 'A'
    }
    if (restTime <= 425 && restTime >= 238) {
      newLevel = 'B'
    }
    if (restTime <= 237 && restTime >= 149) {
      newLevel = 'C'
    }
    if (restTime <= 148 && restTime >= 90) {
      newLevel = 'D'
    }
    if (restTime <= 89 && restTime >= 46) {
      newLevel = 'E'
    }
    if (restTime <= 45) {
      newLevel = 'F'
    }
  }

  if (level === 'G') {
    if (restTime >= 456) {
      newLevel = 'A'
    }
    if (restTime <= 455 && restTime >= 266) {
      newLevel = 'B'
    }
    if (restTime <= 265 && restTime >= 179) {
      newLevel = 'C'
    }
    if (restTime <= 178 && restTime >= 120) {
      newLevel = 'D'
    }
    if (restTime <= 119 && restTime >= 76) {
      newLevel = 'E'
    }
    if (restTime <= 75 && restTime >= 41) {
      newLevel = 'F'
    }
    if (restTime <= 40) {
      newLevel = 'G'
    }
  }

  if (level === 'H') {
    if (restTime >= 480) {
      newLevel = 'A'
    }
    if (restTime <= 479 && restTime >= 266) {
      newLevel = 'B'
    }
    if (restTime <= 265 && restTime >= 201) {
      newLevel = 'C'
    }
    if (restTime <= 200 && restTime >= 144) {
      newLevel = 'D'
    }
    if (restTime <= 143 && restTime >= 102) {
      newLevel = 'E'
    }
    if (restTime <= 101 && restTime >= 67) {
      newLevel = 'F'
    }
    if (restTime <= 66 && restTime >= 37) {
      newLevel = 'G'
    }
    if (restTime <= 36) {
      newLevel = 'H'
    }
  }

  document.getElementById('newLevel').value = newLevel
}

function calcRNT() {
  const meter = document.getElementById('newmeter').value
  const newLevel = document.getElementById('newLevel').value

  if (newLevel === 'A') {
    if (meter <= 12) {
      rnt = 7
    }
    if (meter <= 15 && meter >= 13) {
      rnt = 6
    }
    if (meter <= 18 && meter >= 16) {
      rnt = 5
    }
    if (meter <= 24 && meter >= 19) {
      rnt = 4
    }
    if (meter <= 40 && meter >= 25) {
      rnt = 3
    }
  }

  if (newLevel === 'B') {
    if (meter <= 12) {
      rnt = 17
    }
    if (meter <= 15 && meter >= 13) {
      rnt = 13
    }
    if (meter <= 18 && meter >= 16) {
      rnt = 11
    }
    if (meter <= 21 && meter >= 19) {
      rnt = 9
    }
    if (meter <= 24 && meter >= 22) {
      rnt = 8
    }
    if (meter <= 30 && meter >= 25) {
      rnt = 7
    }
    if (meter <= 40 && meter >= 31) {
      rnt = 6
    }
  }

  if (newLevel === 'C') {
    if (meter <= 12) {
      rnt = 25
    }
    if (meter <= 15 && meter >= 13) {
      rnt = 21
    }
    if (meter <= 18 && meter >= 16) {
      rnt = 17
    }
    if (meter <= 21 && meter >= 19) {
      rnt = 15
    }
    if (meter <= 24 && meter >= 22) {
      rnt = 13
    }
    if (meter <= 27 && meter >= 25) {
      rnt = 11
    }
    if (meter <= 33 && meter >= 28) {
      rnt = 10
    }
    if (meter <= 36 && meter >= 34) {
      rnt = 9
    }
    if (meter <= 40 && meter >= 37) {
      rnt = 8
    }
  }

  if (newLevel === 'D') {
    if (meter <= 12) {
      rnt = 37
    }
    if (meter <= 15 && meter >= 13) {
      rnt = 29
    }
    if (meter <= 18 && meter >= 16) {
      rnt = 24
    }
    if (meter <= 21 && meter >= 19) {
      rnt = 20
    }
    if (meter <= 24 && meter >= 22) {
      rnt = 18
    }
    if (meter <= 27 && meter >= 25) {
      rnt = 16
    }
    if (meter <= 30 && meter >= 28) {
      rnt = 14
    }
    if (meter <= 33 && meter >= 31) {
      rnt = 13
    }
    if (meter <= 36 && meter >= 34) {
      rnt = 12
    }
    if (meter <= 40 && meter >= 37) {
      rnt = 11
    }
  }

  if (newLevel === 'E') {
    if (meter <= 12) {
      rnt = 49
    }
    if (meter <= 15 && meter >= 13) {
      rnt = 38
    }
    if (meter <= 18 && meter >= 16) {
      rnt = 30
    }
    if (meter <= 21 && meter >= 19) {
      rnt = 26
    }
    if (meter <= 24 && meter >= 22) {
      rnt = 23
    }
    if (meter <= 27 && meter >= 25) {
      rnt = 20
    }
    if (meter <= 30 && meter >= 28) {
      rnt = 18
    }
    if (meter <= 33 && meter >= 31) {
      rnt = 16
    }
    if (meter <= 36 && meter >= 34) {
      rnt = 15
    }
    if (meter <= 40 && meter >= 37) {
      rnt = 13
    }
  }

  if (newLevel === 'F') {
    if (meter <= 12) {
      rnt = 61
    }
    if (meter <= 15 && meter >= 13) {
      rnt = 47
    }
    if (meter <= 18 && meter >= 16) {
      rnt = 36
    }
    if (meter <= 21 && meter >= 19) {
      rnt = 31
    }
    if (meter <= 24 && meter >= 22) {
      rnt = 28
    }
    if (meter <= 27 && meter >= 25) {
      rnt = 24
    }
    if (meter <= 30 && meter >= 28) {
      rnt = 22
    }
    if (meter <= 33 && meter >= 31) {
      rnt = 20
    }
    if (meter <= 36 && meter >= 34) {
      rnt = 18
    }
    if (meter <= 40 && meter >= 37) {
      rnt = 16
    }
  }

  if (newLevel === 'G') {
    if (meter <= 12) {
      rnt = 73
    }
    if (meter <= 15 && meter >= 13) {
      rnt = 56
    }
    if (meter <= 18 && meter >= 16) {
      rnt = 44
    }
    if (meter <= 21 && meter >= 19) {
      rnt = 37
    }
    if (meter <= 24 && meter >= 22) {
      rnt = 32
    }
    if (meter <= 27 && meter >= 25) {
      rnt = 29
    }
    if (meter <= 30 && meter >= 28) {
      rnt = 26
    }
    if (meter <= 33 && meter >= 31) {
      rnt = 24
    }
    if (meter <= 36 && meter >= 34) {
      rnt = 21
    }
    if (meter <= 40 && meter >= 37) {
      rnt = 19
    }
  }

  if (newLevel === 'H') {
    if (meter <= 12) {
      rnt = 87
    }
    if (meter <= 15 && meter >= 13) {
      rnt = 66
    }
    if (meter <= 18 && meter >= 16) {
      rnt = 52
    }
    if (meter <= 21 && meter >= 19) {
      rnt = 43
    }
    if (meter <= 24 && meter >= 22) {
      rnt = 38
    }
    if (meter <= 27 && meter >= 25) {
      rnt = 33
    }
    if (meter <= 30 && meter >= 28) {
      rnt = 30
    }
    if (meter <= 33 && meter >= 31) {
      rnt = 27
    }
    if (meter <= 36 && meter >= 34) {
      rnt = 25
    }
    if (meter <= 40 && meter >= 37) {
      rnt = 22
    }
  }

  document.getElementById('rnt').value = rnt
}
