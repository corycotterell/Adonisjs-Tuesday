'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Country extends Model {
  continent () {
    return this.belongsTo('App/Models/Continent')
  }
}

module.exports = Country
