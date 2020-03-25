import { get } from 'lodash'
import {
  GOLD_COINS,
  GOLD_COINS_WHEN_WINNING_A_BATTLE,
  VICTORY,
  DEFEAT,
  TIE,
  units,
  civsConfig
} from '../config'
import Unit from './unit'

export default class Army {
  constructor(civilization) {
    this.civilization = civilization
    this.units = []
    this.goldCoins = GOLD_COINS
    this.battleHistory = []

    this.setUnits()
  }

  getPoints() {
    return this.units.reduce((total, unit) => total + unit.strengthPoints, 0)
  }

  setUnits() {
    units.forEach(unit => {
      const amount = get(civsConfig, [this.civilization, unit])

      this.units = this.units.concat(
        Array.from(Array(amount), () => new Unit(unit))
      )
    })
  }

  trainUnit(unit) {
    if (this.goldCoins - unit.trainingCost >= 0) {
      this.goldCoins -= unit.trainingCost

      unit.train()
    }
  }

  transformUnit(unit) {
    if (this.goldCoins - unit.transformingCost >= 0) {
      this.goldCoins -= unit.transformingCost

      unit.transform()
    }
  }

  battle(army) {
    if (this !== army) {
      const armyAPoints = this.getPoints()
      const armyBPoints = army.getPoints()

      if (armyAPoints !== armyBPoints) {
        const winner = armyAPoints > armyBPoints ? this : army
        const loser = armyAPoints < armyBPoints ? this : army

        loser.units
          .sort((a, b) => b.strengthPoints - a.strengthPoints)
          .splice(0, 2)

        winner.battleHistory.push({
          enemy: loser.civilization,
          result: VICTORY
        })

        loser.battleHistory.push({
          enemy: winner.civilization,
          result: DEFEAT
        })

        winner.goldCoins += GOLD_COINS_WHEN_WINNING_A_BATTLE
      } else {
        this.units
          .sort((a, b) => a.strengthPoints - b.strengthPoints)
          .splice(0, 1)
        army.units
          .sort((a, b) => a.strengthPoints - b.strengthPoints)
          .splice(0, 1)

        this.battleHistory.push({
          enemy: army.civilization,
          result: TIE
        })

        army.battleHistory.push({
          enemy: this.civilization,
          result: TIE
        })
      }
    }
  }
}
