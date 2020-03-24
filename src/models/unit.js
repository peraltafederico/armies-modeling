import { unitsConfig, units } from '../config'

export default class Unit {
  constructor(unit) {
    this.type = unit
    this.strengthPoints = unitsConfig[unit].strengthPoints
    this.pointsByTraining = unitsConfig[unit].pointsByTraining
    this.trainingCost = unitsConfig[unit].trainingCost
    this.transformingCost = unitsConfig[unit].transformingCost || null
  }

  train() {
    this.strengthPoints += this.pointsByTraining
  }

  transform() {
    const index = units.indexOf(this.type)

    if (index < units.length - 1) {
      Object.assign(this, new Unit(units[index + 1]))
    }
  }
}
