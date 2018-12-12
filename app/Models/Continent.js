'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Continent extends Model {
  country () {
    return this.hasMany('App/Models/Country')
  }
}

module.exports = Continent
