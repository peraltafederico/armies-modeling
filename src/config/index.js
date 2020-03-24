export const VICTORY = 'VICTORY'
export const DEFEAT = 'DEFEAT'
export const TIE = 'TIE'

export const GOLD_COINS = 1000
export const GOLD_COINS_WHEN_WINNING_A_BATTLE = 100

export const units = ['PIKEMAN', 'ARCHER', 'KNIGHT']

export const unitsConfig = {
  PIKEMAN: {
    strengthPoints: 5,
    pointsByTraining: 3,
    trainingCost: 10,
    transformingCost: 900
  },
  ARCHER: {
    strengthPoints: 10,
    pointsByTraining: 7,
    trainingCost: 20,
    transformingCost: 40
  },
  KNIGHT: {
    strengthPoints: 20,
    pointsByTraining: 10,
    trainingCost: 30
  }
}

export const civsConfig = {
  CHINESE: {
    PIKEMAN: 2,
    ARCHER: 25,
    KNIGHT: 2
  },
  ENGLISH: {
    PIKEMAN: 10,
    ARCHER: 10,
    KNIGHT: 10
  },
  BYZANTINE: {
    PIKEMAN: 5,
    ARCHER: 8,
    KNIGHT: 15
  }
}
